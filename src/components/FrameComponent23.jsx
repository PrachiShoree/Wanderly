import PropTypes from "prop-types";
import "./FrameComponent23.css";

const FrameComponent23 = ({ className = "" }) => {
  return (
    <section className={`frame-parent31 ${className}`}>
      <div className="frame-wrapper18">
        <div className="frame-parent32">
          <div className="wanderly-container">
            <h2 className="wanderly2">Wanderly</h2>
          </div>
          <h3 className="turning-travel-dreams">
            Turning travel dreams into reality.
          </h3>
        </div>
      </div>
      <div className="frame-parent33">
        <div className="frame-wrapper19">
          <div className="frame-parent34">
            <div className="frame-parent35">
              <div className="help-center-parent">
                <h3 className="help-center">Help Center</h3>
                <div className="travel-agents-wrapper">
                  <h3 className="help-center">Travel Agents</h3>
                </div>
                <h3 className="get-app-on">{`Get App On `}</h3>
              </div>
              <div className="frame-parent36">
                <div className="about-wanderly-wrapper">
                  <h3 className="help-center">About Wanderly</h3>
                </div>
                <div className="news-wrapper">
                  <h3 className="help-center">News</h3>
                </div>
                <div className="rectangle-parent32">
                  <div className="frame-child38" />
                  <img
                    className="image-24-icon"
                    loading="lazy"
                    alt=""
                    src="/image-24@2x.png"
                  />
                  <div className="google-play">Google Play</div>
                </div>
              </div>
            </div>
            <div className="frame-parent36">
              <div className="privacy-policy-wrapper">
                <h3 className="help-center">Privacy Policy</h3>
              </div>
              <div className="accessibility-wrapper">
                <h3 className="help-center">Accessibility</h3>
              </div>
              <div className="rectangle-parent33">
                <div className="frame-child38" />
                <img
                  className="image-24-icon"
                  loading="lazy"
                  alt=""
                  src="/image-25@2x.png"
                />
                <div className="app-store">App Store</div>
              </div>
            </div>
          </div>
        </div>
        <div className="line-div" />
      </div>
      <div className="frame-wrapper20">
        <div className="all-rights-resesrved-parent">
          <div className="all-rights-resesrved">All Rights Resesrved</div>
          <div className="all-rights-resesrved">{`Terms & Conditions`}</div>
        </div>
      </div>
    </section>
  );
};

FrameComponent23.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent23;
