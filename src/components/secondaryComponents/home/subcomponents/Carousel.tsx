import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { IonIcon } from '@ionic/react';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles/Carousel.scss';

interface Proyecto {
  titulo: string;
  nombreProyecto: string;
  imagen: string;
  ubicacion: string;
  tipo: string;
  estado: string;
}

const proyectos: Proyecto[] = [
  {
    titulo: "Edificio Residencial",
    nombreProyecto: "Torres del Sol",
    imagen: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
    ubicacion: "Lima, Perú",
    tipo: "Residencial",
    estado: "En construcción"
  },
  {
    titulo: "Complejo Comercial",
    nombreProyecto: "Plaza Central",
    imagen: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
    ubicacion: "Arequipa, Perú",
    tipo: "Comercial",
    estado: "Finalizado"
  },
  {
    titulo: "Puente Vehicular",
    nombreProyecto: "Vía Andina",
    imagen: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
    ubicacion: "Cusco, Perú",
    tipo: "Infraestructura",
    estado: "En planificación"
  },
  {
    titulo: "Puente Vehicular",
    nombreProyecto: "Vía Andina",
    imagen: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
    ubicacion: "Cusco, Perú",
    tipo: "Infraestructura",
    estado: "En planificación"
  }
];

const Carousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  const handleSwiperInit = (swiper: SwiperType) => {
    setSwiperInstance(swiper);
    // Forzar actualización después de inicializar
    setTimeout(() => {
      swiper.update();
      swiper.slideTo(swiper.activeIndex, 0);
    }, 100);
  };

  const goToSlide = (index: number) => {
    swiperInstance?.slideToLoop(index);
  };

  const renderProjectCard = (proyecto: Proyecto) => (
    <div className="project-card">
      {/* Image Background */}
      <div className="project-card__image-wrapper">
        <img
          src={proyecto.imagen}
          alt={proyecto.nombreProyecto}
          className="project-card__image"
        />
        <div className="project-card__overlay" />
      </div>

      {/* Content */}
      <div className="project-card__content">
        <div className="project-card__header">
          <span className="project-card__tag">{proyecto.titulo}</span>
          <h3 className="project-card__title">
            {proyecto.nombreProyecto}
          </h3>
        </div>

        <div className="project-card__details">
          <div className="project-card__detail">
            <IonIcon icon="location-outline" />
            <div>
              <span className="project-card__detail-label">
                Ubicación
              </span>
              <span className="project-card__detail-value">
                {proyecto.ubicacion}
              </span>
            </div>
          </div>

          <div className="project-card__detail">
            <IonIcon icon="layers-outline" />
            <div>
              <span className="project-card__detail-label">Tipo</span>
              <span className="project-card__detail-value">
                {proyecto.tipo}
              </span>
            </div>
          </div>

          <div className="project-card__detail">
            <IonIcon icon="flag-outline" />
            <div>
              <span className="project-card__detail-label">
                Estado
              </span>
              <span className="project-card__detail-value">
                {proyecto.estado}
              </span>
            </div>
          </div>
        </div>

        <button className="project-card__cta">
          <span>Ver detalles</span>
          <IonIcon icon="arrow-forward-outline" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="projects-carousel">
      <div className="projects-carousel__container">
        <div className="projects-carousel__wrapper">
          {/* Navigation Dots - Top */}
          <div className="projects-carousel__dots">
            {proyectos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`projects-carousel__dot ${
                  activeIndex === index ? 'active' : ''
                }`}
                aria-label={`Ir al proyecto ${index + 1}`}
              />
            ))}
          </div>

          {/* Swiper - Mobile (Cards Effect) */}
          <Swiper
            effect="cards"
            grabCursor
            loop
            initialSlide={0}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[EffectCards, Navigation, Pagination, Autoplay]}
            className="projects-carousel__swiper projects-carousel__swiper--mobile"
            onSwiper={handleSwiperInit}
            onSlideChange={handleSlideChange}
            cardsEffect={{
              slideShadows: false,
              perSlideOffset: 8,
              perSlideRotate: 2,
            }}
          >
            {proyectos.map((proyecto, index) => (
              <SwiperSlide key={`mobile-${index}`}>
                {renderProjectCard(proyecto)}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Swiper - Desktop (Horizontal Carousel) */}
          <Swiper
            slidesPerView={1.2}
            spaceBetween={30}
            centeredSlides
            grabCursor
            loop
            initialSlide={0}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Pagination, Autoplay]}
            className="projects-carousel__swiper projects-carousel__swiper--desktop"
            onSwiper={handleSwiperInit}
            onSlideChange={handleSlideChange}
            breakpoints={{
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
            {proyectos.map((proyecto, index) => (
              <SwiperSlide key={`desktop-${index}`}>
                {renderProjectCard(proyecto)}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <div className="projects-carousel__nav">
            <button
              onClick={() => swiperInstance?.slidePrev()}
              className="projects-carousel__nav-btn prev"
              aria-label="Proyecto anterior"
            >
              <IonIcon icon="chevron-back-outline" />
            </button>
            <button
              onClick={() => swiperInstance?.slideNext()}
              className="projects-carousel__nav-btn next"
              aria-label="Siguiente proyecto"
            >
              <IonIcon icon="chevron-forward-outline" />
            </button>
          </div>
        </div>

        {/* Project Counter */}
        <div className="projects-carousel__counter">
          <span className="current">{String(activeIndex + 1).padStart(2, '0')}</span>
          <span className="separator">/</span>
          <span className="total">{String(proyectos.length).padStart(2, '0')}</span>
        </div>
      </div>
    </div>
  );
};

export default Carousel;