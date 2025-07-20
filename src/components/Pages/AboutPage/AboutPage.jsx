import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css'; 

const AboutPage = () => {
  
  return (
    <div className="about-page-container">
      <h1 className="about-page-title">About Restroapp</h1>
      <p className="about-page-intro">
        Welcome to <strong>Restroapp</strong>, your ultimate companion for discovering delightful dining experiences!
        We believe that great food brings people together, and our mission is to make
        your culinary journey as seamless and enjoyable as possible.
      </p>

      <section className="about-section">
        <h2 className="section-title">Our Story</h2>
        <p>
          Founded in 2024 right here in <strong>Bengaluru, Karnataka,</strong> Restroapp was born out of a passion for food and technology.
          Our founders, a group of food enthusiasts and tech innovators, noticed a gap
          in the market for a user-friendly platform that truly connects diners with
          the best local restaurants. From humble beginnings, we've grown into a vibrant
          community, constantly striving to enhance how you find, order, and savor your favorite meals.
        </p>
      </section>

      <section className="about-section">
        <h2 className="section-title">What We Offer</h2>
        <ul className="offerings-list">
          <li>
            <strong>Diverse Menus:</strong> Explore a wide array of cuisines and dishes from various restaurants.
          </li>
          <li>
            <strong>Easy Ordering:</strong> Seamlessly place your orders online with just a few taps.
          </li>
          <li>
            <strong>Restaurant Discovery:</strong> Find hidden gems and popular spots near you.
          </li>
          <li>
            <strong>User Reviews:</strong> Read and share genuine feedback to help others make informed choices.
          </li>
          <li>
            <strong>Exclusive Deals:</strong> Access special offers and discounts from our partner restaurants.
          </li>
        </ul>
      </section>

      <section className="about-section">
        <h2 className="section-title">Our Vision</h2>
        <p>
          Our vision is to become the leading platform for food enthusiasts, empowering
          both diners and restaurants to thrive. We aim to foster a community where
          everyone can share their love for food and create memorable dining moments.
        </p>
      </section>

      <section className="about-section">
        <h2 className="section-title">Join Our Community</h2>
        <p>
          We're always looking for feedback and ways to improve. Connect with us on social media
          or through our contact page to share your thoughts!
        </p>
        <Link to="/contact" className="contact-button">
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default AboutPage;