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
    clientName: "John Doe",
    cpf: "123.456.789-00",
    licensePlate: "ABC-1234",
    model: "Golf",
    dailyValue: 100,
    contractValue: 1000,
    startDate: "2021-10-01",
    endDate: "2021-10-10",
  },
  {
    id: 2,
    clientName: "Jane Doe",
    cpf: "987.654.321-00",
    licensePlate: "DEF-5678",
    model: "Corolla",
    dailyValue: 150,
    contractValue: 1500,
    startDate: "2021-10-05",
    endDate: "2021-10-15",
  }
];

// Contratos aceitos
const acceptedContracts = [
  {
    id: 3,
    clientName: "Mike Ross",
    cpf: "123.123.123-11",
    licensePlate: "GHI-9101",
    model: "Civic",
    dailyValue: 120,
    contractValue: 1200,
    startDate: "2021-10-11",
    endDate: "2021-10-20",
  },
  {
    id: 5,
    clientName: "Harvey Specter",
    cpf: "456.456.456-22",
    licensePlate: "MNO-1112",
    model: "Fusion",
    dailyValue: 180,
    contractValue: 1800,
    startDate: "2021-10-21",
    endDate: "2021-10-31",
  }
];

// Contratos rejeitados
const rejectedContracts = [
  {
    id: 4,
    clientName: "Rachel Zane",
    cpf: "987.987.987-99",
    licensePlate: "JKL-1234",
    model: "Mustang",
    dailyValue: 200,
    contractValue: 2000,
    startDate: "2021-09-01",
    endDate: "2021-09-05",
  },
  {
    id: 6,
    clientName: "Donna Paulsen",
    cpf: "654.654.654-33",
    licensePlate: "PQR-5678",
    model: "Fusca",
    dailyValue: 80,
    contractValue: 800,
    startDate: "2021-09-10",
    endDate: "2021-09-20",
  }
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
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
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
          <Column field="dailyValue" header="Daily Value" />
          <Column field="contractValue" header="Contract Value" />
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
          <Column field="dailyValue" header="Daily Value" />
          <Column field="contractValue" header="Contract Value" />
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
          <Column field="contractValue" header="Contract Value" />
          <Column field="startDate" header="Start Date" />
          <Column field="endDate" header="End Date" />
        </DataTable>
      </CustomTabPanel>
    </Box>
  );
}
