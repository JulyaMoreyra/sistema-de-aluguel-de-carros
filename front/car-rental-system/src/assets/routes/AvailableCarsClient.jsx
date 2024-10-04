import { Link } from "react-router-dom";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useState, useEffect } from "react";

const AvailableCarsClient = () => {
  const cars = [
    {
      licenseplate: "a1653d4d",
      model: "Golf",
      year: 1998,
      dailyPrice: 50,
    },
    {
      licenseplate: "b2343d5e",
      model: "Corolla",
      year: 2005,
      dailyPrice: 65,
    },
    {
      licenseplate: "c2343d6f",
      model: "Civic",
      year: 2015,
      dailyPrice: 80,
    },
    {
      licenseplate: "d3454d7g",
      model: "Fiesta",
      year: 2010,
      dailyPrice: 55,
    },
  ];

  const [products, setProducts] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null); 
  const [showModal, setShowModal] = useState(false); 

  useEffect(() => {
    setProducts(cars);
  }, []);

  const rentCar = (car) => {
    setSelectedCar(car);
    setShowModal(true);
  };

  const hideModal = () => {
    setShowModal(false);
    setSelectedCar(null);
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
      <DataTable
        value={products}
        tableStyle={{ minWidth: "50rem", margin: "40px" }}
      >
        <Column field="licenseplate" header="License Plate"></Column>
        <Column field="model" header="Model"></Column>
        <Column field="year" header="Year"></Column>
        <Column field="dailyPrice" header="Daily Price ($)"></Column>
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
                onClick={hideModal}
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
            <strong>License Plate:</strong> {selectedCar.licenseplate}
          </p>
          <p>
            <strong>Daily Price:</strong> ${selectedCar.dailyPrice}
          </p>
          <p>Are you sure you want to rent this car?</p>
        </Dialog>
      )}
    </>
  );
};

export default AvailableCarsClient;
