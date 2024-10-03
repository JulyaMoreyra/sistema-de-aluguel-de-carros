package com.lds.car_rental_system.service;

import com.lds.car_rental_system.model.User;

public interface UserService  {
    User findByUsername(String username);
}