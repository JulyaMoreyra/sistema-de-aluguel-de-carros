package com.lds.car_rental_system.model;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @NotBlank(message = "Name is mandatory")
    @Size(max = 255, message = "Name must be at most 255 characters long")
    private String name;

    @NotBlank(message = "CPF is mandatory")
    @Size(min = 11, max = 11, message = "CPF must be 11 characters long")
    private String cpf;

    @NotBlank(message = "RG is mandatory")
    @Size(max = 20, message = "RG must be at most 20 characters long")
    private String rg;

    @Email(message = "Invalid email format")
    @NotBlank(message = "Email is mandatory")
    @Size(max = 255, message = "Email must be at most 255 characters long")
    private String email;

    @NotBlank(message = "Profession is mandatory")
    @Size(max = 255, message = "Profession must be at most 255 characters long")
    private String profession;
}