import React from 'react';
import './ContactPage.css'; // Create this CSS file too!

const ContactPage = () => {
  return (
    <div className="contact-page-container">
      <h1 className="contact-page-title">Get in Touch with Restroapp</h1>
      <p className="contact-page-intro">
        We'd love to hear from you! Whether you have feedback, questions, or just want to say hello,
        feel free to reach out using the methods below.
      </p>

      <section className="contact-info-section">
        <div className="contact-item">
          <h3>Email Us</h3>
          <p>
            For general inquiries and support:
            <br />
            <a href="mailto:support@restroapp.com">support@restroapp.com</a>
          </p>
          <p>
            For business partnerships:
            <br />
            <a href="mailto:partnerships@restroapp.com">partnerships@restroapp.com</a>
          </p>
        </div>

        <div className="contact-item">
          <h3>Call Us</h3>
          <p>
            Reach our customer service team:
            <br />
            <a href="tel:+919876543210">+91 98765 43210</a> (Mon-Fri, 9 AM - 6 PM IST)
          </p>
        </div>

        <div className="contact-item">
          <h3>Visit Us (Head Office)</h3>
          <p>
            Restroapp Headquarters
            <br />
            123 Food Street, Tech Park Area,
            <br />
            Bengaluru, Karnataka, India - 560001
          </p>
          <p>
            *Please note: This is our office address, not a restaurant location.*
          </p>
        </div>
      </section>

      <section className="social-media-section">
        <h2 className="section-title">Connect with Us</h2>
        <div className="social-icons">
          <a href="https://facebook.com/restroapp" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" />
          </a>
          <a href="https://instagram.com/restroapp" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
          </a>
          <a href="https://twitter.com/restroapp" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg" alt="Twitter/X" />
          </a>
        </div>
      </section>

      <section className="contact-form-section">
        <h2 className="section-title">Send Us a Message</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default ContactPage;