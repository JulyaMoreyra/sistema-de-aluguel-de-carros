package com.lds.car_rental_system.controller;

import com.lds.car_rental_system.model.Car;
import com.lds.car_rental_system.service.CarService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/cars")
public class CarController {

    @Autowired
    private CarService carService;

    @GetMapping
    public List<Car> getAllCars() {
        return carService.getAllCars();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Car> getCarById(@PathVariable Long id) {
        Car car = carService.getCarById(id);
        return ResponseEntity.ok(car);
    }

    @PostMapping
    public ResponseEntity<Car> createCar(@Valid @RequestBody Car car) {
        Car createdCar = carService.createCar(car);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdCar);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Car> updateCar(@PathVariable Long id, @Valid @RequestBody Car car) {
        Car updatedCar = carService.updateCar(id, car);
        return ResponseEntity.ok(updatedCar);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCar(@PathVariable Long id) {
        carService.deleteCar(id);
        return ResponseEntity.noContent().build();
    }
}