/* eslint-disable react/prop-types */
import "./TableRanking.css";

const TableRanking = ({ data }) => {
  return (
    <div className="container-table">
      <h1>Ranking</h1>
      <table>
        <thead>
          <tr>
            <th>Posição</th>
            <th>Nome</th>
            <th>Pontuação</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.pontuacao}</td>
            </tr>
          ))}
          <tr className="you-score">
            <td>13</td>
            <td>Você</td>
            <td>2900</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableRanking;
