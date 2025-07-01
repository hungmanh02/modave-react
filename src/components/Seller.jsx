import React from 'react';

const Seller=()=>{
    return (
        <section className="flat-spacing-3">
            <div className="container">
                <div className="flat-animate-tab">
                    <ul className="tab-product justify-content-sm-center" role="tablist">
                        <li className="nav-tab-item" role="presentation">
                            <a href="#newArrivals" className="active" data-bs-toggle="tab">New Arrivals</a>
                        </li>
                        <li className="nav-tab-item" role="presentation">
                            <a href="#bestSeller" data-bs-toggle="tab">Best Seller</a>
                        </li>
                        <li className="nav-tab-item" role="presentation">
                            <a href="#onSale" data-bs-toggle="tab">On Sale</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane active show" id="newArrivals" role="tabpanel">
                            <div className="tf-grid-layout tf-col-2 lg-col-3 xl-col-4">
                                {/* <!-- card product 1 --> */}
                                <div className="card-product wow fadeInUp">
                                    <div className="card-product-wrapper">
                                        <a href="product-detail.html" className="product-img">
                                            <img className="lazyload img-product" data-src="images/products/womens/women-19.jpg" src="images/products/womens/women-19.jpg" alt="image-product"/>
                                            <img className="lazyload img-hover" data-src="images/products/womens/women-20.jpg" src="images/products/womens/women-20.jpg" alt="image-product"/>
                                        </a>
                                        <div className="list-product-btn">
                                            <a href="javascript:void(0);" className="box-icon wishlist btn-icon-action">
                                                <span className="icon icon-heart"></span>
                                                <span className="tooltip">Wishlist</span>
                                            </a>
                                            <a href="#compare" data-bs-toggle="offcanvas" aria-controls="compare" className="box-icon compare btn-icon-action">
                                                <span className="icon icon-gitDiff"></span>
                                                <span className="tooltip">Compare</span>
                                            </a>
                                            <a href="#quickView" data-bs-toggle="modal" className="box-icon quickview tf-btn-loading">
                                                <span className="icon icon-eye"></span>
                                                <span className="tooltip">Quick View</span>
                                            </a>
                                        </div>
                                        <div className="list-btn-main">
                                            <a href="#shoppingCart" data-bs-toggle="modal" className="btn-main-product">Add To cart</a>
                                        </div> 
                                    </div>
                                    <div className="card-product-info">
                                        <a href="product-detail.html" className="title link">V-neck cotton T-shirt</a>
                                        <span className="price">$59.99</span>
                                    </div>
                                </div>
                                {/* <!-- card product 2 --> */}
                                <div className="card-product wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="card-product-wrapper">
                                        <a href="product-detail.html" className="product-img">
                                            <img className="lazyload img-product" data-src="images/products/womens/women-176.jpg" src="images/products/womens/women-176.jpg" alt="image-product"/>
                                            <img className="lazyload img-hover" data-src="images/products/womens/women-179.jpg" src="images/products/womens/women-179.jpg" alt="image-product"/>
                                        </a>
                                        <div className="on-sale-wrap"><span className="on-sale-item">-25%</span></div>
                                        <div className="marquee-product bg-main">
                                            <div className="marquee-wrapper">
                                                <div className="initial-child-container">
                                                    <div className="marquee-child-item">
                                                        <p className="font-2 text-btn-uppercase fw-6 text-white">Hot Sale 25% OFF</p>
                                                    </div>
                                                    <div className="marquee-child-item">
                                                        <span className="icon icon-lightning text-critical"></span>
                                                    </div>
                                                    <div className="marquee-child-item">
                                                        <p className="font-2 text-btn-uppercase fw-6 text-white">Hot Sale 25% OFF</p>
                                                    </div>
                                                    <div className="marquee-child-item">
                                                        <span className="icon icon-lightning text-critical"></span>
                                                    </div>
                                                    <div className="marquee-child-item">
                                                        <p className="font-2 text-btn-uppercase fw-6 text-white">Hot Sale 25% OFF</p>
                                                    </div>
                                                    <div className="marquee-child-item">
                                                        <span className="icon icon-lightning text-critical"></span>
                                                    </div>
                                                    <div className="marquee-child-item">
                                                        <p className="font-2 text-btn-uppercase fw-6 text-white">Hot Sale 25% OFF</p>
                                                    </div>
                                                    <div className="marquee-child-item">
                                                        <span className="icon icon-lightning text-critical"></span>
                                                    </div>
                                                    <div className="marquee-child-item">
                                                        <p className="font-2 text-btn-uppercase fw-6 text-white">Hot Sale 25% OFF</p>
                                                    </div>
                                                    <div className="marquee-child-item">
                                                        <span className="icon icon-lightning text-critical"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="marquee-wrapper">
                                                <div className="initial-child-container">
                                                    <div className="marquee-child-item">
                                                        <p className="font-2 text-btn-uppercase fw-6 text-white">Hot Sale 25% OFF</p>
                                                    </div>
                                                    <div className="marquee-child-item">
                                                        <span className="icon icon-lightning text-critical"></span>
                                                    </div>
                                                    <div className="marquee-child-item">
                                                        <p className="font-2 text-btn-uppercase fw-6 text-white">Hot Sale 25% OFF</p>
                                                    </div>
                                                    <div className="marquee-child-item">
                                                        <span className="icon icon-lightning text-critical"></span>
                                                    </div>
                                                    <div className="marquee-child-item">
                                                        <p className="font-2 text-btn-uppercase fw-6 text-white">Hot Sale 25% OFF</p>
                                                    </div>
                                                    <div className="marquee-child-item">
                                                        <span className="icon icon-lightning text-critical"></span>
                                                    </div>
                                                    <div className="marquee-child-item">
                                                        <p className="font-2 text-btn-uppercase fw-6 text-white">Hot Sale 25% OFF</p>
                                                    </div>
                                                    <div className="marquee-child-item">
                                                        <span className="icon icon-lightning text-critical"></span>
                                                    </div>
                                                    <div className="marquee-child-item">
                                                        <p className="font-2 text-btn-uppercase fw-6 text-white">Hot Sale 25% OFF</p>
                                                    </div>
                                                    <div className="marquee-child-item">
                                                        <span className="icon icon-lightning text-critical"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-product-btn">
                                            <a href="javascript:void(0);" className="box-icon wishlist btn-icon-action">
                                                <span className="icon icon-heart"></span>
                                                <span className="tooltip">Wishlist</span>
                                            </a>
                                            <a href="#compare" data-bs-toggle="offcanvas" aria-controls="compare" className="box-icon compare btn-icon-action">
                                                <span className="icon icon-gitDiff"></span>
                                                <span className="tooltip">Compare</span>
                                            </a>
                                            <a href="#quickView" data-bs-toggle="modal" className="box-icon quickview tf-btn-loading">
                                                <span className="icon icon-eye"></span>
                                                <span className="tooltip">Quick View</span>
                                            </a>
                                        </div>
                                        <div className="list-btn-main">
                                            <a href="#shoppingCart" data-bs-toggle="modal" className="btn-main-product">Add To cart</a>
                                        </div> 
                                    </div>
                                    <div className="card-product-info">
                                        <a href="product-detail.html" className="title link">Polarized sunglasses</a>
                                        <span className="price"><span className="old-price">$98.00</span> $79.99</span>
                                        <ul className="list-color-product">
                                            <li className="list-color-item color-swatch active line">
                                                <span className="swatch-value bg-light-blue"></span>
                                                <img className="lazyload" data-src="images/products/womens/women-176.jpg" src="images/products/womens/women-176.jpg" alt="image-product"/>
                                            </li>
                                            <li className="list-color-item color-swatch">
                                                <span className="swatch-value bg-light-blue-2"></span>
                                                <img className="lazyload" data-src="images/products/womens/women-177.jpg" src="images/products/womens/women-177.jpg" alt="image-product"/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <!-- card product 3 --> */}
                                <div className="card-product card-product-size wow fadeInUp" data-wow-delay="0.2s">
                                    <div className="card-product-wrapper">
                                        <a href="product-detail.html" className="product-img">
                                            <img className="lazyload img-product" data-src="images/products/womens/women-29.jpg" src="images/products/womens/women-29.jpg" alt="image-product"/>
                                            <img className="lazyload img-hover" data-src="images/products/womens/women-30.jpg" src="images/products/womens/women-30.jpg" alt="image-product"/>
                                        </a>
                                        <div className="variant-wrap size-list">
                                            <ul className="variant-box">
                                                <li className="size-item">S</li>
                                                <li className="size-item">M</li>
                                                <li className="size-item">L</li>
                                                <li className="size-item">XL</li>
                                            </ul>
                                        </div>
                                        <div className="variant-wrap countdown-wrap">
                                            <div className="variant-box">
                                                <div className="js-countdown" data-timer="1007500" data-labels="D :,H :,M :,S"></div>
                                            </div>
                                        </div>
                                        <div className="list-product-btn">
                                            <a href="javascript:void(0);" className="box-icon wishlist btn-icon-action">
                                                <span className="icon icon-heart"></span>
                                                <span className="tooltip">Wishlist</span>
                                            </a>
                                            <a href="#compare" data-bs-toggle="offcanvas" aria-controls="compare" className="box-icon compare btn-icon-action">
                                                <span className="icon icon-gitDiff"></span>
                                                <span className="tooltip">Compare</span>
                                            </a>
                                            <a href="#quickView" data-bs-toggle="modal" className="box-icon quickview tf-btn-loading">
                                                <span className="icon icon-eye"></span>
                                                <span className="tooltip">Quick View</span>
                                            </a>
                                        </div>
                                        <div className="list-btn-main">
                                            <a href="#quickAdd" data-bs-toggle="modal" className="btn-main-product">Quick Add</a>
                                        </div> 
                                    </div>
                                    <div className="card-product-info">
                                        <a href="product-detail.html" className="title link">Ramie shirt with pockets </a>
                                        <span className="price"><span className="old-price">$98.00</span> $89.99</span>
                                        <ul className="list-color-product">
                                            <li className="list-color-item color-swatch active line">
                                                <span className="swatch-value bg-light-orange"></span>
                                                <img className="lazyload" data-src="images/products/womens/women-29.jpg" src="images/products/womens/women-29.jpg" alt="image-product"/>
                                            </li>
                                            <li className="list-color-item color-swatch">
                                                <span className="swatch-value bg-light-grey"></span>
                                                <img className="lazyload" data-src="images/products/womens/women-33.jpg" src="images/products/womens/women-33.jpg" alt="image-product"/>
                                            </li>
                                            
                                        </ul>
                                    </div>
                                </div>
                                {/* <!-- card product 4 --> */}
                                <div className="card-product wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="card-product-wrapper">
                                        <a href="product-detail.html" className="product-img">
                                            <img className="lazyload img-product" data-src="images/products/womens/women-1.jpg" src="images/products/womens/women-1.jpg" alt="image-product"/>
                                            <img className="lazyload img-hover" data-src="images/products/womens/women-2.jpg" src="images/products/womens/women-2.jpg" alt="image-product"/>
                                        </a>
                                        <div className="list-product-btn">
                                            <a href="javascript:void(0);" className="box-icon wishlist btn-icon-action">
                                                <span className="icon icon-heart"></span>
                                                <span className="tooltip">Wishlist</span>
                                            </a>
                                            <a href="#compare" data-bs-toggle="offcanvas" aria-controls="compare" className="box-icon compare btn-icon-action">
                                                <span className="icon icon-gitDiff"></span>
                                                <span className="tooltip">Compare</span>
                                            </a>
                                            <a href="#quickView" data-bs-toggle="modal" className="box-icon quickview tf-btn-loading">
                                                <span className="icon icon-eye"></span>
                                                <span className="tooltip">Quick View</span>
                                            </a>
                                        </div>
                                        <div className="list-btn-main">
                                            <a href="#shoppingCart" data-bs-toggle="modal" className="btn-main-product">Add To cart</a>
                                        </div> 
                                    </div>
                                    <div className="card-product-info">
                                        <a href="product-detail.html" className="title link">Ribbed cotton-blend top</a>
                                        <span className="price">$69.99</span>
                                        <ul className="list-color-product">
                                            <li className="list-color-item color-swatch active line">
                                                <span className="swatch-value bg-dark-grey"></span>
                                                <img className="lazyload" data-src="images/products/womens/women-1.jpg" src="images/products/womens/women-1.jpg" alt="image-product"/>
                                            </li>
                                            <li className="list-color-item color-swatch">
                                                <span className="swatch-value bg-light-pink"></span>
                                                <img className="lazyload" data-src="images/products/womens/women-2.jpg" src="images/products/womens/women-2.jpg" alt="image-product"/>
                                            </li>
                                            <li className="list-color-item color-swatch">
                                                <span className="swatch-value bg-dark-grey-2"></span>
                                                <img className="lazyload" data-src="images/products/womens/women-3.jpg" src="images/products/womens/women-3.jpg" alt="image-product"/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <!-- card product 5 --> */}
                                <div className="card-product card-product-size wow fadeInUp">
                                    <div className="card-product-wrapper">
                                        <a href="product-detail.html" className="product-img">
                                            <img className="lazyload img-product" data-src="images/products/womens/women-8.jpg" src="images/products/womens/women-8.jpg" alt="image-product"/>
                                            <img className="lazyload img-hover" data-src="images/products/womens/women-9.jpg" src="images/products/womens/women-9.jpg" alt="image-product"/>
                                        </a>
                                        <div className="variant-wrap size-list">
                                            <ul className="variant-box">
                                                <li className="size-item">S</li>
                                                <li className="size-item">M</li>
                                                <li className="size-item">L</li>
                                                <li className="size-item">XL</li>
                                            </ul>
                                        </div>
                                        <div className="list-product-btn">
                                            <a href="javascript:void(0);" className="box-icon wishlist btn-icon-action">
                                                <span className="icon icon-heart"></span>
                                                <span className="tooltip">Wishlist</span>
                                            </a>
                                            <a href="#compare" data-bs-toggle="offcanvas" aria-controls="compare" className="box-icon compare btn-icon-action">
                                                <span className="icon icon-gitDiff"></span>
                                                <span className="tooltip">Compare</span>
                                            </a>
                                            <a href="#quickView" data-bs-toggle="modal" className="box-icon quickview tf-btn-loading">
                                                <span className="icon icon-eye"></span>
                                                <span className="tooltip">Quick View</span>
                                            </a>
                                        </div>
                                        <div className="list-btn-main">
                                            <a href="#quickAdd" data-bs-toggle="modal" className="btn-main-product">Quick Add</a>
                                        </div> 
                                    </div>
                                    <div className="card-product-info">
                                        <a href="product-detail.html" className="title link">Ribbed cotton-blend top</a>
                                        <span className="price">$39.99</span>
                                    </div>
                                </div>
                                {/* <!-- card product 6 --> */}
                                <div className="card-product wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="card-product-wrapper">
                                        <a href="product-detail.html" className="product-img">
                                            <img className="lazyload img-product" data-src="images/products/womens/women-171.jpg" src="images/products/womens/women-171.jpg" alt="image-product"/>
                                            <img className="lazyload img-hover" data-src="images/products/womens/women-172.jpg" src="images/products/womens/women-172.jpg" alt="image-product"/>
                                        </a>
                                        
                                        <div className="list-product-btn">
                                            <a href="javascript:void(0);" className="box-icon wishlist btn-icon-action">
                                                <span className="icon icon-heart"></span>
                                                <span className="tooltip">Wishlist</span>
                                            </a>
                                            <a href="#compare" data-bs-toggle="offcanvas" aria-controls="compare" className="box-icon compare btn-icon-action">
                                                <span className="icon icon-gitDiff"></span>
                                                <span className="tooltip">Compare</span>
                                            </a>
                                            <a href="#quickView" data-bs-toggle="modal" className="box-icon quickview tf-btn-loading">
                                                <span className="icon icon-eye"></span>
                                                <span className="tooltip">Quick View</span>
                                            </a>
                                        </div>
                                        <div className="list-btn-main">
                                            <a href="#quickAdd" data-bs-toggle="modal" className="btn-main-product">Quick Add</a>
                                        </div> 
                                    </div>
                                    <div className="card-product-info">
                                        <a href="product-detail.html" className="title link">Faux-leather trousers</a>
                                        <span className="price">$79.99</span>
                                        <ul className="list-color-product">
                                            <li className="list-color-item color-swatch active">
                                                <span className="swatch-value bg-orange"></span>
                                                <img className="lazyload" data-src="images/products/womens/women-171.jpg" src="images/products/womens/women-171.jpg" alt="image-product"/>
                                            </li>
                                            <li className="list-color-item color-swatch">
                                                <span className="swatch-value bg-dark-pink"></span>
                                                <img className="lazyload" data-src="images/products/womens/women-172.jpg" src="images/products/womens/women-172.jpg" alt="image-product"/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <!-- card product 7 --> */}
                                <div className="card-product card-product-size wow fadeInUp" data-wow-delay="0.2s">
                                    <div className="card-product-wrapper">
                                        <a href="product-detail.html" className="product-img">
                                            <img className="lazyload img-product" data-src="images/products/womens/women-83.jpg" src="images/products/womens/women-83.jpg" alt="image-product"/>
                                            <img className="lazyload img-hover" data-src="images/products/womens/women-84.jpg" src="images/products/womens/women-84.jpg" alt="image-product"/>
                                        </a>
                                        <div className="on-sale-wrap"><span className="on-sale-item">-25%</span></div>
                                        <div className="variant-wrap size-list">
                                            <ul className="variant-box">
                                                <li className="size-item">S</li>
                                                <li className="size-item">M</li>
                                                <li className="size-item">L</li>
                                                <li className="size-item">XL</li>
                                            </ul>
                                        </div>
                                        <div className="list-product-btn">
                                            <a href="javascript:void(0);" className="box-icon wishlist btn-icon-action">
                                                <span className="icon icon-heart"></span>
                                                <span className="tooltip">Wishlist</span>
                                            </a>
                                            <a href="#compare" data-bs-toggle="offcanvas" aria-controls="compare" className="box-icon compare btn-icon-action">
                                                <span className="icon icon-gitDiff"></span>
                                                <span className="tooltip">Compare</span>
                                            </a>
                                            <a href="#quickView" data-bs-toggle="modal" className="box-icon quickview tf-btn-loading">
                                                <span className="icon icon-eye"></span>
                                                <span className="tooltip">Quick View</span>
                                            </a>
                                        </div>
                                        <div className="list-btn-main">
                                            <a href="#quickAdd" data-bs-toggle="modal" className="btn-main-product">Quick Add</a>
                                        </div> 
                                    </div>
                                    <div className="card-product-info">
                                        <a href="product-detail.html" className="title link">Belt wrap dress</a>
                                        <span className="price"><span className="old-price">$98.00</span>$129.99</span>
                                        <ul className="list-color-product">
                                            <li className="list-color-item color-swatch active">
                                                <span className="swatch-value bg-light-green"></span>
                                                <img className="lazyload" data-src="images/products/womens/women-83.jpg" src="images/products/womens/women-83.jpg" alt="image-product"/>
                                            </li>
                                            <li className="list-color-item color-swatch">
                                                <span className="swatch-value bg-grey"></span>
                                                <img className="lazyload" data-src="images/products/womens/women-94.jpg" src="images/products/womens/women-94.jpg" alt="image-product"/>
                                            </li>
                                            <li className="list-color-item color-swatch line">
                                                <span className="swatch-value bg-white"></span>
                                                <img className="lazyload" data-src="images/products/womens/women-87.jpg" src="images/products/womens/women-87.jpg" alt="image-product"/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <!-- card product 8 --> */}
                                <div className="card-product card-product-size wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="card-product-wrapper">
                                        <a href="product-detail.html" className="product-img">
                                            <img className="lazyload img-product" data-src="images/products/womens/women-102.jpg" src="images/products/womens/women-102.jpg" alt="image-product"/>
                                            <img className="lazyload img-hover" data-src="images/products/womens/women-103.jpg" src="images/products/womens/women-103.jpg" alt="image-product"/>
                                        </a>
                                        <div className="on-sale-wrap"><span className="on-sale-item">-25%</span></div>
                                        <div className="variant-wrap size-list">
                                            <ul className="variant-box">
                                                <li className="size-item">S</li>
                                                <li className="size-item">M</li>
                                                <li className="size-item">L</li>
                                                <li className="size-item">XL</li>
                                            </ul>
                                        </div>
                                        <div className="list-product-btn">
                                            <a href="javascript:void(0);" className="box-icon wishlist btn-icon-action">
                                                <span className="icon icon-heart"></span>
                                                <span className="tooltip">Wishlist</span>
                                            </a>
                                            <a href="#compare" data-bs-toggle="offcanvas" aria-controls="compare" className="box-icon compare btn-icon-action">
                                                <span className="icon icon-gitDiff"></span>
                                                <span className="tooltip">Compare</span>
                                            </a>
                                            <a href="#quickView" data-bs-toggle="modal" className="box-icon quickview tf-btn-loading">
                                                <span className="icon icon-eye"></span>
                                                <span className="tooltip">Quick View</span>
                                            </a>
                                        </div>
                                        <div className="list-btn-main">
                                            <a href="#quickAdd" data-bs-toggle="modal" className="btn-main-product">Quick Add</a>
                                        </div> 
                                    </div>
                                    <div className="card-product-info">
                                        <a href="product-detail.html" className="title link">Double-button trench coat</a>
                                        <span className="price"><span className="old-price">$98.00</span>$219.99</span>
                                        <ul className="list-color-product">
                                            <li className="list-color-item color-swatch active">
                                                <span className="swatch-value bg-grey-2"></span>
                                                <img className="lazyload" data-src="images/products/womens/women-102.jpg" src="images/products/womens/women-102.jpg" alt="image-product"/>
                                            </li>
                                            <li className="list-color-item color-swatch">
                                                <span className="swatch-value bg-light-orange"></span>
                                                <img className="lazyload" data-src="images/products/womens/women-111.jpg" src="images/products/womens/women-111.jpg" alt="image-product"/>
                                            </li>
                                            <li className="list-color-item color-swatch line">
                                                <span className="swatch-value bg-white"></span>
                                                <img className="lazyload" data-src="images/products/womens/women-104.jpg" src="images/products/womens/women-104.jpg" alt="image-product"/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="sec-btn text-center">
                                <a href="shop-default-grid.html" className="btn-line">View All Products</a>
                            </div>
                        </div>
                        <div className="tab-pane" id="bestSeller" role="tabpanel">
                            <div className="tf-grid-layout tf-col-2 lg-col-3 xl-col-4">
                                {/* <!-- card product 1 --> */}
                                <div className="card-product">
                                    <div className="card-product-wrapper">
                                        <a href="product-detail.html" className="product-img">
                                            <img className="lazyload img-product" data-src="images/products/womens/women-19.jpg" src="images/products/womens/women-19.jpg" alt="image-product"/>
                                            <img className="lazyload img-hover" data-src="images/products/womens/women-20.jpg" src="images/products/womens/women-20.jpg" alt="image-product"/>
                                        </a>
                                        <div className="list-product-btn">
                                            <a href="javascript:void(0);" className="box-icon wishlist btn-icon-action">
                                                <span className="icon icon-heart"></span>
                                                <span className="tooltip">Wishlist</span>
                                            </a>
                                            <a href="#compare" data-bs-toggle="offcanvas" aria-controls="compare" className="box-icon compare btn-icon-action">
                                                <span className="icon icon-gitDiff"></span>
                                                <span className="tooltip">Compare</span>
                                            </a>
                                            <a href="#quickView" data-bs-toggle="modal" className="box-icon quickview tf-btn-loading">
                                                <span className="icon icon-eye"></span>
                                                <span className="tooltip">Quick View</span>
                                            </a>
                                        </div>
                                        <div className="list-btn-main">
                                            <a href="#shoppingCart" data-bs-toggle="modal" className="btn-main-product">Add To cart</a>
                                        </div> 
                                    </div>
                                    <div className="card-product-info">
                                        <a href="product-detail.html" className="title link">V-neck cotton T-shirt</a>
                                        <span className="price">$59.99</span>
                                        
                                    </div>
                                </div>
                                {/* <!-- card product 2 --> */}
                                <div className="card-product">
                                    <div className="card-product-wrapper">
                                        <a href="product-detail.html" className="product-img">
                                            <img className="lazyload img-product" data-src="images/products/womens/women-176.jpg" src="images/products/womens/women-176.jpg" alt="image-product"/>
                                            <img className="lazyload img-hover" data-src="images/products/womens/women-179.jpg" src="images/products/womens/women-179.jpg" alt="image-product"/>
                                        </a>
                                        <div className="on-sale-wrap"><span className="on-sale-item">-25%</span></div>
                                        <div className="marquee-product bg-main">
                                            <div className="marquee-wrapper">
                                                <div className="initial-child-container">
                                                    <div className="marquee-child-item">
                                                        <p className="font-2 text-btn-uppercase fw-6 text-white">Hot Sale 25% OFF</p>
                                                    </div>
                                                    <div className="marquee-child-item">
                                                        <span className="icon icon-lightning text-critical"></span>
                                                    </div>
                                                    <div className="marquee-child-item">
                                                        <p className="font-2 text-btn-uppercase fw-6 text-white">Hot Sale 25% OFF</p>
                                                    </div>
                                                    <div className="marquee-child-item">
                                                        <span className="icon icon-lightning text-critical"></span>
                                                    </div>
                                                    <div className="marquee-child-item">
                                                        <p className="font-2 text-btn-uppercase fw-6 text-white">Hot Sale 25% OFF</p>
                                                    </div>
                                                    <div className="marquee-child-item">
                                                        <span className="icon icon-lightning text-critical"></span>
                                                    </div>
                                                    <div className="marquee-child-item">
                                                        <p className="font-2 text-btn-uppercase fw-6 text-white">Hot Sale 25% OFF</p>
                                                    </div>
                                                    <div className="marquee-child-item">
                                                        <span className="icon icon-lightning text-critical"></span>
                                                    </div>
                                                    <div className="marquee-child-item">
                                                        <p className="font-2 text-btn-uppercase fw-6 text-white">Hot Sale 25% OFF</p>
                                                    </div>
                                                    <div className="marquee-child-item">
                                                        <span className="icon icon-lightning text-critical"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="marquee-wrapper">
                                                <div className="initial-child-container">
                                                    <div className="marquee-child-item">
                                                        <p className="font-2 text-btn-uppercase fw-6 text-white">Hot Sale 25% OFF</p>
                                                    </div>
                                                    <div className="marquee-child-item">
                                                        <span className="icon icon-lightning text-critical"></span>
                                                    </div>
                                                    <div className="marquee-child-item">
                                                        <p className="font-2 text-btn-uppercase fw-6 text-white">Hot Sale 25% OFF</p>
                                                    </div>
                                                    <div className="marquee-child-item">
                                                        <span className="icon icon-lightning text-critical"></span>
                                                    </div>
                                                    <div className="marquee-child-item">
                                                        <p className="font-2 text-btn-uppercase fw-6 text-white">Hot Sale 25% OFF</p>
                                                    </div>
                                                    <div className="marquee-child-item">
                                                        <span className="icon icon-lightning text-critical"></span>
                                                    </div>
                                                    <div className="marquee-child-item">
                                                        <p className="font-2 text-btn-uppercase fw-6 text-white">Hot Sale 25% OFF</p>
                                                    </div>
                                                    <div className="marquee-child-item">
                                                        <span className="icon icon-lightning text-critical"></span>
                                                    </div>
                                                    <div className="marquee-child-item">
                                                        <p className="font-2 text-btn-uppercase fw-6 text-white">Hot Sale 25% OFF</p>
                                                    </div>
                                                    <div className="marquee-child-item">
                                                        <span className="icon icon-lightning text-critical"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-product-btn">
                                            <a href="javascript:void(0);" className="box-icon wishlist btn-icon-action">
                                                <span className="icon icon-heart"></span>
                                                <span className="tooltip">Wishlist</span>
                                            </a>
                                            <a href="#compare" data-bs-toggle="offcanvas" aria-controls="compare" className="box-icon compare btn-icon-action">
                                                <span className="icon icon-gitDiff"></span>
                                                <span className="tooltip">Compare</span>
                                            </a>
                                            <a href="#quickView" data-bs-toggle="modal" className="box-icon quickview tf-btn-loading">
                                                <span className="icon icon-eye"></span>
                                                <span className="tooltip">Quick View</span>
                                            </a>
                                        </div>
                                        <div className="list-btn-main">
                                            <a href="#shoppingCart" data-bs-toggle="modal" className="btn-main-product">Add To cart</a>
                                        </div> 
                                    </div>
                                    <div className="card-product-info">
                                        <a href="product-detail.html" className="title link">Polarized sunglasses</a>
                                        <span className="price"><span className="old-price">$98.00</span> $79.99</span>
                                        <ul className="list-color-product">
                                            <li className="list-color-item color-swatch active line">
                                                <span className="swatch-value bg-light-blue"></span>
                                                <img className="lazyload" data-src="images/products/womens/women-176.jpg" src="images/products/womens/women-176.jpg" alt="image-product"/>
                                            </li>
                                            <li className="list-color-item color-swatch">
                                                <span className="swatch-value bg-light-blue-2"></span>
                                                <img className="lazyload" data-src="images/products/womens/women-177.jpg" src="images/products/womens/women-177.jpg" alt="image-product"/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <!-- card product 3 --> */}
                                <div className="card-product card-product-size">
                                    <div className="card-product-wrapper">
                                        <a href="product-detail.html" className="product-img">
                                            <img className="lazyload img-product" data-src="images/products/womens/women-29.jpg" src="images/products/womens/women-29.jpg" alt="image-product"/>
                                            <img className="lazyload img-hover" data-src="images/products/womens/women-30.jpg" src="images/products/womens/women-30.jpg" alt="image-product"/>
                                        </a>
                                        <div className="variant-wrap size-list">
                                            <ul className="variant-box">
                                                <li className="size-item">S</li>
                                                <li className="size-item">M</li>
                                                <li className="size-item">L</li>
                                                <li className="size-item">XL</li>
                                            </ul>
                                        </div>
                                        <div className="variant-wrap countdown-wrap">
                                            <div className="variant-box">
                                                <div className="js-countdown" data-timer="1007500" data-labels="D :,H :,M :,S"></div>
                                            </div>
                                        </div>
                                        <div className="list-product-btn">
                                            <a href="javascript:void(0);" className="box-icon wishlist btn-icon-action">
                                                <span className="icon icon-heart"></span>
                                                <span className="tooltip">Wishlist</span>
                                            </a>
                                            <a href="#compare" data-bs-toggle="offcanvas" aria-controls="compare" className="box-icon compare btn-icon-action">
                                                <span className="icon icon-gitDiff"></span>
                                                <span className="tooltip">Compare</span>
                                            </a>
                                            <a href="#quickView" data-bs-toggle="modal" className="box-icon quickview tf-btn-loading">
                                                <span className="icon icon-eye"></span>
                                                <span className="tooltip">Quick View</span>
                                            </a>
                                        </div>
                                        <div className="list-btn-main">
                                            <a href="#quickAdd" data-bs-toggle="modal" className="btn-main-product">Quick Add</a>
                                        </div> 
                                    </div>
                                    <div className="card-product-info">
                                        <a href="product-detail.html" className="title link">Ramie shirt with pockets </a>
                                        <span className="price"><span className="old-price">$98.00</span> $89.99</span>
                                        <ul className="list-color-product">
                                            <li className="list-color-item color-swatch active line">
                                                <span className="swatch-value bg-light-orange"></span>
                                                <img className="lazyload" data-src="images/products/womens/women-29.jpg" src="images/products/womens/women-29.jpg" alt="image-product"/>
                                            </li>
                                            <li className="list-color-item color-swatch">
                                                <span className="swatch-value bg-light-grey"></span>
                                                <img className="lazyload" data-src="images/products/womens/women-33.jpg" src="images/products/womens/women-33.jpg" alt="image-product"/>
                                            </li>
                                            
                                        </ul>
                                    </div>
                                </div>
                                {/* <!-- card product 4 --> */}
                                <div className="card-product">
                                    <div className="card-product-wrapper">
                                        <a href="product-detail.html" className="product-img">
                                            <img className="lazyload img-product" data-src="images/products/womens/women-1.jpg" src="images/products/womens/women-1.jpg" alt="image-product"/>
                                            <img className="lazyload img-hover" data-src="images/products/womens/women-2.jpg" src="images/products/womens/women-2.jpg" alt="image-product"/>
                                        </a>
                                        <div className="list-product-btn">
                                            <a href="javascript:void(0);" className="box-icon wishlist btn-icon-action">
                                                <span className="icon icon-heart"></span>
                                                <span className="tooltip">Wishlist</span>
                                            </a>
                                            <a href="#compare" data-bs-toggle="offcanvas" aria-controls="compare" className="box-icon compare btn-icon-action">
                                                <span className="icon icon-gitDiff"></span>
                                                <span className="tooltip">Compare</span>
                                            </a>
                                            <a href="#quickView" data-bs-toggle="modal" className="box-icon quickview tf-btn-loading">
                                                <span className="icon icon-eye"></span>
                                                <span className="tooltip">Quick View</span>
                                            </a>
                                        </div>
                                        <div className="list-btn-main">
                                            <a href="#shoppingCart" data-bs-toggle="modal" className="btn-main-product">Add To cart</a>
                                        </div> 
                                    </div>
                                    <div className="card-product-info">
                                        <a href="product-detail.html" className="title link">Ribbed cotton-blend top</a>
                                        <span className="price">$69.99</span>
                                        <ul className="list-color-product">
                                            <li className="list-color-item color-swatch active line">
                                                <span className="swatch-value bg-dark-grey"></span>
                                                <img className="lazyload" data-src="images/products/womens/women-1.jpg" src="images/products/womens/women-1.jpg" alt="image-product"/>
                                            </li>
                                            <li className="list-color-item color-swatch">
                                                <span className="swatch-value bg-light-pink"></span>
                                                <img className="lazyload" data-src="images/products/womens/women-2.jpg" src="images/products/womens/women-2.jpg" alt="image-product"/>
                                            </li>
                                            <li className="list-color-item color-swatch">
                                                <span className="swatch-value bg-dark-grey-2"></span>
                                                <img className="lazyload" data-src="images/products/womens/women-3.jpg" src="images/products/womens/women-3.jpg" alt="image-product"/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <!-- card product 5 --> */}
                                <div className="card-product card-product-size">
                                    <div className="card-product-wrapper">
                                        <a href="product-detail.html" className="product-img">
                                            <img className="lazyload img-product" data-src="images/products/womens/women-8.jpg" src="images/products/womens/women-8.jpg" alt="image-product"/>
                                            <img className="lazyload img-hover" data-src="images/products/womens/women-9.jpg" src="images/products/womens/women-9.jpg" alt="image-product"/>
                                        </a>
                                        <div className="variant-wrap size-list">
                                            <ul className="variant-box">
                                                <li className="size-item">S</li>
                                                <li className="size-item">M</li>
                                                <li className="size-item">L</li>
                                                <li className="size-item">XL</li>
                                            </ul>
                                        </div>
                                        <div className="list-product-btn">
                                            <a href="javascript:void(0);" className="box-icon wishlist btn-icon-action">
                                                <span className="icon icon-heart"></span>
                                                <span className="tooltip">Wishlist</span>
                                            </a>
                                            <a href="#compare" data-bs-toggle="offcanvas" aria-controls="compare" className="box-icon compare btn-icon-action">
                                                <span className="icon icon-gitDiff"></span>
                                                <span className="tooltip">Compare</span>
                                            </a>
                                            <a href="#quickView" data-bs-toggle="modal" className="box-icon quickview tf-btn-loading">
                                                <span className="icon icon-eye"></span>
                                                <span className="tooltip">Quick View</span>
                                            </a>
                                        </div>
                                        <div className="list-btn-main">
                                            <a href="#quickAdd" data-bs-toggle="modal" className="btn-main-product">Quick Add</a>
                                        </div> 
                                    </div>
                                    <div className="card-product-info">
                                        <a href="product-detail.html" className="title link">Ribbed cotton-blend top</a>
                                        <span className="price">$39.99</span>
                                    </div>
                                </div>
                                {/* <!-- card product 6 --> */}
                                <div className="card-product">
                                    <div className="card-product-wrapper">
                                        <a href="product-detail.html" className="product-img">
                                            <img className="lazyload img-product" data-src="images/products/womens/women-171.jpg" src="images/products/womens/women-171.jpg" alt="image-product"/>
                                            <img className="lazyload img-hover" data-src="images/products/womens/women-172.jpg" src="images/products/womens/women-172.jpg" alt="image-product"/>
                                        </a>
                                        
                                        <div className="list-product-btn">
                                            <a href="javascript:void(0);" className="box-icon wishlist btn-icon-action">
                                                <span className="icon icon-heart"></span>
                                                <span className="tooltip">Wishlist</span>
                                            </a>
                                            <a href="#compare" data-bs-toggle="offcanvas" aria-controls="compare" className="box-icon compare btn-icon-action">
                                                <span className="icon icon-gitDiff"></span>
                                                <span className="tooltip">Compare</span>
                                            </a>
                                            <a href="#quickView" data-bs-toggle="modal" className="box-icon quickview tf-btn-loading">
                                                <span className="icon icon-eye"></span>
                                                <span className="tooltip">Quick View</span>
                                            </a>
                                        </div>
                                        <div className="list-btn-main">
                                            <a href="#quickAdd" data-bs-toggle="modal" className="btn-main-product">Quick Add</a>
                                        </div> 
                                    </div>
                                    <div className="card-product-info">
                                        <a href="product-detail.html" className="title link">Faux-leather trousers</a>
                                        <span className="price">$79.99</span>
                                        <ul className="list-color-product">
                                            <li className="list-color-item color-swatch active">
                                                <span className="swatch-value bg-orange"></span>
                                                <img className="lazyload" data-src="images/products/womens/women-171.jpg" src="images/products/womens/women-171.jpg" alt="image-product"/>
                                            </li>
                                            <li className="list-color-item color-swatch">
                                                <span className="swatch-value bg-dark-pink"></span>
                                                <img className="lazyload" data-src="images/products/womens/women-172.jpg" src="images/products/womens/women-172.jpg" alt="image-product"/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <!-- card product 7 --> */}
                                <div className="card-product card-product-size">
                                    <div className="card-product-wrapper">
                                        <a href="product-detail.html" className="product-img">
                                            <img className="lazyload img-product" data-src="images/products/womens/women-83.jpg" src="images/products/womens/women-83.jpg" alt="image-product"/>
                                            <img className="lazyload img-hover" data-src="images/products/womens/women-84.jpg" src="images/products/womens/women-84.jpg" alt="image-product"/>
                                        </a>
                                        <div className="on-sale-wrap"><span className="on-sale-item">-25%</span></div>
                                        <div className="variant-wrap size-list">
                                            <ul className="variant-box">
                                                <li className="size-item">S</li>
                                                <li className="size-item">M</li>
                                                <li className="size-item">L</li>
                                                <li className="size-item">XL</li>
                                            </ul>
                                        </div>
                                        <div className="list-product-btn">
                                            <a href="javascript:void(0);" className="box-icon wishlist btn-icon-action">
                                                <span className="icon icon-heart"></span>
                                                <span className="tooltip">Wishlist</span>
                                            </a>
                                            <a href="#compare" data-bs-toggle="offcanvas" aria-controls="compare" className="box-icon compare btn-icon-action">
                                                <span className="icon icon-gitDiff"></span>
                                                <span className="tooltip">Compare</span>
                                            </a>
                                            <a href="#quickView" data-bs-toggle="modal" className="box-icon quickview tf-btn-loading">
                                                <span className="icon icon-eye"></span>
                                                <span className="tooltip">Quick View</span>
                                            </a>
                                        </div>
                                        <div className="list-btn-main">
                                            <a href="#quickAdd" data-bs-toggle="modal" className="btn-main-product">Quick Add</a>
                                        </div> 
                                    </div>
                                    <div className="card-product-info">
                                        <a href="product-detail.html" className="title link">Belt wrap dress</a>
                                        <span className="price"><span className="old-price">$98.00</span>$129.99</span>
                                        <ul className="list-color-product">
                                            <li className="list-color-item color-swatch active">
                                                <span className="swatch-value bg-light-green"></span>
                                                <img className="lazyload" data-src="images/products/womens/women-83.jpg" src="images/products/womens/women-83.jpg" alt="image-product"/>
                                            </li>
                                            <li className="list-color-item color-swatch">
                                                <span className="swatch-value bg-grey"></span>
                                                <img className="lazyload" data-src="images/products/womens/women-94.jpg" src="images/products/womens/women-94.jpg" alt="image-product"/>
                                            </li>
                                            <li className="list-color-item color-swatch line">
                                                <span className="swatch-value bg-white"></span>
                                                <img className="lazyload" data-src="images/products/womens/women-87.jpg" src="images/products/womens/women-87.jpg" alt="image-product"/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <!-- card product 8 --> */}
                                <div className="card-product card-product-size">
                                    <div className="card-product-wrapper">
                                        <a href="product-detail.html" className="product-img">
                                            <img className="lazyload img-product" data-src="images/products/womens/women-102.jpg" src="images/products/womens/women-102.jpg" alt="image-product"/>
                                            <img className="lazyload img-hover" data-src="images/products/womens/women-103.jpg" src="images/products/womens/women-103.jpg" alt="image-product"/>
                                        </a>
                                        <div className="on-sale-wrap"><span className="on-sale-item">-25%</span></div>
                                        <div className="variant-wrap size-list">
                                            <ul className="variant-box">
                                                <li className="size-item">S</li>
                                                <li className="size-item">M</li>
                                                <li className="size-item">L</li>
                                                <li className="size-item">XL</li>
                                            </ul>
                                        </div>
                                        <div className="list-product-btn">
                                            <a href="javascript:void(0);" className="box-icon wishlist btn-icon-action">
                                                <span className="icon icon-heart"></span>
                                                <span className="tooltip">Wishlist</span>
                                            </a>
                                            <a href="#compare" data-bs-toggle="offcanvas" aria-controls="compare" className="box-icon compare btn-icon-action">
                                                <span className="icon icon-gitDiff"></span>
                                                <span className="tooltip">Compare</span>
                                            </a>
                                            <a href="#quickView" data-bs-toggle="modal" className="box-icon quickview tf-btn-loading">
                                                <span className="icon icon-eye"></span>
                                                <span className="tooltip">Quick View</span>
                                            </a>
                                        </div>
                                        <div className="list-btn-main">
                                            <a href="#quickAdd" data-bs-toggle="modal" className="btn-main-product">Quick Add</a>
                                        </div> 
                                    </div>
                                    <div className="card-product-info">
                                        <a href="product-detail.html" className="title link">Double-button trench coat</a>
                                        <span className="price"><span className="old-price">$98.00</span>$219.99</span>
                                        <ul className="list-color-product">
                                            <li className="list-color-item color-swatch active">
                                                <span className="swatch-value bg-grey-2"></span>
                                                <img className="lazyload" data-src="images/products/womens/women-102.jpg" src="images/products/womens/women-102.jpg" alt="image-product"/>
                                            </li>
                                            <li className="list-color-item color-swatch">
                                                <span className="swatch-value bg-light-orange"></span>
                                                <img className="lazyload" data-src="images/products/womens/women-111.jpg" src="images/products/womens/women-111.jpg" alt="image-product"/>
                                            </li>
                                            <li className="list-color-item color-swatch line">
                                                <span className="swatch-value bg-white"></span>
                                                <img className="lazyload" data-src="images/products/womens/women-104.jpg" src="images/products/womens/women-104.jpg" alt="image-product"/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="sec-btn text-center">
                                <a href="shop-default-grid.html" className="btn-line">View All Products</a>
                            </div>
                        </div>
                        <div className="tab-pane" id="onSale" role="tabpanel">
                            <div className="tf-grid-layout tf-col-2 lg-col-3 xl-col-4">
                                {/* <!-- card product 1 --> */}
                                <div className="card-product">
                                    <div className="card-product-wrapper">
                                        <a href="product-detail.html" className="product-img">
                                            <img className="lazyload img-product" data-src="images/products/womens/women-19.jpg" src="images/products/womens/women-19.jpg" alt="image-product"/>
                                            <img className="lazyload img-hover" data-src="images/products/womens/women-20.jpg" src="images/products/womens/women-20.jpg" alt="image-product"/>
                                        </a>
                                        <div className="list-product-btn">
                                            <a href="javascript:void(0);" className="box-icon wishlist btn-icon-action">
                                                <span className="icon icon-heart"></span>
                                                <span className="tooltip">Wishlist</span>
                                            </a>
                                            <a href="#compare" data-bs-toggle="offcanvas" aria-controls="compare" className="box-icon compare btn-icon-action">
                                                <span className="icon icon-gitDiff"></span>
                                                <span className="tooltip">Compare</span>
                                            </a>
                                            <a href="#quickView" data-bs-toggle="modal" className="box-icon quickview tf-btn-loading">
                                                <span className="icon icon-eye"></span>
                                                <span className="tooltip">Quick View</span>
                                            </a>
                                        </div>
                                        <div className="list-btn-main">
                                            <a href="#shoppingCart" data-bs-toggle="modal" className="btn-main-product">Add To cart</a>
                                        </div> 
                                    </div>
                                    <div className="card-product-info">
                                        <a href="product-detail.html" className="title link">V-neck cotton T-shirt</a>
                                        <span className="price">$59.99</span>
                                        
                                    </div>
                                </div>
                                {/* <!-- card product 2 --> */}
                                <div className="card-product">
                                    <div className="card-product-wrapper">
                                        <a href="product-detail.html" className="product-img">
                                            <img className="lazyload img-product" data-src="images/products/womens/women-176.jpg" src="images/products/womens/women-176.jpg" alt="image-product"/>
                                            <img className="lazyload img-hover" data-src="images/products/womens/women-179.jpg" src="images/products/womens/women-179.jpg" alt="image-product"/>
                                        </a>
                                        <div className="on-sale-wrap"><span className="on-sale-item">-25%</span></div>
                                        <div className="marquee-product bg-main">
                                            <div className="marquee-wrapper">
                                                <div className="initial-child-container">
                                                    <div className="marquee-child-item">
                                                        <p className="font-2 text-btn-uppercase fw-6 text-white">Hot Sale 25% OFF</p>
                                                    </div>
                                                    <div className="marquee-child-item">
                                                        <span className="icon icon-lightning text-critical"></span>
                                                    </div>
                                                    <div className="marquee-child-item">
                                                        <p className="font-2 text-btn-uppercase fw-6 text-white">Hot Sale 25% OFF</p>
                                                    </div>
                                                    <div className="marquee-child-item">
                                                        <span className="icon icon-lightning text-critical"></span>
                                                    </div>
                                                    <div className="marquee-child-item">
                                                        <p className="font-2 text-btn-uppercase fw-6 text-white">Hot Sale 25% OFF</p>
                                                    </div>
                                                    <div className="marquee-child-item">
                                                        <span className="icon icon-lightning text-critical"></span>
                                                    </div>
                                                    <div className="marquee-child-item">
                                                        <p className="font-2 text-btn-uppercase fw-6 text-white">Hot Sale 25% OFF</p>
                                                    </div>
                                                    <div className="marquee-child-item">
                                                        <span className="icon icon-lightning text-critical"></span>
                                                    </div>
                                                    <div className="marquee-child-item">
                                                        <p className="font-2 text-btn-uppercase fw-6 text-white">Hot Sale 25% OFF</p>
                                                    </div>
                                                    <div className="marquee-child-item">
                                                        <span className="icon icon-lightning text-critical"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="marquee-wrapper">
                                                <div className="initial-child-container">
                                                    <div className="marquee-child-item">
                                                        <p className="font-2 text-btn-uppercase fw-6 text-white">Hot Sale 25% OFF</p>
                                                    </div>
                                                    <div className="marquee-child-item">
                                                        <span className="icon icon-lightning text-critical"></span>
                                                    </div>
                                                    <div className="marquee-child-item">
                                                        <p className="font-2 text-btn-uppercase fw-6 text-white">Hot Sale 25% OFF</p>
                                                    </div>
                                                    <div className="marquee-child-item">
                                                        <span className="icon icon-lightning text-critical"></span>
                                                    </div>
                                                    <div className="marquee-child-item">
                                                        <p className="font-2 text-btn-uppercase fw-6 text-white">Hot Sale 25% OFF</p>
                                                    </div>
                                                    <div className="marquee-child-item">
                                                        <span className="icon icon-lightning text-critical"></span>
                                                    </div>
                                                    <div className="marquee-child-item">
                                                        <p className="font-2 text-btn-uppercase fw-6 text-white">Hot Sale 25% OFF</p>
                                                    </div>
                                                    <div className="marquee-child-item">
                                                        <span className="icon icon-lightning text-critical"></span>
                                                    </div>
                                                    <div className="marquee-child-item">
                                                        <p className="font-2 text-btn-uppercase fw-6 text-white">Hot Sale 25% OFF</p>
                                                    </div>
                                                    <div className="marquee-child-item">
                                                        <span className="icon icon-lightning text-critical"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-product-btn">
                                            <a href="javascript:void(0);" className="box-icon wishlist btn-icon-action">
                                                <span className="icon icon-heart"></span>
                                                <span className="tooltip">Wishlist</span>
                                            </a>
                                            <a href="#compare" data-bs-toggle="offcanvas" aria-controls="compare" className="box-icon compare btn-icon-action">
                                                <span className="icon icon-gitDiff"></span>
                                                <span className="tooltip">Compare</span>
                                            </a>
                                            <a href="#quickView" data-bs-toggle="modal" className="box-icon quickview tf-btn-loading">
                                                <span className="icon icon-eye"></span>
                                                <span className="tooltip">Quick View</span>
                                            </a>
                                        </div>
                                        <div className="list-btn-main">
                                            <a href="#shoppingCart" data-bs-toggle="modal" className="btn-main-product">Add To cart</a>
                                        </div> 
                                    </div>
                                    <div className="card-product-info">
                                        <a href="product-detail.html" className="title link">Polarized sunglasses</a>
                                        <span className="price"><span className="old-price">$98.00</span> $79.99</span>
                                        <ul className="list-color-product">
                                            <li className="list-color-item color-swatch active line">
                                                <span className="swatch-value bg-light-blue"></span>
                                                <img className="lazyload" data-src="images/products/womens/women-176.jpg" src="images/products/womens/women-176.jpg" alt="image-product"/>
                                            </li>
                                            <li className="list-color-item color-swatch">
                                                <span className="swatch-value bg-light-blue-2"></span>
                                                <img className="lazyload" data-src="images/products/womens/women-177.jpg" src="images/products/womens/women-177.jpg" alt="image-product"/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <!-- card product 3 --> */}
                                <div className="card-product card-product-size">
                                    <div className="card-product-wrapper">
                                        <a href="product-detail.html" className="product-img">
                                            <img className="lazyload img-product" data-src="images/products/womens/women-29.jpg" src="images/products/womens/women-29.jpg" alt="image-product"/>
                                            <img className="lazyload img-hover" data-src="images/products/womens/women-30.jpg" src="images/products/womens/women-30.jpg" alt="image-product"/>
                                        </a>
                                        <div className="variant-wrap size-list">
                                            <ul className="variant-box">
                                                <li className="size-item">S</li>
                                                <li className="size-item">M</li>
                                                <li className="size-item">L</li>
                                                <li className="size-item">XL</li>
                                            </ul>
                                        </div>
                                        <div className="variant-wrap countdown-wrap">
                                            <div className="variant-box">
                                                <div className="js-countdown" data-timer="1007500" data-labels="D :,H :,M :,S"></div>
                                            </div>
                                        </div>
                                        <div className="list-product-btn">
                                            <a href="javascript:void(0);" className="box-icon wishlist btn-icon-action">
                                                <span className="icon icon-heart"></span>
                                                <span className="tooltip">Wishlist</span>
                                            </a>
                                            <a href="#compare" data-bs-toggle="offcanvas" aria-controls="compare" className="box-icon compare btn-icon-action">
                                                <span className="icon icon-gitDiff"></span>
                                                <span className="tooltip">Compare</span>
                                            </a>
                                            <a href="#quickView" data-bs-toggle="modal" className="box-icon quickview tf-btn-loading">
                                                <span className="icon icon-eye"></span>
                                                <span className="tooltip">Quick View</span>
                                            </a>
                                        </div>
                                        <div className="list-btn-main">
                                            <a href="#quickAdd" data-bs-toggle="modal" className="btn-main-product">Quick Add</a>
                                        </div> 
                                    </div>
                                    <div className="card-product-info">
                                        <a href="product-detail.html" className="title link">Ramie shirt with pockets </a>
                                        <span className="price"><span className="old-price">$98.00</span> $89.99</span>
                                        <ul className="list-color-product">
                                            <li className="list-color-item color-swatch active line">
                                                <span className="swatch-value bg-light-orange"></span>
                                                <img className="lazyload" data-src="images/products/womens/women-29.jpg" src="images/products/womens/women-29.jpg" alt="image-product"/>
                                            </li>
                                            <li className="list-color-item color-swatch">
                                                <span className="swatch-value bg-light-grey"></span>
                                                <img className="lazyload" data-src="images/products/womens/women-33.jpg" src="images/products/womens/women-33.jpg" alt="image-product"/>
                                            </li>
                                            
                                        </ul>
                                    </div>
                                </div>
                                {/* <!-- card product 4 --> */}
                                <div className="card-product">
                                    <div className="card-product-wrapper">
                                        <a href="product-detail.html" className="product-img">
                                            <img className="lazyload img-product" data-src="images/products/womens/women-1.jpg" src="images/products/womens/women-1.jpg" alt="image-product"/>
                                            <img className="lazyload img-hover" data-src="images/products/womens/women-2.jpg" src="images/products/womens/women-2.jpg" alt="image-product"/>
                                        </a>
                                        <div className="list-product-btn">
                                            <a href="javascript:void(0);" className="box-icon wishlist btn-icon-action">
                                                <span className="icon icon-heart"></span>
                                                <span className="tooltip">Wishlist</span>
                                            </a>
                                            <a href="#compare" data-bs-toggle="offcanvas" aria-controls="compare" className="box-icon compare btn-icon-action">
                                                <span className="icon icon-gitDiff"></span>
                                                <span className="tooltip">Compare</span>
                                            </a>
                                            <a href="#quickView" data-bs-toggle="modal" className="box-icon quickview tf-btn-loading">
                                                <span className="icon icon-eye"></span>
                                                <span className="tooltip">Quick View</span>
                                            </a>
                                        </div>
                                        <div className="list-btn-main">
                                            <a href="#shoppingCart" data-bs-toggle="modal" className="btn-main-product">Add To cart</a>
                                        </div> 
                                    </div>
                                    <div className="card-product-info">
                                        <a href="product-detail.html" className="title link">Ribbed cotton-blend top</a>
                                        <span className="price">$69.99</span>
                                        <ul className="list-color-product">
                                            <li className="list-color-item color-swatch active line">
                                                <span className="swatch-value bg-dark-grey"></span>
                                                <img className="lazyload" data-src="images/products/womens/women-1.jpg" src="images/products/womens/women-1.jpg" alt="image-product"/>
                                            </li>
                                            <li className="list-color-item color-swatch">
                                                <span className="swatch-value bg-light-pink"></span>
                                                <img className="lazyload" data-src="images/products/womens/women-2.jpg" src="images/products/womens/women-2.jpg" alt="image-product"/>
                                            </li>
                                            <li className="list-color-item color-swatch">
                                                <span className="swatch-value bg-dark-grey-2"></span>
                                                <img className="lazyload" data-src="images/products/womens/women-3.jpg" src="images/products/womens/women-3.jpg" alt="image-product"/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <!-- card product 5 --> */}
                                <div className="card-product card-product-size">
                                    <div className="card-product-wrapper">
                                        <a href="product-detail.html" className="product-img">
                                            <img className="lazyload img-product" data-src="images/products/womens/women-8.jpg" src="images/products/womens/women-8.jpg" alt="image-product"/>
                                            <img className="lazyload img-hover" data-src="images/products/womens/women-9.jpg" src="images/products/womens/women-9.jpg" alt="image-product"/>
                                        </a>
                                        <div className="variant-wrap size-list">
                                            <ul className="variant-box">
                                                <li className="size-item">S</li>
                                                <li className="size-item">M</li>
                                                <li className="size-item">L</li>
                                                <li className="size-item">XL</li>
                                            </ul>
                                        </div>
                                        <div className="list-product-btn">
                                            <a href="javascript:void(0);" className="box-icon wishlist btn-icon-action">
                                                <span className="icon icon-heart"></span>
                                                <span className="tooltip">Wishlist</span>
                                            </a>
                                            <a href="#compare" data-bs-toggle="offcanvas" aria-controls="compare" className="box-icon compare btn-icon-action">
                                                <span className="icon icon-gitDiff"></span>
                                                <span className="tooltip">Compare</span>
                                            </a>
                                            <a href="#quickView" data-bs-toggle="modal" className="box-icon quickview tf-btn-loading">
                                                <span className="icon icon-eye"></span>
                                                <span className="tooltip">Quick View</span>
                                            </a>
                                        </div>
                                        <div className="list-btn-main">
                                            <a href="#quickAdd" data-bs-toggle="modal" className="btn-main-product">Quick Add</a>
                                        </div> 
                                    </div>
                                    <div className="card-product-info">
                                        <a href="product-detail.html" className="title link">Ribbed cotton-blend top</a>
                                        <span className="price">$39.99</span>
                                    </div>
                                </div>
                                {/* <!-- card product 6 --> */}
                                <div className="card-product">
                                    <div className="card-product-wrapper">
                                        <a href="product-detail.html" className="product-img">
                                            <img className="lazyload img-product" data-src="images/products/womens/women-171.jpg" src="images/products/womens/women-171.jpg" alt="image-product"/>
                                            <img className="lazyload img-hover" data-src="images/products/womens/women-172.jpg" src="images/products/womens/women-172.jpg" alt="image-product"/>
                                        </a>
                                        
                                        <div className="list-product-btn">
                                            <a href="javascript:void(0);" className="box-icon wishlist btn-icon-action">
                                                <span className="icon icon-heart"></span>
                                                <span className="tooltip">Wishlist</span>
                                            </a>
                                            <a href="#compare" data-bs-toggle="offcanvas" aria-controls="compare" className="box-icon compare btn-icon-action">
                                                <span className="icon icon-gitDiff"></span>
                                                <span className="tooltip">Compare</span>
                                            </a>
                                            <a href="#quickView" data-bs-toggle="modal" className="box-icon quickview tf-btn-loading">
                                                <span className="icon icon-eye"></span>
                                                <span className="tooltip">Quick View</span>
                                            </a>
                                        </div>
                                        <div className="list-btn-main">
                                            <a href="#quickAdd" data-bs-toggle="modal" className="btn-main-product">Quick Add</a>
                                        </div> 
                                    </div>
                                    <div className="card-product-info">
                                        <a href="product-detail.html" className="title link">Faux-leather trousers</a>
                                        <span className="price">$79.99</span>
                                        <ul className="list-color-product">
                                            <li className="list-color-item color-swatch active">
                                                <span className="swatch-value bg-orange"></span>
                                                <img className="lazyload" data-src="images/products/womens/women-171.jpg" src="images/products/womens/women-171.jpg" alt="image-product"/>
                                            </li>
                                            <li className="list-color-item color-swatch">
                                                <span className="swatch-value bg-dark-pink"></span>
                                                <img className="lazyload" data-src="images/products/womens/women-172.jpg" src="images/products/womens/women-172.jpg" alt="image-product"/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <!-- card product 7 --> */}
                                <div className="card-product card-product-size">
                                    <div className="card-product-wrapper">
                                        <a href="product-detail.html" className="product-img">
                                            <img className="lazyload img-product" data-src="images/products/womens/women-83.jpg" src="images/products/womens/women-83.jpg" alt="image-product"/>
                                            <img className="lazyload img-hover" data-src="images/products/womens/women-84.jpg" src="images/products/womens/women-84.jpg" alt="image-product"/>
                                        </a>
                                        <div className="on-sale-wrap"><span className="on-sale-item">-25%</span></div>
                                        <div className="variant-wrap size-list">
                                            <ul className="variant-box">
                                                <li className="size-item">S</li>
                                                <li className="size-item">M</li>
                                                <li className="size-item">L</li>
                                                <li className="size-item">XL</li>
                                            </ul>
                                        </div>
                                        <div className="list-product-btn">
                                            <a href="javascript:void(0);" className="box-icon wishlist btn-icon-action">
                                                <span className="icon icon-heart"></span>
                                                <span className="tooltip">Wishlist</span>
                                            </a>
                                            <a href="#compare" data-bs-toggle="offcanvas" aria-controls="compare" className="box-icon compare btn-icon-action">
                                                <span className="icon icon-gitDiff"></span>
                                                <span className="tooltip">Compare</span>
                                            </a>
                                            <a href="#quickView" data-bs-toggle="modal" className="box-icon quickview tf-btn-loading">
                                                <span className="icon icon-eye"></span>
                                                <span className="tooltip">Quick View</span>
                                            </a>
                                        </div>
                                        <div className="list-btn-main">
                                            <a href="#quickAdd" data-bs-toggle="modal" className="btn-main-product">Quick Add</a>
                                        </div> 
                                    </div>
                                    <div className="card-product-info">
                                        <a href="product-detail.html" className="title link">Belt wrap dress</a>
                                        <span className="price"><span className="old-price">$98.00</span>$129.99</span>
                                        <ul className="list-color-product">
                                            <li className="list-color-item color-swatch active">
                                                <span className="swatch-value bg-light-green"></span>
                                                <img className="lazyload" data-src="images/products/womens/women-83.jpg" src="images/products/womens/women-83.jpg" alt="image-product"/>
                                            </li>
                                            <li className="list-color-item color-swatch">
                                                <span className="swatch-value bg-grey"></span>
                                                <img className="lazyload" data-src="images/products/womens/women-94.jpg" src="images/products/womens/women-94.jpg" alt="image-product"/>
                                            </li>
                                            <li className="list-color-item color-swatch line">
                                                <span className="swatch-value bg-white"></span>
                                                <img className="lazyload" data-src="images/products/womens/women-87.jpg" src="images/products/womens/women-87.jpg" alt="image-product"/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <!-- card product 8 --> */}
                                <div className="card-product card-product-size">
                                    <div className="card-product-wrapper">
                                        <a href="product-detail.html" className="product-img">
                                            <img className="lazyload img-product" data-src="images/products/womens/women-102.jpg" src="images/products/womens/women-102.jpg" alt="image-product"/>
                                            <img className="lazyload img-hover" data-src="images/products/womens/women-103.jpg" src="images/products/womens/women-103.jpg" alt="image-product"/>
                                        </a>
                                        <div className="on-sale-wrap"><span className="on-sale-item">-25%</span></div>
                                        <div className="variant-wrap size-list">
                                            <ul className="variant-box">
                                                <li className="size-item">S</li>
                                                <li className="size-item">M</li>
                                                <li className="size-item">L</li>
                                                <li className="size-item">XL</li>
                                            </ul>
                                        </div>
                                        <div className="list-product-btn">
                                            <a href="javascript:void(0);" className="box-icon wishlist btn-icon-action">
                                                <span className="icon icon-heart"></span>
                                                <span className="tooltip">Wishlist</span>
                                            </a>
                                            <a href="#compare" data-bs-toggle="offcanvas" aria-controls="compare" className="box-icon compare btn-icon-action">
                                                <span className="icon icon-gitDiff"></span>
                                                <span className="tooltip">Compare</span>
                                            </a>
                                            <a href="#quickView" data-bs-toggle="modal" className="box-icon quickview tf-btn-loading">
                                                <span className="icon icon-eye"></span>
                                                <span className="tooltip">Quick View</span>
                                            </a>
                                        </div>
                                        <div className="list-btn-main">
                                            <a href="#quickAdd" data-bs-toggle="modal" className="btn-main-product">Quick Add</a>
                                        </div> 
                                    </div>
                                    <div className="card-product-info">
                                        <a href="product-detail.html" className="title link">Double-button trench coat</a>
                                        <span className="price"><span className="old-price">$98.00</span>$219.99</span>
                                        <ul className="list-color-product">
                                            <li className="list-color-item color-swatch active">
                                                <span className="swatch-value bg-grey-2"></span>
                                                <img className="lazyload" data-src="images/products/womens/women-102.jpg" src="images/products/womens/women-102.jpg" alt="image-product"/>
                                            </li>
                                            <li className="list-color-item color-swatch">
                                                <span className="swatch-value bg-light-orange"></span>
                                                <img className="lazyload" data-src="images/products/womens/women-111.jpg" src="images/products/womens/women-111.jpg" alt="image-product"/>
                                            </li>
                                            <li className="list-color-item color-swatch line">
                                                <span className="swatch-value bg-white"></span>
                                                <img className="lazyload" data-src="images/products/womens/women-104.jpg" src="images/products/womens/women-104.jpg" alt="image-product"/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="sec-btn text-center">
                                <a href="shop-default-grid.html" className="btn-line">View All Products</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Seller