import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

const AvailableCarsTable = () => {
  const cars = [
    {
      licenseplate: "a1653d4d",
      year: 1998,
      brand: "VW",
      color: "White",
      dailyrental: 100,
    },
    {
      licenseplate: "b2343d5e",
      year: 2005,
      brand: "Toyota",
      color: "Black",
      dailyrental: 120,
    },
    {
      licenseplate: "c2343d6f",
      year: 2015,
      brand: "Honda",
      color: "Red",
      dailyrental: 150,
    },
  ];

  const actionBodyTemplate = (rowData) => {
    return (
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        <Button label="Edit" severity="success" text raised />
        <Button label="Delete" severity="danger" text raised />
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
      <DataTable
        value={cars}
        className="p-datatable-striped"
        style={{ minWidth: "90rem", textAlign: "center" }} // Centraliza o conteúdo da tabela
      >
        <Column
          field="licenseplate"
          header="License Plate"
          style={{ textAlign: "center" }}
        />
        <Column field="year" header="Year" style={{ textAlign: "center" }} />
        <Column field="brand" header="Brand" style={{ textAlign: "center" }} />
        <Column field="color" header="Color" style={{ textAlign: "center" }} />
        <Column
          body={actionBodyTemplate}
          header="Actions"
          style={{ textAlign: "center" }}
        />
      </DataTable>
    </div>
  );
};

export default AvailableCarsTable;
