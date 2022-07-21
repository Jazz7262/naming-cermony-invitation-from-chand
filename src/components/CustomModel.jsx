import React from "react";
import $ from "jquery";
import AOS from "aos";
import "../styles/CustomModel.css";

function CustomModel() {
    function handleClick() {
        $("#modal").fadeOut();
        $("body").removeAttr("style");
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
            mirror: false,
        });
        
        document.getElementById("audio").play();
    }

    return (
        <section id="modal">
            <div className="modal-content">
                <div className="modal-heading">
                    <span className="modal-title">
                        Naming & Aqeeqah Ceremony Invitation
                    </span>
                </div>
                <div className="modal-body">
                    <p>From</p>
                    <span className="modal-description">
                        Mrs. & Mr. Shaikh Chaand Ahmed
                    </span>
                </div>
                <div className="modal-footer">
                    <button className="btn btn-primary" onClick={handleClick}>
                        Open
                    </button>
                </div>
            </div>
        </section>
    );
}

export default CustomModel;
