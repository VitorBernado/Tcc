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
  return (
    <div className="container-ranking">
      <Sidebar />
      <TableRanking data={data} className="table" />
    </div>
  );
};

export default Ranking;
