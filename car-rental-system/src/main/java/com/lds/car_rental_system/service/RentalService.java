package com.lds.car_rental_system.service;

import com.lds.car_rental_system.dto.RentalRequest;
import com.lds.car_rental_system.model.Rental;
import java.util.List;

public interface RentalService {
    List<Rental> getAllRentals();
    Rental getRentalById(Long id);
    Rental createRentalRequest(RentalRequest rentalRequest);
    Rental updateRental(Long id, Rental rental);
    void deleteRental(Long id);
    List<Rental> getRentalsByUsername(String username);
}