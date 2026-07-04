import "./VideoSection.css";
import videoBanner from "../../../assets/images/video-banner.png";

function VideoSection() {
  return (
    <section className="video-section">
      <div className="video-banner">
        <img
          src={videoBanner}
          alt="AutoVault Video"
          className="video-image"
        />
        <button className="play-btn">
          <i className="bi bi-play-fill"></i>
        </button>
      </div>
    </section>
  );
}

export default VideoSection;
