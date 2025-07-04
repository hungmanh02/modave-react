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
     <section className="relative overflow-hidden slider-effect-fade">
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
          <div className="relative">
            <img src={slider1} alt="fashion-slideshow" />
            <div className="w-full h-full object-cover">
              <div className="grid gap-5 absolute left-[80px] right-[80px] bottom-[80px]">
                <div className="grid gap-4">
                  <p className="animate-fade-in text-sm font-medium uppercase tracking-wide text-white mb-3">
                    BIKINIS & SWIMSUITS
                  </p>
                  <div className="animate-fade-in delay-200 text-white text-4xl md:text-5xl font-bold leading-tight">
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
          <div className="relative">
            <img src={slider2} alt="fashion-slideshow" />
            <div className="w-full h-full object-cover">
              <div className="grid gap-5 absolute left-[80px] right-[80px] bottom-[80px]">
                <div className="grid gap-4">
                  <p className="transition-all duration-300 ease-in-out delay-[500ms] text-white   font-semibold uppercase leading-7">
                    BIKINIS & SWIMSUITS
                  </p>
                  
                  <div className="animate-fade-in delay-200 text-white  text-[80px] md:text-5xl font-bold leading-[88px]">
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
      <div className="absolute z-10 bottom-[15px] left-0 right-0">
        <div className="container">
          <div className="sw-dots sw-pagination-slider type-circle white-circle flex justify-content-center items-center"></div>
        </div>
      </div>
    </section>
)}
export default Slider