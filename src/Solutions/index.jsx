import "./style.css";
import Tabs from "./Tabs/Tabs";

function CarouselPage() {
  return (
    <>
      <div className="Page2">
        <div className="TopContentPage2">
          <h3>PLANOS DE SÁUDE</h3>
          <h1>Os melhores planos de saúde você encontra aqui!</h1>
          <p>
            A Renove Saúde tem todos os planos de saúde para você ficar
            tranquilo. Como sempre, cuidamos de tudo para você!
          </p>
        </div>
        <Tabs />
      </div>
    </>
  );
}

export default CarouselPage;
