import React from "react";
import countryUs from '../assets/images/country/us.svg'
import countryVn from '../assets/images/country/vn.svg'
const TopBar = () => {
    return (
        <div className="tf-topbar bg-main ">
            <div className="container max-w-[calc(100%-120px)] mx-auto">
                <div className="flex items-content-center justify-content-center xl:justify-between">
                    <ul className="topbar-left">
                        <li>
                            <a className="text-[14px] leading-[22px] text-white" href="tel:315-666-6688">
                                315-666-6688
                            </a>
                        </li>
                        <li>
                            <a className="text-[14px] leading-[22px] text-white" href="mailto:themesflat@gmail.com">
                                themesflat@gmail.com
                            </a>
                        </li>
                        <li>
                            <a className="text-[14px] leading-[22px] text-white underline" href="/store-list">
                                Our Store
                            </a>
                        </li>
                    </ul>
                    <div className="hidden xl:block">
                        <div className="flex gap-5 justify-content-end">
                            <div className="tf-currencies">
                                <select className="bg-transparent py-2 px-4 border border-white/50 rounded flex items-center justify-center appearance-none type-currencies text-white">
                                    <option value="USD" data-thumbnail={countryUs}>USD</option>
                                    <option value="VND" data-thumbnail={countryVn}>VND</option>
                                </select>
                            </div>
                            <div className="tf-languages">
                                <select className="bg-transparent py-2 px-4 border border-white/50 rounded flex items-center justify-center appearance-none type-languages text-white">
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
