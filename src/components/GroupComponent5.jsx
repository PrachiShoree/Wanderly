import GroupComponent4 from "./GroupComponent4";
import PropTypes from "prop-types";
import "./GroupComponent5.css";

const GroupComponent5 = ({
  className = "",
  property1 = "Default",
  property11,
}) => {
  return (
    <div className={`instance-wrapper ${className}`} data-property1={property1}>
      <GroupComponent4 property1={property11} />
    </div>
  );
};

GroupComponent5.propTypes = {
  className: PropTypes.string,
  property11: PropTypes.any,

  /** Variant props */
  property1: PropTypes.string,
};

export default GroupComponent5;
