import PropTypes from "prop-types";
import "./Image3.css";

const Image3 = ({ className = "", property1 = "Default" }) => {
  return (
    <div className={`image-172 ${className}`} data-property1={property1}>
      <img className="image-17-icon2" alt="" src="/image-173@2x.png" />
      <img className="image-16-icon" alt="" src="/image-16@2x.png" />
    </div>
  );
};

Image3.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.string,
};

export default Image3;
