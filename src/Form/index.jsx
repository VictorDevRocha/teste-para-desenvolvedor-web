import "./style.css";

function Form() {
  function NoSubmit(event) {
    event.preventDefault();
  }
  return (
    <>
      <div className="page8">
        <section className="LeftContent">
          <div>
            <h1>Os melhores planos de saúde você encontra na Renove Saúde!</h1>
            <p>
              Quer uma cotação sem compromisso? Preencha o formulário ao lado e
              um de nossos consultores irá entrar em contato com você.
            </p>
          </div>
        </section>
        <section className="RightContent">
          <div className="Form">
            <form action="" onClick={NoSubmit}>
              <p className="TextForm">
                Preencha o formulário abaixo e compare os planos sem burocracia
              </p>
              <div>
                <label htmlFor="Name">Nome Completo</label>
                <input type="text" id="Name" name="Name" />
              </div>
              <div>
                <label htmlFor="Phone">Telefone/Whatsapp</label>
                <input type="tel" name="Phone" id="Phone" />
              </div>
              <div>
                <label htmlFor="Email">Email</label>
                <input type="email" name="Email" id="Email" />
              </div>
              <div>
                <label htmlFor="Message">Mensagem</label>
                <textarea
                  name="Message"
                  id="Message"
                  cols="30"
                  rows="5"
                ></textarea>
              </div>
              <button type="submit">Solicitar Cotação de planos</button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default Form;
