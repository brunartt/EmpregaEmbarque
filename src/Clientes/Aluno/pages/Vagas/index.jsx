import React from 'react';
import Footer from '/src/components/Footer/index';
import Nav from '/src/components/NavLogado/index';
import './Vagas.css';

function Vagas() {
  return (
    <>
      <Nav />
      <div className="vagas-container">
        <div className="vagas-header">
          <div className="destaqueVagas">Vagas em destaque</div>
          <div className="filtro">Filtro</div>
        </div>
        
        <div className="quadros-container">
          <div className="quadro"></div>
          <div className="quadro"></div>
          <div className="quadro"></div>
          <div className="quadro"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Vagas;
