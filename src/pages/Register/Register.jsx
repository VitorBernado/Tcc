// React
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

// CSS
import "./Register.css";

// Components
import ImagenPerfil from "../../Components/ImagenPerfil/ImagenPerfil";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false); // Inicie showPassword como um booleano

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container">
      <ImagenPerfil />
      <input placeholder="Nome" />
      <input placeholder="E-mail" />
      <input placeholder="Telefone" />
      <div className="container-password">
        <input
          placeholder="Senha"
          type={showPassword ? "text" : "password"}
          className="password"
        />
        <button className="eye" onClick={togglePasswordVisibility}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
      <div className="container-termos">
        <label className="checkbox-container">
          <input type="checkbox" />
          <span className="checkmark"></span>
          <p>
            Eu aceito os <span>Termos de uso</span> e{" "}
            <span>Políticas de privacidade</span>
          </p>
        </label>
      </div>
      <button>Inscreva-se</button>
    </div>
  );
};

export default Register;
