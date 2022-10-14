import "./style.css";
import ArrowTop from "../assets/Footer/ArrowTop.png";
import IconTell from "../assets/Footer/IconTell.png";
import IconMail from "../assets/Footer/IconMail.png";
import LogoLaranja from "../assets/Footer/LogoLaranja.png";
import Logo from "../assets/Logo.png";
import IconFacebook from "../assets/Footer/IconFacebook.png";
import IconInsta from "../assets/Footer/IconInsta.png";

function Footer() {
  return (
    <>
      <footer className="Footer">
        <div className="page9">
          <div className="TopContentFooter">
            <div className="TopLeftContentFooter">
              <div>
                <img src={LogoLaranja} alt="Logo Laranja" />
                <p>Nosso principal comprimisso é com a sua saúde</p>
              </div>
            </div>
            <div className="TopMidContentFooter">
              <h3>Navegue</h3>
              <p>Início</p>
              <p>Conheça a Renove</p>
              <p>Perguntas Frequentes</p>
              <p>Contato</p>
            </div>
            <div className="TopMidContentFooter">
              <h3>Planos</h3>
              <p>Plano Saúde</p>
              <p>Plano Odonto</p>
              <p>Plano Pet</p>
            </div>
            <div className="TopRightContentFooter">
              <div className="ContactFooter">
                <h3>Fale Conosco</h3>
                <div>
                  <img src={IconTell} alt="Icone Telefone" />
                  <span>(00) 00000-000 / (00) 00000-0000</span>
                </div>
                <div>
                  <a href="mailto:contato@renove.com.br">
                    <img src={IconMail} alt="Icone Telefone" />
                    <span>contato@renove.com.br</span>
                  </a>
                </div>
              </div>
              <div className="SocialMediaFooter">
                <h3>Siga nossas redes sociais</h3>
                <div>
                  <a href="#">
                    <img src={IconFacebook} alt="" />
                  </a>
                  <a href="#">
                    <img src={IconInsta} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr className="HrFooter" />
          <div className="MidContentFooter">
            <p>
              © 2022 Renove Saúde. CNPJ. 00.000.000/0000-00. Todos os direitos
              reservados.
            </p>
            <div>
              <img src={ArrowTop} alt="Seta Para cima" />
              <p>Voltar ao topo</p>
            </div>
          </div>
        </div>
        <div className="BottomContentFooter">
          <img src={Logo} alt="Logo Branca" />
        </div>
      </footer>
    </>
  );
}

export default Footer;
