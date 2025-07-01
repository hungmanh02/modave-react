import React from "react";
import Slider from "../components/Slider";
import CollectionList from "../components/CollectionList";
import Gallery from "../components/Gallery";
import Seller from "../components/Seller";
import Customer from "../components/Customer";


const Home=()=>{
    return (
        <>
        <Slider/> 
        <CollectionList/>
        <Seller/>
        <Customer/>
        <Gallery/>
        </>
    )
}
export default Home;