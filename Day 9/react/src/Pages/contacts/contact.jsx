import "./Contact.css";

function Contact() {
  return (
    <section className="contact">

      <h1>Contact Me</h1>

      <p>
        Feel free to connect with me.
      </p>

      <div className="contact-container">

        <div className="contact-card">
          <h3>📧 Email</h3>
          <p>palakurkude200@gmail.com</p>
        </div>

        <div className="contact-card">
          <h3>📱 Phone</h3>
          <p>+91 9834078819</p>
        </div>

        <div className="contact-card">
          <h3>📍 Location</h3>
          <p>Nashik, Maharashtra</p>
        </div>

      </div>

    </section>
  );
}

export default Contact;