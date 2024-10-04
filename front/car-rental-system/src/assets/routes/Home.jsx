import React from "react";
import { Card } from "primereact/card";
import DirectionsCarFilledRoundedIcon from "@mui/icons-material/DirectionsCarFilledRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import { useNavigate } from "react-router-dom";
import mate from "./mate.png";
import relampago from "./relampago.png";

const Home = () => {
  const navigate = useNavigate();

  const handleAvailableCarsClick = () => {
    navigate("/available-cars");
  };

  const handleContractsClick = () => {
    navigate("/contracts");
  };

  return (
    <>
      <h1 style={{ color: "black" }}>
        Welcome to Radiator Springs Car Rentals!
      </h1>
      <h2 style={{ color: "black" }}>
        Experience a Quick and Efficient Rental Process
      </h2>
      <h3 style={{ color: "black" }}>
        Finding and reserving the perfect vehicle has never been easier. Join us
        and relive the excitement of "Cars" with every rental!
      </h3>
      <div style={styles.cardContainer}>
        <Card
          style={{ ...styles.card, borderRadius: "10px" }}
          onClick={handleAvailableCarsClick}
        >
          <img src={mate} alt="mate" style={{ width: "80%", margin: "10px" }} />
          <h2 style={{ color: "#604337" }}>Available Cars</h2>
        </Card>
        <Card
          style={{ ...styles.card, borderRadius: "10px" }}
          onClick={handleContractsClick}
        >
          <img
            src={relampago}
            alt="mate"
            style={{ width: "80%", margin: "10px" }}
          />
          <h2 style={{ color: "#ee5b5d" }}>Contracts</h2>
        </Card>
      </div>
    </>
  );
};

const styles = {
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
    margin: "40px",
  },
  card: {
    marginRight: "10px",
    flex: "1",
    maxWidth: "25rem",
  },
  icon: {
    fontSize: "3rem",
  },
};

export default Home;
