package com.lds.car_rental_system.controller;

import com.lds.car_rental_system.dto.LoginResponse;
import com.lds.car_rental_system.dto.UserLoginRequest;
import com.lds.car_rental_system.dto.UserRegistrationRequest;
import com.lds.car_rental_system.model.User;
import com.lds.car_rental_system.security.JwtTokenUtil;
import com.lds.car_rental_system.service.RegistrationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/api/auth")
public class AuthenticationController {

    private final UserDetailsService userDetailsService;
    private final JwtTokenUtil jwtTokenUtil;
    private final AuthenticationManager authenticationManager;
    private final RegistrationService registrationService;

    public AuthenticationController(UserDetailsService userDetailsService,
                                    JwtTokenUtil jwtTokenUtil,
                                    AuthenticationManager authenticationManager,
                                    RegistrationService registrationService) {
        this.userDetailsService = userDetailsService;
        this.jwtTokenUtil = jwtTokenUtil;
        this.authenticationManager = authenticationManager;
        this.registrationService = registrationService;
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody UserLoginRequest loginRequest) throws Exception {
        authenticate(loginRequest.username(), loginRequest.password());

        final UserDetails userDetails = userDetailsService.loadUserByUsername(loginRequest.username());
        final String token = jwtTokenUtil.generateToken(userDetails);

        return ResponseEntity.status(HttpStatus.OK).body(new LoginResponse(token));
    }

    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody UserRegistrationRequest registrationRequest) {
        User registeredUser = registrationService.registerUser(registrationRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(registeredUser);
    }

    private void authenticate(String username, String password) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
    }
}