package com.lds.car_rental_system.service;

import com.lds.car_rental_system.dto.UserRegistrationRequest;
import com.lds.car_rental_system.model.Customer;
import com.lds.car_rental_system.model.User;
import com.lds.car_rental_system.repository.CustomerRepository;
import com.lds.car_rental_system.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RegistrationServiceImpl implements RegistrationService {

    private final UserRepository userRepository;
    private final CustomerRepository customerRepository;
    private final PasswordEncoder passwordEncoder;

    public RegistrationServiceImpl(UserRepository userRepository,
                                   CustomerRepository customerRepository,
                                   PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.customerRepository = customerRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public User registerUser(UserRegistrationRequest registrationRequest) {

        if (userRepository.findByUsername(registrationRequest.username()).isPresent()) {
            throw new RuntimeException("Username already exists.");
        }

        User newUser = User.builder()
                .username(registrationRequest.username())
                .password(passwordEncoder.encode(registrationRequest.password()))
                .roles(List.of("CUSTOMER"))
                .build();

        User savedUser = userRepository.save(newUser);

        Customer newCustomer = Customer.builder()
                .name(registrationRequest.name())
                .cpf(registrationRequest.cpf())
                .rg(registrationRequest.rg())
                .email(registrationRequest.email())
                .profession(registrationRequest.profession())
                .user(newUser)
                .build();

        customerRepository.save(newCustomer);

        return savedUser;
    }
}