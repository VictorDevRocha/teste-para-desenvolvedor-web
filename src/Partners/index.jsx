import allianz from "../assets/Partners/allianz.png";
import amil from "../assets/Partners/amil.png";
import bluemed from "../assets/Partners/bluemed.png";
import bradesco from "../assets/Partners/bradesco.png";
import notredame from "../assets/Partners/notredame.png";
import porto from "../assets/Partners/porto.png";
import santacasa from "../assets/Partners/santacasa.png";
import sulamerica from "../assets/Partners/sulamerica.png";
import trasmontano from "../assets/Partners/trasmontano.png";
import unimed from "../assets/Partners/unimed.png";
import "./style.css";

function Partners() {
  return (
    <>
      <div className="page6">
        <div className="TopContentPage6">
          <p className="">NOSSOS PARCEIROS</p>
          <h1>Os melhores parceiros para o seu plano de saúde.</h1>
        </div>
        <div className="BottomContentPage6">
          <section className="PartnersLine">
            <div>
              <img src={trasmontano} alt="Logo Parceiros" />
            </div>
            <div>
              <img src={bluemed} alt="Logo Parceiros" />
            </div>
            <div>
              <img src={notredame} alt="Logo Parceiros" />
            </div>
            <div>
              <img src={unimed} alt="Logo Parceiros" />
            </div>
            <div>
              <img src={allianz} alt="Logo Parceiros" />
            </div>
          </section>
          <section className="PartnersLine">
            <div>
              <img src={amil} alt="Logo Parceiros" />
            </div>
            <div>
              <img src={bradesco} alt="Logo Parceiros" />
            </div>
            <div>
              <img src={porto} alt="Logo Parceiros" />
            </div>
            <div>
              <img src={sulamerica} alt="Logo Parceiros" />
            </div>
            <div>
              <img src={santacasa} alt="Logo Parceiros" />
            </div>
          </section>
        </div>
        <div className="ButtonPage6">
          <button>Faça uma cotação agora</button>
        </div>
      </div>
    </>
  );
}

export default Partners;
