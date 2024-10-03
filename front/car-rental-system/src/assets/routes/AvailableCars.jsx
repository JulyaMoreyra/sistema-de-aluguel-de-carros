import { Link } from "react-router-dom";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AvailableCarsTable from "../components/AvailableCarsTable";
import RegisterVehicle from "../components/RegisterVehicle";


const AvailableCars = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "40px",
          
        }}
      >
        <h1
          style={{
            color: "black",
            margin: 0,
            paddingLeft: "80px",
          }}
        >
          Available Cars
        </h1>
        <RegisterVehicle />
      </Box>
      <AvailableCarsTable />
    </>
  );
};

export default AvailableCars;
