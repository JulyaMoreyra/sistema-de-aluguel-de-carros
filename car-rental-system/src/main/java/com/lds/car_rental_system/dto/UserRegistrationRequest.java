package com.lds.car_rental_system.dto;

public record UserRegistrationRequest(
        String username,
        String password,
        String name,
        String cpf,
        String rg,
        String email,
        String profession
) {
}