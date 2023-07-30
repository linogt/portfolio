import React from 'react';
import { FooterContainer } from './style';
import { GridContainer } from '../../styles/GridContainer.style';

function Component() {
    return (
        <FooterContainer id="contact">
            <GridContainer className="footer_content">
                <p><b>Estou disponível</b> para novos projetos! Entre em contato comigo para tornarmos as suas ideias em realidade</p>
                <div>
                    <ul className="highlightText">
                        <li>glinotg@gmail.com</li>
                        <li>
                            <a target="_blank" href="https://www.linkedin.com/in/gabriel-garcia-565550246">LinkedIn</a> 
                        </li>
                        <li>
                            <a target="_blank" href="https://github.com/linogt">GitHub</a> 
                        </li>
                        
                    </ul>
                </div>
            </GridContainer>
            <GridContainer className="footer_copyright">
                <p>&copy; 2023 Gabriel Lino Topa Garcia</p>
            </GridContainer>
            <div className="footer_dec">
                <span />
                <span />
            </div>
        </FooterContainer>
    );
}

export default Component;