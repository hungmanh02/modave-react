import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
const Customer= ()=>{
    return (
        <section className="flat-spacing-2 pb_0">
            <div className="container">
                <div className="heading-section text-center">
                    <h3 className="heading wow fadeInUp">Customer Say!</h3>
                    <p className="subheading wow fadeInUp">Our customers adore our products, and we constantly aim to delight them.</p>
                </div>
                <Swiper
                    modules={[Autoplay, Pagination]}
                    
                    slidesPerView={2}
                    loop={true}
                    spaceBetween={20}
                    
                    pagination={{
                        el: '.sw-pagination-testimonial',
                        clickable: true,
                    }}
                 className="swiper tf-sw-testimonial" 
                >
                    <div className="swiper-wrapper">
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="testimonial-item hover-img">
                                <div className="img-style">
                                    <img data-src="images/testimonial/tes-1.jpg" src="images/testimonial/tes-1.jpg" alt="img-testimonial"/>
                                    <a href="#quickView" data-bs-toggle="modal" className="box-icon hover-tooltip center">
                                        <span className="icon icon-eye"></span>
                                        <span className="tooltip">Quick View</span>
                                    </a>
                                </div>
                                <div className="content">
                                    <div className="content-top">
                                        <div className="list-star-default">
                                            <i className="icon icon-star"></i>
                                            <i className="icon icon-star"></i>
                                            <i className="icon icon-star"></i>
                                            <i className="icon icon-star"></i>
                                            <i className="icon icon-star"></i>
                                        </div>
                                        <p className="text-secondary">"Fantastic shop! Great selection, fair prices, and friendly staff. Highly recommended. The quality of the products is exceptional, and the prices are very reasonable!"</p>
                                        <div className="box-author">
                                            <div className="text-title author">Sybil Sharp</div>
                                            <svg className="icon" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_15758_14563)">
                                                <path d="M6.875 11.6255L8.75 13.5005L13.125 9.12549" stroke="#3DAB25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M10 18.5005C14.1421 18.5005 17.5 15.1426 17.5 11.0005C17.5 6.85835 14.1421 3.50049 10 3.50049C5.85786 3.50049 2.5 6.85835 2.5 11.0005C2.5 15.1426 5.85786 18.5005 10 18.5005Z" stroke="#3DAB25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_15758_14563">
                                                <rect width="20" height="20" fill="white" transform="translate(0 0.684082)"/>
                                                </clipPath>
                                                </defs>
                                            </svg> 
                                        </div>
                                    </div>
                                    <div className="box-avt">
                                        <div className="avatar avt-60 round">
                                            <img src="images/avatar/user-4.jpg" alt="avt"/>
                                        </div>
                                        <div className="box-price">
                                            <p className="text-title text-line-clamp-1">Contrasting sheepskin sweatshirt</p>
                                            <div className="text-button price">$60.00</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="testimonial-item hover-img">
                                <div className="img-style">
                                    <img data-src="images/testimonial/tes-2.jpg" src="images/testimonial/tes-2.jpg" alt="img-testimonial"/>
                                    <a href="#quickView" data-bs-toggle="modal" className="box-icon hover-tooltip center">
                                        <span className="icon icon-eye"></span>
                                        <span className="tooltip">Quick View</span>
                                    </a>
                                </div>
                                <div className="content">
                                    <div className="content-top">
                                        <div className="list-star-default">
                                            <i className="icon icon-star"></i>
                                            <i className="icon icon-star"></i>
                                            <i className="icon icon-star"></i>
                                            <i className="icon icon-star"></i>
                                            <i className="icon icon-star"></i>
                                        </div>
                                        <p className="text-secondary">"I absolutely love this shop! The products are high-quality and the customer service is excellent. I always leave with exactly what I need and a smile on my face."</p>
                                        <div className="box-author">
                                            <div className="text-title author">Mark G.</div>
                                            <svg className="icon" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_15758)">
                                                <path d="M6.875 11.6255L8.75 13.5005L13.125 9.12549" stroke="#3DAB25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M10 18.5005C14.1421 18.5005 17.5 15.1426 17.5 11.0005C17.5 6.85835 14.1421 3.50049 10 3.50049C5.85786 3.50049 2.5 6.85835 2.5 11.0005C2.5 15.1426 5.85786 18.5005 10 18.5005Z" stroke="#3DAB25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_15758">
                                                <rect width="20" height="20" fill="white" transform="translate(0 0.684082)"/>
                                                </clipPath>
                                                </defs>
                                            </svg> 
                                        </div>
                                    </div>
                                    <div className="box-avt">
                                        <div className="avatar avt-60 round">
                                            <img src="images/avatar/user-5.jpg" alt="avt"/>
                                        </div>
                                        <div className="box-price">
                                            <p className="text-title text-line-clamp-1">Contrasting sheepskin sweatshirt</p>
                                            <div className="text-button price">$60.00</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="testimonial-item hover-img">
                                <div className="img-style">
                                    <img data-src="images/testimonial/tes-1.jpg" src="images/testimonial/tes-1.jpg" alt="img-testimonial"/>
                                    <a href="#quickView" data-bs-toggle="modal" className="box-icon hover-tooltip center">
                                        <span className="icon icon-eye"></span>
                                        <span className="tooltip">Quick View</span>
                                    </a>
                                </div>
                                <div className="content">
                                    <div className="content-top">
                                        <div className="list-star-default">
                                            <i className="icon icon-star"></i>
                                            <i className="icon icon-star"></i>
                                            <i className="icon icon-star"></i>
                                            <i className="icon icon-star"></i>
                                            <i className="icon icon-star"></i>
                                        </div>
                                        <p className="text-secondary">"Fantastic shop! Great selection, fair prices, and friendly staff. Highly recommended. The quality of the products is exceptional, and the prices are very reasonable!"</p>
                                        <div className="box-author">
                                            <div className="text-title author">Sybil Sharp</div>
                                            <svg className="icon" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_15758_14)">
                                                <path d="M6.875 11.6255L8.75 13.5005L13.125 9.12549" stroke="#3DAB25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M10 18.5005C14.1421 18.5005 17.5 15.1426 17.5 11.0005C17.5 6.85835 14.1421 3.50049 10 3.50049C5.85786 3.50049 2.5 6.85835 2.5 11.0005C2.5 15.1426 5.85786 18.5005 10 18.5005Z" stroke="#3DAB25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_15758_14">
                                                <rect width="20" height="20" fill="white" transform="translate(0 0.684082)"/>
                                                </clipPath>
                                                </defs>
                                            </svg> 
                                        </div>
                                    </div>
                                    <div className="box-avt">
                                        <div className="avatar avt-60 round">
                                            <img src="images/avatar/user-4.jpg" alt="avt"/>
                                        </div>
                                        <div className="box-price">
                                            <p className="text-title text-line-clamp-1">Contrasting sheepskin sweatshirt</p>
                                            <div className="text-button price">$60.00</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="testimonial-item hover-img">
                                <div className="img-style">
                                    <img data-src="images/testimonial/tes-2.jpg" src="images/testimonial/tes-2.jpg" alt="img-testimonial"/>
                                    <a href="#quickView" data-bs-toggle="modal" className="box-icon hover-tooltip center">
                                        <span className="icon icon-eye"></span>
                                        <span className="tooltip">Quick View</span>
                                    </a>
                                </div>
                                <div className="content">
                                    <div className="content-top">
                                        <div className="list-star-default">
                                            <i className="icon icon-star"></i>
                                            <i className="icon icon-star"></i>
                                            <i className="icon icon-star"></i>
                                            <i className="icon icon-star"></i>
                                            <i className="icon icon-star"></i>
                                        </div>
                                        <p className="text-secondary">"I absolutely love this shop! The products are high-quality and the customer service is excellent. I always leave with exactly what I need and a smile on my face."</p>
                                        <div className="box-author">
                                            <div className="text-title author">Mark G.</div>
                                            <svg className="icon" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_15758_145)">
                                                <path d="M6.875 11.6255L8.75 13.5005L13.125 9.12549" stroke="#3DAB25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M10 18.5005C14.1421 18.5005 17.5 15.1426 17.5 11.0005C17.5 6.85835 14.1421 3.50049 10 3.50049C5.85786 3.50049 2.5 6.85835 2.5 11.0005C2.5 15.1426 5.85786 18.5005 10 18.5005Z" stroke="#3DAB25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_15758_145">
                                                <rect width="20" height="20" fill="white" transform="translate(0 0.684082)"/>
                                                </clipPath>
                                                </defs>
                                            </svg> 
                                        </div>
                                    </div>
                                    <div className="box-avt">
                                        <div className="avatar avt-60 round">
                                            <img src="images/avatar/user-5.jpg" alt="avt"/>
                                        </div>
                                        <div className="box-price">
                                            <p className="text-title text-line-clamp-1">Contrasting sheepskin sweatshirt</p>
                                            <div className="text-button price">$60.00</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                    </div>
                    <div className="sw-pagination-testimonial sw-dots type-circle d-flex justify-content-center"></div>
                </Swiper>
            </div>
        </section>
    )
}
export default Customer