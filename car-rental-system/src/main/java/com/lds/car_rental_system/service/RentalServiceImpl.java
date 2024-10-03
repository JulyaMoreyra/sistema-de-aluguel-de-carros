package com.lds.car_rental_system.service;

import com.lds.car_rental_system.enums.RentalStatus;
import com.lds.car_rental_system.model.Car;
import com.lds.car_rental_system.model.Customer;
import com.lds.car_rental_system.model.Rental;
import com.lds.car_rental_system.repository.CarRepository;
import com.lds.car_rental_system.repository.CustomerRepository;
import com.lds.car_rental_system.repository.RentalRepository;
import org.springframework.beans.factory.annotation.Autowired;
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

    @Autowired
    public RentalServiceImpl(RentalRepository rentalRepository, CustomerRepository customerRepository, CarRepository carRepository) {
        this.rentalRepository = rentalRepository;
        this.customerRepository = customerRepository;
        this.carRepository = carRepository;
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
    public Rental createRental(Rental rental) {
        validateRental(rental);

        Customer customer = customerRepository.findById(rental.getCustomer().getId())
                .orElseThrow(() -> new RuntimeException("Customer not found"));

        Car car = carRepository.findById(rental.getCar().getVehicleId())
                .orElseThrow(() -> new RuntimeException("Car not found"));

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

    private void validateRental(Rental rental) {
        if (rental.getStartDate().isAfter(rental.getEndDate())) {
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
        double carPricePerDay = 100.0;
        rental.setDailyValue(carPricePerDay);
        rental.setContractValue(carPricePerDay * days);
    }

    private void updateRentalFields(Rental existingRental, Rental updatedRental) {
        existingRental.setStartDate(updatedRental.getStartDate());
        existingRental.setEndDate(updatedRental.getEndDate());
    }

    @Override
    public List<Rental> getRentalsByCustomerId(Long customerId) {
        return rentalRepository.findByCustomerId(customerId);
    }
}