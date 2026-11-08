import { useState, useEffect, useRef } from "react";
import "./App.css";

const EVENT_TIMESTAMP = new Date("2026-11-10T12:00:00+08:00").getTime();

function calculateTimeRemaining() {
  const now = Date.now();
  const difference = EVENT_TIMESTAMP - now;

  if (difference <= 0) {
    return { isOver: true, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    isOver: false,
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeRemaining);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (timeLeft.isOver) {
    return (
      <div className="countdown-message">
        <span className="celebration-sparkle">🪔</span>
        <h2>The celebration has begun!</h2>
        <span className="celebration-sparkle">🪔</span>
      </div>
    );
  }

  const pad = (num) => String(num).padStart(2, "0");

  return (
    <div className="countdown" role="timer" aria-live="polite">
      <div className="countdown-card">
        <strong className="countdown-num">{pad(timeLeft.days)}</strong>
        <span className="countdown-unit">Days</span>
      </div>
      <div className="countdown-card">
        <strong className="countdown-num">{pad(timeLeft.hours)}</strong>
        <span className="countdown-unit">Hours</span>
      </div>
      <div className="countdown-card">
        <strong className="countdown-num">{pad(timeLeft.minutes)}</strong>
        <span className="countdown-unit">Minutes</span>
      </div>
      <div className="countdown-card">
        <strong className="countdown-num">{pad(timeLeft.seconds)}</strong>
        <span className="countdown-unit">Seconds</span>
      </div>
    </div>
  );
}

function App() {
  const posterRef = useRef(null);
  const detailsRef = useRef(null);

  const scrollToDetails = () => {
    detailsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToPoster = () => {
    posterRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="diwali-site">
      {/* OPENING POSTER SECTION */}
      <section className="poster-section" ref={posterRef}>
        <div className="poster-container">
          <img
            src="/deepavali-portrait.png"
            alt="Welcome to Our Deepavali Open House"
            className="invitation-poster"
          />

          {/* EXACT CENTERED HITBOX OVER 'VIEW INVITATION' */}
          <button
            type="button"
            className="poster-click-area"
            onClick={scrollToDetails}
            aria-label="View invitation details"
          />
        </div>

        {/* SUBTLE FLOATING SCROLL INDICATOR */}
        <div className="scroll-hint-indicator" onClick={scrollToDetails}>
          <span>Scroll down for details</span>
          <div className="chevron-icon">↓</div>
        </div>
      </section>

      {/* INVITATION DETAILS (ALWAYS MOUNTED SO SCROLLING WORKS NATURALLY) */}
      <section className="details-section" ref={detailsRef}>
        <div className="details-inner">
          <button
            type="button"
            className="back-button"
            onClick={scrollToPoster}
            aria-label="Back to invitation poster"
          >
            ↑ Back to Poster
          </button>

          {/* HEADING */}
          <header className="details-heading">
            <p className="section-label">✦ 🪔 THE CELEBRATION 🪔 ✦</p>

            <h2>
              Come, Celebrate
              <br />
              <span>With Us.</span>
            </h2>

            <p className="invitation-message">
              Join us for a joyful Deepavali celebration filled with love,
              happiness, delicious food, and beautiful memories.
            </p>
          </header>

          {/* COUNTDOWN */}
          <div className="countdown-container">
            <p className="countdown-label">COUNTDOWN TO OUR CELEBRATION</p>
            <Countdown />
          </div>

          {/* EVENT DETAILS GRID */}
          <div className="details-grid">
            <article className="detail-item">
              <div className="detail-icon" aria-hidden="true">📅</div>
              <span>DATE</span>
              <h3>10 November 2026</h3>
              <p>Tuesday</p>
            </article>

            <article className="detail-item">
              <div className="detail-icon" aria-hidden="true">🕛</div>
              <span>TIME</span>
              <h3>12:00 PM</h3>
              <p>Lunch </p>
            </article>

            <article className="detail-item">
              <div className="detail-icon" aria-hidden="true">📍</div>
              <span>VENUE</span>
              <h3>Taman Tuanku Jaafar</h3>
             
            </article>
          </div>

          {/* FULL ADDRESS CARD */}
          <div className="address-card">
            <p className="address-label">CELEBRATION LOCATION</p>
            <p className="details-address">
              KC 55, Jalan Kasia Ville 7, Taman Tuanku Jaafar Golf &amp;
              Country Resort, 71450 Seremban, Negeri Sembilan
            </p>
          </div>

          {/* NAVIGATION BUTTONS */}
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

          {/* GOOGLE CALENDAR BUTTON */}
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

          {/* CLOSING MESSAGE */}
          <div className="closing-message">
            <div className="closing-decoration">✦ 🪔 ✦</div>
            <h3>
              We Can't Wait to
              <br />
              Celebrate With You!
            </h3>
            <p>
              With love,
              <br />
              <strong>SHARWIN N SURESHKUMAR &amp; FAMILY</strong>
            </p>
          </div>

          {/* FOOTER */}
          <footer className="invitation-footer">
            <p>MADE WITH LOVE &amp; FESTIVE LIGHTS</p>
            <span>✦ 🪔 ✦</span>
            <div className="designer-credit">
              Designed by <strong>Codvira</strong>
            </div>
          </footer>
        </div>
      </section>
    </main>
  );
}

export default App;