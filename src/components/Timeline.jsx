import React from "react";
import "../styles/Timeline.css";

function Timeline() {
    return (
        <section id="timeline">
            <h1 className="inshaallaah">Inshaallaah ...</h1>

            <div className="wrapper" data-aos="fade-up" data-aos-delay="100">
                <div className="content">
                    <h1>Naming Ceremony</h1>
                    <p>
                        On Friday, 22<sup>nd</sup> July, 2022,
                        <br />
                        22<sup>nd</sup> of Zil-Hajjah, 1443,
                        <br />
                        Time: 07:30 PM.
                    </p>
                    <h2>Venue:</h2>
                    <p>
                        At Our Residence,
                        <br /> H.No.: 1/541/124, 1<sup>st</sup> Floor,
                        <br /> Besides Super Times House,
                        <br /> Near Vivekananda Junior College,
                        <br /> NGO's Colony,
                        <br /> Adoni.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Timeline;
