import Image from "next/image";
import Link from "next/link";
import TextType from "./TextType";
import PhotoPin from "./PhotoPin";

function Arrow({ diagonal = false }) {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M5 12h14m-6-6 6 6-6 6"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default function Home() {
  return (
    <div className="launch-page">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <Link href="/" className="brand" aria-label="PrinterOK home"><Image src="/images/logo.png" alt="PinterOK — printer repair service" width={128} height={128} preload className="brand-logo" /></Link>
        <div className="header-note"><strong>Printer repairs & support</strong><span>A fresh start. For every printer.</span></div>
        <div className="header-actions">
          <span className="header-status">
            <span className="header-status-light" aria-hidden="true"><span /></span>
            <span className="header-status-copy"><strong>Coming soon</strong></span>
          </span>
          <a
            className="header-contact"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=printerok9%40gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get in touch — opens Gmail in a new tab"
          >
            Get in touch <Arrow diagonal />
          </a>
        </div>
        {/* <div className="location"><span className="location-mark" aria-hidden="true">◎</span> Built for the UK <span className="uk-label">UK</span></div> */}
      </header>
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <Image src="/images/printerrepair.jpg" alt="" fill preload sizes="100vw" className="hero-image" />
          <div className="hero-shade" />
          <div className="hero-content">
            {/* <div className="launch-badge"><span className="status-dot" /> SOMETHING GOOD IS COMING</div> */}
            <h1 id="hero-title">
              Printer problems?
              <TextType
                text={[
                  "We bring your printing back to life.",
                  "We fix them fast.",
                  "Fast support. Zero printing stress.",
                  "We provide expert support.",
                  "We bring your printer back.",
                ]}
                typingSpeed={75}
                pauseDuration={2200}
                deletingSpeed={50}
                variableSpeedEnabled
                variableSpeedMin={60}
                variableSpeedMax={120}
                showCursor
                cursorCharacter="|"
                cursorBlinkDuration={0.5}
              />
            </h1>
            {/* <p className="hero-description">A little care. A lot more possibility.<br />Printer repairs & support for the UK.<br />Our new website is on its way.</p> */}
            <a href="#whats-coming" className="explore-link">A look at what’s coming <span><Arrow /></span></a>
            <div className="hero-footnote"><span className="tiny-line" /> KEEPING YOUR BUSINESS PRINTING</div>
          </div>
          <div className="photo-note">
            <div className="photo-note-top"><span>GOOD THINGS TAKE CARE.</span><PhotoPin /></div>
            <div className="detail-photo"><Image src="/images/printerepair2.jpg" alt="A technician working on an office printer" fill sizes="(max-width: 600px) 240px, 280px" /></div>
            <div className="photo-note-bottom"><span>A new chapter in<br /><strong>printer care.</strong></span><Arrow diagonal /></div>
          </div>
          <div className="vertical-caption" aria-hidden="true">PINTEROK / PRINTER REPAIR SERVICE</div>
          <div className="hero-index" aria-hidden="true"><span className="colour-bars"><i /><i /><i /><i /></span></div>
        </section>
        <section className="coming-section" id="whats-coming" aria-labelledby="coming-title">
          <div className="coming-heading"><span className="eyebrow">ON THE HORIZON</span><h2 id="coming-title">Back to what<br /> you do best.</h2></div>
          <div className="service"><span className="service-number">01</span><h3>Printer repairs</h3><p>A fresh start for the printers you rely on.</p></div>
          <div className="service"><span className="service-number">02</span><h3>Everyday support</h3><p>Making printer problems a little less complicated.</p></div>
          <div className="launch-stamp"><span className="status-dot" /><span>COMING<br /><strong>SOON.</strong></span><Arrow diagonal /></div>
        </section>
      </main>
      <footer className="site-footer"><p>© {new Date().getFullYear()} PinterOK</p><p>A little patience. A better printing day.</p><span>printerok9@gmail.com <span aria-hidden="true">↗</span></span></footer>
      <section className="site-disclaimer" aria-labelledby="disclaimer-title">
        <h2 id="disclaimer-title">Disclaimer</h2>
        <p>Pinterok is an independent third-party technical support provider. We are not affiliated with, authorized by, or endorsed by HP, Canon, Epson, Brother, Lexmark, Dell, Samsung, Xerox, Ricoh, or any other printer manufacturer. All brand names, trademarks, and logos are the property of their respective owners and are used for identification purposes only.</p>
      </section>
    </div>
  );
}
