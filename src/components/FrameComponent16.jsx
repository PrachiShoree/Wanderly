import { useCallback } from "react";
import GroupComponent3 from "./GroupComponent3";
import GroupComponent5 from "./GroupComponent5";
import PropTypes from "prop-types";
import "./FrameComponent16.css";

const FrameComponent16 = ({ className = "" }) => {
  const onGroupContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='groupContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onGroupContainerClick1 = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangleImage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={`frame-parent2 ${className}`}>
      <section className="frame-parent3">
        <div className="choose-your-escape-wrapper">
          <div
            className="choose-your-escape-container"
            data-scroll-to="chooseYourEscape"
          >
            <span className="choose-your">
              <span>Choose Your</span>
              <span className="span">{` `}</span>
            </span>
            <span className="span">
              <span>Escape</span>
            </span>
          </div>
        </div>
        <div className="from-sun-kissed-beaches-and-ma-parent">
          <i className="from-sun-kissed-beaches">
            From sun-kissed beaches and majestic mountains to golden deserts and
            vibrant cities, discover the perfect destination for your next
            adventure.
          </i>
          <div className="frame-wrapper2">
            <div className="frame-parent4">
              <div
                className="ellipse-container"
                onClick={onGroupContainerClick}
              >
                <div className="frame-child3" />
                <img className="image-28-icon" alt="" src="/image-28@2x.png" />
              </div>
              <div
                className="ellipse-container"
                onClick={onGroupContainerClick1}
              >
                <div className="frame-child3" />
                <img className="image-28-icon" alt="" src="/image-27@2x.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="frame-wrapper3">
        <div className="frame-parent5">
          <div className="instance-parent">
            <GroupComponent3 property1="Default" />
            <GroupComponent5 property1="Default" property11="Default" />
            <div className="rectangle-parent3">
              <img
                className="rectangle-icon"
                loading="lazy"
                alt=""
                src="/Rectangle-9@2x.png"
              />
              <div className="deserts">Deserts</div>
            </div>
            <div className="rectangle-parent4">
              <img
                className="rectangle-icon"
                loading="lazy"
                alt=""
                src="/Rectangle-10@2x.png"
              />
              <div className="deserts">Forests</div>
            </div>
            <div className="rectangle-parent5">
              <img
                className="rectangle-icon"
                loading="lazy"
                alt=""
                src="/Rectangle-11@2x.png"
              />
              <div className="deserts">Cities</div>
            </div>
            <div className="rectangle-parent6">
              <img
                className="rectangle-icon"
                loading="lazy"
                alt=""
                src="/Rectangle-12@2x.png"
              />
              <div className="deserts">Islands</div>
            </div>
            <div className="rectangle-parent7">
              <img
                className="frame-child8"
                loading="lazy"
                alt=""
                src="/Rectangle-34@2x.png"
              />
              <h2 className="ice-snow">{`Ice & Snow`}</h2>
            </div>
          </div>
          <div className="rectangle-parent8">
            <img
              className="frame-child8"
              loading="lazy"
              alt=""
              src="/Rectangle-35@2x.png"
              data-scroll-to="rectangleImage"
            />
            <h3 className="adventure-spots">
              Adventure
              <br />
              Spots
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
};

FrameComponent16.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent16;
