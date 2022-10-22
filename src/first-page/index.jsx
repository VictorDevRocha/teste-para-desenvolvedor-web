import "./style.css";
import Logo from "../assets/Logo.png";
import ArrowButton from "../assets/ArrowButton.png";
import woman from "../assets/woman.png";
import ArrowExplorer from "../assets/ArrowExplorer.png";
import icon from "../assets/icon.png";
import { useState } from "react";
import ArrowNavLeft from "../assets/ArrowNavLeft.png";
import ArrowNavRight from "../assets/ArrowNavRight.png";

function FirstPage() {
  const [active, setActive] = useState(false);
  const ToggleMode = () => {
    setActive(!active);
  };

  return (
    <>
      <header>
        <nav>
          <img className="Logo" src={Logo} alt="Logo Renove" />
          <div
            className={active ? "MobileMenuActive" : "mobile-menu"}
            onClick={ToggleMode}
          >
            <div className={active ? "line1Active" : "line1"}></div>
            <div className={active ? "line2Active" : "line2"}></div>
            <div className={active ? "line3Active" : "line3"}></div>
          </div>
          <div className={active ? "MobileLinks" : "nav-links"}>
            <ul className={active ? "MobileUl" : "Links"}>
              <li>Planos de saúde</li>
              <li>Conheça a Renove</li>
              <li>Parceiros</li>
              <li>Perguntas frequentes</li>
              <li className={active ? "MobileLinkBlue" : "nav-link-blue"}>
                <img src={ArrowNavLeft} alt="Arrow Navbar" />
                Faça sua cotação
                <img src={ArrowNavRight} alt="Arrow Navbar" />
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <div className="First-Page">
        <main className="FirstPageContent">
          <section className="Text-Content">
            <h1>Nosso principal compromisso é com a sua saúde!</h1>
            <p>
              Somos especializados em identificar e oferecer o plano de saúde
              ideal à sua necessidade. Trabalhamos com as melhores empresas de
              planos de saúde do país.
            </p>
            <button>
              Faça uma cotação agora
              <img src={ArrowButton} alt="arrow" className="Arrow-Button" />
            </button>
          </section>
          <section className="Image-Content">
            <img src={woman} alt="Woman Photo" className="Woman" />
          </section>
        </main>
        <div className="BottomContentFirstPage">
          <div className="icon">
            <img src={icon} alt="icon" className="Promisse" />
          </div>
          <div className="Explorer">
            <p>
              <img
                src={ArrowExplorer}
                alt="arrowExplorer"
                className="ArrowExplor"
              />
              Continue explorando
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FirstPage;
