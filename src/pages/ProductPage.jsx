import React from "react";
import TitlePage from "../components/TitlePage";
import Control from "../components/Control";
import ProductCard from "../components/ProductCard";

const ProductPage=()=>{
    return (
        <>
        <TitlePage/>
        <section className="flat-spacing">
            <div className="container">
                {/* Shop control */}
                <Control/>
                <div className="wrapper-control-shop">
                    <div className="meta-filter-shop">
                        <div id="product-count-grid" className="count-text"></div>
                        <div id="product-count-list" className="count-text"></div>
                        <div id="applied-filters"></div>
                        <button id="remove-all" className="remove-all-filters text-btn-uppercase" style={{display:"none"}}>REMOVE ALL <i className="icon icon-close"></i></button>
                    </div>
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8" id="gridLayout">
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
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
    )
}
export default ProductPage;