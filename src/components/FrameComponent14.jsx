import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent14.css";

const FrameComponent14 = ({
  className = "",
  rectangle21,
  maldives,
  tours,
  frameDivFlex,
  frameDivPadding,
  frameDivMinWidth,
}) => {
  const frameDiv5Style = useMemo(() => {
    return {
      flex: frameDivFlex,
      padding: frameDivPadding,
      minWidth: frameDivMinWidth,
    };
  }, [frameDivFlex, frameDivPadding, frameDivMinWidth]);

  return (
    <div className={`rectangle-parent26 ${className}`} style={frameDiv5Style}>
      <img className="frame-child31" loading="lazy" alt="" src={rectangle21} />
      <h2 className="maldives">{maldives}</h2>
      <h3 className="tours2">{tours}</h3>
    </div>
  );
};

FrameComponent14.propTypes = {
  className: PropTypes.string,
  rectangle21: PropTypes.string,
  maldives: PropTypes.string,
  tours: PropTypes.string,

  /** Style props */
  frameDivFlex: PropTypes.string,
  frameDivPadding: PropTypes.string,
  frameDivMinWidth: PropTypes.string,
};

export default FrameComponent14;
