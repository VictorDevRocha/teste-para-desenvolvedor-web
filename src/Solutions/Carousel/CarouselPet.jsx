import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Card1Slider3 from "../../assets/Slider/Card1Slider3.png";
import ArrowSliderLeft from "../../assets/Slider/ArrowSliderLeft.png";
import ArrowSliderRight from "../../assets/Slider/ArrowSliderRight.png";

function CarouselPet() {
  return (
    <Swiper
      // install Swiper modules
      id="mms"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <div className="Card Card1">
          <img src={Card1Slider3} />
          <div className="CardContent">
            <h1>Plano Pet</h1>
            <p className="TextContentSlider">
              Planos perfeitos para cuidar do seu pet, solicite sua cotação e
              confira.
            </p>
            <p>
              Valores a partir de
              <p className="ValueSlider">R$ 99,90</p>
            </p>
          </div>
          <div className="ButtomSlider">
            <button>
              <img
                className="ArrowSlider"
                src={ArrowSliderLeft}
                alt="Arrow Button Slider"
              />
              Faça uma cotação
              <img
                className="ArrowSlider"
                src={ArrowSliderRight}
                alt="Arrow Button Slider"
              />
            </button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default CarouselPet;
