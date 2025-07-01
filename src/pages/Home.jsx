import React from "react";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Slider from "../components/Slider";
import CollectionList from "../components/CollectionList";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Seller from "../components/Seller";
import Customer from "../components/Customer";


const Home=()=>{
    return (
        <>
        <TopBar/> 
        <Header/>
        <Slider/> 
        <CollectionList/>
        <Seller/>
        <Customer/>
        <Gallery/>
        <Footer/>
        </>
    )
}
export default Home;