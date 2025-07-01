import React from "react";
import countryUs from '../assets/images/country/us.svg'
import countryVn from '../assets/images/country/vn.svg'
const TopBar = () => {
    return (
        <div className="tf-topbar bg-main">
            <div className="container">
                <div className="tf-topbar_wrap d-flex align-items-center justify-content-center justify-content-xl-between">
                    <ul className="topbar-left">
                        <li>
                            <a className="text-caption-1 text-white" href="tel:315-666-6688">
                                315-666-6688
                            </a>
                        </li>
                        <li>
                            <a className="text-caption-1 text-white" href="mailto:themesflat@gmail.com">
                                themesflat@gmail.com
                            </a>
                        </li>
                        <li>
                            <a className="text-caption-1 text-white text-decoration-underline" href="/store-list">
                                Our Store
                            </a>
                        </li>
                    </ul>
                    <div className="topbar-right d-none d-xl-block">
                        <div className="tf-cur justify-content-end">
                            <div className="tf-currencies">
                                <select className="image-select center style-default type-currencies color-white">
                                    <option value="USD" data-thumbnail={countryUs}>USD</option>
                                    <option value="VND" data-thumbnail={countryVn}>VND</option>
                                </select>
                            </div>
                            <div className="tf-languages">
                                <select className="image-select center style-default type-languages color-white">
                                    <option value="en">English</option>
                                    <option value="vi">Vietnam</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
