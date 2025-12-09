
import React from "react";
import LinksFooter from "./LinksFooter";
import LinksFooterPortais from "./LinksFooterPortais";
import { Link } from "react-router-dom";
import Accordion from "./accordion/Accordion";
import "./footer.css";
import LinksFooterFace from "./LinksFace";
import LinksInsta from "./LinksInsta";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="containerFooter">
          {/* EN Regiões - Esquerda */}
          <div className="linksRegioes">
            <h1>
              <i className="fa-solid fa-caret-down"></i> PORTAIS
            </h1>
            <Accordion/>
            <LinksFooterPortais/>
          </div>
          <div className="gpFace" >
            <h1>
                <i className="fa-solid fa-caret-down"></i> FACEBOOK
            </h1>
            
            <LinksFooterFace />
          </div>
          <div className="gpInsta" >
            <h1>
                <i className="fa-solid fa-caret-down"></i> INSTAGRAM
            </h1>
            
            <LinksInsta />
          </div>
          <div className="sobreNos" >
            <h1>
                <i className="fa-solid fa-caret-down"></i> SOBRE NÓS
            </h1>
            <div className="sobreNosLinks">
      <i className="fa-solid fa-chevron-right icon "></i> <a href="https://www.enoticiapara.com.br/institucional" target="_blank" rel="noopener noreferrer"  onClick={() => window.scrollTo({top:0,behavior:"smooth"})}>Institucional</a>
      <i className="fa-solid fa-chevron-right  icon"></i> <a href="https://www.enoticiapara.com.br/politica-de-privacidade" target="_blank" rel="noopener noreferrer" onClick={() => window.scrollTo({top:0,behavior:"smooth"})}>Política de Privacidade</a>
      <i className="fa-solid fa-chevron-right  icon"></i> <a href="https://www.enoticiapara.com.br/termos-de-uso" target="_blank" rel="noopener noreferrer" onClick={() => window.scrollTo({top:0,behavior:"smooth"})}>Termos de Uso</a>
      <i className="fa-solid fa-chevron-right icon"></i> <a href="https://www.enoticiapara.com.br/contato" target="_blank" rel="noopener noreferrer" onClick={() => window.scrollTo({top:0,behavior:"smooth"})}>Contato</a>
      <i className="fa-solid fa-chevron-right icon"></i> <a to="https://www.enoticiapara.com.br/anuncie" target="_blank" rel="noopener noreferrer" onClick={() => window.scrollTo({top:0,behavior:"smooth"})}>Anuncie</a>
       {/* <i className="fa-solid fa-chevron-right icon"></i> <Link to="/anuncie">Expediente</Link>
       <p>SEGUNDA</p> */}
            </div>
            <div className="expediente">
              <h4>EXPEDIENTE</h4>
              <p>Segunda a Sexta</p>
              <p>9h às 18h</p>
            </div>

          </div>
          {/* Logo e Texto - Direita */}
        </div>
      
          <a id="botaoHome" href="/" className="botaoHome" ><img src="/images/logo.png" alt=""></img></a>
      </footer>

      <div className="legal">
        <div
          className="footer-content"
          style={{ flexDirection: "column", width: "100%" }}
        >
          <div className="footer-links">
            <div className="logoFooter">
             <a href="/"><img src="/images/logo.png" alt="Logo" /></a>
          
            </div>
            <div className="buttons">
            <button><a href="https://www.enoticiapara.com.br/anuncie" target="_blank" rel="noopener noreferrer">Anuncie</a></button>
            <button><a to="https://www.enoticiapara.com.br/contato" target="_blank" rel="noopener noreferrer">Contato</a></button>
            </div>
          </div>
          <div className="copyright">
          <p >© 2025 - Todos os direitos reservados para É Notícia Pará</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
