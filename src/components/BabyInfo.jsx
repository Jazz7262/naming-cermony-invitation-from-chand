import React, { useState } from "react";
import Duration from "duration-js";
import "../styles/BabyInfo.css";

function BabyInfo() {
    const date1 = new Date("2022 7 22 7:30 PM");
    const date2 = new Date();

    const [duration, setDuration] = useState({});

    function getDuration() {
        const date3 = new Date();

        const diff = new Duration(date1 - date3);

        setDuration({
            hours: diff.hours(),
            mins: diff.minutes() % 60,
            secs: diff.seconds() % 60,
        });
    }

    setInterval(getDuration, 1000);

    function formatNum(temp) {
        if (temp > 9) return temp;
        if (temp > 0) return "0" + temp;
        return "00";
    }

    return (
        <section id="baby-info">
            <h1 className="title-quote">ماشاءاللہ</h1>

            <div className="wrapper">
                <div
                    className="content"
                    data-aos="zoom-out"
                    data-aos-offset="300"
                >
                    <div
                        id="carouselIndicators"
                        className="carousel slide"
                        data-interval="2000"
                        data-ride="carousel"
                    >
                        <ol className="carousel-indicators">
                            <li
                                data-target="#carouselIndicators"
                                data-slide-to="0"
                                className="active"
                            ></li>
                            <li
                                data-target="#carouselIndicators"
                                data-slide-to="1"
                            ></li>
                            <li
                                data-target="#carouselIndicators"
                                data-slide-to="2"
                            ></li>
                            <li
                                data-target="#carouselIndicators"
                                data-slide-to="3"
                            ></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="img-wrapper">
                                    <img
                                        className="baby-img"
                                        src="../assets/images/baby1.png"
                                        alt="baby_img"
                                    />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="img-wrapper">
                                    <img
                                        className="baby-img"
                                        src="../assets/images/baby2.jpeg"
                                        alt="baby_img"
                                    />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="img-wrapper">
                                    <img
                                        className="baby-img"
                                        src="../assets/images/baby3.jpeg"
                                        alt="baby_img"
                                    />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="img-wrapper">
                                    <img
                                        className="baby-img"
                                        src="../assets/images/baby4.jpeg"
                                        alt="baby_img"
                                    />
                                </div>
                            </div>
                        </div>
                        <a
                            className="carousel-control-prev"
                            href="#carouselIndicators"
                            role="button"
                            data-slide="prev"
                        >
                            <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a
                            className="carousel-control-next"
                            href="#carouselIndicators"
                            role="button"
                            data-slide="next"
                        >
                            <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>

                    <div className="info">
                        {date1 > date2 ? (
                            <>
                                <h3>
                                    Shaikh Z***i*a
                                    <br /> urf
                                    <br />
                                    D**i*a
                                    {"\u00A0"}
                                    {"\u00A0"}
                                    {"\u00A0"}
                                    **am
                                </h3>
                                <p>
                                    We will reveal our Daughter's Name in
                                    {"\u00A0"}
                                    {formatNum(duration.hours)}:
                                    {formatNum(duration.mins)}:
                                    {formatNum(duration.secs)} (HH:MM:SS)
                                </p>
                            </>
                        ) : (
                            <h3>Shaikh Zunaira urf Daniya Iram</h3>
                        )}
                        <h5 className="dob">Date of Birth: 31/01/2022.</h5>
                        <h4>D/o. Mrs. & Mr. Shaikh Chaand Ahmed</h4>
                        <h5>
                            Paternal Grand D/o. Janab T. Shamshuddin Ashrafi
                            Sahab
                        </h5>
                        <h5>
                            Maternal Grand D/o. Janab Shaikh Salam Sahab Sahab
                        </h5>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BabyInfo;
