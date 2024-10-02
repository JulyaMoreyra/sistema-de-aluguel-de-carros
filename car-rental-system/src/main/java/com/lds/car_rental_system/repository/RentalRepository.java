package com.lds.car_rental_system.repository;

import com.lds.car_rental_system.model.Car;
import com.lds.car_rental_system.model.Rental;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface RentalRepository extends JpaRepository<Rental, Long> {
    List<Rental> findByCarAndStartDateLessThanEqualAndEndDateGreaterThanEqual(Car car, LocalDate endDate,
                                                                              LocalDate startDate);
}