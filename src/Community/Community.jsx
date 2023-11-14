import React from 'react';
import './Community.css';

const Community = () => {
  return (
    <div >

      <header className="header-community">
        <div className="container-community">
          <div className="title-container">
            <img src="logo1.png" alt="Logo do site" className="logo-community" />
            <h1>Atividades Cognitivas</h1>
          </div>
        </div>
      </header>

      <section className="faixa-section-community">
        <div className="conteudo-faixa">
          <p className='title-container'> A atividade cognitiva é um dos principais conceitos da teoria do
            conhecimento. Podemos dizer que a cognição é a capacidade do cérebro
            em perceber, raciocinar e armazenar as informações captadas pelos
            sentidos. A atividade cognitiva parte da curiosidade sadia de um sujeito em
            fazer perguntas. Este tipo de ação apresenta características de
            conotações especificas.</p>
        </div>
        <a href="../Login"><button >Entrar</button></a>
      </section>
      <div className='margin-community'></div>




















      <div className="div-community">

        <div className="div-community-card " >

          <div classNamef="img-community">
            <img width="450" height="300"  src="img.png" alt="" />
          </div>

          <p className="paragrafo-community-text">
            O intelecto recebe a informação percebida através dos sentidos externos
            proporcionando dados visuais, olfativos, auditivos e aspectos
            vinculados ao tato e ao paladar. Isto é, estes dados não são
            finalizados de forma isolada, mas podem ser postos em interconecção
            mediante os exercícios de abstração. O intelecto processa toda essa
            informação através da atividade cognitiva entre os processos
            mentais. Na atividade cognitiva, o ser humano não ocupa um papel
            passivo, mas participa de forma ativa neste conhecimento como mostra o
            exercício de refletir à partir de ideias concretas.
          </p>



        </div>

        <div className="div-community-card ">
          <div className="video-container">
            <iframe
              width="450"
              height="300"
              src="https://www.youtube.com/embed/bDhwCY_4wTI?si=6Fuoim3iDE_xTSNM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen>
            </iframe>
          </div>
        </div>
      </div>

      <div className="div-community">
        <div className="div-community-card">

          <a href="https://www.sescrio.org.br/wp-content/uploads/2020/06/Est%C3%ADmulo-Cognitivo-Volume-1.pdf"> <img className="img-container" src="Cartilha.png" alt="" /></a>
          <p className="paragrafo-community">
            O desenvolvimento deste site/app fundamentou-se na cartilha de
            exercícios de estímulos cognitivos do SESC/RJ, o qual, através de pesquisas
            de campo, artigos científicos e artigos acadêmicos, buscou ajudar o público a
            retardar o envelhecimento cerebral através das atividades cognitivas.
            Para melhores esclarecimentos, click na imagem ao lado e saiba mais! {" "}
          </p>

        </div>
      </div>

      <div className="div-community">

        <div className="div-community-card" >

          <div className="img-community">
            <img width="350" height="300" className="img" src="idosos2.jpg" alt="" />
          </div>

          <p className="paragrafo-community-text">
            À medida que envelhecemos, nossa saúde cognitiva se torna uma parte fundamental da qualidade de vida.
            Para manter a mente afiada e ativa durante a terceira idade, considere as seguintes dicas:
            Exercício Físico: A atividade física regular melhora o fluxo sanguíneo para o cérebro,
            estimulando o crescimento de novos neurônios e melhorando a cognição. Caminhar, nadar, dançar e ioga são excelentes opções.
          </p>

        </div>

        <div className="div-community-card" >

          <div className="img-community">
            <img width="350" height="300" className="img" src="idosos3.jpg" alt="" />
          </div>

          <p className="paragrafo-community-text">
            Estimulação Mental: Desafiar a mente com quebra-cabeças, jogos,
            leitura e aprendizado contínuo ajuda a manter a cognição afiada. Novas experiências e hobbies
            também são benéficos. Sono de Qualidade: O sono adequado é fundamental para a consolidação da
            memória e o reparo do cérebro. Tente manter o possivel para uma rotina de sono consistente.
          </p>

        </div>



      </div>




























      <footer className="footer-community">
        <div className="footer-content-community">
          <div className="footer-info">
            <p>&copy; 2023 Atividades Conitivas. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>


    </div>
  );
};

export default Community;
