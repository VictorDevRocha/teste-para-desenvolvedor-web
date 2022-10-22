import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Card1Slider1 from "../../assets/Slider/Card1Slider1.png";
import Card2Slider1 from "../../assets/Slider/Card2Slider1.png";
import Card3Slider1 from "../../assets/Slider/Card3Slider1.png";
import Card4Slider1 from "../../assets/Slider/Card4Slider1.png";
import ArrowSliderLeft from "../../assets/Slider/ArrowSliderLeft.png";
import ArrowSliderRight from "../../assets/Slider/ArrowSliderRight.png";

function CarouselHealt() {
  return (
    <Swiper
      // install Swiper modules
      id="SwiperPage2"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        1100: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
      }}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <div className="Card Card1">
          <img src={Card1Slider1} />
          <div className="CardContent">
            <h1>Saúde Individual</h1>
            <p className="TextContentSlider">
              Temos o plano de saúde que se encaixa no seu perfil, solicite sua
              cotação e confira.
            </p>
            <p>
              Valores a partir de
              <p className="ValueSlider">R$ 131,17</p>
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
      <SwiperSlide>
        <div className="Card">
          <img src={Card2Slider1} />
          <div className="CardContent">
            <h1>Plano Familiar</h1>
            <p className="TextContentSlider">
              O plano de saúde perfeito para a sua família, solicite sua cotação
              e confira.
            </p>
            <p>
              Valores a partir de
              <p className="ValueSlider">R$ 92,17</p>
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
      <SwiperSlide>
        <div className="Card Card3">
          <img src={Card3Slider1} />
          <div className="CardContent">
            <h1>Saúde PME</h1>
            <p className="TextContentSlider">
              Temos o plano de saúde ideal para a sua empresa, solicite sua
              cotação e confira.
            </p>
            <p>
              Valores a partir de
              <p className="ValueSlider">R$ 84,21</p>
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
      <SwiperSlide>
        <div className="Card Card4">
          <img src={Card4Slider1} />
          <div className="CardContent">
            <h1>Saúde Adesão</h1>
            <p className="TextContentSlider">
              O melhor plano de sáude coletivo você encontra aqui, solicite sua
              cotação e confira.
            </p>
            <p>
              Valores a partir de
              <p className="ValueSlider">R$ 176,82</p>
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

export default CarouselHealt;
