/* eslint-disable react/prop-types */
// CSS
import "./Avatar.css";

// React
const defaultAvatar = "user.png";

const Avatar = ({ image, name }) => {
  return (
    <div className="container-avatar">
      <img src={image ? image : defaultAvatar} alt="Foto do usuario" />
      <h2>{name}</h2>
    </div>
  );
};

export default Avatar;
