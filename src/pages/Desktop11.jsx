import FrameComponent15 from "../components/FrameComponent15";
import FrameComponent16 from "../components/FrameComponent16";
import FrameComponent17 from "../components/FrameComponent17";
import FrameComponent18 from "../components/FrameComponent18";
import FrameComponent19 from "../components/FrameComponent19";
import FrameComponent20 from "../components/FrameComponent20";
import FrameComponent22 from "../components/FrameComponent22";
import FrameComponent21 from "../components/FrameComponent21";
import FrameComponent23 from "../components/FrameComponent23";
import "./Desktop11.css";

const Desktop11 = () => {
  return (
    <div className="desktop-1">
      <div className="rectangle-parent">
        <img className="frame-child" alt="" src="/Rectangle-13@2x.png" />
        <div className="frame-parent">
          <div className="ellipse-parent">
            <div className="frame-item" />
            <img
              className="image-8-icon"
              loading="lazy"
              alt=""
              src="/image-8@2x.png"
            />
          </div>
          <div className="handpicked-destinations">Handpicked Destinations</div>
        </div>
      </div>
      <FrameComponent15 />
      <section className="image-1-parent">
        <img className="image-1-icon" alt="" src="/image-1@2x.png" />
        <img className="image-3-icon" alt="" src="/image-3@2x.png" />
      </section>
      <section className="desktop-1-child" />
      <main className="desktop-1-inner">
        <div className="frame-group">
          <div className="frame-wrapper">
            <div className="frame-container">
              <div className="where-to-parent">
                <h3 className="where-to">Where to?</h3>
                <i className="search-for-a">Search for a place or activity</i>
              </div>
              <div className="when-parent">
                <h3 className="where-to">When?</h3>
                <i className="search-for-a">Select Dates</i>
              </div>
              <div className="frame-inner" />
              <div className="rectangle-group">
                <div className="rectangle-div" />
                <div className="ellipse-group">
                  <div className="ellipse-div" />
                  <img className="image-4-icon" alt="" src="/image-4@2x.png" />
                </div>
                <img className="image-5-icon" alt="" src="/image-5@2x.png" />
                <img className="image-6-icon" alt="" src="/image-6@2x.png" />
              </div>
            </div>
          </div>
          <FrameComponent16 />
          <FrameComponent17 />
          <FrameComponent18 />
          <FrameComponent19 />
        </div>
      </main>
      <div className="free-cancellation-parent">
        <h2 className="free-cancellation">Free cancellation</h2>
        <div className="plans-changed-no">
          Plans changed? No problem. Cancel at least 24 hours in advance and get
          a full refund on most experiences.
        </div>
      </div>
      <FrameComponent20 />
      <FrameComponent22 />
      <FrameComponent21 />
      <FrameComponent23 />
    </div>
  );
};

export default Desktop11;
