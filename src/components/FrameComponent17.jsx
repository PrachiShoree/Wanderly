import PropTypes from "prop-types";
import "./FrameComponent17.css";

const FrameComponent17 = ({ className = "" }) => {
  return (
    <div className={`frame-wrapper4 ${className}`}>
      <div className="frame-parent6">
        <div className="frame-parent7">
          <div className="why-travel-with-us-wrapper">
            <div className="why-travel-with-container">
              <span>
                <span className="why-travel-with">Why Travel With</span>
                <span className="span2">{` `}</span>
              </span>
              <span className="us">Us</span>
            </div>
          </div>
          <i className="travel-smarter-explore">{`Travel smarter, explore further, and create unforgettable memories with experiences designed just for you. `}</i>
        </div>
        <section className="frame-wrapper5">
          <div className="frame-parent8">
            <div className="frame-wrapper6">
              <div className="rectangle-parent9">
                <div className="frame-child10" />
                <div className="image-9-wrapper">
                  <img
                    className="image-9-icon"
                    loading="lazy"
                    alt=""
                    src="/image-9@2x.png"
                  />
                </div>
                <div className="seamless-planning-wrapper">
                  <h3 className="seamless-planning"> Seamless Planning</h3>
                </div>
                <i className="from-booking-to">
                  From booking to departure, we handle every detail so you can
                  travel stress-free.
                </i>
              </div>
            </div>
            <div className="rectangle-parent10">
              <div className="frame-child10" />
              <div className="image-9-wrapper">
                <img className="image-13-icon" alt="" src="/image-13@2x.png" />
              </div>
              <div className="best-value-deals-wrapper">
                <h3 className="seamless-planning">Best Value Deals</h3>
              </div>
              <i className="from-booking-to">
                Enjoy competitive prices and exclusive offers without
                compromising on quality.
              </i>
            </div>
          </div>
        </section>
        <div className="frame-wrapper7">
          <div className="frame-parent9">
            <div className="frame-wrapper8">
              <div className="x-7-customer-support-parent">
                <div className="x-7-customer">
                  24 X 7 <br />
                  Customer
                  <br />
                  Support
                </div>
                <div className="ellipse-parent3">
                  <div className="frame-child12" />
                  <img
                    className="image-7-icon"
                    loading="lazy"
                    alt=""
                    src="/image-7@2x.png"
                  />
                </div>
              </div>
            </div>
            <section className="frame-parent10">
              <div className="frame-parent11">
                <div className="frame-wrapper9">
                  <div className="rectangle-parent11">
                    <div className="frame-child10" />
                    <div className="image-9-wrapper">
                      <img
                        className="image-9-icon"
                        loading="lazy"
                        alt=""
                        src="/image-15@2x.png"
                      />
                    </div>
                    <div className="safe-reliable-wrapper">
                      <h3 className="seamless-planning">{`Safe & Reliable`}</h3>
                    </div>
                    <i className="from-booking-to">
                      Travel with confidence knowing your comfort and safety are
                      our top priorities.
                    </i>
                  </div>
                </div>
                <div className="traveler-favorites">
                  <span className="why-travel-with">
                    <span>Traveler</span>
                  </span>
                  <span>
                    <span className="why-travel-with">{` `}</span>
                    <span className="favorites">Favorites</span>
                  </span>
                </div>
              </div>
              <div className="rectangle-parent12">
                <div className="frame-child10" />
                <div className="image-9-wrapper">
                  <img
                    className="image-9-icon"
                    loading="lazy"
                    alt=""
                    src="/image-14@2x.png"
                  />
                </div>
                <div className="personalized-trips-wrapper">
                  <h3 className="seamless-planning"> Personalized Trips</h3>
                </div>
                <i className="from-booking-to">
                  Tailored itineraries designed around your interests,
                  preferences, and travel style.
                </i>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent17.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent17;
