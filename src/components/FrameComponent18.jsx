import Image2 from "./Image2";
import FrameComponent12 from "./FrameComponent12";
import Image3 from "./Image3";
import PropTypes from "prop-types";
import "./FrameComponent18.css";

const FrameComponent18 = ({ className = "" }) => {
  return (
    <div className={`frame-wrapper11 ${className}`}>
      <div className="frame-parent15">
        <section className="frame-parent16">
          <div className="rectangle-parent17">
            <div className="frame-child20" />
            <div className="frame-child21" />
          </div>
          <div className="rectangle-parent18">
            <img className="frame-child22" alt="" src="/Rectangle-18@2x.png" />
            <Image2 property1="Default" image17="/image-17@2x.png" />
            <div className="frame-parent17">
              <div className="rectangle-parent19">
                <div className="frame-child23" />
                <h3 className="bali-paradise-escape">Bali Paradise Escape</h3>
              </div>
              <div className="days-4-nights-wrapper">
                <h3 className="days-4">5 Days • 4 Nights</h3>
              </div>
              <div className="frame-wrapper12">
                <div className="group">
                  <h3 className="h32">₹24,999</h3>
                  <div className="rectangle-parent20">
                    <div className="frame-child24" />
                    <i className="book-now2">Book Now</i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FrameComponent12
          rectangle18="/Rectangle-181@2x.png"
          himalayanAdventure="Himalayan Adventure"
          days6Nights="7 Days • 6 Nights"
          prop="₹18,999"
          property1="Default"
          image17="/image-171@2x.png"
        />
        <FrameComponent12
          rectangle18="/Rectangle-182@2x.png"
          himalayanAdventure="Dubai Luxury Getaway"
          days6Nights="4 Days • 3 Nights"
          prop="₹39,999"
          frameDivPadding="13px 21px 0px"
          frameDivMarginRight="-26px"
          frameDivPadding1="0px 76px 0px 75px"
          frameDivAlignSelf="stretch"
          property1="Default"
          image17="/image-172@2x.png"
        />
        <section className="frame-parent18">
          <div className="rectangle-parent17">
            <div className="frame-child20" />
            <div className="frame-child21" />
          </div>
          <div className="rectangle-parent22">
            <img className="frame-child22" alt="" src="/Rectangle-183@2x.png" />
            <Image3 property1="Variant2" />
            <div className="frame-parent19">
              <div className="frame-parent20">
                <div className="rectangle-parent23">
                  <div className="frame-child23" />
                  <h3 className="bali-paradise-escape">Swiss Alps Retreat</h3>
                </div>
                <div className="days-5-nights-wrapper">
                  <h3 className="days-4">6 Days • 5 Nights</h3>
                </div>
              </div>
              <div className="frame-wrapper13">
                <div className="container">
                  <h3 className="h32">₹89,999</h3>
                  <div className="rectangle-parent20">
                    <div className="frame-child24" />
                    <i className="book-now2">Book Now</i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

FrameComponent18.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent18;
