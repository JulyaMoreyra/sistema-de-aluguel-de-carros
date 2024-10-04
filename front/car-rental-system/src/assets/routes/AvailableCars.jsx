import { Link } from "react-router-dom";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AvailableCarsTable from "../components/AvailableCarsTable";
import RegisterVehicle from "../components/RegisterVehicle";
import hudson from "./hudson.png";

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
        <img
          src={hudson}
          alt="hudson"
          style={{ width: "20%", margin: "10px", marginRight: "100px" }}
        />
        <RegisterVehicle />
      </Box>
      <AvailableCarsTable />
    </>
  );
};

export default AvailableCars;
