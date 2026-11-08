
import { useState, useEffect, useRef } from "react";
import "./App.css";

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const calculateTime = () => {
      const eventDate = new Date("2026-11-10T12:00:00+08:00");
      const now = new Date();
      const difference = eventDate - now;

      if (difference <= 0) {
        setTimeLeft({ message: "The celebration has begun! 🪔" });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  if (timeLeft.message) {
    return <h2 className="countdown-message">{timeLeft.message}</h2>;
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

function App() {
  const [opened, setOpened] = useState(false);

  const posterRef = useRef(null);
  const detailsRef = useRef(null);

  useEffect(() => {
    if (opened && detailsRef.current) {
      detailsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [opened]);

  const backToPoster = () => {
    setOpened(false);

    if (posterRef.current) {
      posterRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <main className="diwali-site">

      {/* OPENING POSTER */}
      <section className="poster-section" ref={posterRef}>
        <div className="poster-container">
          <img
            src="/deepavali-portrait.png"
            alt="Sharwin's Deepavali Open House Invitation"
            className="invitation-poster"
          />

          {!opened && (
            <button
              className="poster-click-area"
              onClick={() => setOpened(true)}
              aria-label="View invitation details"
              title="View Invitation"
            />
          )}
        </div>
      </section>

      {/* INVITATION DETAILS */}
      {opened && (
        <section className="details-section" ref={detailsRef}>
          <div className="details-inner">

            <button className="back-button" onClick={backToPoster}>
              ← Back to Poster
            </button>

            {/* HEADING */}
            <div className="details-heading">
              <p className="section-label">
                🪔 THE CELEBRATION 🪔
              </p>

              <h2>
                Come, Celebrate
                <br />
                <span>With Us.</span>
              </h2>

              <p className="invitation-message">
                Join us for a joyful Deepavali celebration
                filled with love, happiness, delicious food,
                and beautiful memories.
              </p>
            </div>

            {/* COUNTDOWN */}
            <div className="countdown-container">
              <p className="countdown-label">
                COUNTDOWN TO OUR CELEBRATION
              </p>

              <Countdown />
            </div>

            {/* EVENT DETAILS */}
            <div className="details-grid">

              <div className="detail-item">
                <div className="detail-icon">📅</div>
                <span>DATE</span>
                <h3>10 November 2026</h3>
                <p>Tuesday</p>
              </div>

              <div className="detail-item">
                <div className="detail-icon">🕛</div>
                <span>TIME</span>
                <h3>12:00 PM</h3>
                <p>Lunch & Celebration</p>
              </div>

              <div className="detail-item">
                <div className="detail-icon">📍</div>
                <span>VENUE</span>
                <h3>KC 55</h3>
                <p className="venue-address">
                  Jalan Kasia Ville 7,
                  <br />
                  Taman Tuanku Jaafar Golf
                  & Country Resort,
                  <br />
                  71450 Seremban,
                  Negeri Sembilan
                </p>
              </div>

            </div>

            {/* FULL ADDRESS */}
            <div className="address-card">
              <p className="address-label">
                CELEBRATION LOCATION
              </p>

              <p className="details-address">
                KC 55, Jalan Kasia Ville 7,
                Taman Tuanku Jaafar Golf & Country Resort,
                71450 Seremban,
                Negeri Sembilan
              </p>
            </div>

            {/* MAPS */}
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

            {/* CLOSING MESSAGE */}
            <div className="closing-message">
              <div className="closing-decoration">
                ✦ 🪔 ✦
              </div>

              <h3>
                We Can't Wait to
                <br />
                Celebrate With You!
              </h3>

              <p>
                With love,
                <br />
                <strong>
                  SHARWIN N SURESHKUMAR & FAMILY
                </strong>
              </p>
            </div>

            {/* FOOTER */}
            <footer className="invitation-footer">
              <p>MADE WITH LOVE & FESTIVE LIGHTS</p>
              <span>✦ 🪔 ✦</span>

              <div className="designer-credit">
                Designed by <strong>Codvira</strong>
              </div>
            </footer>

          </div>
        </section>
      )}
    </main>
  );
}

export default App;
