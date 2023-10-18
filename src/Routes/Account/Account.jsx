// Components
import Avatar from "../../Components/Avatar/Avatar";
import Sidebar from "../../Components/Sidebar/Sidebar";

const Account = () => {
  return (
    <div className="container-page">
      <header>
        <Sidebar />
      </header>
      <main>
        <Avatar width="200px" height="200px" />
      </main>
    </div>
  );
};

export default Account;
