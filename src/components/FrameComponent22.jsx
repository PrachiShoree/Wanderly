import PropTypes from "prop-types";
import "./FrameComponent22.css";

const FrameComponent22 = ({ className = "" }) => {
  return (
    <footer className={`frame-footer ${className}`}>
      <div className="frame-child34" />
      <img
        className="image-20-icon"
        loading="lazy"
        alt=""
        src="/image-20@2x.png"
      />
      <img
        className="image-21-icon"
        loading="lazy"
        alt=""
        src="/image-21@2x.png"
      />
      <img
        className="image-22-icon"
        loading="lazy"
        alt=""
        src="/image-22@2x.png"
      />
      <img
        className="image-23-icon"
        loading="lazy"
        alt=""
        src="/image-23@2x.png"
      />
      <img
        className="image-3-icon2"
        loading="lazy"
        alt=""
        src="/image-31@2x.png"
      />
      <img
        className="image-26-icon"
        loading="lazy"
        alt=""
        src="/image-26@2x.png"
      />
    </footer>
  );
};

FrameComponent22.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent22;
