import { useState } from "react";
import "./Tabs.css";
import HealtActive from "../../assets/Slider/Tabs/HealtActive.png";
import Healt from "../../assets/Slider/Tabs/Healt.png";
import Tooth from "../../assets/Slider/Tabs/Tooth.png";
import ToothActive from "../../assets/Slider/Tabs/ToothActive.png";
import Pet from "../../assets/Slider/Tabs/Pet.png";
import PetActive from "../../assets/Slider/Tabs/PetActive.png";
import CarouselHealt from "../Carousel/CarouselHealt";
import CarouselTooth from "../Carousel/CarouselTooth";
import CarouselPet from "../Carousel/CarouselPet";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          <img src={toggleState === 1 ? HealtActive : Healt} alt="" />
          Saúde
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          <img src={toggleState === 2 ? ToothActive : Tooth} alt="" />
          Odonto
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          <img src={toggleState === 3 ? PetActive : Pet} alt="" />
          Pet
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <CarouselHealt />
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <CarouselTooth />
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <CarouselPet />
        </div>
      </div>
    </div>
  );
}

export default Tabs;
