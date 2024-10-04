import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import { Navigate } from 'react-router-dom';
import "primeicons/primeicons.css";
import apiService from '../../services/apiService.js';

export default function LoginDemo() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [userType, setUserType] = useState(null);
  const [loginError, setLoginError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [registerFormData, setRegisterFormData] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
    cpf: "",
    rg: "",
    profession: "",
  });

  const userTypes = [
    { label: 'Customer', value: 'cliente' },
    { label: 'Agent', value: 'agent' },
  ];

  const openSignUpModal = () => {
    setIsModalVisible(true);
  };

  const closeSignUpModal = () => {
    setIsModalVisible(false);
  };

  const handleSignUp = async () => {
    try {
      const response = await apiService.post('/auth/register', registerFormData);
      console.log("Cadastro realizado:", response.data);
      closeSignUpModal();
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await apiService.post('/auth/login', {
        username: registerFormData.username,
        password: registerFormData.password,
      });
      localStorage.setItem('token', response.data.token);
      
      setIsLoggedIn(true);

      console.log("Login realizado:", response.data);
    } catch (error) {
      console.error("Erro ao logar:", error);
      setLoginError("Invalid username or password."); // Define a mensagem de erro
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setRegisterFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  if (isLoggedIn) {
    return <Navigate to="/" />
  }

  return (
    <div className="card">
      <div className="flex flex-column md:flex-row">
        {/* Coluna de Login */}
        <div className="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5">
          {loginError && ( // Exibe a mensagem de erro se houver
            <div className="error" style={{ color: "red", marginBottom: "10px" }}>
              {loginError}
            </div>
          )}
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
              value={registerFormData.username} // Define o valor do input
              onChange={handleChange} // Define o evento onChange
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
              value={registerFormData.password} // Define o valor do input
              onChange={handleChange} // Define o evento onChange
            />
          </div>
          <div className="flex justify-content-center gap-3">
            <Button
              label="Login"
              icon="pi pi-user"
              className="w-10rem mx-auto"
              style={{ margin: "20px" }}
              onClick={handleLogin} // Chama a função handleLogin ao clicar
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
            <label htmlFor="username" style={{ margin: "10px" }}>
              Username
            </label>
            <InputText
              id="username"
              value={registerFormData.username}
              style={{ margin: "10px" }}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label htmlFor="password" style={{ margin: "10px" }}>
              Password
            </label>
            <InputText
              id="password"
              type="password"
              value={registerFormData.password}
              style={{ margin: "10px" }}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label htmlFor="name" style={{ margin: "10px" }}>
              Name
            </label>
            <InputText
              id="name"
              value={registerFormData.name}
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
              value={registerFormData.email}
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
              value={userType} // Usa o estado userType
              options={userTypes} // Usa a constante userTypes
              style={{ margin: "10px", width: "100%" }}
              onChange={(e) => setUserType(e.value)} // Define o estado userType
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
                  value={registerFormData.rg}
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
                  value={registerFormData.cpf}
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
                  value={registerFormData.profession}
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