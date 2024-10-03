package com.lds.car_rental_system.controller;

import com.lds.car_rental_system.model.Rental;
import com.lds.car_rental_system.service.RentalService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/rentals")
public class RentalController {

    private final RentalService rentalService;

    public RentalController(RentalService rentalService) {
        this.rentalService = rentalService;
    }

    @GetMapping
    public List<Rental> getAllRentals() {
        return rentalService.getAllRentals();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Rental> getRentalById(@PathVariable Long id) {
        Rental rental = rentalService.getRentalById(id);
        return ResponseEntity.ok(rental);
    }

    @PostMapping
    public ResponseEntity<Rental> createRental(@Valid @RequestBody Rental rental) {
        Rental createdRental = rentalService.createRental(rental);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdRental);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Rental> updateRental(@PathVariable Long id, @Valid @RequestBody Rental rental) {
        Rental updatedRental = rentalService.updateRental(id, rental);
        return ResponseEntity.ok(updatedRental);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRental(@PathVariable Long id) {
        rentalService.deleteRental(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/my-rentals")
    public ResponseEntity<List<Rental>> getMyRentals(Authentication authentication) {
        String username = authentication.getName();

        List<Rental> rentals = rentalService.getRentalsByUsername(username);
        return ResponseEntity.ok(rentals);
    }
}