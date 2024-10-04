import { Link } from "react-router-dom";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import BasicTab from "../components/BasicTabs";
import sally from "./sally.png";

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

const Contracts = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {/* Alinhar o h1 e a imagem lado a lado no final da linha */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between", 
          alignItems: "center", 
          paddingLeft: "80px",
          paddingRight: "80px", 
        }}
      >
        <img
          src={sally}
          alt="sally"
          style={{
            width: "20%",
            marginLeft: "10px", 
          }}
        />
        <h1 style={{ color: "black", marginLeft: "80px" }}>Contracts</h1>
      </div>
      <BasicTab />
    </>
  );
};

export default Contracts;
