import React from "react";
import TopBar from './../components/TopBar';
import Header from './../components/Header';
import { Outlet } from "react-router-dom";
import Footer from './../components/Footer';


const MainLayout=()=>{
    return (
        <>
        <TopBar/>
        <Header/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
        </>
    )
}
export default MainLayout