import { useParams, useNavigate } from "react-router-dom";

const ContactDetails = () => {
  const { id } = useParams();

  //redirect
  const navigate = useNavigate();

  const handleContact = () => {
    console.log("Enviando mensagem...");
    return navigate("/");
  };

  return (
    <div>
      <h1>Exibindo: {id}</h1>
      <button onClick={handleContact}>Enviar Mensagem</button>
    </div>
  );
};

export default ContactDetails;
