import { useState, useEffect, useRef } from "react";
import "./App.css";

// COUNTDOWN TIMER
function Countdown() {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const calculateTime = () => {
      const eventDate = new Date("2026-11-10T12:00:00+08:00");
      const now = new Date();
      const difference = eventDate - now;

      if (difference <= 0) {
        setTimeLeft({
          message: "The celebration has begun! 🪔",
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(
          difference / (1000 * 60 * 60 * 24)
        ),
        hours: Math.floor(
          (difference / (1000 * 60 * 60)) % 24
        ),
        minutes: Math.floor(
          (difference / (1000 * 60)) % 60
        ),
        seconds: Math.floor(
          (difference / 1000) % 60
        ),
      });
    };

    calculateTime();

    const timer = setInterval(calculateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  if (timeLeft.message) {
    return <h2>{timeLeft.message}</h2>;
  }

  return (
    <div className="countdown">
      <div>
        <strong>{timeLeft.days ?? 0}</strong>
        <span>Days</span>
      </div>

      <div>
        <strong>{timeLeft.hours ?? 0}</strong>
        <span>Hours</span>
      </div>

      <div>
        <strong>{timeLeft.minutes ?? 0}</strong>
        <span>Minutes</span>
      </div>

      <div>
        <strong>{timeLeft.seconds ?? 0}</strong>
        <span>Seconds</span>
      </div>
    </div>
  );
}

// MAIN APP
function App() {
  const [opened, setOpened] = useState(false);

  // Reference for invitation details
  const detailsRef = useRef(null);

  // Automatically scroll when invitation opens
  useEffect(() => {
    if (opened && detailsRef.current) {
      detailsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [opened]);

  return (
    <main className="diwali-site">

      {/* NAVIGATION */}
      <nav className="navbar">
        <div className="brand">
          <span className="brand-icon">🪔</span>
          DEEPAVALI 2026
        </div>

        <div className="nav-label">
          A FAMILY CELEBRATION
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-left">

          <div className="event-tag">
            ✦ YOU ARE INVITED
          </div>

          <h1>
            A Little
            <br />
            <span>Light.</span>
            <br />
            A Lot of
            <br />
            <span>Love.</span>
          </h1>

          <p className="hero-description">
            This Deepavali, our home opens its
            doors for a day of happiness,
            good food and beautiful memories.
          </p>

          <div className="hero-host">
            <span>WITH LOVE FROM</span>
            <h3>SHARWIN N SURESHKUMAR</h3>
            <p>& FAMILY</p>
          </div>

          <button
            className="modern-button"
            onClick={() => setOpened(!opened)}
          >
            {opened
              ? "Close Invitation ↑"
              : "View Invitation ↓"}
          </button>

        </div>

        {/* HERO VISUAL */}
        <div className="hero-right">
          <div className="sun-shape"></div>

          <div className="lamp-visual">
            🪔
          </div>

          <div className="floating-flower flower-one">
            ✺
          </div>

          <div className="floating-flower flower-two">
            ✿
          </div>

          <div className="vertical-text">
            LIGHT • JOY • TOGETHERNESS
          </div>

          <div className="image-caption">
            <span>10 NOVEMBER 2026</span>
            <span>12:00 PM</span>
          </div>
        </div>
      </section>

      {/* INVITATION DETAILS */}
      {opened && (
        <section
          className="details-section"
          ref={detailsRef}
        >

          <div className="details-heading">
            <p>THE CELEBRATION</p>
            <h2>Come, Celebrate With Us.</h2>
          </div>

          {/* COUNTDOWN */}
          <div className="countdown-container">
            <p>COUNTDOWN TO DEEPAVALI</p>
            <Countdown />
          </div>

          {/* EVENT DETAILS */}
          <div className="details-grid">

            <div className="detail-item">
              <span>DATE</span>
              <h3>10 November</h3>
              <p>Tuesday, 2026</p>
            </div>

            <div className="detail-item">
              <span>TIME</span>
              <h3>12:00 PM</h3>
              <p>Lunch & celebration</p>
            </div>

            <div className="detail-item">
              <span>VENUE</span>
              <h3>KC 55</h3>
              <p>
                Taman Tuanku Jaafar Golf
                & Country Resort
              </p>
            </div>

          </div>

          {/* ADDRESS */}
          <p className="details-address">
            KC 55, Jalan Kasia Ville 7,
            Taman Tuanku Jaafar Golf & Country Resort,
            71450 Seremban,
            Negeri Sembilan
          </p>

          {/* GOOGLE MAPS AND WAZE */}
          <div className="navigation-buttons">

            <a
              href="https://www.google.com/maps/search/?api=1&query=2.6796593%2C102.0000508"
              target="_blank"
              rel="noopener noreferrer"
              className="map-button google-button"
            >
              📍 Open Google Maps
            </a>

            <a
              href="https://waze.com/ul?ll=2.6796593%2C102.0000508&navigate=yes"
              target="_blank"
              rel="noopener noreferrer"
              className="map-button waze-button"
            >
              🚗 Open Waze
            </a>

          </div>

          {/* GOOGLE CALENDAR */}
          <div className="calendar-button-container">

            <a
              href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Sharwin%27s+Deepavali+Open+House+2026&dates=20261110T040000Z/20261110T080000Z&details=You+are+invited+to+celebrate+Deepavali+with+Sharwin+and+family.&location=KC+55+Jalan+Kasia+Ville+7+Seremban+Negeri+Sembilan"
              target="_blank"
              rel="noopener noreferrer"
              className="calendar-button"
            >
              📅 Add to Google Calendar
            </a>

          </div>

        </section>
      )}

      {/* FOOTER */}
      <footer>
        <p>MADE WITH LOVE & FESTIVE LIGHTS</p>
        <span>✦ 🪔 ✦</span>
      </footer>

    </main>
  );
}

export default App;