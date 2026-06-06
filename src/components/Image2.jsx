import PropTypes from "prop-types";
import "./Image2.css";

const Image2 = ({ className = "", property1 = "Default", image17 }) => {
  return (
    <div className={`image-17 ${className}`} data-property1={property1}>
      <img className="image-17-icon" loading="lazy" alt="" src={image17} />
    </div>
  );
};

Image2.propTypes = {
  className: PropTypes.string,
  image17: PropTypes.string,

  /** Variant props */
  property1: PropTypes.string,
};

export default Image2;
