import "./style.css";
import IconEnvelope from "../assets/IconEnvelope.png";
import IconMao from "../assets/IconMao.png";
import IconHospital from "../assets/IconHospital.png";
import WomanPage3 from "../assets/WomanPage3.png";
import IconHeart from "../assets/IconHeart.png";
import IconMoney from "../assets/IconMoney.png";
import IconCall from "../assets/IconCall.png";
import IconMsg from "../assets/IconMsg.png";
import IconPersona from "../assets/IconPersona.png";
import IconZoom from "../assets/IconZoom.png";
import ImagePage4 from "../assets/ImagePage4.png";
import ArrowButton from "../assets/ArrowButton.png";

function DotHealt() {
  return (
    <>
      <div className="Page3">
        <div className="textPage3">
          <h6>CONHEÇA A RENOVE SAÚDE</h6>
          <h1>
            Nossa missão é com a sua saúde. Nós levamos o atendimento a sério,
            cuidamos do que realmente importa para você!
          </h1>
          <p>
            A Renove Saúde é uma corretora de planos de saúde com uma estrutura
            de quem sabe o que faz, aqui você encontra o melhor plano de saúde
            para você, sua família ou para a sua empresa.
          </p>
        </div>
        <div className="ButtonPage3">
          <hr className="hrGradientLeft" />
          <button>Faça uma cotação agora</button>
          <hr className="hrGradientRight" />
        </div>
        <div className="Sections">
          <section className="Section1">
            <h2>
              Não abrimos mão de estar próximo aos nossos clientes oferecendo um
              atendimento humano e comprometido com a qualidade.
            </h2>
            <hr className="hrHover" />
            <div className="IconsText">
              <p>
                <img
                  src={IconHospital}
                  alt="Icon Hospital"
                  className="IconsSection1"
                />
                Principais planos de saúde
              </p>
              <p>
                <img
                  src={IconEnvelope}
                  alt="Icon Envelope"
                  className="IconsSection1"
                />
                Informações acessíveis
              </p>
              <p>
                <img src={IconMao} alt="Icon Mão" className="IconsSection1" />
                Acompanhamento contínuo
              </p>
            </div>
          </section>
          <section className="Section2">
            <img src={WomanPage3} alt="Woman" className="WomanPage3" />
          </section>
          <section className="Section3">
            <div className="card">
              <img src={IconHeart} alt="Icone Coração" />
              <h1>+10mil</h1>
              <p>vidas atendidas em planos de saúde</p>
            </div>
            <div className="card">
              <img src={IconMoney} alt="Icone Moeda" />
              <h1>+400mil</h1>
              <p>economizados pelos nossos clientes</p>
            </div>
          </section>
        </div>
      </div>
      <div className="page4">
        <div className="ContentTopPage4">
          <p>POR QUE AS PESSOAS NOS ESCOLHEM?</p>
          <h1>
            Mais do que uma corretora, somos especialistas em gestão de saúde.
          </h1>
        </div>
        <div className="BottomContent">
          <section className="ItensCard">
            <div className="ItensCardContent">
              <div>
                <img src={IconMsg} alt="Icone Mensagem" />
                <p>Atendimento rápido, prático e fácil.</p>
              </div>
              <div>
                <img src={IconCall} alt="Icone Chamada" />
                <p>Cuidado desde o primeiro contato.</p>
              </div>
            </div>
            <div className="ItensCardContent">
              <div>
                <img src={IconZoom} alt="Icone Lupa" />
                <p>Assistência total para encontrar o melhor plano pra você.</p>
              </div>
              <div>
                <img src={IconPersona} alt="Icone de personalização" />
                <p>Serviço personalizado de acordo com a sua necessidade.</p>
              </div>
            </div>
          </section>
          <section className="FamilyCard">
            <img src={ImagePage4} alt="Familia" className="FamilyPage4" />
          </section>
        </div>
        <div className="ButtonPage4">
          <button>
            Faça uma cotação agora{" "}
            <img src={ArrowButton} alt="arrow" className="Arrow-Button" />
          </button>
        </div>
      </div>
    </>
  );
}

export default DotHealt;
