import "./Hero.css";

function Hero({ setPage }) {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>Welcome to My Portfolio</h1>

        <p>
          Creating modern, responsive and attractive web
          applications using React.js.
        </p>

        <button
          className="about-btn"
          onClick={() => setPage("about")}
        >
          About Me
        </button>
      </div>

      <div className="hero-right">
        <div className="slider-track">
          <img src="https://picsum.photos/400/250?1" alt="img1" />
          <img src="https://picsum.photos/400/250?2" alt="img2" />
          <img src="https://picsum.photos/400/250?3" alt="img3" />
          <img src="https://picsum.photos/400/250?4" alt="img4" />
          <img src="https://picsum.photos/400/250?5" alt="img5" />

          <img src="https://picsum.photos/400/250?1" alt="img1" />
          <img src="https://picsum.photos/400/250?2" alt="img2" />
          <img src="https://picsum.photos/400/250?3" alt="img3" />
          <img src="https://picsum.photos/400/250?4" alt="img4" />
          <img src="https://picsum.photos/400/250?5" alt="img5" />
        </div>
      </div>
    </section>
  );
}

export default Hero;