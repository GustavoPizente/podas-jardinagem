"use client";

import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./slider.module.css";

export default function Slider() {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const imgs = document.querySelectorAll(".zoomable-img");
      imgs.forEach((img) => {
        if (!img.contains(event.target as Node)) {
          (img as HTMLImageElement).style.transform = "scale(1)";
        }
      });
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  function scale(event: React.MouseEvent<HTMLImageElement>) {
    event.stopPropagation();
    const img = event.currentTarget;
    img.style.transform = "scale(2)";
    img.style.transition = "transform 0.3s ease";
    img.style.position = "absolute";
    img.style.position = "50% 50% 50% 50%";
  }

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      slidesPerView={2.5}
      spaceBetween={30}
      centeredSlides={true}
      navigation
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: true }}
      className={styles.slider}
    >
      <SwiperSlide className={styles.swiperslide}>
        <img
          src="/1.jpg"
          alt="Imagem 1"
          className={`zoomable-img ${styles.slideImg}`}
          onClick={scale}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/2.png"
          alt="Imagem 2"
          className={`zoomable-img ${styles.slideImg}`}
          onClick={scale}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/3.jpg"
          alt="Imagem 3"
          className={`zoomable-img ${styles.slideImg}`}
          onClick={scale}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/4.png"
          alt="Imagem 4"
          className={`zoomable-img ${styles.slideImg}`}
          onClick={scale}
        />
      </SwiperSlide>
       <SwiperSlide>
        <img
          src="/5.jpg"
          alt="Imagem 5"
          className={`zoomable-img ${styles.slideImg}`}
          onClick={scale}
        />
      </SwiperSlide>
       <SwiperSlide>
        <img
          src="/6.png"
          alt="Imagem 6"
          className={`zoomable-img ${styles.slideImg}`}
          onClick={scale}
        />
      </SwiperSlide>
       <SwiperSlide>
        <img
          src="/7.png"
          alt="Imagem 7"
          className={`zoomable-img ${styles.slideImg}`}
          onClick={scale}
        />
      </SwiperSlide>
       <SwiperSlide>
        <img
          src="/8.jpg"
          alt="Imagem 8"
          className={`zoomable-img ${styles.slideImg}`}
          onClick={scale}
        />
      </SwiperSlide>
       <SwiperSlide>
        <img
          src="/9.jpg"
          alt="Imagem 9"
          className={`zoomable-img ${styles.slideImg}`}
          onClick={scale} 
        />
      </SwiperSlide>
       <SwiperSlide>
        <img
          src="/10.jpg"
          alt="Imagem 10"
          className={`zoomable-img ${styles.slideImg}`}
          onClick={scale}
        />
      </SwiperSlide>
    </Swiper>
  );
}
