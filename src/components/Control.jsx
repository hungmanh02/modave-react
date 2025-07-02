import React from 'react';

const Control = ()=>{
    return (
        <div className="tf-shop-control align-items-center">
            <div className="tf-control-filter align-items-center">
                <a href="#filterShop" data-bs-toggle="offcanvas" aria-controls="filterShop" className="tf-btn-filter"><span className="icon icon-filter"></span><span className="text">Filters</span></a>
                <div className="d-none d-lg-flex shop-sale-text align-items-center justify-content-center">
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
    )
}

export default Control ;