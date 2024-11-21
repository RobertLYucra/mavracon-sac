import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "./styles/Carousel.scss"
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { IonIcon } from "@ionic/react";
import { proyectos } from "../interfaces/ImagesCarousel";

const Carousel = () => {
  return (
    <><div className="container">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,

        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',

        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >

        {
          proyectos.map((proyecto, i) => (
            <SwiperSlide key={i} >
              <figure className="figure card">
                <div className="top-figure">
                  <h1 className="titulo">{proyecto.titulo}</h1>
                  <div className="proyecto">
                    <h2><span className="font-bold mr-3">PROYECTO</span> {proyecto.nombreProyecto}</h2>
                  </div>
                </div>
                <div className="bottom-figure">
                  <img className="img-pry" src={proyecto.imagen} alt="slide_image" />
                  <div className="blur"></div>
                  <div className="detalles" >
                    <div className="lista-detalles">
                      <div className="lista">
                        <IonIcon className='icon ' icon='location-outline' />
                        <div className="text-dato">
                          <h3 className="title" >Ubicación</h3>
                          <h3 className="dato" >{proyecto.ubicacion}</h3>
                        </div>
                      </div>

                      <div className="lista">
                        <IonIcon className='icon' icon='shield-checkmark-outline' />
                        <div className="text-dato">
                          <h3 className="title">Tipo</h3>
                          <h3 className="dato">{proyecto.tipo}</h3>
                        </div>
                      </div>
                      <div className="lista">
                        <IonIcon className='icon' icon='flag-outline' />
                        <div className="text-dato">
                          <h3 className="title" >Estado </h3>
                          <h3 className="dato">{proyecto.estado}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="more_info">
                    <a href="#">Saber más  <IonIcon className="icon text-red-600 text-xl ml-2" name="arrow-forward"></IonIcon></a>
                  </div>
                </div>
              </figure>
            </SwiperSlide>
          ))

        }
      </Swiper>
    </div></>
  )
}

export default Carousel