import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import "../styles/BabyQuote.css";

function BabyQuote() {
    const date1 = new Date("2022 7 22 2:00 PM");
    const date2 = new Date();

    return (
        <section id="baby-quote">
            <div className="baby-quote-wrapper">
                <div className="inner-content">
                    <h3>
                        My Mom, Dad and my Grand Parents have decided to Name me
                        and preform my Aqeeqah and we want you and your Family
                        to share our happiness together. So plese be there to
                        bless me when I get named ...
                    </h3>
                    <div className="right-align">
                        <h3>
                            With Love
                            <FontAwesomeIcon
                                icon={faHeart}
                                className="icon"
                                size="sm"
                            />
                        </h3>
                        {date1 > date2 ? (
                            <h2 className="name">--- Siddiqa</h2>
                        ) : (
                            <h2 className="name">--- Daniya Iram</h2>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BabyQuote;
