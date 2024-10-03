import React from "react";
import { Card } from "primereact/card";
import DirectionsCarFilledRoundedIcon from "@mui/icons-material/DirectionsCarFilledRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import { useNavigate } from "react-router-dom";

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
      <h1 style={{ color: "black" }}>Welcome to the car rental system!</h1>
      <h3 style={{ color: "black" }}>
        Our system simplifies the car rental process, making it quick and
        efficient for you to find and reserve the perfect vehicle for your
        needs.
      </h3>
      <div style={styles.cardContainer}>
        <Card
          style={{ ...styles.card, borderRadius: "10px" }}
          onClick={handleAvailableCarsClick}
        >
          <h2>
            <DirectionsCarFilledRoundedIcon
              style={{ ...styles.icon, fontSize: 150 }}
            />
          </h2>
          <h2>Available Cars</h2>
        </Card>
        <Card
          style={{ ...styles.card, borderRadius: "10px" , }}
          onClick={handleContractsClick}
        >
          <h2>
            <DescriptionRoundedIcon style={{ ...styles.icon, fontSize: 150 }} />
          </h2>
          <h2>Contracts</h2>
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
