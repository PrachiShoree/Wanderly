import PropTypes from "prop-types";
import "./GroupComponent4.css";

const GroupComponent4 = ({ className = "", property1 = "Default" }) => {
  return (
    <div
      className={`rectangle-parent2 ${className}`}
      data-property1={property1}
    >
      <img
        className="instance-item"
        loading="lazy"
        alt=""
        src="/Rectangle-8@2x.png"
      />
      <div className="mountains">Mountains</div>
    </div>
  );
};

GroupComponent4.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.string,
};

export default GroupComponent4;
