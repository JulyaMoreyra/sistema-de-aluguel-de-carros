import React from "react";
import { Message } from "primereact/message";

const ErrorPage = () => {
  return (
    <div style={styles.container}>
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
