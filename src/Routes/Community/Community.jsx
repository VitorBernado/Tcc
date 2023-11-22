import "./Community.css";

export default function Community() {
  return (
    <div>
      <div className="community-container">
        <header className="community-header">
          <div className="community-header-img">
            <img
              className="img-container-card"
              width="150"
              height="100"
              src="logo1.png"
              alt="Logo do site"
            />
          </div>
          <div className="community-header-title">
            <h1 className="h1-title">Atividades Cognitivas</h1>
          </div>
        </header>
        <p className="paragrafo-community-header">
          A atividade cognitiva é um dos principais conceitos da teoria do
          conhecimento. Podemos dizer que a cognição é a capacidade do cérebro
          em perceber, raciocinar e armazenar as informações captadas pelos
          sentidos. A atividade cognitiva parte da curiosidade sadia de um
          sujeito em fazer perguntas. Este tipo de ação apresenta
          características de conotações especificas.
        </p>
        <div className="community container">
          <a href="../login">
            <button className="btn-community ">ENTRE</button>
          </a>
        </div>
      </div>

      <div className="div-community">
        <div className="div-community-card">
          <div className="img-community">
            <img
              width="450"
              height="300"
              className="img"
              src="img.png"
              alt=""
            />
          </div>

          <p className="paragrafo-community-text">
            O intelecto recebe a informação percebida através dos sentidos
            externos proporcionando dados visuais, olfativos, auditivos e
            aspectos vinculados ao tato e ao paladar. Isto é, estes dados não
            são finalizados de forma isolada, mas podem ser postos em
            interconecção mediante os exercícios de abstração. O intelecto
            processa toda essa informação através da atividade cognitiva entre
            os processos mentais. Na atividade cognitiva, o ser humano não ocupa
            um papel passivo, mas participa de forma ativa neste conhecimento
            como mostra o exercício de refletir à partir de ideias concretas.
          </p>
        </div>

        <div className="div-community-card">
          <div className="video-container">
            <iframe
              width="550"
              height="400"
              src="https://www.youtube.com/embed/bDhwCY_4wTI?si=6Fuoim3iDE_xTSNM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="div-community">
        <div className="div-community-card">
          <a className="img-container"
            width="100"
            height="100"
            href="https://www.sescrio.org.br/wp-content/uploads/2020/06/Est%C3%ADmulo-Cognitivo-Volume-1.pdf"
          >
            {" "}
            <img className="img-container" src="Cartilha.png" alt="" />
          </a>
          <p className="paragrafo-community-text">
            O desenvolvimento deste site/app fundamentou-se na cartilha de
            exercícios de estímulos cognitivos do SESC/RJ, o qual, através de
            pesquisas de campo, artigos científicos e artigos acadêmicos, buscou
            ajudar o público a retardar o envelhecimento cerebral através das
            atividades cognitivas. Para melhores esclarecimentos, click na
            imagem ao lado e saiba mais!{" "}
          </p>
        </div>
      </div>

      <div className="div-community">
        <div className="div-community-card">
          <div className="img-community">
            <img
              className="img"
              src="idosos2.jpg"
              alt=""
            />
          </div>

          <p className="paragrafo-community-text">
            À medida que envelhecemos, nossa saúde cognitiva se torna uma parte
            fundamental da qualidade de vida. Para manter a mente afiada e ativa
            durante a terceira idade, considere as seguintes dicas: Exercício
            Físico: A atividade física regular melhora o fluxo sanguíneo para o
            cérebro, estimulando o crescimento de novos neurônios e melhorando a
            cognição. Caminhar, nadar, dançar e ioga são excelentes opções.
          </p>
        </div>

        <div className="div-community-card">
          <div className="img-community">
            <img
              width="350"
              height="300"
              className="img"
              src="idosos3.jpg"
              alt=""
            />
          </div>

          <p className="paragrafo-community-text">
            Estimulação Mental: Desafiar a mente com quebra-cabeças, jogos,
            leitura e aprendizado contínuo ajuda a manter a cognição afiada.
            Novas experiências e hobbies também são benéficos. Sono de
            Qualidade: O sono adequado é fundamental para a consolidação da
            memória e o reparo do cérebro. Tente manter o possivel para uma
            rotina de sono consistente.
          </p>
        </div>
      </div>

      <main className="main cards">
        <section className="card">
          <img  height="250"
            className="img-container-card"
            src="albert.png"
            alt="Foto deArbert"
          />
          <h3 className="h3-community">Albert Einstein</h3>
          <p className="paragrafo-card">
            Uma pessoa inteligente resolve um problema, um sábio o previne!
          </p>
        </section>

        <section className="card">
          <img  height="250"
        
            className="img-container-card"
            src="augusto.png"
            alt="Foto de Augusto"
          />
          <h3 className="h3-community">Augusto Cury</h3>
          <p className="paragrafo-card">
            Se o tempo envelhecer o seu corpo, mas não envelhecer a sua emoção,
            você será sempre feliz!
          </p>
        </section>
      </main>

      <footer className="footer-community">
        <div className="footer-content-community">
          <div className="footer-info">
            <p>&copy; 2023 Atividades Conitivas. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
