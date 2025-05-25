import Header from '../components/Header';
import Footer from '../components/Footer';

import "../styles/Intro.css";
import "../styles/ScrollingBanner.css";
import "../styles/Designs.css";
import "../styles/Footer.css";
import "../styles/AboutMe.css";

export default function HomePage() {
  return (
    <div>
      <Header />
      <div className="content-section">
        <section className="intro-section">
        <div className="intro-content">
          <p className="intro-text">
            Hi! My name is Claire and I’m a{" "}
            <span style={{ fontStyle: "italic" }}>designer</span> who loves
            telling stories and making beautiful things.
          </p>
          <a
            href="https://www.linkedin.com/in/clairechen"
            target="_blank"
            rel="noopener noreferrer"
            className="intro-linkedin-btn"
          >
            See my LinkedIn
          </a>
        </div>
      </section>
      <section className="scrolling-banner">
        <div className="scrolling-text">
          <span className="scrolling-text-inner">
            UX Design &nbsp;|&nbsp; Graphic Design &nbsp;|&nbsp; Visual Branding
            &nbsp;|&nbsp;
          </span>
          <span className="scrolling-text-inner">
            UX Design &nbsp;|&nbsp; Graphic Design &nbsp;|&nbsp; Visual Branding
            &nbsp;|&nbsp;
          </span>
        </div>
      </section>
     
    </div>
       {/* Designs In Action Section */}
      <div className="designs-section">
        <h2 className="designs-header">Designs In Action.</h2>
        <div className="designs-grid">
          <div className="design-card">
            <div
              className="design-img"
              style={{ backgroundImage: 'url(/cat.jpg)' }}
            ></div>
            <h3 className="design-title">Drop It Off</h3>
            <p className="design-desc">
              A UX project tackling consumer waste by designing an app that connects donors with organizations in need, streamlining the donation process through AI-powered scanning and smart filtering.
            </p>
          </div>
          <div className="design-card">
            <div
              className="design-img"
              style={{ backgroundImage: 'url(/cat.jpg)' }}
            ></div>
            <h3 className="design-title">UniAdventures</h3>
            <p className="design-desc">
              A service design solution that makes student travel more accessible and social, combining group trips, a travel hub, and an AI chatbot to assist with planning and budgeting.
            </p>
          </div>
          <div className="design-card">
            <div
              className="design-img"
              style={{ backgroundImage: 'url(/cat.jpg)' }}
            ></div>
            <h3 className="design-title">Cullen Jewellery</h3>
            <p className="design-desc">
              At Cullen Jewellery, I led the UX design of an internal LMS and knowledge library system, enhancing accessibility and efficiency for team learning and operations.
            </p>
          </div>
        </div>
      </div>
      {/* About Me Section */}
      <div className="about-me-section">
        <div className="about-me-content">
          <div className="about-me-image" style={{ backgroundImage: 'url(/cat.jpg)' }}></div>
          <div>
            <h2 className="about-me-title">About Me</h2>
            <div className="about-me-text">
              <p>
                As a UX and Graphic Design double major, my passion is in creating things that are not only seamlessly functional but beautiful and enjoyable to use. To me, design is about storytelling — whether shaping a brand, solving a problem, or mapping the journey to a solution.
              </p>
              <p>
                My goal? To create satisfying and enjoyable digital experiences. My happy place? Open, collaborative spaces with plenty of fun people to work with.
              </p>
              <p>
                Outside of work, I’m a cat-mom of two and a nail artist with my own home salon. I enjoy pilates and running, with a goal to run my first half marathon this year!
              </p>
              <a
                href="/path-to-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="about-me-resume-btn"
              >
                See My Resume
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
