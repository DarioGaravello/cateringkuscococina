import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper';
import "swiper/swiper-bundle.min.css";
import "../../styles/Images.css";
import Axios from "axios";

export default function Images() {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]);
  const [images, setImages] = useState([]);
  const getData = () => {
    Axios("/images")
    .then(res => {
      setImages(res.data)
    })
    .catch(err => console.error(err));
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    <section className="link-about">
      <Link to="/about" className="nav-link text-white">
        <i className="far fa-times-circle"></i>
      </Link>
      <Swiper spaceBetween={50} slidesPerView={3} navigation pagination={{ clickable: true }} style={{ maxWidth: '100%' }} effect="coverflow">
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <a href={img.imageURL} target="_blank"><img src={img.imageURL} style={{ width: '100%' }} alt="photo" /></a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
