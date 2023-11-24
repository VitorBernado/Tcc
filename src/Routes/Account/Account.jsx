/* eslint-disable react/prop-types */
// Components
import Avatar from "../../Components/Avatar/Avatar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { IoCloudUploadOutline } from "react-icons/io5";

import "./Account.css";

const Account = () => {
  const session = JSON.parse(localStorage.getItem("user"));
  const trophy = 2231;

  return (
    <div className="container-page">
      <header>
        <Sidebar
          userImg={`http://localhost:3000/file/${session.file}`}
          name={session.user.name}
        />
      </header>
      <main className="account-container">
        <Avatar
          image={`http://localhost:3000/file/${session.file}`}
          name={session.user.name}
          width="150px"
          height="150px"
        />
        <div>
          <IoCloudUploadOutline />
        </div>
        <h2 className="trophy">
          <img src="./trophy.png" />
          {trophy}
        </h2>
      </main>
    </div>
  );
};

export default Account;
