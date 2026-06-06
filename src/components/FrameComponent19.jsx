import { useState } from "react";
import FrameComponent13 from "./FrameComponent13";
import FrameComponent14 from "./FrameComponent14";
import PropTypes from "prop-types";
import "./FrameComponent19.css";

const FrameComponent19 = ({ className = "" }) => {
  const [frameComponent13Items] = useState([
    {
      rectangle20: "/Rectangle-20@2x.png",
      singapore: "Singapore",
      tours: "3055 Tours",
      frameDivPadding: "253px 18px 9px",
      frameDivAlignSelf: "stretch",
      frameDivFlex: "",
      frameDivMinWidth: "",
    },
    {
      rectangle20: "/Rectangle-25@2x.png",
      singapore: "Paris",
      tours: "3587 Tours",
      frameDivPadding: "405px 18px 15px",
      frameDivAlignSelf: "stretch",
      frameDivFlex: "",
      frameDivMinWidth: "",
    },
    {
      rectangle20: "/Rectangle-28@2x.png",
      singapore: "Egypt",
      tours: "1954 Tours",
      frameDivPadding: "205px 18px 15px",
      frameDivAlignSelf: "stretch",
      frameDivFlex: "",
      frameDivMinWidth: "",
    },
  ]);
  return (
    <div className={`frame-wrapper14 ${className}`}>
      <div className="frame-parent21">
        <div className="journeys-youll-love-wrapper">
          <div className="journeys-youll-love-container">
            <span className="journeys-youll">{`Journeys You'll `}</span>
            <span className="love">Love</span>
          </div>
        </div>
        <div className="frame-parent22">
          <section className="frame-parent23">
            {frameComponent13Items.map((item, index) => (
              <FrameComponent13
                key={index}
                rectangle20={item.rectangle20}
                singapore={item.singapore}
                tours={item.tours}
                frameDivPadding={item.frameDivPadding}
                frameDivAlignSelf={item.frameDivAlignSelf}
                frameDivFlex={item.frameDivFlex}
                frameDivMinWidth={item.frameDivMinWidth}
              />
            ))}
          </section>
          <div className="frame-parent24">
            <section className="frame-parent25">
              <div className="rectangle-parent27">
                <img
                  className="frame-child32"
                  loading="lazy"
                  alt=""
                  src="/Rectangle-22@2x.png"
                />
                <h2 className="bir-billing">Bir Billing</h2>
                <div className="tours-wrapper">
                  <h3 className="tours3">1877 Tours</h3>
                </div>
              </div>
              <div className="rectangle-parent28">
                <img
                  className="frame-child32"
                  loading="lazy"
                  alt=""
                  src="/Rectangle-23@2x.png"
                />
                <h2 className="bir-billing">Udaipur</h2>
                <h3 className="tours4">2760 Tours</h3>
              </div>
            </section>
            <section className="frame-parent25">
              <FrameComponent14
                rectangle21="/Rectangle-21@2x.png"
                maldives="Maldives"
                tours="3205 Tours"
              />
              <FrameComponent14
                rectangle21="/Rectangle-24@2x.png"
                maldives="Phuket"
                tours="2084 Tours"
                frameDivFlex="unset"
                frameDivPadding="338px 20px 13px 21px"
                frameDivMinWidth="309px"
              />
            </section>
            <section className="frame-parent27">
              <FrameComponent13
                rectangle20="/Rectangle-26@2x.png"
                singapore="Rome"
                tours="2876 Tours"
                frameDivPadding="338px 20px 15px"
                frameDivAlignSelf="unset"
                frameDivFlex="1"
                frameDivMinWidth="379px"
              />
              <FrameComponent14
                rectangle21="/Rectangle-27@2x.png"
                maldives="Cape Town"
                tours="1562 Tours"
                frameDivFlex="unset"
                frameDivPadding="338px 19px 12px"
                frameDivMinWidth="402px"
              />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent19.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent19;
