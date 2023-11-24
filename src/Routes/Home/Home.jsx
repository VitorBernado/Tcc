// CSS
import "./Home.css";

// Coponents
import Carrossel from "../../Components/Carrossel/Carrossel";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  const session = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetch("http://localhost:5173/Games.json")
      .then((Response) => Response.json())
      .then(setData);
  }, []);

  if (!data || !data.length) return null;

  return (
    <div className="container-page">
      <header>
        <Sidebar
          userImg={`http://localhost:3000/file/${session.file}`}
          name={session.user.name}
        />
      </header>
      <main>
        <Carrossel data={data} title={"Em Alta"} />
        <hr></hr>
        <Carrossel data={data} title={"Queridinhos da Galera"} />
      </main>
    </div>
  );
};

export default Home;
