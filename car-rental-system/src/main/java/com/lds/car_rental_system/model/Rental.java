package com.lds.car_rental_system.model;

import com.lds.car_rental_system.enums.RentalStatus;
import jakarta.persistence.*;
import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Rental {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long contractId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customer_id")
    @NotNull(message = "Customer is mandatory")
    private Customer customer;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "vehicle_id")
    @NotNull(message = "Car is mandatory")
    private Car car;

    @NotNull(message = "Start date is mandatory")
    @Future(message = "Start date must be in the future")
    private LocalDate startDate;

    @NotNull(message = "End date is mandatory")
    @Future(message = "End date must be in the future")
    private LocalDate endDate;

    private Double dailyValue;

    private Double contractValue;

    @Enumerated(EnumType.STRING)
    private RentalStatus status;
}