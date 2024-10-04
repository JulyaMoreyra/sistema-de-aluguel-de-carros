import { Link } from "react-router-dom";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useState, useEffect } from "react";
import apiService from "../../services/apiService";
import { Calendar } from "primereact/calendar";

const AvailableCarsClient = () => {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [rentalRequest, setRentalRequest] = useState({
    startDate: null,
    endDate: null,
  });

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await apiService.get("/cars");
      setCars(response.data);
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  };

  const rentCar = (car) => {
    setSelectedCar(car);
    setShowModal(true);
  };

  const hideModal = () => {
    setShowModal(false);
    setSelectedCar(null);
    setRentalRequest({ startDate: null, endDate: null });
  };

  const handleRentConfirmation = async () => {
    try {
      const response = await apiService.post("/rentals", {
        carId: selectedCar.vehicleId,
        startDate: rentalRequest.startDate,
        endDate: rentalRequest.endDate,
      });
      console.log("Rental request created:", response.data);
      hideModal();
      
    } catch (error) {
      console.error("Error creating rental request:", error);
      
    }
  };

  const rentCarTemplate = (rowData) => {
    return (
      <Button
        label="Rent Car"
        icon="pi pi-check"
        severity="success"
        outlined
        onClick={() => rentCar(rowData)}
        className="p-button-success"
      />
    );
  };

  return (
    <>
      <h1
        style={{
          color: "black",
          margin: "30px",
        }}
      >
        Available Cars
      </h1>
      <DataTable value={cars} tableStyle={{ minWidth: "50rem", margin: "40px" }}>
        <Column field="licensePlate" header="License Plate"></Column>
        <Column field="model" header="Model"></Column>
        <Column field="year" header="Year"></Column>
        <Column field="dailyValue" header="Daily Price ($)"></Column> {/* Use dailyValue */}
        <Column header="Rent Car" body={rentCarTemplate}></Column>
      </DataTable>

      {/* Modal de confirmação */}
      {selectedCar && (
        <Dialog
          header="Confirm Rent"
          visible={showModal}
          style={{ width: "30vw" }}
          modal
          onHide={hideModal}
          footer={
            <div>
              <Button
                label="Cancel"
                icon="pi pi-times"
                onClick={hideModal}
                severity="danger"
                outlined
                className="p-button-text"
              />
              <Button
                label="Confirm"
                icon="pi pi-check"
                severity="success"
                outlined
                onClick={handleRentConfirmation} // Chama a função de confirmação
                autoFocus
              />
            </div>
          }
        >
          <p>
            <strong>Model:</strong> {selectedCar.model}
          </p>
          <p>
            <strong>Year:</strong> {selectedCar.year}
          </p>
          <p>
            <strong>License Plate:</strong> {selectedCar.licensePlate}
          </p>
          <p>
            <strong>Daily Price:</strong> ${selectedCar.dailyValue}
          </p>
          
          <div className="field">
            <label htmlFor="startDate">Start Date:</label>
            <Calendar
              id="startDate"
              value={rentalRequest.startDate}
              onChange={(e) =>
                setRentalRequest({ ...rentalRequest, startDate: e.value })
              }
              dateFormat="yy-mm-dd"
              showIcon
            />
          </div>
          <div className="field">
            <label htmlFor="endDate">End Date:</label>
            <Calendar
              id="endDate"
              value={rentalRequest.endDate}
              onChange={(e) =>
                setRentalRequest({ ...rentalRequest, endDate: e.value })
              }
              dateFormat="yy-mm-dd"
              showIcon
            />
          </div>
          <p>Are you sure you want to rent this car?</p>
        </Dialog>
      )}
    </>
  );
};

export default AvailableCarsClient;