import { useCallback } from "react";
import PropTypes from "prop-types";
import "./FrameComponent15.css";

const FrameComponent15 = ({ className = "" }) => {
  const onGroupContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='chooseYourEscape']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <section className={`frame-section ${className}`}>
      <div className="frame-div">
        <header className="frame-header">
          <div className="wanderly-wrapper">
            <h1 className="wanderly">Wanderly</h1>
          </div>
          <div className="rectangle-container" onClick={onGroupContainerClick}>
            <div className="frame-child2" />
            <div className="explore-now">Explore Now</div>
          </div>
        </header>
        <div className="every-destination-has-container">
          <span className="every-destination-has">
            Every Destination Has a Story <br />
          </span>
          <span className="find-yours">Find Yours</span>
        </div>
      </div>
    </section>
  );
};

FrameComponent15.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent15;
