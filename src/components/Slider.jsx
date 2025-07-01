import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import slider1 from '../assets/images/slider-women1.jpg';
import slider2 from '../assets/images/slider-women2.jpg';

const Slider=()=>{
    return (
     <section className="tf-slideshow slider-default slider-effect-fade">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        loop={true}
        centeredSlides={false}
        spaceBetween={0}
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          el: '.sw-pagination-slider',
          clickable: true,
        }}
        className="swiper tf-sw-slideshow"
      >
        <SwiperSlide>
          <div className="wrap-slider">
            <img src={slider1} alt="fashion-slideshow" />
            <div className="box-content">
              <div className="content-slider">
                <div className="box-title-slider">
                  <p className="fade-item fade-item-1 subheading text-btn-uppercase text-white">
                    BIKINIS & SWIMSUITS
                  </p>
                  <div className="fade-item fade-item-2 heading text-white title-display">
                    Flash Sale Madness
                  </div>
                </div>
                <div className="fade-item fade-item-3 box-btn-slider">
                  <a href="shop-default-grid.html" className="tf-btn btn-fill btn-white">
                    <span className="text">Explore Collection</span>
                    <i className="icon icon-arrowUpRight"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="wrap-slider">
            <img src={slider2} alt="fashion-slideshow" />
            <div className="box-content">
              <div className="content-slider">
                <div className="box-title-slider">
                  <p className="fade-item fade-item-1 subheading text-btn-uppercase text-white">
                    BIKINIS & SWIMSUITS
                  </p>
                  <div className="fade-item fade-item-2 heading text-white title-display">
                    Find Your <br /> Signature Style
                  </div>
                </div>
                <div className="fade-item fade-item-3 box-btn-slider">
                  <a href="shop-default-grid.html" className="tf-btn btn-fill btn-white">
                    <span className="text">Explore Collection</span>
                    <i className="icon icon-arrowUpRight"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Pagination container */}
      <div className="wrap-pagination">
        <div className="container">
          <div className="sw-dots sw-pagination-slider type-circle white-circle justify-content-center"></div>
        </div>
      </div>
    </section>
)}
export default Slider