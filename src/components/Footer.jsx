import React from "react";

const Footer=()=>{
    return (
        <footer id="footer">
            <div className="footer-wrap">
                <div className="py-10">
                    <div className="container mx-auto">
                        <div className="flex flex-wrap ">
                            <div className="lg:w-1/3">
                                <div className="mb-7 flex flex-col gap-5">
                                    <div className="flex">
                                        <a href="index.html">
                                            <img src="images/logo/logo.svg" alt=""/>
                                        </a>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <p>549 Oak St.Crystal Lake, IL 60014</p>
                                        <a href="contact.html" className="tf-btn-default fw-6">GET DIRECTION<i className="icon-arrowUpRight"></i></a>
                                    </div>
                                    <ul className="flex flex-col gap-2">
                                        <li className="flex gap-2 items-center">
                                            <i className="icon-mail"></i>
                                            <p>themesflat@gmail.com</p>
                                        </li>
                                        <li className="flex gap-2 items-center">
                                            <i className="icon-phone"></i>
                                            <p>315-666-6688</p>
                                        </li>
                                    </ul>
                                    <ul className="tf-social-icon">
                                        <li><a href="#" className="social-facebook"><i className="icon icon-fb"></i></a></li>
                                        <li><a href="#" className="social-twiter"><i className="icon icon-x"></i></a></li>
                                        <li><a href="#" className="social-instagram"><i className="icon icon-instagram"></i></a></li>
                                        <li><a href="#" className="social-tiktok"><i className="icon icon-tiktok"></i></a></li>
                                        <li><a href="#" className="social-amazon"><i className="icon icon-amazon"></i></a></li>
                                        <li><a href="#" className="social-pinterest"><i className="icon icon-pinterest"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="lg:w-1/3">
                                <div className="flex gap-[100px]">
                                    <div className="footer-col-block">
                                        <div className="mb-3 text-base leading-5 font-semibold footer-heading-mobile">
                                            Infomation
                                        </div>
                                        <div className="tf-collapse-content">
                                            <ul className="flex flex-col gap-2">
                                                <li className="text-sm leading-6 mb-0">
                                                    <a href="about-us.html" className="footer-menu_item">About Us</a>
                                                </li>
                                                <li className="text-sm leading-6 mb-0">
                                                    <a href="#" className="footer-menu_item">Our Stories</a>
                                                </li>
                                                <li className="text-sm leading-6 mb-0">
                                                    <a href="#" className="footer-menu_item">Size Guide</a>
                                                </li>
                                                <li className="text-sm leading-6 mb-0">
                                                    <a href="contact.html" className="footer-menu_item">Contact us</a>
                                                </li>
                                                <li className="text-sm leading-6 mb-0">
                                                    <a href="#" className="footer-menu_item">Career</a>
                                                </li>
                                                <li className="text-sm leading-6 mb-0">
                                                    <a href="my-account.html" className="footer-menu_item">My Account</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="footer-col-block">
                                        <div className="mb-3 text-base leading-5 font-semibold footer-heading-mobile">
                                            Customer Services
                                        </div>
                                        <div className="tf-collapse-content">
                                            <ul className="flex flex-col gap-2">
                                                <li className="text-sm leading-6 mb-0">
                                                    <a href="#" className="footer-menu_item">Shipping</a>
                                                </li>
                                                <li className="text-sm leading-6 mb-0">
                                                    <a href="#" className="footer-menu_item">Return & Refund</a>
                                                </li>
                                                <li className="text-sm leading-6 mb-0">
                                                    <a href="#" className="footer-menu_item">Privacy Policy</a>
                                                </li>
                                                <li className="text-sm leading-6 mb-0">
                                                    <a href="term-of-use.html" className="footer-menu_item">Terms & Conditions</a>
                                                </li>
                                                <li className="text-sm leading-6 mb-0">
                                                    <a href="FAQs.html" className="footer-menu_item">Orders FAQs</a>
                                                </li>
                                                <li className="text-sm leading-6 mb-0">
                                                    <a href="wish-list.html" className="footer-menu_item">My Wishlist</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/3">
                                <div className="footer-col-block">
                                    <div className="footer-heading text-base leading-5 font-semibold footer-heading-mobile">
                                        Newletter
                                    </div>
                                    <div className="tf-collapse-content">
                                        <div className="flex flex-col gap-4">
                                            <p className="text-sm leading-6 mb-0">Sign up for our newsletter and get 10% off your first purchase</p>
                                            <form className="subscribe-form relative"  action="#" method="post" accept-charset="utf-8" data-mailchimp="true">
                                                <div className="subscribe-content">
                                                    <fieldset className="email">
                                                        <input type="email" name="email-form" className=" text-sm h-[56px] rounded-full pr-14 border border-[#181818] " placeholder="Enter your e-mail" tabindex="0" aria-required="true"/>
                                                    </fieldset>
                                                    <div className="">
                                                        <button  className="absolute top-1/2 -translate-y-1/2 right-1 w-12 h-12 rounded-full text-2xl flex items-center justify-center p-0 border border-[#181818]" type="submit"><i className="text-xl icon-arrowUpRight"></i></button>
                                                    </div>
                                                </div>
                                                <div className="subscribe-msg"></div>
                                            </form>
                                            <div className="flex  items-center cursor-pointer gap-2">
                                                <div className="w-5 h-5 overflow-hidden flex relative">
                                                    <input className="w-[18px]" type="checkbox" id="footer-Form_agree" name="agree_checkbox"/>
                                                    <div className="hidden">
                                                        <i className="icon-check"></i>
                                                    </div>
                                                </div>
                                                <label className="text-sm leading-6 mb-0" for="footer-Form_agree">
                                                    By clicking subcribe, you agree to the <a className="font-semibold link" href="term-of-use.html">Terms of Service</a> and <a className="fw-6 link" href="#">Privacy Policy</a>.
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="footer-bottom-wrap">
                                    <div className="left">
                                        <p className="text-sm leading-6 mb-0">©2024 Modave. All Rights Reserved.</p>
                                        <div className="tf-cur justify-content-end">
                                            <div className="tf-currencies">
                                                <select className="image-select center style-default type-currencies">
                                                    <option selected data-thumbnail="images/country/us.svg">USD</option>
                                                    <option data-thumbnail="images/country/vn.svg">VND</option>
                                                </select>
                                            </div>
                                            <div className="tf-languages">
                                                <select className="image-select center style-default type-languages">
                                                    <option>English</option>
                                                    <option>Vietnam</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tf-payment">
                                        <p className="text-sm leading-6 mb-0">Payment:</p>
                                        <ul>
                                            <li>
                                                <img src="images/payment/img-1.png" alt=""/>
                                            </li>
                                            <li>
                                                <img src="images/payment/img-2.png" alt=""/>
                                            </li>
                                            <li>
                                                <img src="images/payment/img-3.png" alt=""/>
                                            </li>
                                            <li>
                                                <img src="images/payment/img-4.png" alt=""/>
                                            </li>
                                            <li>
                                                <img src="images/payment/img-5.png" alt=""/>
                                            </li>
                                            <li>
                                                <img src="images/payment/img-6.png" alt=""/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;