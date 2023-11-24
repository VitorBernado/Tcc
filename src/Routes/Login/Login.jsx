// React
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
// CSS
import "./Login.css";

// Components
import ImagenPerfil from "../../Components/ImagenPerfil/ImagenPerfil";
import BtnFacebook from "../../Components/BtnFacebook/BtnFacebook";
import BtnGoogle from "../../Components/BtnGoogle/BtnGoogle";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    setError("");

    fetch("http://localhost:3000/sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.token) {
          window.location.href = "/jogos";
          localStorage.setItem("user", JSON.stringify(json));
        } else {
          setError("Credenciais inválidas. Tente novamente.");
        }
      })
      .catch((error) => {
        console.error("Erro ao autenticar:", error);
      });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <ImagenPerfil />
        <input
          placeholder="E-mail ou Telefone"
          type="text"
          name="email"
          onChange={handleInputChange}
        />
        <div className="container-password">
          <input
            name="password"
            placeholder="Senha"
            type={showPassword ? "text" : "password"}
            className="password"
            onChange={handleInputChange}
          />
          <button className="eye" onClick={togglePasswordVisibility}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <span className="spanContainer">
          <a href="#">Esqueceu a senha?</a>
        </span>
        <button>Entrar</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      <span className="divider">Ou</span>
      <div className="socialMediaLogin">
        <BtnFacebook />
        <BtnGoogle />
      </div>
      <Link to="/Register" className="register">
        Não tem um conta? <span>Inscreva-se</span>
      </Link>
    </div>
  );
};

export default Login;
