import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import RegisterVehicle from "./RegisterVehicle"; // Importa o componente RegisterVehicle

const AvailableCarsTable = () => {
  const [cars, setCars] = useState([
    {
      licenseplate: "a1653d4d",
      model: "Golf",
      year: 1998,
      brand: "VW",
    },
    {
      licenseplate: "b2343d5e",
      model: "Corolla",
      year: 2005,
      brand: "Toyota",
    },
    {
      licenseplate: "c2343d6f",
      model: "Civic",
      year: 2015,
      brand: "Honda",
    },
  ]);

  const [selectedCar, setSelectedCar] = useState(null); 
  const [visible, setVisible] = useState(false); 
  const [deleteVisible, setDeleteVisible] = useState(false);

  const openDialog = (car = null) => {
    setSelectedCar(car); 
    setVisible(true); 
  };

  const openDeleteDialog = (car) => {
    setSelectedCar(car); 
    setDeleteVisible(true);
  };

  const confirmDelete = () => {
    setCars(
      cars.filter((car) => car.licenseplate !== selectedCar.licenseplate)
    );
    setDeleteVisible(false); 
  };

  const saveVehicle = (vehicle) => {
    if (selectedCar) {
      setCars((prevCars) =>
        prevCars.map((car) =>
          car.licenseplate === vehicle.licenseplate ? vehicle : car
        )
      );
    } else {
      setCars([...cars, vehicle]);
    }
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <Button
          label="Edit"
          severity="success"
          text
          raised
          onClick={() => openDialog(rowData)} 
        />
        <Button
          label="Delete"
          severity="danger"
          text
          raised
          onClick={() => openDeleteDialog(rowData)} // Abre o modal de confirmação de deletar
        />
      </div>
    );
  };

  return (
    <div
      style={{
        padding: "30px",
        margin: "80px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Button
        label="Add New Vehicle"
        icon="pi pi-plus"
        onClick={() => openDialog()} // Abre o modal para adicionar novo veículo
        style={{ marginBottom: "20px" }}
      />

      <DataTable
        value={cars}
        className="p-datatable-striped"
        style={{ minWidth: "90rem" }}
      >
        <Column field="licenseplate" header="License Plate" />
        <Column field="model" header="Model" />
        <Column field="year" header="Year" />
        <Column field="brand" header="Brand" />
        <Column body={actionBodyTemplate} header="Actions" />
      </DataTable>

      <RegisterVehicle
        visible={visible}
        onHide={() => setVisible(false)}
        selectedCar={selectedCar}
        onSave={saveVehicle}
      />

      <Dialog
        header="Confirm Delete"
        visible={deleteVisible}
        style={{ width: "30vw" }}
        onHide={() => setDeleteVisible(false)}
        footer={
          <div>
            <Button
              label="No"
              icon="pi pi-times"
              onClick={() => setDeleteVisible(false)}
              className="p-button-text"
            />
            <Button
              label="Yes"
              icon="pi pi-check"
              onClick={confirmDelete}
              className="p-button-danger"
            />
          </div>
        }
      >
        {selectedCar && (
          <span>
            Are you sure you want to delete the vehicle with license plate{" "}
            <b>{selectedCar.licenseplate}</b>?
          </span>
        )}
      </Dialog>
    </div>
  );
};

export default AvailableCarsTable;
