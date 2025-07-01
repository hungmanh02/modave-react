import React from "react";
import logo from '../assets/images/logo/logo.svg'
const Header=()=>{
    return (
        <header id="header" className="header-default">
            <div className="container">
                <div className="row wrapper-header align-items-center">
                    <div className="col-md-4 col-3 d-xl-none">
                        <a href="#mobileMenu" className="mobile-menu" data-bs-toggle="offcanvas" aria-controls="mobileMenu">
                            <i className="icon icon-categories"></i>
                        </a>
                    </div>
                    <div className="col-xl-3 col-md-4 col-6">
                        <a href="index.html" className="logo-header">
                            <img src={logo} alt="logo" className="logo"/>
                        </a>
                    </div>
                    <div className="col-xl-6 d-none d-xl-block">
                        <nav className="box-navigation text-center">
                            <ul className="box-nav-ul d-flex align-items-center justify-content-center">
                                <li className="menu-item active">
                                    <a href="#" className="item-link">Home</a>  
                                </li>
                                <li className="menu-item">
                                    <a href="#" className="item-link">Shop<i className="icon icon-arrow-down"></i></a>
                                    <div className="sub-menu mega-menu">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-lg-2">
                                                    <div className="mega-menu-item">
                                                        <div className="menu-heading">Shop Layout</div>
                                                        <ul className="menu-list">
                                                            <li><a href="shop-default-grid.html" className="menu-link-text">Default Grid</a></li>
                                                            <li><a href="shop-default-list.html" className="menu-link-text">Default List</a></li>
                                                            <li><a href="shop-fullwidth-list.html" className="menu-link-text">Full Width List</a></li>
                                                            <li><a href="shop-fullwidth-grid.html" className="menu-link-text">Full Width Grid</a></li>
                                                            <li><a href="shop-left-sidebar.html" className="menu-link-text">Left Sidebar</a></li>
                                                            <li><a href="shop-right-sidebar.html" className="menu-link-text">Right Sidebar</a></li>
                                                            <li><a href="shop-filter-dropdown.html" className="menu-link-text">Filter Dropdown</a></li>
                                                            <li><a href="shop-filter-canvas.html" className="menu-link-text">Filter Canvas</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2">
                                                    <div className="mega-menu-item">
                                                        <div className="menu-heading">Shop Features</div>
                                                        <ul className="menu-list">
                                                            <li><a href="shop-categories-top.html" className="menu-link-text">Categories Top 1</a></li>
                                                            <li><a href="shop-categories-top-02.html" className="menu-link-text">Categories Top 2</a></li>
                                                            <li><a href="shop-collection.html" className="menu-link-text">Shop Collection</a></li>
                                                            <li><a href="shop-breadcrumb-img.html" className="menu-link-text">Breadcrumb IMG</a></li>
                                                            <li><a href="shop-breadcrumb-left.html" className="menu-link-text">Breadcrumb Left</a></li>
                                                            <li><a href="shop-breadcrumb-background.html" className="menu-link-text">Breadcrumb BG</a></li>
                                                            <li><a href="shop-load-button.html" className="menu-link-text">Load Button</a></li>
                                                            <li><a href="shop-pagination.html" className="menu-link-text">Pagination</a></li>
                                                            <li><a href="shop-infinite-scrolling.html" className="menu-link-text">Infinite Scrolling</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2">
                                                    <div className="mega-menu-item">
                                                        <div className="menu-heading">Products Hover</div>
                                                        <ul className="menu-list">
                                                            <li><a href="product-style-01.html" className="menu-link-text">Product Style 1</a></li>
                                                            <li><a href="product-style-02.html" className="menu-link-text">Product Style 2</a></li>
                                                            <li><a href="product-style-03.html" className="menu-link-text">Product Style 3</a></li>
                                                            <li><a href="product-style-04.html" className="menu-link-text">Product Style 4</a></li>
                                                            <li><a href="product-style-05.html" className="menu-link-text">Product Style 5</a></li>
                                                            <li><a href="product-style-06.html" className="menu-link-text">Product Style 6</a></li>
                                                            <li><a href="product-style-07.html" className="menu-link-text">Product Style 7</a></li>
                                                            
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2">
                                                    <div className="mega-menu-item">
                                                        <div className="menu-heading">My Pages</div>
                                                        <ul className="menu-list">
                                                            <li><a href="wish-list.html" className="menu-link-text">Wish List</a></li>
                                                            <li><a href="search-result.html" className="menu-link-text">Search Result</a></li>
                                                            <li><a href="shopping-cart.html" className="menu-link-text">Shopping Cart</a></li>
                                                            <li><a href="login.html" className="menu-link-text">Login/Register</a></li>
                                                            <li><a href="forget-password.html" className="menu-link-text">Forget Password</a></li>
                                                            <li><a href="order-tracking.html" className="menu-link-text">Order Tracking</a></li>
                                                            <li><a href="my-account.html" className="menu-link-text">My Account</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="wrapper-sub-shop">
                                                        <div className="menu-heading">Recent Products</div>
                                                        <div dir="ltr" className="swiper tf-product-header">
                                                            <div className="swiper-wrapper">
                                                                <div className="swiper-slide">
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
                                                                </div>
                                                                <div className="swiper-slide">
                                                                    <div className="card-product">
                                                                        <div className="card-product-wrapper">
                                                                            <a href="product-detail.html" className="product-img">
                                                                                <img className="lazyload img-product" data-src="images/products/womens/women-37.jpg" src="images/products/womens/women-37.jpg" alt="image-product"/>
                                                                                <img className="lazyload img-hover" data-src="images/products/womens/women-38.jpg" src="images/products/womens/women-38.jpg" alt="image-product"/>
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
                                                                            <a href="product-detail.html" className="title link">Polarized sunglasses</a>
                                                                            <span className="price">$59.99</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="swiper-slide">
                                                                    <div className="card-product">
                                                                        <div className="card-product-wrapper">
                                                                            <a href="product-detail.html" className="product-img">
                                                                                <img className="lazyload img-product" data-src="images/products/womens/women-8.jpg" src="images/products/womens/women-8.jpg" alt="image-product"/>
                                                                                <img className="lazyload img-hover" data-src="images/products/womens/women-9.jpg" src="images/products/womens/women-9.jpg" alt="image-product"/>
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
                                                                            <span className="price">$59.99</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="swiper-slide">
                                                                    <div className="card-product">
                                                                        <div className="card-product-wrapper">
                                                                            <a href="product-detail.html" className="product-img">
                                                                                <img className="lazyload img-product" data-src="images/products/womens/women-171.jpg" src="images/products/womens/women-172.jpg" alt="image-product"/>
                                                                                <img className="lazyload img-hover" data-src="images/products/womens/women-171.jpg" src="images/products/womens/women-172.jpg" alt="image-product"/>
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
                                                                            <a href="product-detail.html" className="title link">Faux-leather trousers</a>
                                                                            <span className="price">$79.99</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="menu-item">
                                    <a href="#" className="item-link">Products<i className="icon icon-arrow-down"></i></a>
                                    <div className="sub-menu mega-menu">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <div className="mega-menu-item">
                                                        <div className="menu-heading">Products Layout</div>
                                                        <ul className="menu-list">
                                                            <li><a href="product-detail.html" className="menu-link-text">Product Default</a></li>
                                                            <li><a href="product-grid-1.html" className="menu-link-text">Product Grid1</a></li>
                                                            <li><a href="product-grid-2.html" className="menu-link-text">Product Grid2</a></li>
                                                            <li><a href="product-stacked.html" className="menu-link-text">Product stacked</a></li>
                                                            <li><a href="product-right-thumbnails.html" className="menu-link-text">Product right thumbnails</a></li>
                                                            <li><a href="product-bottom-thumbnails.html" className="menu-link-text">Product bottom thumbnails</a></li>
                                                            <li><a href="product-description-accordion.html" className="menu-link-text">Product Description Accordion</a></li>
                                                            <li><a href="product-description-list.html" className="menu-link-text">Product Description List</a></li>
                                                            <li><a href="product-description-menutab.html" className="menu-link-text">Product Description MenuTab</a></li>
                                                            <li><a href="product-description-fullwidth.html" className="menu-link-text">Product Description Fullwidth</a></li>
                                                            <li><a href="product-fixed-price.html" className="menu-link-text">Product Fixed Price</a></li>
                                                            <li><a href="product-fixed-scroll.html" className="menu-link-text">Product Fixed Scrolls</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="mega-menu-item">
                                                        <div className="menu-heading">Colors Swatched</div>
                                                        <ul className="menu-list">
                                                            <li><a href="product-swatch-color.html" className="menu-link-text">Product Swatch Color</a></li>
                                                            <li><a href="product-swatch-rounded.html" className="menu-link-text">Product Swatch Rounded</a></li>
                                                            <li><a href="product-swatch-rounded-color.html" className="menu-link-text">Product Swatch Rounded Colors</a></li>
                                                            <li><a href="product-swatch-image.html" className="menu-link-text">Product Swatch Image</a></li>
                                                            <li><a href="product-swatch-rounded-image.html" className="menu-link-text">Product Swatch Rounded Image</a></li>
                                                            <li><a href="product-swatch-dropdown.html" className="menu-link-text">Product Swatch Dropdown</a></li>
                                                            <li><a href="product-swatch-dropdown-color.html" className="menu-link-text">Product Swatch Dropdown Colors</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="mega-menu-item">
                                                        <div className="menu-heading">Products Features</div>
                                                        <ul className="menu-list">
                                                            <li><a href="product-frequently-bought-together.html" className="menu-link-text">Frequently Bought Together 1</a></li>
                                                            <li><a href="product-frequently-bought-together-02.html" className="menu-link-text">Frequently Bought Together 2</a></li>
                                                            <li><a href="product-up-sell.html" className="menu-link-text">Up Sell</a></li>
                                                            <li><a href="product-pre-order.html" className="menu-link-text">Pre-orders</a></li>
                                                            <li><a href="product-grouped.html" className="menu-link-text">Grouped</a></li>
                                                            <li><a href="product-customer-note.html" className="menu-link-text">Customer Note</a></li>
                                                            <li><a href="product-out-of-stock.html" className="menu-link-text">Out Of Stock</a></li>
                                                            <li><a href="product-pickup-available.html" className="menu-link-text">Pick Up Available</a></li>
                                                            <li><a href="product-variable.html" className="menu-link-text">Variable</a></li>
                                                            <li><a href="product-deals.html" className="menu-link-text">Deals</a></li>
                                                            <li><a href="product-with-discount.html" className="menu-link-text">With Discount</a></li>
                                                            <li><a href="product-external.html" className="menu-link-text">External</a></li>
                                                            <li><a href="product-subscribe-save.html" className="menu-link-text">Subscribe Save</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="menu-heading">Best seller</div>
                                                    <div className="sec-cls-header">
                                                        <div className="collection-position hover-img">
                                                            <a href="shop-collection.html" className="img-style">
                                                                <img className="lazyload" data-src="images/collections/cls-header.jpg" src="images/collections/cls-header.jpg" alt="banner-cls"/>
                                                            </a>
                                                            <div className="content">
                                                                <div className="title-top">
                                                                    <h4 className="title"><a href="shop-collection.html" className="link text-white wow fadeInUp">Shop our top picks</a></h4>
                                                                    <p className="desc text-white wow fadeInUp">Reserved for special occasions</p>
                                                                </div>
                                                                <div>
                                                                    <a href="shop-collection.html" className="tf-btn btn-md btn-white"><span className="text">Shop Now</span><i className="icon icon-arrowUpRight"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="menu-item position-relative">
                                    <a href="#" className="item-link">Blog<i className="icon icon-arrow-down"></i></a>
                                    <div className="sub-menu submenu-default">
                                        <ul className="menu-list">
                                            <li><a href="blog-default.html" className="menu-link-text">Blog Default</a></li>
                                            <li><a href="blog-list.html" className="menu-link-text">Blog List</a></li>
                                            <li><a href="blog-grid.html" className="menu-link-text">Blog Grid</a></li>
                                            <li><a href="blog-detail.html" className="menu-link-text">Blog Detail 1</a></li>
                                            <li><a href="blog-detail-02.html" className="menu-link-text">Blog Detail 2</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="menu-item position-relative">
                                    <a href="#" className="item-link">Pages<i className="icon icon-arrow-down"></i></a>
                                    <div className="sub-menu submenu-default">
                                        <ul className="menu-list">
                                            <li><a href="about-us.html" className="menu-link-text">About Us</a></li>
                                            <li><a href="store-list.html" className="menu-link-text">Store List 1</a></li>
                                            <li><a href="store-list-02.html" className="menu-link-text">Store List 2</a></li>
                                            <li><a href="contact.html" className="menu-link-text">Contact Us 1</a></li>  
                                            <li><a href="contact-02.html" className="menu-link-text">Contact Us 2</a></li>
                                            <li><a href="404.html" className="menu-link-text">404</a></li>
                                            <li><a href="FAQs.html" className="menu-link-text">FAQs</a></li>
                                            <li><a href="term-of-use.html" className="menu-link-text">Terms Of Use</a></li>
                                            <li><a href="coming-soon.html" className="menu-link-text">Coming Soon</a></li>
                                            <li><a href="customer-feedback.html" className="menu-link-text">Customer Feedbacks</a></li>
                                            <li><a href="my-account.html" className="menu-link-text">My Account</a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-xl-3 col-md-4 col-3">
                        <ul className="nav-icon d-flex justify-content-end align-items-center">
                            <li className="nav-search"><a href="#search" data-bs-toggle="modal" className="nav-icon-item">
                                <svg className="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#181818" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M21.35 21.0004L17 16.6504" stroke="#181818" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>    
                            </a></li>
                            <li className="nav-account">
                                <a href="#" className="nav-icon-item">
                                    <svg className="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#181818" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#181818" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </a>
                                <div className="dropdown-account dropdown-login">
                                    <div className="sub-top">
                                        <a href="login.html" className="tf-btn btn-reset">Login</a>
                                        <p className="text-center text-secondary-2">Don’t have an account? <a href="register.html">Register</a></p>
                                    </div>
                                    <div className="sub-bot">
                                        <span className="body-text-">Support</span>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-wishlist"><a href="wish-list.html" className="nav-icon-item">
                                <svg className="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.8401 4.60987C20.3294 4.09888 19.7229 3.69352 19.0555 3.41696C18.388 3.14039 17.6726 2.99805 16.9501 2.99805C16.2276 2.99805 15.5122 3.14039 14.8448 3.41696C14.1773 3.69352 13.5709 4.09888 13.0601 4.60987L12.0001 5.66987L10.9401 4.60987C9.90843 3.57818 8.50915 2.99858 7.05012 2.99858C5.59109 2.99858 4.19181 3.57818 3.16012 4.60987C2.12843 5.64156 1.54883 7.04084 1.54883 8.49987C1.54883 9.95891 2.12843 11.3582 3.16012 12.3899L4.22012 13.4499L12.0001 21.2299L19.7801 13.4499L20.8401 12.3899C21.3511 11.8791 21.7565 11.2727 22.033 10.6052C22.3096 9.93777 22.4519 9.22236 22.4519 8.49987C22.4519 7.77738 22.3096 7.06198 22.033 6.39452C21.7565 5.72706 21.3511 5.12063 20.8401 4.60987V4.60987Z" stroke="#181818" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>  
                                </a>
                            </li>
                            <li className="nav-cart"><a href="#shoppingCart" data-bs-toggle="modal" className="nav-icon-item">
                                <svg className="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.5078 10.8734V6.36686C16.5078 5.17166 16.033 4.02541 15.1879 3.18028C14.3428 2.33514 13.1965 1.86035 12.0013 1.86035C10.8061 1.86035 9.65985 2.33514 8.81472 3.18028C7.96958 4.02541 7.49479 5.17166 7.49479 6.36686V10.8734M4.11491 8.62012H19.8877L21.0143 22.1396H2.98828L4.11491 8.62012Z" stroke="#181818" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>  
                                <span className="count-box">1</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;