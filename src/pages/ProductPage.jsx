import React from "react";

const ProductPage=()=>{
    return (
        <>
        {/* // <!-- page-title --> */}
        <div className="page-title" style="background-image: url(images/section/page-title.jpg);">
            <div className="container-full">
                <div className="row">
                    <div className="col-12">
                        <h3 className="heading text-center">Women</h3>
                        <ul className="breadcrumbs d-flex align-items-center justify-content-center">
                            <li>
                                <a className="link" href="index.html">Homepage</a>
                            </li>
                            <li>
                                <i className="icon-arrRight"></i>
                            </li>
                            <li>
                                Women
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- /page-title -->
        <!-- Section product -->
        <section className="flat-spacing">
            <div className="container">
                <div className="tf-shop-control">
                    <div className="tf-control-filter">
                        <a href="#filterShop" data-bs-toggle="offcanvas" aria-controls="filterShop" className="tf-btn-filter"><span className="icon icon-filter"></span><span className="text">Filters</span></a>
                        <div className="d-none d-lg-flex shop-sale-text">
                            <i className="icon icon-checkCircle"></i>
                            <p className="text-caption-1">Shop sale items only</p>
                        </div>
                    </div>
                    <ul className="tf-control-layout">
                        <li className="tf-view-layout-switch sw-layout-list list-layout" data-value-layout="list">
                            <div className="item">
                                <svg className="icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="3" cy="6" r="2.5" stroke="#181818"/>
                                    <rect x="7.5" y="3.5" width="12" height="5" rx="2.5" stroke="#181818"/>
                                    <circle cx="3" cy="14" r="2.5" stroke="#181818"/>
                                    <rect x="7.5" y="11.5" width="12" height="5" rx="2.5" stroke="#181818"/>
                                </svg>     
                            </div>
                        </li>
                        <li className="tf-view-layout-switch sw-layout-2" data-value-layout="tf-col-2">
                            <div className="item">
                                <svg className="icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="6" cy="6" r="2.5" stroke="#181818"/>
                                    <circle cx="14" cy="6" r="2.5" stroke="#181818"/>
                                    <circle cx="6" cy="14" r="2.5" stroke="#181818"/>
                                    <circle cx="14" cy="14" r="2.5" stroke="#181818"/>
                                </svg>   
                            </div>
                        </li>
                        <li className="tf-view-layout-switch sw-layout-3" data-value-layout="tf-col-3">
                            <div className="item">
                                <svg className="icon" width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="3" cy="6" r="2.5" stroke="#181818"/>
                                    <circle cx="11" cy="6" r="2.5" stroke="#181818"/>
                                    <circle cx="19" cy="6" r="2.5" stroke="#181818"/>
                                    <circle cx="3" cy="14" r="2.5" stroke="#181818"/>
                                    <circle cx="11" cy="14" r="2.5" stroke="#181818"/>
                                    <circle cx="19" cy="14" r="2.5" stroke="#181818"/>
                                </svg>                                    
                            </div>
                        </li>
                        <li className="tf-view-layout-switch sw-layout-4 active" data-value-layout="tf-col-4">
                            <div className="item">
                                <svg className="icon" width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="3" cy="6" r="2.5" stroke="#181818"/>
                                    <circle cx="11" cy="6" r="2.5" stroke="#181818"/>
                                    <circle cx="19" cy="6" r="2.5" stroke="#181818"/>
                                    <circle cx="27" cy="6" r="2.5" stroke="#181818"/>
                                    <circle cx="3" cy="14" r="2.5" stroke="#181818"/>
                                    <circle cx="11" cy="14" r="2.5" stroke="#181818"/>
                                    <circle cx="19" cy="14" r="2.5" stroke="#181818"/>
                                    <circle cx="27" cy="14" r="2.5" stroke="#181818"/>
                                </svg>
                            </div>
                        </li>
                        <li className="tf-view-layout-switch sw-layout-5" data-value-layout="tf-col-5">
                            <div className="item">
                                <svg className="icon" width="38" height="20" viewBox="0 0 38 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="3" cy="6" r="2.5" stroke="#181818"/>
                                    <circle cx="11" cy="6" r="2.5" stroke="#181818"/>
                                    <circle cx="19" cy="6" r="2.5" stroke="#181818"/>
                                    <circle cx="27" cy="6" r="2.5" stroke="#181818"/>
                                    <circle cx="35" cy="6" r="2.5" stroke="#181818"/>
                                    <circle cx="3" cy="14" r="2.5" stroke="#181818"/>
                                    <circle cx="11" cy="14" r="2.5" stroke="#181818"/>
                                    <circle cx="19" cy="14" r="2.5" stroke="#181818"/>
                                    <circle cx="27" cy="14" r="2.5" stroke="#181818"/>
                                    <circle cx="35" cy="14" r="2.5" stroke="#181818"/>
                                </svg>                                    
                            </div>
                        </li>
                        <li className="tf-view-layout-switch sw-layout-6" data-value-layout="tf-col-6">
                            <div className="item">
                                <svg className="icon" width="46" height="20" viewBox="0 0 46 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="3" cy="6" r="2.5" stroke="#181818"/>
                                    <circle cx="11" cy="6" r="2.5" stroke="#181818"/>
                                    <circle cx="19" cy="6" r="2.5" stroke="#181818"/>
                                    <circle cx="27" cy="6" r="2.5" stroke="#181818"/>
                                    <circle cx="35" cy="6" r="2.5" stroke="#181818"/>
                                    <circle cx="43" cy="6" r="2.5" stroke="#181818"/>
                                    <circle cx="3" cy="14" r="2.5" stroke="#181818"/>
                                    <circle cx="11" cy="14" r="2.5" stroke="#181818"/>
                                    <circle cx="19" cy="14" r="2.5" stroke="#181818"/>
                                    <circle cx="27" cy="14" r="2.5" stroke="#181818"/>
                                    <circle cx="35" cy="14" r="2.5" stroke="#181818"/>
                                    <circle cx="43" cy="14" r="2.5" stroke="#181818"/>
                                </svg>   
                            </div>
                        </li>
                    </ul>
                    <div className="tf-control-sorting">
                        <p className="d-none d-lg-block text-caption-1">Sort by:</p>
                        <div className="tf-dropdown-sort" data-bs-toggle="dropdown">
                            <div className="btn-select">
                                <span className="text-sort-value">Best selling</span>
                                <span className="icon icon-arrow-down"></span>
                            </div>
                            <div className="dropdown-menu">
                                <div className="select-item" data-sort-value="best-selling">
                                    <span className="text-value-item">Best selling</span>
                                </div>
                                <div className="select-item" data-sort-value="a-z">
                                    <span className="text-value-item">Alphabetically, A-Z</span>
                                </div>
                                <div className="select-item" data-sort-value="z-a">
                                    <span className="text-value-item">Alphabetically, Z-A</span>
                                </div>
                                <div className="select-item" data-sort-value="price-low-high">
                                    <span className="text-value-item">Price, low to high</span>
                                </div>
                                <div className="select-item" data-sort-value="price-high-low">
                                    <span className="text-value-item">Price, high to low</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wrapper-control-shop">
                    <div className="meta-filter-shop">
                        <div id="product-count-grid" className="count-text"></div>
                        <div id="product-count-list" className="count-text"></div>
                        <div id="applied-filters"></div>
                        <button id="remove-all" className="remove-all-filters text-btn-uppercase" style="display: none;">REMOVE ALL <i className="icon icon-close"></i></button>
                    </div>
                    <div className="tf-list-layout wrapper-shop" id="listLayout">
                        <!-- card product list 1 -->
                        <div className="card-product style-list" data-availability="Out of stock" data-brand="adidas">
                            <div className="card-product-wrapper">
                                <a href="product-detail.html" className="product-img">
                                    <img className="lazyload img-product" data-src="images/products/womens/women-19.jpg" src="images/products/womens/women-19.jpg" alt="image-product"/>
                                    <img className="lazyload img-hover" data-src="images/products/womens/women-20.jpg" src="images/products/womens/women-20.jpg" alt="image-product"/>
                                </a>
                            </div>
                            <div className="card-product-info">
                                <a href="product-detail.html" className="title link">Double-button trench coat</a>
                                <div className="price"><span className="old-price">$98.00</span> <span className="current-price">$219.99</span></div>
                                <p className="description text-secondary text-line-clamp-2">The garments labelled as Committed are products that have been produced using sustainable fibres or processes, reducing their environmental impact.</p>
                                <div className="variant-wrap-list">
                                    <ul className="list-color-product">
                                        <li className="list-color-item color-swatch active line">
                                            <span className="d-none text-capitalize color-filter">Green</span>
                                            <span className="swatch-value bg-light-green"></span>
                                            <img className="lazyload" data-src="images/products/womens/women-19.jpg" src="images/products/womens/women-19.jpg" alt="image-product"/>
                                        </li>
                                        <li className="list-color-item color-swatch">
                                            <span className="d-none text-capitalize color-filter">Grey</span>
                                            <span className="swatch-value bg-grey-2"></span>
                                            <img className="lazyload" data-src="images/products/womens/women-1.jpg" src="images/products/womens/women-1.jpg" alt="image-product"/>
                                        </li>
                                        <li className="list-color-item color-swatch line">
                                            <span className="d-none text-capitalize color-filter">White</span>
                                            <span className="swatch-value bg-white"></span>
                                            <img className="lazyload" data-src="images/products/womens/women-8.jpg" src="images/products/womens/women-8.jpg" alt="image-product"/>
                                        </li>
                                    </ul>
                                    <div className="size-box list-product-btn">
                                        <span className="size-item box-icon">S</span>
                                        <span className="size-item box-icon">M</span>
                                        <span className="size-item box-icon active">L</span>
                                        <span className="size-item box-icon">XL</span>
                                        <span className="size-item box-icon disable">XXL</span>
                                    </div>
                                    <div className="list-product-btn">
                                        <a href="#shoppingCart" data-bs-toggle="modal" className="btn-main-product">Add To cart</a>
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
                                </div>
        
                                
                            </div>
                        </div>
                        <!-- card product list 2 -->
                        <div className="card-product style-list" data-availability="Out of stock" data-brand="LV">
                            <div className="card-product-wrapper">
                                <a href="product-detail.html" className="product-img">
                                    <img className="lazyload img-product" data-src="images/products/womens/women-29.jpg" src="images/products/womens/women-29.jpg" alt="image-product"/>
                                    <img className="lazyload img-hover" data-src="images/products/womens/women-31.jpg" src="images/products/womens/women-31.jpg" alt="image-product"/>
                                </a>
                                <div className="on-sale-wrap"><span className="on-sale-item">-25%</span></div>
                            </div>
                            <div className="card-product-info">
                                <a href="product-detail.html" className="title link">Polarized sunglasses</a>
                                <span className="price current-price">$59.99</span>
                                <p className="description text-secondary text-line-clamp-2">The garments labelled as Committed are products that have been produced using sustainable fibres or processes, reducing their environmental impact.</p>
                                <div className="variant-wrap-list">
                                    <ul className="list-color-product">
                                        <li className="list-color-item color-swatch active">
                                            <span className="d-none text-capitalize color-filter">Orange</span>
                                            <span className="swatch-value bg-light-orange"></span>
                                            <img className="lazyload" data-src="images/products/womens/women-29.jpg" src="images/products/womens/women-29.jpg" alt="image-product"/>
                                        </li>
                                        <li className="list-color-item color-swatch">
                                            <span className="d-none text-capitalize color-filter">Orange</span>
                                            <span className="swatch-value bg-orange"></span>
                                            <img className="lazyload" data-src="images/products/womens/women-43.jpg" src="images/products/womens/women-43.jpg" alt="image-product"/>
                                        </li>
                                        <li className="list-color-item color-swatch">
                                            <span className="d-none text-capitalize color-filter">Pink</span>
                                            <span className="swatch-value bg-dark-pink"></span>
                                            <img className="lazyload" data-src="images/products/womens/women-47.jpg" src="images/products/womens/women-47.jpg" alt="image-product"/>
                                        </li>
                                    </ul>
                                    <div className="size-box list-product-btn">
                                        <span className="size-item box-icon">S</span>
                                        <span className="size-item box-icon">M</span>
                                        <span className="size-item box-icon">L</span>
                                        <span className="size-item box-icon">XL</span>
                                        <span className="size-item box-icon disable">XXL</span>
                                    </div>
                                    <div className="list-product-btn">
                                        <a href="#shoppingCart" data-bs-toggle="modal" className="btn-main-product">Add To cart</a>
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
                                </div>
        
                                
                            </div>
                        </div>
                        <!-- card product list 3 -->
                        <div className="card-product style-list" data-availability="In stock" data-brand="nike">
                            <div className="card-product-wrapper">
                                <a href="product-detail.html" className="product-img">
                                    <img className="lazyload img-product" data-src="images/products/womens/women-63.jpg" src="images/products/womens/women-63.jpg" alt="image-product"/>
                                    <img className="lazyload img-hover" data-src="images/products/womens/women-64.jpg" src="images/products/womens/women-64.jpg" alt="image-product"/>
                                </a>
                            </div>
                            <div className="card-product-info">
                                <a href="product-detail.html" className="title link">Ribbed cotton-blend top</a>
                                <div className="price"><span className="old-price">$98.00</span><span className="current-price">$219.95</span></div>
                                <p className="description text-secondary text-line-clamp-2">The garments labelled as Committed are products that have been produced using sustainable fibres or processes, reducing their environmental impact.</p>
                                <div className="variant-wrap-list">
                                    <ul className="list-color-product">
                                        <li className="list-color-item color-swatch active line">
                                            <span className="d-none text-capitalize color-filter">White</span>
                                            <span className="swatch-value bg-white"></span>
                                            <img className="lazyload" data-src="images/products/womens/women-63.jpg" src="images/products/womens/women-63.jpg" alt="image-product"/>
                                        </li>
                                        <li className="list-color-item color-swatch">
                                            <span className="d-none text-capitalize color-filter">Grey</span>
                                            <span className="swatch-value bg-grey-2"></span>
                                            <img className="lazyload" data-src="images/products/womens/women-69.jpg" src="images/products/womens/women-69.jpg" alt="image-product"/>
                                        </li>
                                        <li className="list-color-item color-swatch">
                                            <span className="d-none text-capitalize color-filter">Black</span>
                                            <span className="swatch-value bg-main"></span>
                                            <img className="lazyload" data-src="images/products/womens/women-70.jpg" src="images/products/womens/women-70.jpg" alt="image-product"/>
                                        </li>
                                    </ul>
                                    <div className="size-box list-product-btn">
                                        <span className="size-item box-icon">S</span>
                                        <span className="size-item box-icon">M</span>
                                        <span className="size-item box-icon">L</span>
                                        <span className="size-item box-icon">XL</span>
                                        <span className="size-item box-icon disable">XXL</span>
                                    </div>
                                    <div className="list-product-btn">
                                        <a href="#shoppingCart" data-bs-toggle="modal" className="btn-main-product">Add To cart</a>
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
                                </div>
        
                                
                            </div>
                        </div>
                        <!-- card product list 4 -->
                        <div className="card-product style-list" data-availability="In stock" data-brand="gucci">   
                            <div className="card-product-wrapper">
                                <a href="product-detail.html" className="product-img">
                                    <img className="lazyload img-product" data-src="images/products/womens/women-37.jpg" src="images/products/womens/women-37.jpg" alt="image-product"/>
                                    <img className="lazyload img-hover" data-src="images/products/womens/women-38.jpg" src="images/products/womens/women-38.jpg" alt="image-product"/>
                                </a>
                                <div className="on-sale-wrap"><span className="on-sale-item">-25%</span></div>
                            </div>
                            <div className="card-product-info">
                                <a href="product-detail.html" className="title link">V-neck cotton T-shirt</a>
                                <span className="price current-price">$59.99</span>
                                <p className="description text-secondary text-line-clamp-2">The garments labelled as Committed are products that have been produced using sustainable fibres or processes, reducing their environmental impact.</p>
                                <div className="variant-wrap-list">
                                    <ul className="list-color-product">
                                        <li className="list-color-item color-swatch active">
                                            <span className="d-none text-capitalize color-filter">Light Blue</span>
                                            <span className="swatch-value bg-light-blue"></span>
                                            <img className="lazyload" data-src="images/products/womens/women-37.jpg" src="images/products/womens/women-37.jpg" alt="image-product"/>
                                        </li>
                                        <li className="list-color-item color-swatch line">
                                            <span className="d-none text-capitalize color-filter">White</span>
                                            <span className="swatch-value bg-white"></span>
                                            <img className="lazyload" data-src="images/products/womens/women-41.jpg" src="images/products/womens/women-41.jpg" alt="image-product"/>
                                        </li>
                                        
                                    </ul>
                                    <div className="size-box list-product-btn">
                                        <span className="size-item box-icon">S</span>
                                        <span className="size-item box-icon">M</span>
                                        <span className="size-item box-icon">L</span>
                                        <span className="size-item box-icon">XL</span>
                                        <span className="size-item box-icon disable">XXL</span>
                                    </div>
                                    <div className="list-product-btn">
                                        <a href="#shoppingCart" data-bs-toggle="modal" className="btn-main-product">Add To cart</a>
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
                                </div>
        
                                
                            </div>
                        </div>
                        <!-- card product list 5 -->
                        <div className="card-product style-list" data-availability="In stock" data-brand="hermes">
                            <div className="card-product-wrapper">
                                <a href="product-detail.html" className="product-img">
                                    <img className="lazyload img-product" data-src="images/products/womens/women-133.jpg" src="images/products/womens/women-133.jpg" alt="image-product"/>
                                    <img className="lazyload img-hover" data-src="images/products/womens/women-131.jpg" src="images/products/womens/women-131.jpg" alt="image-product"/>
                                </a>
                            </div>
                            <div className="card-product-info">
                                <a href="product-detail.html" className="title link">V-neck cotton T-shirt</a>
                                <span className="price current-price">$59.99</span>
                                <p className="description text-secondary text-line-clamp-2">The garments labelled as Committed are products that have been produced using sustainable fibres or processes, reducing their environmental impact.</p>
                                <div className="variant-wrap-list">
                                    <ul className="list-color-product">
                                        <li className="list-color-item color-swatch active">
                                            <span className="d-none text-capitalize color-filter">Green</span>
                                            <span className="swatch-value bg-light-green"></span>
                                            <img className="lazyload" data-src="images/products/womens/women-133.jpg" src="images/products/womens/women-133.jpg" alt="image-product"/>
                                        </li>
                                        <li className="list-color-item color-swatch">
                                            <span className="d-none text-capitalize color-filter">Black</span>
                                            <span className="swatch-value bg-main"></span>
                                            <img className="lazyload" data-src="images/products/womens/women-124.jpg" src="images/products/womens/women-124.jpg" alt="image-product"/>
                                        </li>
                                        
                                    </ul>
                                    <div className="size-box list-product-btn">
                                        <span className="size-item box-icon">S</span>
                                        <span className="size-item box-icon">M</span>
                                        <span className="size-item box-icon">L</span>
                                        <span className="size-item box-icon">XL</span>
                                        <span className="size-item box-icon disable">XXL</span>
                                    </div>
                                    <div className="list-product-btn">
                                        <a href="#shoppingCart" data-bs-toggle="modal" className="btn-main-product">Add To cart</a>
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
                                </div>
                            </div>
                        </div>
                        <!-- card product list 6 -->
                        <div className="card-product style-list" data-availability="In stock" data-brand="nike">
                            <div className="card-product-wrapper">
                                <a href="product-detail.html" className="product-img">
                                    <img className="lazyload img-product" data-src="images/products/womens/women-167.jpg" src="images/products/womens/women-167.jpg" alt="image-product"/>
                                    <img className="lazyload img-hover" data-src="images/products/womens/women-168.jpg" src="images/products/womens/women-168.jpg" alt="image-product"/>
                                </a>
                                <div className="on-sale-wrap"><span className="on-sale-item">-25%</span></div>

                            </div>
                            <div className="card-product-info">
                                <a href="product-detail.html" className="title link">Cotton shopper bag</a>
                                <span className="price current-price">$199.25</span>
                                <p className="description text-secondary text-line-clamp-2">The garments labelled as Committed are products that have been produced using sustainable fibres or processes, reducing their environmental impact.</p>
                                <div className="variant-wrap-list">
                                    <ul className="list-color-product">
                                        <li className="list-color-item color-swatch active line">
                                            <span className="d-none text-capitalize color-filter">White</span>
                                            <span className="swatch-value bg-white"></span>
                                            <img className="lazyload" data-src="images/products/womens/women-167.jpg" src="images/products/womens/women-167.jpg" alt="image-product"/>
                                        </li>
                                        <li className="list-color-item color-swatch">
                                            <span className="d-none text-capitalize color-filter">Beige</span>
                                            <span className="swatch-value bg-beige"></span>
                                            <img className="lazyload" data-src="images/products/womens/women-162.jpg" src="images/products/womens/women-162.jpg" alt="image-product"/>
                                        </li>
                                        
                                    </ul>
                            
                                    <div className="list-product-btn">
                                        <a href="#shoppingCart" data-bs-toggle="modal" className="btn-main-product">Add To cart</a>
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
                                </div>
                            </div>
                        </div>
                        
                        <!-- pagination -->
                        <ul className="wg-pagination">
                            <li><a href="#" className="pagination-item text-button">1</a></li>
                            <li className="active"><div className="pagination-item text-button">2</div></li>
                            <li><a href="#" className="pagination-item text-button">3</a></li>
                            <li><a href="#" className="pagination-item text-button"><i className="icon-arrRight"></i></a></li>
                        </ul>
                    </div>
                    <div className="tf-grid-layout wrapper-shop tf-col-4" id="gridLayout">
                        <!-- card product 1 -->
                        <div className="card-product grid" data-availability="Out of stock" data-brand="adidas">
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
                                <span className="price current-price">$59.99</span>
                            </div>
                        </div>
                        <!-- card product 2 -->
                        <div className="card-product grid" data-availability="In stock" data-brand="nike">
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
                                <div className="price"><span className="old-price">$98.00</span> <span className="current-price">$79.99</span></div>
                                <ul className="list-color-product">
                                    <li className="list-color-item color-swatch active line">
                                        <span className="d-none text-capitalize color-filter">Light Blue</span>
                                        <span className="swatch-value bg-light-blue"></span>
                                        <img className="lazyload" data-src="images/products/womens/women-176.jpg" src="images/products/womens/women-176.jpg" alt="image-product"/>
                                    </li>
                                    <li className="list-color-item color-swatch">
                                        <span className="d-none text-capitalize color-filter">Light Blue</span>
                                        <span className="swatch-value bg-light-blue-2"></span>
                                        <img className="lazyload" data-src="images/products/womens/women-177.jpg" src="images/products/womens/women-177.jpg" alt="image-product"/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- card product 3 -->
                        <div className="card-product grid card-product-size" data-availability="In stock" data-brand="LV">
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
                                <div className="price"><span className="old-price">$98.00</span> <span className="current-price">$89.99</span></div>
                                <ul className="list-color-product">
                                    <li className="list-color-item color-swatch active line">
                                        <span className="d-none text-capitalize color-filter">Orange</span>
                                        <span className="swatch-value bg-light-orange"></span>
                                        <img className="lazyload" data-src="images/products/womens/women-29.jpg" src="images/products/womens/women-29.jpg" alt="image-product"/>
                                    </li>
                                    <li className="list-color-item color-swatch">
                                        <span className="d-none text-capitalize color-filter">Grey</span>
                                        <span className="swatch-value bg-light-grey"></span>
                                        <img className="lazyload" data-src="images/products/womens/women-33.jpg" src="images/products/womens/women-33.jpg" alt="image-product"/>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                        <!-- card product 4 -->
                        <div className="card-product grid" data-availability="Out of stock" data-brand="gucci">
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
                                <span className="price current-price">$69.99</span>
                                <ul className="list-color-product">
                                    <li className="list-color-item color-swatch active line">
                                        <span className="d-none text-capitalize color-filter">Grey</span>
                                        <span className="swatch-value bg-dark-grey"></span>
                                        <img className="lazyload" data-src="images/products/womens/women-1.jpg" src="images/products/womens/women-1.jpg" alt="image-product"/>
                                    </li>
                                    <li className="list-color-item color-swatch">
                                        <span className="d-none text-capitalize color-filter">Pink</span>
                                        <span className="swatch-value bg-light-pink"></span>
                                        <img className="lazyload" data-src="images/products/womens/women-2.jpg" src="images/products/womens/women-2.jpg" alt="image-product"/>
                                    </li>
                                    <li className="list-color-item color-swatch">
                                        <span className="d-none text-capitalize color-filter">Grey</span>
                                        <span className="swatch-value bg-dark-grey-2"></span>
                                        <img className="lazyload" data-src="images/products/womens/women-3.jpg" src="images/products/womens/women-3.jpg" alt="image-product"/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- card product 5 -->
                        <div className="card-product grid card-product-size" data-availability="Out of stock" data-brand="hermes">
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
                                <span className="price current-price">$39.99</span>
                            </div>
                        </div>
                        <!-- card product 6 -->
                        <div className="card-product grid" data-availability="In stock" data-brand="zalando">
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
                                <span className="price current-price">$79.99</span>
                                <ul className="list-color-product">
                                    <li className="list-color-item color-swatch active">
                                        <span className="d-none text-capitalize color-filter">Orange</span>
                                        <span className="swatch-value bg-orange"></span>
                                        <img className="lazyload" data-src="images/products/womens/women-171.jpg" src="images/products/womens/women-171.jpg" alt="image-product"/>
                                    </li>
                                    <li className="list-color-item color-swatch">
                                        <span className="d-none text-capitalize color-filter">Pink</span>
                                        <span className="swatch-value bg-dark-pink"></span>
                                        <img className="lazyload" data-src="images/products/womens/women-172.jpg" src="images/products/womens/women-172.jpg" alt="image-product"/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- card product 7 -->
                        <div className="card-product grid card-product-size" data-availability="In stock" data-brand="nike">
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
                                <div className="price"><span className="old-price">$98.00</span><span className="current-price">$129.99</span></div>
                                <ul className="list-color-product">
                                    <li className="list-color-item color-swatch active">
                                        <span className="d-none text-capitalize color-filter">Green</span>
                                        <span className="swatch-value bg-light-green"></span>
                                        <img className="lazyload" data-src="images/products/womens/women-83.jpg" src="images/products/womens/women-83.jpg" alt="image-product"/>
                                    </li>
                                    <li className="list-color-item color-swatch">
                                        <span className="d-none text-capitalize color-filter">Grey</span>
                                        <span className="swatch-value bg-grey"></span>
                                        <img className="lazyload" data-src="images/products/womens/women-94.jpg" src="images/products/womens/women-94.jpg" alt="image-product"/>
                                    </li>
                                    <li className="list-color-item color-swatch line">
                                        <span className="d-none text-capitalize color-filter">White</span>
                                        <span className="swatch-value bg-white"></span>
                                        <img className="lazyload" data-src="images/products/womens/women-87.jpg" src="images/products/womens/women-87.jpg" alt="image-product"/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- card product 8 -->
                        <div className="card-product grid card-product-size" data-availability="In stock" data-brand="LV">
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
                                <div className="price"><span className="old-price">$98.00</span><span className="current-price">$219.99</span></div>
                                <ul className="list-color-product">
                                    <li className="list-color-item color-swatch active">
                                        <span className="d-none text-capitalize color-filter">Grey</span>
                                        <span className="swatch-value bg-grey-2"></span>
                                        <img className="lazyload" data-src="images/products/womens/women-102.jpg" src="images/products/womens/women-102.jpg" alt="image-product"/>
                                    </li>
                                    <li className="list-color-item color-swatch">
                                        <span className="d-none text-capitalize color-filter">Orange</span>
                                        <span className="swatch-value bg-light-orange"></span>
                                        <img className="lazyload" data-src="images/products/womens/women-111.jpg" src="images/products/womens/women-111.jpg" alt="image-product"/>
                                    </li>
                                    <li className="list-color-item color-swatch line">
                                        <span className="d-none text-capitalize color-filter">White</span>
                                        <span className="swatch-value bg-white"></span>
                                        <img className="lazyload" data-src="images/products/womens/women-104.jpg" src="images/products/womens/women-104.jpg" alt="image-product"/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- card product 9 -->
                        <div className="card-product grid" data-availability="In stock" data-brand="hermes">
                            <div className="card-product-wrapper">
                                <a href="product-detail.html" className="product-img">
                                    <img className="lazyload img-product" data-src="images/products/mens/men-11.jpg" src="images/products/mens/men-11.jpg" alt="image-product"/>
                                    <img className="lazyload img-hover" data-src="images/products/mens/men-12.jpg" src="images/products/mens/men-12.jpg" alt="image-product"/>
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
                                <span className="price current-price">$59.99</span>
                            </div>
                        </div>
                        <!-- card product 10 -->
                        <div className="card-product grid"  data-availability="In stock" data-brand="gucci">
                            <div className="card-product-wrapper">
                                <a href="product-detail.html" className="product-img">
                                    <img className="lazyload img-product" data-src="images/products/mens/men-13.jpg" src="images/products/mens/men-13.jpg" alt="image-product"/>
                                    <img className="lazyload img-hover" data-src="images/products/mens/men-14.jpg" src="images/products/mens/men-14.jpg" alt="image-product"/>
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
                                <div className="price"><span className="old-price">$98.00</span> <span className="current-price">$79.99</span></div>
                                <ul className="list-color-product">
                                    <li className="list-color-item color-swatch active">
                                        <span className="d-none text-capitalize color-filter">Beige</span>
                                        <span className="swatch-value bg-beige"></span>
                                        <img className="lazyload" data-src="images/products/mens/men-13.jpg" src="images/products/mens/men-13.jpg" alt="image-product"/>
                                    </li>
                                    <li className="list-color-item color-swatch">
                                        <span className="d-none text-capitalize color-filter">Light Blue</span>
                                        <span className="swatch-value bg-light-blue-2"></span>
                                        <img className="lazyload" data-src="images/products/mens/men-12.jpg" src="images/products/mens/men-12.jpg" alt="image-product"/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- card product 11 -->
                        <div className="card-product grid card-product-size" data-availability="In stock" data-brand="zalando">
                            <div className="card-product-wrapper">
                                <a href="product-detail.html" className="product-img">
                                    <img className="lazyload img-product" data-src="images/products/mens/men-7.jpg" src="images/products/mens/men-7.jpg" alt="image-product"/>
                                    <img className="lazyload img-hover" data-src="images/products/mens/men-8.jpg" src="images/products/mens/men-8.jpg" alt="image-product"/>
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
                                <div className="price"><span className="old-price">$98.00</span> <span className="current-price">$89.99</span></div>
                                <ul className="list-color-product">
                                    <li className="list-color-item color-swatch active line">
                                        <span className="d-none text-capitalize color-filter">Green</span>
                                        <span className="swatch-value bg-light-green"></span>
                                        <img className="lazyload" data-src="images/products/mens/men-7.jpg" src="images/products/mens/men-7.jpg" alt="image-product"/>
                                    </li>
                                    <li className="list-color-item color-swatch">
                                        <span className="d-none text-capitalize color-filter">Grey</span>
                                        <span className="swatch-value bg-light-grey"></span>
                                        <img className="lazyload" data-src="images/products/mens/men-11.jpg" src="images/products/mens/men-11.jpg" alt="image-product"/>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                        <!-- card product 12 -->
                        <div className="card-product grid" data-availability="In stock" data-brand="adidas">
                            <div className="card-product-wrapper">
                                <a href="product-detail.html" className="product-img">
                                    <img className="lazyload img-product" data-src="images/products/mens/men-1.jpg" src="images/products/mens/men-1.jpg" alt="image-product"/>
                                    <img className="lazyload img-hover" data-src="images/products/mens/men-3.jpg" src="images/products/mens/men-3.jpg" alt="image-product"/>
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
                                <span className="price current-price">$69.99</span>
                                <ul className="list-color-product">
                                    <li className="list-color-item color-swatch active line">
                                        <span className="d-none text-capitalize color-filter">Light Blue</span>
                                        <span className="swatch-value bg-light-blue"></span>
                                        <img className="lazyload" data-src="images/products/mens/men-1.jpg" src="images/products/mens/men-1.jpg" alt="image-product"/>
                                    </li>
                                    <li className="list-color-item color-swatch">
                                        <span className="d-none text-capitalize color-filter">Pink</span>
                                        <span className="swatch-value bg-light-pink"></span>
                                        <img className="lazyload" data-src="images/products/mens/men-13.jpg" src="images/products/mens/men-13.jpg" alt="image-product"/>
                                    </li>
                                    <li className="list-color-item color-swatch">
                                        <span className="d-none text-capitalize color-filter">Grey</span>
                                        <span className="swatch-value bg-dark-grey-2"></span>
                                        <img className="lazyload" data-src="images/products/mens/men-9.jpg" src="images/products/mens/men-9.jpg" alt="image-product"/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- card product 13 -->
                        <div className="card-product grid card-product-size" data-availability="In stock" data-brand="nike">
                            <div className="card-product-wrapper">
                                <a href="product-detail.html" className="product-img">
                                    <img className="lazyload img-product" data-src="images/products/womens/women-37.jpg" src="images/products/womens/women-37.jpg" alt="image-product"/>
                                    <img className="lazyload img-hover" data-src="images/products/womens/women-38.jpg" src="images/products/womens/women-38.jpg" alt="image-product"/>
                                </a>
                                <div className="variant-wrap size-list">
                                    <ul className="variant-box">
                                        <li className="size-item">XS</li>
                                        <li className="size-item">L</li>
                                        <li className="size-item">XL</li>
                                        <li className="size-item">2XL</li>
                                        <li className="size-item">3XL</li>
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
                                <a href="product-detail.html" className="title link">Buttoned cotton shirt</a>
                                <span className="price current-price">$89.99</span>
                                <ul className="list-color-product">
                                    <li className="list-color-item color-swatch active">
                                        <span className="d-none text-capitalize color-filter">Light Blue</span>
                                        <span className="swatch-value bg-light-blue"></span>
                                        <img className="lazyload" data-src="images/products/womens/women-37.jpg" src="images/products/womens/women-37.jpg" alt="image-product"/>
                                    </li>
                                    <li className="list-color-item color-swatch line">
                                        <span className="d-none text-capitalize color-filter">White</span>
                                        <span className="swatch-value bg-white"></span>
                                        <img className="lazyload" data-src="images/products/womens/women-41.jpg" src="images/products/womens/women-41.jpg" alt="image-product"/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- card product 14 -->
                        <div className="card-product grid card-product-size" data-availability="In stock" data-brand="LV">
                            <div className="card-product-wrapper">
                                <a href="product-detail.html" className="product-img">
                                    <img className="lazyload img-product" data-src="images/products/mens/men-15.jpg" src="images/products/mens/men-15.jpg" alt="image-product"/>
                                    <img className="lazyload img-hover" data-src="images/products/mens/men-16.jpg" src="images/products/mens/men-16.jpg" alt="image-product"/>
                                </a>
                                <div className="variant-wrap size-list">
                                    <ul className="variant-box">
                                        <li className="size-item">XS</li>
                                        <li className="size-item">M</li>
                                        <li className="size-item">L</li>
                                        <li className="size-item">XL</li>
                                        <li className="size-item">2XL</li>
                                        <li className="size-item">3XL</li>
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
                                <a href="product-detail.html" className="title link">Chest pocket cotton over shirt</a>
                                <span className="price current-price">$99.25</span>
                                <ul className="list-color-product">
                                    <li className="list-color-item color-swatch active">
                                        <span className="d-none text-capitalize color-filter">Beige</span>
                                        <span className="swatch-value bg-beige"></span>
                                        <img className="lazyload" data-src="images/products/mens/men-15.jpg" src="images/products/mens/men-15.jpg" alt="image-product"/>
                                    </li>
                                    <li className="list-color-item color-swatch">
                                        <span className="d-none text-capitalize color-filter">Black</span>
                                        <span className="swatch-value bg-main"></span>
                                        <img className="lazyload" data-src="images/products/mens/men-18.jpg" src="images/products/mens/men-18.jpg" alt="image-product"/>
                                    </li>
                                    <li className="list-color-item color-swatch">
                                        <span className="d-none text-capitalize color-filter">Dark Blue</span>
                                        <span className="swatch-value bg-dark-blue"></span>
                                        <img className="lazyload" data-src="images/products/mens/men-17.jpg" src="images/products/mens/men-17.jpg" alt="image-product"/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- card product 15 -->
                        <div className="card-product grid" data-availability="In stock" data-brand="gucci">
                            <div className="card-product-wrapper">
                                <a href="product-detail.html" className="product-img">
                                    <img className="lazyload img-product" data-src="images/products/womens/women-167.jpg" src="images/products/womens/women-167.jpg" alt="image-product"/>
                                    <img className="lazyload img-hover" data-src="images/products/womens/women-168.jpg" src="images/products/womens/women-168.jpg" alt="image-product"/>
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
                                <a href="product-detail.html" className="title link">Cotton shopper bag</a>
                                <span className="price current-price">$199.25</span>
                                <ul className="list-color-product">
                                    <li className="list-color-item color-swatch active line">
                                        <span className="d-none text-capitalize color-filter">White</span>
                                        <span className="swatch-value bg-white"></span>
                                        <img className="lazyload" data-src="images/products/womens/women-167.jpg" src="images/products/womens/women-167.jpg" alt="image-product"/>
                                    </li>
                                    <li className="list-color-item color-swatch">
                                        <span className="d-none text-capitalize color-filter">Beige</span>
                                        <span className="swatch-value bg-beige"></span>
                                        <img className="lazyload" data-src="images/products/womens/women-162.jpg" src="images/products/womens/women-162.jpg" alt="image-product"/>
                                    </li>
                                   
                                </ul>
                            </div>
                        </div>
                        <!-- card product 16 -->
                        <div className="card-product grid card-product-size" data-availability="In stock" data-brand="adidas">
                            <div className="card-product-wrapper">
                                <a href="product-detail.html" className="product-img">
                                    <img className="lazyload img-product" data-src="images/products/mens/men-19.jpg" src="images/products/mens/men-19.jpg" alt="image-product"/>
                                    <img className="lazyload img-hover" data-src="images/products/mens/men-20.jpg" src="images/products/mens/men-20.jpg" alt="image-product"/>
                                </a>
                                <div className="variant-wrap size-list">
                                    <ul className="variant-box">
                                        <li className="size-item">XS</li>
                                        <li className="size-item">M</li>
                                        <li className="size-item">L</li>
                                        <li className="size-item">XL</li>
                                        <li className="size-item">2XL</li>
                                        <li className="size-item">3XL</li>
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
                                <a href="product-detail.html" className="title link">Chest pocket cotton over shirt</a>
                                <span className="price current-price">$250.00</span>
                                
                            </div>
                        </div>
                        <!-- pagination -->
                        <ul className="wg-pagination justify-content-center">
                            <li><a href="#" className="pagination-item text-button">1</a></li>
                            <li className="active"><div className="pagination-item text-button">2</div></li>
                            <li><a href="#" className="pagination-item text-button">3</a></li>
                            <li><a href="#" className="pagination-item text-button"><i className="icon-arrRight"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        </>
        <!-- /Section product -->
    )
}
export default ProductPage;