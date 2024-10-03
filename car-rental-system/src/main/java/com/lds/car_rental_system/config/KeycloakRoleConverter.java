package com.lds.car_rental_system.config;

import com.lds.car_rental_system.exception.InvalidJwtTokenException;
import org.springframework.core.convert.converter.Converter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.jwt.Jwt;

import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class KeycloakRoleConverter implements Converter<Jwt, Collection<GrantedAuthority>> {

    @Override
    public Collection<GrantedAuthority> convert(Jwt source) {
        Object rolesObject = source.getClaims().get("roles");

        if (!(rolesObject instanceof List)) {
            throw new InvalidJwtTokenException("Invalid JWT token: 'roles' claim is not a list.");
        }

        List<String> roles = (List<String>) rolesObject;

        return roles.stream()
                .map(roleName -> "ROLE_" + roleName)
                .map(SimpleGrantedAuthority::new)
                .collect(Collectors.toList());
    }
}