import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Swiper as SwiperType } from "swiper";
import { proyectos } from "../../proyectos/interfaces/Proyectos";
import { ProjectCardMinimalista } from "../../proyectos/subcomponentes/Card";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles/Carousel.scss";

const Carousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  const handleSwiperInit = (swiper: SwiperType) => {
    setSwiper(swiper);
    setTimeout(() => {
        if(swiper && !swiper.destroyed) {
            swiper.update();
            swiper.slideTo(swiper.activeIndex, 0);
        }
    }, 100);
  };

  const goToSlide = (index: number) => {
    swiper?.slideToLoop(index);
  };

  const handlePrev = () => {
    swiper?.slidePrev();
  };

  const handleNext = () => {
    swiper?.slideNext();
  };

  const proyectosFiltrados = proyectos.slice(0, 5);

  return (
    <>
      <div className="projects-carousel">
        <div className="projects-carousel__container">
          <div className="projects-carousel__wrapper">
            {/* Navigation Dots */}
            <div className="projects-carousel__dots">
              {proyectosFiltrados.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`projects-carousel__dot ${
                    activeIndex === index ? "active" : ""
                  }`}
                  aria-label={`Ir al proyecto ${index + 1}`}
                />
              ))}
            </div>

            {/* Swiper Único */}
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              centeredSlides={true}
              grabCursor={true}
              loop={true}
              initialSlide={0}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              modules={[Navigation, Pagination, Autoplay]}
              className="projects-carousel__swiper"
              onSwiper={handleSwiperInit}
              onSlideChange={handleSlideChange}
              breakpoints={{
                768: {
                  slidesPerView: 1.5,
                  spaceBetween: 30,
                  centeredSlides: true,
                },
                1024: {
                  slidesPerView: 2.5,
                  spaceBetween: 30,
                  centeredSlides: true,
                },
                1280: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                  centeredSlides: true,
                },
              }}
            >
              {proyectosFiltrados.map((proyecto, index) => (
                <SwiperSlide key={index}>
                    {/* Reusing the Minimalista Card */}
                    <ProjectCardMinimalista proyecto={proyecto} />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Arrows */}
            <div className="projects-carousel__nav">
              <button
                onClick={handlePrev}
                className="projects-carousel__nav-btn prev"
                aria-label="Proyecto anterior"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={handleNext}
                className="projects-carousel__nav-btn next"
                aria-label="Siguiente proyecto"
              >
                <ChevronRight />
              </button>
            </div>
          </div>

          {/* Project Counter */}
          <div className="projects-carousel__counter">
            <span className="current">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            <span className="separator">/</span>
            <span className="total">
              {String(proyectosFiltrados.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;