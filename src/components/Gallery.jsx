import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Gallery = () => {
    const images = [
        "gallery-1.jpg",
        "gallery-2.jpg",
        "gallery-3.jpg",
        "gallery-4.jpg",
        "gallery-5.jpg",
    ];

    return (
        <section>
            <div className="container">
                <div className="heading-section text-center">
                    <h3 className="heading">Shop Instagram</h3>
                    <p className="subheading text-secondary">Elevate your wardrobe with fresh finds today!</p>
                </div>

                <Swiper
                    modules={[Pagination, Navigation]}
                    slidesPerView={1}
                    spaceBetween={15}
                    loop={true}
                    speed={1000}
                    pagination={{ clickable: true }}
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
                    className="tf-sw-shop-gallery"
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <div className="gallery-item hover-overlay hover-img">
                                <div className="img-style">
                                    <img
                                        className="img-hover"
                                        src={`images/gallery/${img}`}
                                        alt="gallery"
                                        loading="lazy"
                                    />
                                </div>
                                <a
                                    href="product-detail.html"
                                    className="box-icon hover-tooltip"
                                >
                                    <span className="icon icon-eye"></span>
                                    <span className="tooltip">View Product</span>
                                </a>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Gallery;
