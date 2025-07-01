// src/components/CollectionSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import hình ảnh
import CollectionCircle1 from "../assets/images/collection-circle/cls-circle1.jpg";
import CollectionCircle2 from "../assets/images/collection-circle/cls-circle2.jpg";
import CollectionCircle3 from "../assets/images/collection-circle/cls-circle3.jpg";
import CollectionCircle4 from "../assets/images/collection-circle/cls-circle4.jpg";
import CollectionCircle5 from "../assets/images/collection-circle/cls-circle5.jpg";
import CollectionCircle6 from "../assets/images/collection-circle/cls-circle6.jpg";

// Danh sách danh mục
const collectionData = [
  { img: CollectionCircle1, title: "New in", count: "12 items" },
  { img: CollectionCircle2, title: "Promotion", count: "12 items" },
  { img: CollectionCircle3, title: "Clothing", count: "12 items" },
  { img: CollectionCircle4, title: "Shoes", count: "12 items" },
  { img: CollectionCircle5, title: "Bags", count: "12 items" },
  { img: CollectionCircle6, title: "New in", count: "12 items" },
];

const CollectionSlider = () => {
  return (
    <section className="flat-spacing-2 pb_0">
      <div className="container">
        <div className="heading-section-2 wow fadeInUp">
          <h3>Categories you might like</h3>
          <a href="shop-collection.html" className="btn-line">
            View All Collection
          </a>
        </div>

        <div className="flat-collection-circle wow fadeInUp" data-wow-delay="0.1s">
          <Swiper
            modules={[Autoplay,Pagination, Navigation]}
            slidesPerView={2}
            spaceBetween={15}
            loop={true}
            speed={1000}
            autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            }}
            pagination={{
              el: ".sw-pagination-collection",
              clickable: true,
            }}
            navigation={{
              nextEl: ".nav-next-collection",
              prevEl: ".nav-prev-collection",
            }}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
            className="swiper tf-sw-collection"
          >
            {collectionData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="collection-circle hover-img">
                  <a href="shop-collection.html" className="img-style">
                    <img className="lazyload" src={item.img} alt={item.title} />
                  </a>
                  <div className="collection-content text-center">
                    <div>
                      <a href="shop-collection.html" className="cls-title">
                        <h6 className="text">{item.title}</h6>
                        <i className="icon icon-arrowUpRight"></i>
                      </a>
                    </div>
                    <div className="count text-secondary">{item.count}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination + Navigation */}
          <div className="d-flex d-lg-none sw-pagination-collection sw-dots type-circle justify-content-center"></div>
          <div className="nav-prev-collection d-none d-lg-flex nav-sw style-line nav-sw-left">
            <i className="icon icon-arrLeft"></i>
          </div>
          <div className="nav-next-collection d-none d-lg-flex nav-sw style-line nav-sw-right">
            <i className="icon icon-arrRight"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionSlider;
