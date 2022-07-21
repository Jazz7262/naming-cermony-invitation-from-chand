import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHackerrank,
    faGithub,
    faLinkedin,
    faWhatsapp,
    faSkype,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import "../styles/DeveloperInfo.css";

function DeveloperInfo() {
    return (
        <section id="developer-info">
            <div>
                <h6>Want your own Card on the Internet, Visit:</h6>
                <a href="https://ziya-invites.netlify.app/">
                    <h4>
                        Ziya Invites
                        <sup>
                            <FontAwesomeIcon
                                icon={faArrowUpRightFromSquare}
                                size="sm"
                            />
                        </sup>
                    </h4>
                </a>
                <br />
                <br />
                <h6>Or Contact:</h6>
                <a href="https://ziauddinziya07.github.io">
                    <h4>
                        Ziauddin Ziya
                        <sup>
                            <FontAwesomeIcon
                                icon={faArrowUpRightFromSquare}
                                size="sm"
                            />
                        </sup>
                    </h4>
                </a>
                <p>
                    ziauddinziya07@gmail.com
                    <br />
                    +91 95737 67548.
                </p>

                <div className="icon-section">
                    <a href="https://wa.me/919573767548" className="icon-link">
                        <FontAwesomeIcon icon={faWhatsapp} size="xl" />
                    </a>
                    <a
                        href="https://join.skype.com/invite/dr2WD0xsdMph"
                        className="icon-link"
                    >
                        <FontAwesomeIcon icon={faSkype} size="xl" />
                    </a>
                    <a
                        href="https://ziauddinziya07.github.io"
                        className="icon-link"
                    >
                        <FontAwesomeIcon icon={faGithub} size="xl" />
                    </a>
                    <a
                        href="https://www.linkedin.in/in/ziauddinziya"
                        className="icon-link"
                    >
                        <FontAwesomeIcon icon={faLinkedin} size="xl" />
                    </a>
                    <a
                        href="https://www.hackerrank.com/ziauddinziya07?hr_r=1"
                        className="icon-link"
                    >
                        <FontAwesomeIcon icon={faHackerrank} size="xl" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default DeveloperInfo;
