
import React from 'react';
import AccordionItem from './AccordionItem';
import './accordion.css';
import LinksFooterFace from '../LinksFace';
import LinksFooter from '../LinksFooter';
import LinksInsta from '../LinksInsta';



const Accordion = () => {
  return (
    <div className='accordion'>
      <AccordionItem title="PORTAIS">
          <LinksFooter/>
      </AccordionItem>
      
      <AccordionItem title="FACEBOOK">
        <LinksFooterFace />
      </AccordionItem>
      <AccordionItem title="INSTAGRAM">
        <LinksInsta />
      </AccordionItem>
      <AccordionItem title="SOBRE NÓS">
        <div className='itemAccordion' ><i className="fa-solid fa-chevron-right  icon "></i> <a href="https://www.enoticiapara.com.br/politica-de-privacidade">Política de Privacidade</a></div>
    <div className='itemAccordion'><i className="fa-solid fa-chevron-right  icon"></i> <a href="https://www.enoticiapara.com.br/termos-de-uso">Termos de Uso</a></div>
     <div className='itemAccordion'> <i className="fa-solid fa-chevron-right icon "></i> <a href="https://www.enoticiapara.com.br/institucional">Institucional</a></div>      
          <div className='itemAccordion'><i className="fa-solid fa-chevron-right icon"></i> <a href="https://www.enoticiapara.com.br/contato">Contato</a></div>
           <div className='itemAccordion'><i className="fa-solid fa-chevron-right icon"></i> <a href="https://www.enoticiapara.com.br/anuncie">Anuncie</a></div>

      </AccordionItem>
    </div>
  );}

export default Accordion;
