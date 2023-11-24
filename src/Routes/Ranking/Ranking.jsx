import Sidebar from "../../Components/Sidebar/Sidebar";
import TableRanking from "../../Components/TableRanking/TableRanking";
import "./Ranking.css";

const data = [
  {
    name: "user1",
    pontuacao: "3000",
  },
  {
    name: "user1",
    pontuacao: "3000",
  },
  {
    name: "user1",
    pontuacao: "3000",
  },
  {
    name: "user1",
    pontuacao: "3000",
  },
  {
    name: "user1",
    pontuacao: "3000",
  },
  {
    name: "user1",
    pontuacao: "3000",
  },
  {
    name: "user1",
    pontuacao: "3000",
  },
  {
    name: "user1",
    pontuacao: "3000",
  },
  {
    name: "user1",
    pontuacao: "3000",
  },
  {
    name: "user1",
    pontuacao: "3000",
  },
];

const Ranking = () => {
  const session = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="container-ranking">
      <Sidebar
        userImg={`http://localhost:3000/file/${session.file}`}
        name={session.user.name}
      />
      <TableRanking data={data} className="table" />
    </div>
  );
};

export default Ranking;
