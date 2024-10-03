package com.lds.car_rental_system.service;

import com.lds.car_rental_system.dto.RentalRequest;
import com.lds.car_rental_system.enums.RentalStatus;
import com.lds.car_rental_system.model.Car;
import com.lds.car_rental_system.model.Customer;
import com.lds.car_rental_system.model.Rental;
import com.lds.car_rental_system.model.User;
import com.lds.car_rental_system.repository.CarRepository;
import com.lds.car_rental_system.repository.CustomerRepository;
import com.lds.car_rental_system.repository.RentalRepository;
import com.lds.car_rental_system.repository.UserRepository;
import com.lds.car_rental_system.util.RentalConstants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.List;

@Service
public class RentalServiceImpl implements RentalService {

    private final RentalRepository rentalRepository;
    private final CustomerRepository customerRepository;
    private final CarRepository carRepository;
    private final UserRepository userRepository;

    @Autowired
    public RentalServiceImpl(RentalRepository rentalRepository,
                             CustomerRepository customerRepository,
                             CarRepository carRepository,
                             UserRepository userRepository) {
        this.rentalRepository = rentalRepository;
        this.customerRepository = customerRepository;
        this.carRepository = carRepository;
        this.userRepository = userRepository;
    }

    @Override
    public List<Rental> getAllRentals() {
        return rentalRepository.findAll();
    }

    @Override
    public Rental getRentalById(Long id) {
        return rentalRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Rental not found with id: " + id));
    }

    @Override
    @Transactional
    public Rental createRentalRequest(RentalRequest rentalRequest) {
        validateRentalRequest(rentalRequest);

        Rental rental = new Rental();
        Car car = carRepository.findById(rentalRequest.carId())
                .orElseThrow(() -> new RuntimeException("Car not found"));

        Long userId = getUserIdBySecurityContext();

        Customer customer = customerRepository.findByUserId(userId)
                .orElseThrow(() -> new RuntimeException("Customer not found"));

        rental.setCar(car);
        rental.setCustomer(customer);
        rental.setStartDate(rentalRequest.startDate());
        rental.setEndDate(rentalRequest.endDate());

        if (!isCarAvailable(car, rental.getStartDate(), rental.getEndDate())) {
            throw new RuntimeException("Car is not available for the selected dates.");
        }

        calculateRentalValues(rental, car);
        rental.setCustomer(customer);
        rental.setCar(car);
        rental.setStatus(RentalStatus.PENDING);

        return rentalRepository.save(rental);
    }

    @Override
    @Transactional
    public Rental updateRental(Long id, Rental updatedRental) {
        Rental existingRental = getRentalById(id);
        updateRentalFields(existingRental, updatedRental);
        return rentalRepository.save(existingRental);
    }

    @Override
    public void deleteRental(Long id) {
        rentalRepository.deleteById(id);
    }

    @Override
    public List<Rental> getRentalsByUsername(String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Customer customer = customerRepository.findByUserId(user.getId())
                .orElseThrow(() -> new RuntimeException("Customer not found"));

        return rentalRepository.findByCustomerId(customer.getId());
    }

    private void validateRentalRequest(RentalRequest rentalRequest) {
        if (rentalRequest.startDate().isAfter(rentalRequest.endDate())) {
            throw new RuntimeException("Start date cannot be after end date.");
        }
    }

    private boolean isCarAvailable(Car car, LocalDate startDate, LocalDate endDate) {
        List<Rental> conflictingRentals =
                rentalRepository.findByCarAndStartDateLessThanEqualAndEndDateGreaterThanEqual(car, endDate, startDate);
        return conflictingRentals.isEmpty();
    }

    private void calculateRentalValues(Rental rental, Car car) {
        long days = ChronoUnit.DAYS.between(rental.getStartDate(), rental.getEndDate()) + 1;
        Double carPricePerDay = RentalConstants.getCarDailyPrice(car.getYear());

        rental.setDailyValue(carPricePerDay);
        rental.setContractValue(carPricePerDay * days);
    }

    private void updateRentalFields(Rental existingRental, Rental updatedRental) {
        existingRental.setStartDate(updatedRental.getStartDate());
        existingRental.setEndDate(updatedRental.getEndDate());
    }

    private Long getUserIdBySecurityContext() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();

        return userRepository.findUserIdByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }
}