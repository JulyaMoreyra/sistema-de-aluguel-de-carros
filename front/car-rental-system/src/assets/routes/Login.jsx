import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import "primeicons/primeicons.css";

export default function LoginDemo() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [userType, setUserType] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    userType: null,
    rg: "",
    cpf: "",
    profession: "",
  });

  const userTypes = [
    { label: "Agente", value: "agente" },
    { label: "Cliente", value: "cliente" },
  ];

  const openSignUpModal = () => {
    setIsModalVisible(true);
  };

  const closeSignUpModal = () => {
    setIsModalVisible(false);
  };

  const handleSignUp = () => {
    console.log("Cadastro realizado:", formData);
    // Aqui você pode adicionar a lógica para salvar os dados do cadastro
    closeSignUpModal();
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <div className="card">
      <div className="flex flex-column md:flex-row">
        {/* Coluna de Login */}
        <div className="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5">
          <div className="flex flex-wrap justify-content-center align-items-center gap-2">
            <label
              htmlFor="username"
              className="w-6rem"
              style={{ color: "black", padding: "10px", margin: "10px" }}
            >
              Username
            </label>
            <InputText
              id="username"
              type="text"
              className="w-12rem"
              style={{ margin: "30px" }}
            />
          </div>
          <div className="flex flex-wrap justify-content-center align-items-center gap-2">
            <label
              htmlFor="password"
              className="w-6rem"
              style={{ color: "black", padding: "10px", margin: "10px" }}
            >
              Password
            </label>
            <InputText
              id="password"
              type="password"
              className="w-12rem"
              style={{ margin: "30px" }}
            />
          </div>
          <div className="flex justify-content-center gap-3">
            <Button
              label="Login"
              icon="pi pi-user"
              className="w-10rem mx-auto"
              style={{ margin: "20px" }}
            />
            <Button
              label="Sign Up"
              icon="pi pi-user-plus"
              className="w-10rem mx-auto"
              style={{ margin: "20px" }}
              onClick={openSignUpModal}
            />
          </div>
        </div>
      </div>

      {/* Modal de Sign Up */}
      <Dialog
        header="Sign Up"
        visible={isModalVisible}
        style={{ width: "30vw" }}
        onHide={closeSignUpModal}
      >
        <div className="p-fluid">
          <div className="field">
            <label htmlFor="name" style={{ margin: "10px" }}>
              Name
            </label>
            <InputText
              id="name"
              value={formData.name}
              style={{ margin: "10px" }}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label htmlFor="email" style={{ margin: "10px" }}>
              Email
            </label>
            <InputText
              id="email"
              value={formData.email}
              style={{ margin: "10px" }}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label htmlFor="userType" style={{ margin: "10px" }}>
              You are a
            </label>
            <Dropdown
              id="userType"
              value={formData.userType}
              options={userTypes}
              style={{ margin: "10px", width: "100%" }}
              onChange={(e) => {
                setFormData((prevData) => ({
                  ...prevData,
                  userType: e.value,
                }));
                setUserType(e.value);
              }}
              placeholder="Select User Type"
            />
          </div>

          {/* Campos extras para Cliente */}
          {userType === "cliente" && (
            <>
              <div className="field">
                <label htmlFor="rg" style={{ margin: "10px" }}>
                  RG
                </label>
                <InputText
                  id="rg"
                  value={formData.rg}
                  style={{ margin: "10px" }}
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <label htmlFor="cpf" style={{ margin: "10px" }}>
                  CPF
                </label>
                <InputText
                  id="cpf"
                  value={formData.cpf}
                  style={{ margin: "10px" }}
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <label htmlFor="profession" style={{ margin: "10px" }}>
                  Profession
                </label>
                <InputText
                  id="profession"
                  value={formData.profession}
                  style={{ margin: "10px" }}
                  onChange={handleChange}
                />
              </div>
            </>
          )}

          <Button
            label="Sign Up"
            icon="pi pi-check"
            onClick={handleSignUp}
            style={{ margin: "10px" }}
          />
        </div>
      </Dialog>
    </div>
  );
}
