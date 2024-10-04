import React from "react";
import { Message } from "primereact/message";
import sherrif from "./sherrif.png";

const ErrorPage = () => {
  return (
    <div style={styles.container}>
      <img
        src={sherrif}
        alt="sherrif"
        style={{
          width: "30%",
          marginLeft: "10px",
        }}
      />
      <Message severity="error" text="404 PAGE NOT FOUND" />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#FFCCCC",
  },
};

export default ErrorPage;
