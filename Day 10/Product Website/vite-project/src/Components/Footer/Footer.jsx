import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <h2>TechLuxe</h2>
        <p>
          Premium electronics, curated deals, and a refined shopping experience
          for modern devices.
        </p>
      </div>
      <div id="about">
        <h3>Support</h3>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#faq">FAQ</a>
      </div>
      <div id="contact">
        <h3>Social</h3>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://x.com" target="_blank" rel="noreferrer">X</a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
      <p className="copyright">Copyright 2026 TechLuxe. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
