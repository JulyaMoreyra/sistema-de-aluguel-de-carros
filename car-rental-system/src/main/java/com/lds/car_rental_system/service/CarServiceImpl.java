package com.lds.car_rental_system.service;

import com.lds.car_rental_system.model.Car;
import com.lds.car_rental_system.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarServiceImpl implements CarService {

    @Autowired
    private CarRepository carRepository;

    @Override
    public List<Car> getAllCars() {
        return carRepository.findAll();
    }

    @Override
    public Car getCarById(Long id) {
        return carRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Car not found with id: " + id));
    }

    @Override
    public Car createCar(Car car) {
        return carRepository.save(car);
    }

    @Override
    public Car updateCar(Long id, Car car) {
        Car existingCar = getCarById(id);

        updateExistingCar(car, existingCar);

        return carRepository.save(existingCar);
    }

    @Override
    public void deleteCar(Long id) {
        carRepository.deleteById(id);
    }

    private void updateExistingCar(Car updatedCar, Car existingCar) {
        existingCar.setBrand(updatedCar.getBrand());
        existingCar.setRentalStatus(updatedCar.getRentalStatus());
        existingCar.setLicensePlate(updatedCar.getLicensePlate());
        existingCar.setYear(updatedCar.getYear());
        existingCar.setModel(updatedCar.getModel());
    }
}