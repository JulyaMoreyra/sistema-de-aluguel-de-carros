import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";

export default function RegisterVehicle({
  visible,
  onHide,
  selectedCar,
  onSave,
}) {
  const [vehicleData, setVehicleData] = useState(
    selectedCar || {
      licenseplate: "",
      model: "",
      year: "",
      brand: "",
    }
  );

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setVehicleData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const saveVehicle = () => {
    onSave(vehicleData); // Chama a função de salvamento com os dados do veículo
    onHide(); // Fecha o modal após salvar
  };

  return (
    <Dialog
      header={selectedCar ? "Edit Vehicle" : "Register New Vehicle"}
      visible={visible}
      style={{ width: "50vw" }}
      onHide={onHide}
    >
      <div style={{ padding: "20px" }}>
        <h3>License Plate</h3>
        <div className="field" style={{ marginBottom: "15px" }}>
          <InputText
            id="licenseplate"
            keyfilter="text"
            placeholder="AAA-1234 or 1234-AAA"
            style={{ width: "100%" }}
            value={vehicleData.licenseplate}
            onChange={handleInputChange}
          />
        </div>

        <h3>Model</h3>
        <div className="field" style={{ marginBottom: "15px" }}>
          <InputText
            id="model"
            keyfilter="text"
            placeholder="Car model"
            style={{ width: "100%" }}
            value={vehicleData.model}
            onChange={handleInputChange}
          />
        </div>

        <h3>Year</h3>
        <div className="field" style={{ marginBottom: "15px" }}>
          <InputText
            id="year"
            keyfilter="pint"
            placeholder="Car year"
            style={{ width: "100%" }}
            value={vehicleData.year}
            onChange={handleInputChange}
          />
        </div>

        <h3>Brand</h3>
        <div className="field" style={{ marginBottom: "15px" }}>
          <InputText
            id="brand"
            keyfilter="text"
            placeholder="Car brand"
            style={{ width: "100%" }}
            value={vehicleData.brand}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "right",
          paddingRight: "20px",
          paddingBottom: "10px",
        }}
      >
        <Button
          label="Cancel"
          severity="danger"
          text
          raised
          onClick={onHide} // Fecha o modal sem salvar
        />
        <Button
          label="Save"
          severity="success"
          text
          raised
          onClick={saveVehicle} // Salva o veículo (adicionar/editar)
        />
      </div>
    </Dialog>
  );
}
