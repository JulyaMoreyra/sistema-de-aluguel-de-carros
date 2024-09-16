# Car Rental System
The Car Rental System is a web-based application developed as part of the Software Engineering course at PUC Minas. The system is designed to facilitate the management of car rental services, allowing users to create, modify, and cancel rental requests, while agents (companies or banks) can review and approve or reject these requests. The system also handles the registration and management of available vehicles and rental contracts, including credit evaluations.

## Group Members
* [Gabriel Ramos](https://github.com/gramos22)

* [João Pedro Braga](https://github.com/joaopedro-braga)

* [Júlia Moreira Nascimento](https://github.com/JulyaMoreyra)

## Features

### Customer Features
* **User Registration:** Customers can create an account by providing personal information such as CPF, RG, name, address, and profession.
* **Create Rental Request:** Registered users can search for available cars and submit rental requests by specifying the car and the rental period.
* **Modify or Cancel Requests:** Customers can modify or cancel rental requests before approval by agents.
* **View Request Status:** Customers can view the current status of their rental requests, including pending, approved, or rejected status.

### Agent Features
* **Request Review and Approval:** Agents can view and evaluate rental requests submitted by customers, including financial information such as income and employer details.
* **Modify Requests:** Agents can modify rental requests and approve or reject them based on financial and contractual conditions.
* **Credit Contract Management:** Agents can assess rental requests that involve a credit contract, approve or deny the credit, and manage the financial aspects of the rental agreement.

### Admin Features:
* **Vehicle Management:** Administrators can add, update, and manage the details of cars available for rental, including license plate, brand, model, year, and ownership status.
* **System Monitoring:** Admins can monitor system activity and ensure smooth operation of the rental and approval processes.

## User Cases

### User Registration and Account Creation
**As a** potential customer,

**I want to** register an account by providing my personal details such as name, CPF, RG, address, and profession,

**So that** I can gain access to the system and be able to request car rentals.
#### Acceptance Criteria
* The system must require users to input personal identification details (CPF, RG, name, address, profession).
* Users must provide a valid email and password for account creation.
* The system should confirm the registration via email.

### Car Rental Request Management
**As a** registered customer,

**I want to** create, modify, view, or cancel my car rental requests,

**So that** I can manage my car rental bookings according to my needs.
#### Acceptance Criteria
* The customer can create a new rental request by selecting a car and specifying the rental period.
* The customer can modify or cancel an existing rental request before the agent confirms it.
* The customer can view the status of their current and past rental requests.
* The system must store details such as car model, brand, year, and license plate for each request.

### Agent Review and Approval of Rental Requests

**As an** agent (company or bank),
**I want to** review and evaluate customer car rental requests,
**So that**  I can approve or reject them based on the financial information provided.
#### Acceptance Criteria
* Agents can view customer details, including identification and employer information, to assess the customer's financial stability.
* Agents can approve or reject rental requests based on financial viability.
* The system must notify the customer of the agent’s decision (approval or rejection) and update the request status accordingly.

### Financial Review of Car Rental Contracts
**As an** agent (bank),

**I want to** evaluate the financial terms and conditions associated with car rental requests that involve a credit contract,

**So that** I can approve or deny the credit required for the rental.
#### Acceptance Criteria
* The system should allow agents to view and assess the credit details related to rental requests.
* Agents can approve or deny the credit portion of the rental contract.
* If approved, the system should link the rental contract to the customer’s financial institution for further processing.

### Vehicle Management in Rental Contracts
**As a** system administrator,

**I want to** register and manage details about the cars available for rental,

**So that** the system can accurately track available vehicles and their details.
#### Acceptance Criteria
* The system must allow administrators to register new vehicles by entering details like license plate, brand, model, year, and ownership status (customer, company, or bank).
* Administrators should be able to update vehicle information as needed.
* The system must ensure that rented vehicles are unavailable for future rental until the contract expires.

## Class Diagram 
![image](https://github.com/user-attachments/assets/4b796fd8-02b0-435b-a047-ad3f7894e3be)

## Package Diagram
![Package Diagram](https://github.com/user-attachments/assets/9e493846-0c77-49de-ad3f-f2112a3d8575)


