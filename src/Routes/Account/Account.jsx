/* eslint-disable react/prop-types */
// Components
import Avatar from "../../Components/Avatar/Avatar";
import Sidebar from "../../Components/Sidebar/Sidebar";

import "./Account.css";

const Account = () => {
  const trophy = 2231;

  const userImg = "./Perfil.png";

  return (
    <div className="container-page">
      <header>
        <Sidebar />
      </header>
      <main className="account-container">
        <Avatar
          image={userImg}
          name={"Prime Racing"}
          width="150px"
          height="150px"
        />
        <h2 className="trophy">
          <img src="./trophy.png" />
          {trophy}
        </h2>
      </main>
    </div>
  );
};

export default Account;
