"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./slider.module.css";

export default function Slider() {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      slidesPerView={2.5} // Mostra slide central + partes dos lados
      spaceBetween={30}
      centeredSlides={true}
      navigation
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: true }}
      className={styles.slider}
    >
      <SwiperSlide>
        <img src="/1.jpeg" alt="Imagem 1" className={styles.slideImg} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/2.png" alt="Imagem 2" className={styles.slideImg} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/3.jpeg" alt="Imagem 3" className={styles.slideImg} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/4.png" alt="Imagem 2" className={styles.slideImg} />
      </SwiperSlide>
    </Swiper>
  );
}
