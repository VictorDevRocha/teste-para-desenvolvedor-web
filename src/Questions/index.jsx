import "./style.css";
import IconMore from "../assets/Icon+.png";
import IconLess from "../assets/IconLess.png";
import { useState } from "react";

function Questions() {
  const [question1, setQuestion1] = useState(false);
  const [question2, setQuestion2] = useState(false);
  const [question3, setQuestion3] = useState(false);
  const [question4, setQuestion4] = useState(false);
  const [question5, setQuestion5] = useState(false);

  const MoreQuestion1 = () => {
    setQuestion1((current) => !current);
  };

  const MoreQuestion2 = () => {
    setQuestion2((current) => !current);
  };

  const MoreQuestion3 = () => {
    setQuestion3((current) => !current);
  };

  const MoreQuestion4 = () => {
    setQuestion4((current) => !current);
  };

  const MoreQuestion5 = () => {
    setQuestion5((current) => !current);
  };

  return (
    <>
      <div className="page7">
        <div className="TopContentPage7">
          <h4>Perguntas Frequentes</h4>
          <h1>
            Tire suas dúvidas e tenha certeza de que a Renove Saúde é a escolha
            certa.
          </h1>
        </div>
        <div className="MidContentPage7">
          <div className="ItensPage7">
            <div className="QuestionsPage7">
              <h3>Posso usar o meu MEI em um plano para minha família?</h3>
              <p
                className="QuestionPage7"
                style={{ display: question1 ? "block" : "none" }}
              >
                Sim, desde que seu MEI esteja aberto a mais de 180 dias.
              </p>
            </div>
            <div className="IconPage7">
              <img
                src={IconMore}
                alt=""
                className="IconMoreQuestion1"
                onClick={MoreQuestion1}
                style={{ display: question1 ? "none" : "block" }}
              />
              <img
                src={IconLess}
                alt=""
                onClick={MoreQuestion1}
                className="IconLessQuestion1"
                style={{ display: question1 ? "block" : "none" }}
              />
            </div>
          </div>
          <div>
            <div className="ItensPage7">
              <div className="QuestionsPage7">
                <h3>
                  Sou estudante tenho desconto ao contratar um plano de saúde?
                </h3>
                <p
                  className="QuestionPage7"
                  style={{ display: question2 ? "block" : "none" }}
                >
                  Sim, temos planos de adesão especializados em planos
                  estudantis.
                </p>
              </div>
              <div className="IconPage7">
                <img
                  src={IconMore}
                  alt=""
                  className="IconMoreQuestion1"
                  onClick={MoreQuestion2}
                  style={{ display: question2 ? "none" : "block" }}
                />
                <img
                  src={IconLess}
                  alt=""
                  onClick={MoreQuestion2}
                  className="IconLessQuestion1"
                  style={{ display: question2 ? "block" : "none" }}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="ItensPage7">
              <div className="QuestionsPage7">
                <h3>O que é um plano de adesão?</h3>
                <p
                  className="QuestionPage7"
                  style={{ display: question3 ? "block" : "none" }}
                >
                  Um plano de saúde por adesão nada mais é do que uma
                  contratação feita em grupos por pessoas que têm um vínculo de
                  trabalho em comum. Isso quer dizer que, se você faz parte de
                  uma entidade de classe ou sindicato, está apto para adquirir
                  um plano desta forma.
                </p>
              </div>
              <div className="IconPage7">
                <img
                  src={IconMore}
                  alt=""
                  className="IconMoreQuestion3"
                  onClick={MoreQuestion3}
                  style={{ display: question3 ? "none" : "block" }}
                />
                <img
                  src={IconLess}
                  alt=""
                  className="IconLessQuestion3"
                  onClick={MoreQuestion3}
                  style={{ display: question3 ? "block" : "none" }}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="ItensPage7">
              <div className="QuestionsPage7">
                <h3>O que significa ANS?</h3>
                <p
                  className="QuestionPage7"
                  style={{ display: question4 ? "block" : "none" }}
                >
                  A ANS (Agência Nacional de Saúde Suplementar) é um órgão
                  responsável pela regulação, normatização, controle e
                  fiscalização das atividades relativas à assistência privada à
                  saúde. A finalidade da ANS é promover a defesa do interesse
                  público na assistência privada à saúde, contribuindo para o
                  desenvolvimento das ações de saúde no País.
                </p>
              </div>
              <div className="IconPage7">
                <img
                  src={IconMore}
                  alt=""
                  className="IconMoreQuestion4"
                  onClick={MoreQuestion4}
                  style={{ display: question4 ? "none" : "block" }}
                />
                <img
                  src={IconLess}
                  alt=""
                  className="IconLessQuestion4"
                  onClick={MoreQuestion4}
                  style={{ display: question4 ? "block" : "none" }}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="ItensPage7">
              <div className="QuestionsPage7">
                <h3>O que significa pré existência?</h3>
                <p
                  className="QuestionPage7"
                  style={{ display: question5 ? "block" : "none" }}
                >
                  Doença preexistente é um termo utilizado pelas operadoras de
                  plano de saúde para designar de qualquer problema de saúde que
                  o beneficiário tenha ciência no momento da contratação do
                  plano.
                </p>
              </div>
              <div className="IconPage7">
                <img
                  src={IconMore}
                  alt=""
                  className="IconMoreQuestion5"
                  onClick={MoreQuestion5}
                  style={{ display: question5 ? "none" : "block" }}
                />
                <img
                  src={IconLess}
                  alt=""
                  className="IconLessQuestion5"
                  onClick={MoreQuestion5}
                  style={{ display: question5 ? "block" : "none" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="BottomContentPage7">
          <div className="ButtonPage7">
            <button>Faça uma cotação agora</button>
          </div>
          <div className="LinkPage7">
            <p>
              Caso tenha dúvidas, <a href="">clique aqui e entre em contato.</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Questions;
