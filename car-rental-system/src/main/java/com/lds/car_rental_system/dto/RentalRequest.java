package com.lds.car_rental_system.dto;

import java.time.LocalDate;

public record RentalRequest(
        Long carId,
        LocalDate startDate,
        LocalDate endDate
) {
}