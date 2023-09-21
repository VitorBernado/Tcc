// CSS
import './Login.css'

// Components
import ImagenPerfil from '../../Components/ImagenPerfil/ImagenPerfil'
import BtnFacebook from '../../Components/BtnFacebook/BtnFacebook'
import BtnGoogle from '../../Components/BtnGoogle/BtnGoogle'

const Login = () => {
  return (
    <div className='container'>
      <ImagenPerfil />
      <input placeholder='E-mail ou Telefone' />
        <input placeholder='Senha' />
        <span className='spanContainer'><a href="#">Esqueceu a senha?</a></span>
        <button>Entrar</button>
        <span className='divider'>Ou</span>
        <div className='socialMediaLogin'>
            <BtnFacebook />
            <BtnGoogle />
        </div>
        <a href="#" className='register'>Não tem um conta? <span>Inscreva-se</span></a>
    </div> 
  )
}

export default Login