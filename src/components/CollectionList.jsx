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
    <section className="py-[30px] pb-0 max-w-[calc(100%-120px)] mx-auto">
      <div className="container ">
        <div className="mb-[44px] flex justify-between align-items-start">
          <h3>Categories you might like</h3>
          <a href="shop-collection.html" className="text-[16px] leading-7 pb-1 font-semibold">
            View All Collection
          </a>
        </div>

        <div className="relative wow fadeInUp" data-wow-delay="0.1s">
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
                  <a href="shop-collection.html" className="block w-full h-full rounded-full overflow-hidden object-cover">
                    <img className="lazyload" src={item.img} alt={item.title} />
                  </a>
                  <div className="mt-4 grid gap-1 text-center">
                    <div>
                      <a href="shop-collection.html" className="text-center inline-flex items-center justify-center gap-[2px]">
                        <h6 className="inline-block">{item.title}</h6>
                        <i className="text-xl icon-arrowUpRight"></i>
                      </a>
                    </div>
                    <div className="inline-block mr-[2px] text-secondary">{item.count}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination + Navigation */}
          <div className="flex lg:hidden sw-pagination-collection sw-dots type-circle justify-content-center mx-auto my-0"></div>
          <div className="nav-prev-collection hidden lg:flex nav-sw style-line left-0 absolute top-[36%] z-20">
            <i className="text-xl icon-arrLeft"></i>
          </div>
          <div className="nav-next-collection hidden lg:flex nav-sw style-line right-0 absolute top-[36%] z-20">
            <i className="text-xl icon-arrRight"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionSlider;
