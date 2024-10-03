package com.lds.car_rental_system.service;

import com.lds.car_rental_system.dto.UserRegistrationRequest;
import com.lds.car_rental_system.model.User;

public interface RegistrationService {
    User registerUser(UserRegistrationRequest registrationRequest);
}