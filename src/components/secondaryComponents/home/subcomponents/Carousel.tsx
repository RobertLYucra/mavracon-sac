import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ArrowRight, MapPin, Layers, Flag, ChevronLeft, ChevronRight } from "lucide-react";
import type { Swiper as SwiperType } from "swiper";
import { Proyecto, proyectos } from "../../proyectos/interfaces/Proyectos";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles/Carousel.scss";
import CarouselModal from "./CarouselModal";

const Carousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProyecto, setSelectedProyecto] = useState<Proyecto | null>(null);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  const handleSwiperInit = (swiper: SwiperType) => {
    setSwiper(swiper);
    setTimeout(() => {
      swiper.update();
      swiper.slideTo(swiper.activeIndex, 0);
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

  const handleOpenModal = (proyecto: Proyecto) => {
    setSelectedProyecto(proyecto);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProyecto(null);
  };

  const proyectosFiltrados = proyectos.slice(0, 5);

  const renderProjectCard = (proyecto: Proyecto) => (
    <div className="project-card" onClick={() => handleOpenModal(proyecto)}>
      <div className="project-card__image-wrapper">
        <img
          src={proyecto.imagen}
          alt={proyecto.nombre}
          className="project-card__image"
        />
        <div className="project-card__overlay" />
      </div>

      <div className="project-card__content">
        <div className="project-card__header">
          <span className="project-card__tag">{proyecto.tipo}</span>
          <h3 className="project-card__title">{proyecto.nombre}</h3>
        </div>

        <div className="project-card__details">
          <div className="project-card__detail">
            <MapPin className="detail-icon" />
            <div className="detail-content">
              <span className="detail-label">Ubicación</span>
              <span className="detail-value">
                {proyecto.ubicacion.departamento}, {proyecto.ubicacion.pais}
              </span>
            </div>
          </div>

          <div className="project-card__detail">
            <Layers className="detail-icon" />
            <div className="detail-content">
              <span className="detail-label">Tipo</span>
              <span className="detail-value">{proyecto.tipo}</span>
            </div>
          </div>

          <div className="project-card__detail">
            <Flag className="detail-icon" />
            <div className="detail-content">
              <span className="detail-label">Estado</span>
              <span className="detail-value">{proyecto.estado}</span>
            </div>
          </div>
        </div>

        <button className="project-card__cta">
          <span>Ver detalles</span>
          <ArrowRight className="cta-icon" />
        </button>
      </div>
    </div>
  );

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
                  slidesPerView: 1.2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 1.5,
                  spaceBetween: 40,
                },
                1280: {
                  slidesPerView: 1.8,
                  spaceBetween: 50,
                },
              }}
            >
              {proyectosFiltrados.map((proyecto, index) => (
                <SwiperSlide key={index}>
                  {renderProjectCard(proyecto)}
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

      {/* Modal */}
      {selectedProyecto && (
        <CarouselModal
          proyecto={selectedProyecto}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default Carousel;