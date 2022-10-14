import "./style.css";
import Logo from "../assets/Logo.png";
import ArrowButton from "../assets/ArrowButton.png";
import woman from "../assets/woman.png";
import ArrowExplorer from "../assets/ArrowExplorer.png";
import icon from "../assets/icon.png";

function FirstPage() {
  return (
    <>
      <header>
        <nav>
          <img className="Logo" src={Logo} alt="Logo Renove" />
          <div className="nav-links">
            <ul>
              <li>Planos de saúde</li>
              <li>Conheça a Renove</li>
              <li>Parceiros</li>
              <li>Perguntas frequentes</li>
            </ul>
            <div className="nav-link-blue">
              <p>Faça uma cotação</p>
            </div>
          </div>
        </nav>
      </header>
      <div className="First-Page">
        <section className="Text-Content">
          <h1>Nosso principal compromisso é com a sua saúde!</h1>
          <p>
            Somos especializados em identificar e oferecer o plano de saúde
            ideal à sua necessidade. Trabalhamos com as melhores empresas de
            planos de saúde do país.
          </p>
          <button>
            Faça uma cotação agora{" "}
            <img src={ArrowButton} alt="arrow" className="Arrow-Button" />
          </button>
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
        </section>
        <section className="Image-Content">
          <img src={woman} alt="Woman Photo" className="Woman" />
        </section>
        <div className="icon">
          <img src={icon} alt="icon" />
        </div>
      </div>
    </>
  );
}

export default FirstPage;
