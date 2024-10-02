package com.lds.car_rental_system.service;

import com.lds.car_rental_system.model.Customer;
import com.lds.car_rental_system.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    @Override
    public Customer getCustomerById(Long id) {
        return customerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Customer not found with id: " + id));
    }

    @Override
    public Customer createCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    @Override
    public Customer updateCustomer(Long id, Customer customer) {
        Customer existingCustomer = getCustomerById(id);
        updateExistingCustomer(customer, existingCustomer);
        return customerRepository.save(existingCustomer);
    }

    @Override
    public void deleteCustomer(Long id) {
        customerRepository.deleteById(id);
    }

    private void updateExistingCustomer(Customer updatedCustomer, Customer existingCustomer) {
        existingCustomer.setName(updatedCustomer.getName());
        existingCustomer.setCpf(updatedCustomer.getCpf());
        existingCustomer.setRg(updatedCustomer.getRg());
        existingCustomer.setEmail(updatedCustomer.getEmail());
        existingCustomer.setProfession(updatedCustomer.getProfession());
    }
}