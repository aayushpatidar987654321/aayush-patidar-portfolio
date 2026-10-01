import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <section
      className="contact-section section-container"
      id="contact"
    >
      <div className="contact-container">
        <h3>Contact</h3>

        <div className="contact-flex">

         <div className="contact-box">
  <h4>Email</h4>

  <p>
    <a
      href="mailto:aayushpatidar987654321@gmail.com"
      data-cursor="disable"
    >
      aayushpatidar987654321@gmail.com
    </a>
  </p>

  <h4>Phone</h4>

  <p>
    <a
      href="tel:+919303953262"
      data-cursor="disable"
    >
      +91 93039 53262
    </a>
  </p>
</div>

          {/* Social */}
          <div className="contact-box">
            <h4>Social</h4>

            <a
              href="https://www.instagram.com/ayyus._h/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>

            <a
              href="https://wa.me/919303953262"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              WhatsApp <MdArrowOutward />
            </a>
          </div>

          {/* Credits */}
          <div className="contact-box">
            <h2>
              Designed and Developed
              <br />
              by <span>Aayush Patidar</span>
            </h2>

            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;