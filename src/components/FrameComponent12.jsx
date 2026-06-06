import { useMemo } from "react";
import Image2 from "./Image2";
import PropTypes from "prop-types";
import "./FrameComponent12.css";

const FrameComponent12 = ({
  className = "",
  rectangle18,
  himalayanAdventure,
  days6Nights,
  prop,
  frameDivPadding,
  frameDivMarginRight,
  frameDivPadding1,
  frameDivAlignSelf,
  property1,
  image17,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      padding: frameDivPadding,
    };
  }, [frameDivPadding]);

  const frameDiv1Style = useMemo(() => {
    return {
      marginRight: frameDivMarginRight,
    };
  }, [frameDivMarginRight]);

  const frameDiv2Style = useMemo(() => {
    return {
      padding: frameDivPadding1,
    };
  }, [frameDivPadding1]);

  const frameDiv3Style = useMemo(() => {
    return {
      alignSelf: frameDivAlignSelf,
    };
  }, [frameDivAlignSelf]);

  return (
    <section className={`frame-parent12 ${className}`}>
      <div className="rectangle-parent13">
        <div className="frame-child15" />
        <div className="frame-child16" />
      </div>
      <div className="rectangle-parent14" style={frameDivStyle}>
        <img className="frame-child17" alt="" src={rectangle18} />
        <Image2 property1={property1} image17={image17} />
        <div className="frame-parent13" style={frameDiv1Style}>
          <div className="frame-parent14">
            <div className="rectangle-parent15">
              <div className="frame-child18" />
              <h3 className="himalayan-adventure">{himalayanAdventure}</h3>
            </div>
            <div className="days-6-nights-wrapper" style={frameDiv2Style}>
              <h3 className="days-6">{days6Nights}</h3>
            </div>
          </div>
          <div className="frame-wrapper10" style={frameDiv3Style}>
            <div className="parent">
              <h3 className="h3">{prop}</h3>
              <div className="rectangle-parent16">
                <div className="frame-child19" />
                <i className="book-now">Book Now</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent12.propTypes = {
  className: PropTypes.string,
  rectangle18: PropTypes.string,
  himalayanAdventure: PropTypes.string,
  days6Nights: PropTypes.string,
  prop: PropTypes.string,
  property1: PropTypes.any,
  image17: PropTypes.string,

  /** Style props */
  frameDivPadding: PropTypes.string,
  frameDivMarginRight: PropTypes.string,
  frameDivPadding1: PropTypes.string,
  frameDivAlignSelf: PropTypes.string,
};

export default FrameComponent12;
