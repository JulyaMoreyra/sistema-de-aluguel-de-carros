import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

// Contratos pendentes
const pendingContracts = [
  {
    id: 1,
    clientName: "Relâmpago McQueen",
    cpf: "123.456.789-00",
    licensePlate: "0WC-001",
    model: "McQueen Special",
    dailyValue: 300,
    contractValue: 3000,
    startDate: "2023-07-01",
    endDate: "2023-07-10",
  },
  {
    id: 2,
    clientName: "Mate",
    cpf: "987.654.321-00",
    licensePlate: "0WC-002",
    model: "Caminhão Guincho",
    dailyValue: 150,
    contractValue: 1500,
    startDate: "2023-07-05",
    endDate: "2023-07-15",
  },
  {
    id: 3,
    clientName: "Doc Hudson",
    cpf: "654.321.987-00",
    licensePlate: "0WC-003",
    model: "Hudson Hornet",
    dailyValue: 200,
    contractValue: 2000,
    startDate: "2023-07-08",
    endDate: "2023-07-18",
  },
];

// Contratos aceitos
const acceptedContracts = [
  {
    id: 4,
    clientName: "Sally Carrera",
    cpf: "321.654.987-11",
    licensePlate: "0WC-004",
    model: "Porsche 911",
    dailyValue: 350,
    contractValue: 3500,
    startDate: "2023-07-11",
    endDate: "2023-07-21",
  },
  {
    id: 5,
    clientName: "Luigi",
    cpf: "789.123.456-22",
    licensePlate: "0WC-005",
    model: "Fiat 500",
    dailyValue: 180,
    contractValue: 1800,
    startDate: "2023-07-15",
    endDate: "2023-07-25",
  },
  {
    id: 6,
    clientName: "Guido",
    cpf: "456.789.123-33",
    licensePlate: "0WC-006",
    model: "Empilhadeira",
    dailyValue: 120,
    contractValue: 1200,
    startDate: "2023-07-18",
    endDate: "2023-07-28",
  },
];

// Contratos rejeitados
const rejectedContracts = [
  {
    id: 7,
    clientName: "Chick Hicks",
    cpf: "147.258.369-44",
    licensePlate: "0WC-007",
    model: "Hicks Special",
    dailyValue: 250,
    contractValue: 2500,
    startDate: "2023-06-20",
    endDate: "2023-06-30",
  },
  {
    id: 8,
    clientName: "Ramone",
    cpf: "369.258.147-55",
    licensePlate: "0WC-008",
    model: "Chevrolet Impala",
    dailyValue: 220,
    contractValue: 2200,
    startDate: "2023-06-25",
    endDate: "2023-07-05",
  },
  {
    id: 9,
    clientName: "Flo",
    cpf: "258.369.147-66",
    licensePlate: "0WC-009",
    model: "Showcar",
    dailyValue: 280,
    contractValue: 2800,
    startDate: "2023-06-15",
    endDate: "2023-06-25",
  },
];

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", padding: "40px" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Pending Contracts" {...a11yProps(0)} />
          <Tab label="Accepted Contracts" {...a11yProps(1)} />
          <Tab label="Rejected Contracts" {...a11yProps(2)} />
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <DataTable value={pendingContracts} responsiveLayout="scroll">
          <Column field="clientName" header="Client Name" />
          <Column field="cpf" header="CPF" />
          <Column field="licensePlate" header="License Plate" />
          <Column field="model" header="Model" />
          <Column field="dailyValue" header="Daily Value ($)" />
          <Column field="contractValue" header="Contract Value ($)" />
          <Column field="startDate" header="Start Date" />
          <Column field="endDate" header="End Date" />
        </DataTable>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <DataTable value={acceptedContracts} responsiveLayout="scroll">
          <Column field="clientName" header="Client Name" />
          <Column field="cpf" header="CPF" />
          <Column field="licensePlate" header="License Plate" />
          <Column field="model" header="Model" />
          <Column field="dailyValue" header="Daily Value ($)" />
          <Column field="contractValue" header="Contract Value ($)" />
          <Column field="startDate" header="Start Date" />
          <Column field="endDate" header="End Date" />
        </DataTable>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <DataTable value={rejectedContracts} responsiveLayout="scroll">
          <Column field="clientName" header="Client Name" />
          <Column field="cpf" header="CPF" />
          <Column field="licensePlate" header="License Plate" />
          <Column field="model" header="Model" />
          <Column field="dailyValue" header="Daily Value" />
          <Column field="contractValue" header="Contract Value ($)" />
          <Column field="startDate" header="Start Date ($)" />
          <Column field="endDate" header="End Date" />
        </DataTable>
      </CustomTabPanel>
    </Box>
  );
}
