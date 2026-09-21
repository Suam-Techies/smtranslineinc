import styles from "./page.module.css";

export const metadata = {
  title: "KAYAK Services | Flight Search & Comparison",
  description: "Search and compare flights, explore travel services, and find better options with clear pricing and route insights.",
};

const serviceCards = [
  {
    icon: "bi-search",
    title: "Search Flights",
    text: "Search available flights based on your destination, travel dates and passenger requirements.",
  },
  {
    icon: "bi-bar-chart",
    title: "Compare Options",
    text: "Compare different airlines, schedules, routes, prices and flight durations in one place.",
  },
  {
    icon: "bi-calendar-check",
    title: "Flexible Travel",
    text: "Explore different dates and flight combinations to find options that fit your schedule.",
  },
  {
    icon: "bi-globe2",
    title: "Global Destinations",
    text: "Explore domestic and international flight options for destinations around the world.",
  },
];

const stepList = [
  {
    number: "1",
    title: "Enter Your Trip",
    text: "Select your departure city, destination, dates and number of travelers.",
  },
  {
    number: "2",
    title: "Compare Flights",
    text: "Review available routes, airlines, schedules, prices and flight durations.",
  },
  {
    number: "3",
    title: "Choose Your Option",
    text: "Select the flight option that matches your travel preferences.",
  },
  {
    number: "4",
    title: "Continue to Booking",
    text: "Continue to the selected airline or travel provider to complete your reservation.",
  },
];

const featureList = [
  { icon: "bi-list-check", title: "More Options", text: "Explore multiple airlines, routes and schedules." },
  { icon: "bi-arrow-left-right", title: "Easy Comparison", text: "Compare important flight details in one place." },
  { icon: "bi-clock", title: "Save Time", text: "Research multiple travel options without visiting numerous websites individually." },
  { icon: "bi-map", title: "Travel Globally", text: "Search flight options for destinations around the world." },
];

const phoneNumber = "+1-844-585-3835";

const metrics = [
  { icon: "bi-airplane-engines", label: "Live routes", value: "12.4k+" },
  { icon: "bi-graph-up-arrow", label: "Avg. savings", value: "18%" },
  { icon: "bi-clock-history", label: "Fast search", value: "3 min" },
  { icon: "bi-shield-check", label: "Verified deals", value: "99.2%" },
];

