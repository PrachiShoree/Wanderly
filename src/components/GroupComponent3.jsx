import PropTypes from "prop-types";
import "./GroupComponent3.css";

const GroupComponent3 = ({ className = "", property1 = "Default" }) => {
  return (
    <div
      className={`group-div ${className}`}
      data-scroll-to="groupContainer"
      data-property1={property1}
    >
      <img
        className="instance-child"
        loading="lazy"
        alt=""
        src="/Rectangle-7@2x.png"
      />
      <div className="beaches">Beaches</div>
    </div>
  );
};

GroupComponent3.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.string,
};

export default GroupComponent3;
