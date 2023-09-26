// React
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

// CSS
import "./Login.css";

// Components
import ImagenPerfil from "../../Components/ImagenPerfil/ImagenPerfil";
import BtnFacebook from "../../Components/BtnFacebook/BtnFacebook";
import BtnGoogle from "../../Components/BtnGoogle/BtnGoogle";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false); // Inicie showPassword como um booleano

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container">
      <ImagenPerfil />
      <input placeholder="E-mail ou Telefone" />
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
      <span className="spanContainer">
        <a href="#">Esqueceu a senha?</a>
      </span>
      <button>Entrar</button>
      <span className="divider">Ou</span>
      <div className="socialMediaLogin">
        <BtnFacebook />
        <BtnGoogle />
      </div>
      <a href="#" className="register">
        Não tem um conta? <span>Inscreva-se</span>
      </a>
    </div>
  );
};

export default Login;