export default function KayakServicesPage() {
  return (
    <div className={styles.pageShell}>
      <header className={styles.navbar}>
        <div className="container">
          <div className={styles.navInner}>
            <a href="#flights" className={styles.navbarBrand} aria-label="KAYAK home">
              <img src="/kayak-logo.svg" alt="KAYAK logo" className={styles.logoImage} />
            </a>

            <button type="button" className={styles.navToggle} aria-label="Toggle menu">
              <span />
              <span />
              <span />
            </button>

            <div className={styles.navCollapse} id="mainNavbar">
              <ul className={styles.navList}>
                <li><a href="#flights" className={styles.navLink}>Flights</a></li>
                <li><a href="#services" className={styles.navLink}>Services</a></li>
                <li><a href="#compare" className={styles.navLink}>How It Works</a></li>
                <li><a href="#search" className={styles.navCta}>Search Flights</a></li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.hero} id="flights">
          <div className="container">
            <div className={styles.heroRow}>
              <div className={styles.heroContent}>
                <span className={styles.badge}>
                  <i className="bi bi-airplane me-1" />
                  Flight Search &amp; Comparison
                </span>

                <h1 className={styles.heroTitle}>Find Better Flights, Compare More Options</h1>

                <p className={styles.heroCopy}>
                  Search and compare flights from airlines and travel providers to find routes, schedules
                  and fares that fit your travel plans.
                </p>

                <div className={styles.heroMeta}>
                  <div className={styles.heroStat}>
                    <strong>12k+</strong>
                    <span>Flight routes</span>
                  </div>
                  <div className={styles.heroStat}>
                    <strong>14m</strong>
                    <span>Travellers</span>
                  </div>
                  <div className={styles.heroStat}>
                    <strong>24/7</strong>
                    <span>Price updates</span>
                  </div>
                </div>

                <div className="mt-4">
                  <a href={`tel:+18445853835`} className={styles.ctaButton} style={{ display: "inline-flex" }}>
                    <i className="bi bi-telephone me-2" />
                    {phoneNumber}
                  </a>
                </div>
              </div>

           
            </div>
          </div>
        </section>

        <section className={styles.searchCard} id="search">
          <div className="container">
            <div className={styles.flightSearch}>
              <ul className={styles.searchTabs}>
                <li>
                  <button type="button" className={`${styles.searchTab} ${styles.searchTabActive}`}>
                    <i className="bi bi-arrow-left-right me-2" />
                    Round Trip
                  </button>
                </li>
                <li>
                  <button type="button" className={styles.searchTab}>One Way</button>
                </li>
                <li>
                  <button type="button" className={styles.searchTab}>Multi-City</button>
                </li>
              </ul>

              <div className="row g-3">
                <div className="col-lg-2 col-md-6">
                  <label className={styles.fieldLabel}>From</label>
                  <div className={styles.inputWrap}>
                    <span className={styles.inputIcon}><i className="bi bi-airplane" /></span>
                    <input type="text" className={styles.inputField} placeholder="Delhi" />
                  </div>
                </div>

                <div className="col-lg-2 col-md-6">
                  <label className={styles.fieldLabel}>To</label>
                  <div className={styles.inputWrap}>
                    <span className={styles.inputIcon}><i className="bi bi-geo-alt" /></span>
                    <input type="text" className={styles.inputField} placeholder="Dubai" />
                  </div>
                </div>

                <div className="col-lg-2 col-md-6">
                  <label className={styles.fieldLabel}>Depart</label>
                  <input type="date" className={styles.inputField} />
                </div>

                <div className="col-lg-2 col-md-6">
                  <label className={styles.fieldLabel}>Return</label>
                  <input type="date" className={styles.inputField} />
                </div>

                <div className="col-lg-2 col-md-6">
                  <label className={styles.fieldLabel}>Travelers</label>
                  <div className={styles.inputWrap}>
                    <select className={styles.inputSelect}>
                      <option>1 Adult</option>
                      <option>2 Adults</option>
                      <option>3 Adults</option>
                      <option>4 Adults</option>
                    </select>
                  </div>
                </div>

                <div className="col-lg-2 col-md-6 d-flex align-items-end">
                  <button type="button" className={styles.searchButton}>
                    <i className="bi bi-search me-2" />
                    Search Flights
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.metricsBar}>
          <div className="container">
            <div className="row g-4">
              {metrics.map((metric) => (
                <div className="col-lg-3 col-md-6" key={metric.label}>
                  <div className={styles.metricCard}>
                    <div className={styles.metricIcon}>
                      <i className={`bi ${metric.icon}`} />
                    </div>
                    <div className={styles.metricText}>
                      <strong>{metric.value}</strong>
                      <span>{metric.label}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.sectionPadding} ${styles.servicesSection}`} id="services">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className={styles.sectionTitle}>Everything You Need to Plan Your Flight</h2>
              <p className={styles.sectionSubtitle}>
                Explore flight options and compare important travel details before choosing the option that works for you.
              </p>
            </div>

            <div className="row g-4">
              {serviceCards.map((card) => (
                <div className="col-lg-3 col-md-6" key={card.title}>
                  <div className={styles.serviceCard}>
                    <div className={styles.serviceIcon}>
                      <i className={`bi ${card.icon}`} />
                    </div>
                    <h4 className={styles.serviceTitle}>{card.title}</h4>
                    <p className={styles.serviceCopy}>{card.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.sectionPadding} ${styles.compareSection}`} id="compare">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <span className={styles.kicker}>Simple Flight Search</span>
                <h2 className={styles.sectionTitle}>Compare Flights in a Few Simple Steps</h2>
                <p className={styles.compareText}>
                  Make your flight research easier by bringing important travel information together in one convenient search.
                </p>

                <div className={styles.compareBox}>
                  {stepList.map((step) => (
                    <div className={styles.compareItem} key={step.number}>
                      <div className={styles.compareNumber}>{step.number}</div>
                      <div>
                        <h5>{step.title}</h5>
                        <p>{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-lg-6">
                <div className={styles.visualPanel}>
                  <img
                    className={styles.panelImage}
                    src="https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=1200&q=85"
                    alt="Passenger airplane"
                  />

                  <div className={styles.liveChart}>
                    <div className={styles.liveChartHeader}>
                      <span>Live fares</span>
                      <span className={styles.liveDot} />
                    </div>
                    <div className={styles.barChart}>
                      <span className={styles.barColumn} style={{ height: "40%" }} />
                      <span className={styles.barColumn} style={{ height: "55%" }} />
                      <span className={styles.barColumn} style={{ height: "68%" }} />
                      <span className={styles.barColumn} style={{ height: "82%" }} />
                      <span className={styles.barColumn} style={{ height: "96%" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.sectionPadding} ${styles.featuresSection}`}>
          <div className="container">
            <div className="text-center mb-5">
              <h2 className={styles.sectionTitle}>Why Search and Compare?</h2>
              <p className={styles.sectionSubtitle}>Get a clearer view of your flight options before you travel.</p>
            </div>

            <div className="row g-4">
              {featureList.map((feature) => (
                <div className="col-lg-3 col-md-6" key={feature.title}>
                  <div className={styles.featureBox}>
                    <i className={`bi ${feature.icon} ${styles.featureIcon}`} />
                    <h5>{feature.title}</h5>
                    <p>{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaRow}>
              <div>
                <h2 className={styles.ctaTitle}>Ready to Start Your Journey?</h2>
                <p className={styles.ctaLead}>Search flights and compare available travel options for your next trip.</p>
              </div>

              <div>
                <div className="mb-3 text-white-50 small">Call us now</div>
                <a href="tel:+18445853835" className={styles.ctaButton}>
                  {phoneNumber}
                  <i className="bi bi-telephone ms-2" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerGrid}>
            <div>
              <img src="/kayak-logo.svg" alt="KAYAK logo" className={styles.footerLogo} />
              <p className={styles.footerCopy}>Search and compare flight options to help plan your next journey.</p>
            </div>

            <div>
              <h5 className={styles.footerHeading}>Explore</h5>
              <div className={styles.footerLinks}>
                <a href="#flights">Flights</a>
                <a href="#">Destinations</a>
                <a href="#">Travel Deals</a>
              </div>
            </div>

            <div>
              <h5 className={styles.footerHeading}>Travel</h5>
              <div className={styles.footerLinks}>
                <a href="#">Domestic Flights</a>
                <a href="#">International Flights</a>
                <a href="#">One-Way Flights</a>
              </div>
            </div>

            <div>
              <h5 className={styles.footerHeading}>Support</h5>
              <div className={styles.footerLinks}>
                <a href="#">Help Center</a>
                <a href="#">Contact Us</a>
                <a href="#">Terms &amp; Conditions</a>
                <a href="#">Privacy Policy</a>
              </div>
            </div>
          </div>

          <hr className={styles.footerDivider} />
          <div className={styles.footerBottom}>© 2026 KAYAK. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

