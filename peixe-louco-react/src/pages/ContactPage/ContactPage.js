import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './ContactPage.css';

function ContactPage() {
  return (
    <div>
      <Header />
      <div className="contact-page">
        {/* Company Card */}
        <div className="company-card">
          <img src="assets/imagens/peixe-logo-aquario.png" alt="peixe-logo-aquario" />
          <h1>PEIXE LOUCO</h1>
          <div className="social-links" id="company-social-links">
            <a href="https://github.com/lucasazevedd/peixe-louco" target="_blank" rel="noopener noreferrer">
              <button className="button2" id="githubButton"><i className="fab fa-github"></i></button>
            </a>
            <a href="https://www.instagram.com/peixelouco_/" target="_blank" rel="noopener noreferrer">
              <button className="button2" id="instagramButton"><i className="fab fa-instagram"></i></button>
            </a>
          </div>
        </div>

        {/* Developers Cards */}
        <div className="developers-cards">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="assets/imagens/Lucas-Profile-photo.png" alt="Foto do Desenvolvedor" />
                <h3>Lucas Israel de Azevedo</h3>
                <p>Desenvolvedor Front-End</p>
              </div>
              <div className="flip-card-back">
                <div className="social-links">
                  <a href="https://www.linkedin.com/in/lucas-israel-de-azevedo-577015259/" target="_blank" rel="noopener noreferrer">
                    <button className="button2" id="linkedinButton">Linkedin <i className="fab fa-linkedin"></i></button>
                  </a>
                  <a href="https://github.com/lucasazevedd" target="_blank" rel="noopener noreferrer">
                    <button className="button2" id="githubButton">GitHub <i className="fab fa-github"></i></button>
                  </a>
                  <a href="https://www.instagram.com/lucasazevedd/" target="_blank" rel="noopener noreferrer">
                    <button className="button2" id="instagramButton">Instagram <i className="fab fa-instagram"></i></button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="assets/imagens/gabriel-profile-photo.png" alt="Foto do Desenvolvedor" />
                <h3>Gabriel Viana de Carvalho</h3>
                <p>Desenvolvedor Front-End</p>
              </div>
              <div className="flip-card-back">
                <div className="social-links">
                  <a href="https://www.linkedin.com/in/gabriel-viana-b844a9288/" target="_blank" rel="noopener noreferrer">
                    <button className="button2" id="linkedinButton">Linkedin <i className="fab fa-linkedin"></i></button>
                  </a>
                  <a href="https://github.com/K9815" target="_blank" rel="noopener noreferrer">
                    <button className="button2" id="githubButton">GitHub <i className="fab fa-github"></i></button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="assets/imagens/ryan-profile-photo.png" alt="Foto do Desenvolvedor" />
                <h3>Ryan do Vale Avelar</h3>
                <p>Desenvolvedor Back-End</p>
              </div>
              <div className="flip-card-back">
                <div className="social-links">
                  <a href="https://www.linkedin.com/in/ryanvaledeavelar/" target="_blank" rel="noopener noreferrer">
                    <button className="button2" id="linkedinButton">Linkedin <i className="fab fa-linkedin"></i></button>
                  </a>
                  <a href="https://github.com/Ryanwxs" target="_blank" rel="noopener noreferrer">
                    <button className="button2" id="githubButton">GitHub <i className="fab fa-github"></i></button>
                  </a>
                  <a href="https://www.instagram.com/ryanxw_/" target="_blank" rel="noopener noreferrer">
                    <button className="button2" id="instagramButton">Instagram <i className="fab fa-instagram"></i></button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="assets/imagens/lais-profile-photo.png" alt="Foto do Desenvolvedor" />
                <h3>Laís Gabriely</h3>
                <p>Desenvolvedor Back-End</p>
              </div>
              <div className="flip-card-back">
                <div className="social-links">
                  <a href="http://linkedin.com/in/laisdiasdev" target="_blank" rel="noopener noreferrer">
                    <button className="button2" id="linkedinButton">Linkedin <i className="fab fa-linkedin"></i></button>
                  </a>
                  <a href="https://github.com/laisdiasdev" target="_blank" rel="noopener noreferrer">
                    <button className="button2" id="githubButton">GitHub <i className="fab fa-github"></i></button>
                  </a>
                  <a href="https://www.instagram.com/laisgbr/" target="_blank" rel="noopener noreferrer">
                    <button className="button2" id="instagramButton">Instagram <i className="fab fa-instagram"></i></button>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ContactPage;
