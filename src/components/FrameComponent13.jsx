import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent13.css";

const FrameComponent13 = ({
  className = "",
  rectangle20,
  singapore,
  tours,
  frameDivPadding,
  frameDivAlignSelf,
  frameDivFlex,
  frameDivMinWidth,
}) => {
  const frameDiv4Style = useMemo(() => {
    return {
      padding: frameDivPadding,
      alignSelf: frameDivAlignSelf,
      flex: frameDivFlex,
      minWidth: frameDivMinWidth,
    };
  }, [frameDivPadding, frameDivAlignSelf, frameDivFlex, frameDivMinWidth]);

  return (
    <div className={`rectangle-parent25 ${className}`} style={frameDiv4Style}>
      <img className="frame-child30" loading="lazy" alt="" src={rectangle20} />
      <div className="singapore-wrapper">
        <h2 className="singapore">{singapore}</h2>
      </div>
      <h3 className="tours">{tours}</h3>
    </div>
  );
};

FrameComponent13.propTypes = {
  className: PropTypes.string,
  rectangle20: PropTypes.string,
  singapore: PropTypes.string,
  tours: PropTypes.string,

  /** Style props */
  frameDivPadding: PropTypes.string,
  frameDivAlignSelf: PropTypes.string,
  frameDivFlex: PropTypes.string,
  frameDivMinWidth: PropTypes.string,
};

export default FrameComponent13;
