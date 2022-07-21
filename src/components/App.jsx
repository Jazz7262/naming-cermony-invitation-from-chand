import React, { useEffect } from "react";
import Preloader from "./Preloader";
import Navbar from "./Navbar";
import Header from "./Header";
import Slide from "./Slide";
import BackToTopBtn from "./BackToTopBtn";
import BabyInfo from "./BabyInfo";
import InvitationQuote from "./InvitationQuote";
import Timeline from "./Timeline";
import BabyQuote from "./BabyQuote";
import CountDown from "./CountDown";
import Compliments from "./Compliments";
import InviteNote from "./InviteNote";
import DeveloperInfo from "./DeveloperInfo";
import Audio from "./Audio";
import CustomModel from "./CustomModel";


import $ from "jquery";

import "aos/dist/aos.css";
import "../styles/App.css";

function App() {
    useEffect(() => {
        $(document).on("scroll", function () {
            if (window.scrollY > 50) {
                $(".navbar").addClass("nav-bg");
            } else {
                $(".navbar").removeClass("nav-bg");
            }
        });
    }, []);

    setTimeout(() => {
        $("#preloader").fadeOut("slow");        
    }, 2000);

    return (
        <>
            <Preloader />
            <CustomModel />
            <Navbar />
            <Header />
            <Slide />
            <BabyInfo />
            <InvitationQuote />
            <Timeline />
            <BabyQuote />
            <CountDown />
            <Compliments />
            <InviteNote />
            <DeveloperInfo />
            <Audio />
            <BackToTopBtn />
        </>
    );
}

export default App;
