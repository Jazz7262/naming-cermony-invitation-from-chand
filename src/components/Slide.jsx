import React from "react";
import "../styles/Slide.css";

function Slide() {
    return (
        <section id="slide">
            <div
                className="slide-wrapper"
                data-aos="fade-up"
                data-aos-offset="300"
            >
                <div className="img-container">
                    <img src="./assets/images/heart-bg.png" alt="heart-bg" />
                </div>
                <div className="text-content">
                    <h3>We Are Naming Our Daughter</h3>
                    <h1>Save Our Date</h1>
                    <p>
                        22<sup>th</sup> July, 2022
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Slide;
