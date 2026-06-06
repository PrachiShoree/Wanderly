import PropTypes from "prop-types";
import "./FrameComponent21.css";

const FrameComponent21 = ({ className = "" }) => {
  return (
    <section className={`desktop-1-inner3 ${className}`}>
      <div className="frame-parent29">
        <section className="frame-parent30">
          <div className="travel-on-your-terms-wrapper">
            <h2 className="travel-on-your">Travel on Your Terms</h2>
          </div>
          <div className="rectangle-parent29">
            <div className="frame-child35" />
            <div className="reserve-now-and">
              Reserve now and pay later to secure your spot on must-see
              experiences while keeping your plans open.
            </div>
          </div>
        </section>
        <div className="frame-wrapper15">
          <div className="rectangle-parent30">
            <img
              className="frame-child36"
              loading="lazy"
              alt=""
              src="/Rectangle-42@2x.png"
            />
            <section className="frame-wrapper16">
              <div className="log-in-to-unlock-unforgettable-parent">
                <h2 className="log-in-to">
                  Log in to unlock unforgettable adventures.
                </h2>
                <div className="frame-wrapper17">
                  <div className="rectangle-parent31">
                    <div className="frame-child37" />
                    <div className="log-in">Log In</div>
                  </div>
                </div>
                <div className="dont-have-an-account-yet-sig-wrapper">
                  <h3 className="dont-have-an-container">
                    <i className="dont-have-an">Don’t have an account yet?</i>
                    <span className="sign-up">{` `}</span>
                    <span className="sign-up">
                      <span className="sign-up2">Sign Up</span>
                    </span>
                  </h3>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent21.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent21;
