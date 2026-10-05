import styles from "./page.module.css";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../internal-page";

export const metadata = {
  title: "SmTranslineInc | Digital Agency",
  description: "SmTranslineInc is a digital agency helping businesses grow with strategy, SEO, web design, paid media, and conversion-focused marketing.",
  icons: {
    icon: "/sm-favicon.svg",
    shortcut: "/sm-favicon.svg",
    apple: "/sm-favicon.svg",
  },
};

const serviceCards = [
  {
    icon: "bi-search",
    title: "SEO Growth",
    text: "Improve rankings, attract qualified buyers, and turn search visibility into consistent leads.",
  },
  {
    icon: "bi-bar-chart",
    title: "Paid Media",
    text: "Launch high-converting campaigns across search, social, and retargeting to scale revenue faster.",
  },
  {
    icon: "bi-calendar-check",
    title: "Content Strategy",
    text: "Build authority with message-driven content, landing pages, and conversion assets your market can trust.",
  },
  {
    icon: "bi-globe2",
    title: "Brand Positioning",
    text: "Clarify your offer, sharpen your message, and create a digital presence that wins attention and trust.",
  },
];

const stepList = [
  {
    number: "1",
    title: "Audit & Discovery",
    text: "We review your market, audience, channels, and current performance to find the biggest opportunities.",
  },
  {
    number: "2",
    title: "Strategy & Planning",
    text: "We map out the right offer, landing pages, message, and campaign structure for sustainable growth.",
  },
  {
    number: "3",
    title: "Launch & Optimize",
    text: "We test, refine, and scale what works across search, social, content, and conversion funnels.",
  },
  {
    number: "4",
    title: "Measure Results",
    text: "We track the KPIs that matter so every campaign moves your business forward with clarity.",
  },
];

const featureList = [
  { icon: "bi-list-check", title: "Clearer funnel", text: "Turn more traffic into qualified leads with stronger messaging and better conversion paths." },
  { icon: "bi-arrow-left-right", title: "Better data", text: "Track performance with insight-led reporting that shows what is driving growth." },
  { icon: "bi-clock", title: "Faster testing", text: "Iterate quickly, cut wasted spend, and focus on the channels that actually convert." },
  { icon: "bi-map", title: "Stronger reach", text: "Grow your visibility across search, social, and web with a clear strategic plan." },
];

const phoneNumber = "+1-844-585-3835";

const metrics = [
  { icon: "bi-graph-up-arrow", label: "Avg. ROAS", value: "3.6x" },
  { icon: "bi-people", label: "Qualified leads", value: "2.4x" },
  { icon: "bi-clock-history", label: "Campaign speed", value: "2 wk" },
  { icon: "bi-shield-check", label: "Growth focus", value: "100%" },
];

export default function ServicesPage() {
  return (
    <div className={styles.pageShell}>
      <SiteHeader />

      <main className={styles.main}>
        <section className={styles.hero} id="growth">
          <div className="container">
            <div className={styles.heroRow}>
              <div className={styles.heroContent}>
                <span className={styles.badge}>
                  <i className="bi bi-rocket-takeoff me-1" />
                  Digital Agency
                </span>

                <h1 className={styles.heroTitle}>We build brands that grow online and convert faster.</h1>

                <p className={styles.heroCopy}>
                  SmTranslineInc is a digital agency helping businesses win attention, build trust,
                  and turn traffic into qualified leads through strategy, design, and performance marketing.
                </p>

                <div className={styles.heroActions}>
                  <a href="/contact" className={styles.primaryButton}>Book a strategy call</a>
                  <a href="#services" className={styles.secondaryButton}>Explore services</a>
                </div>

                <div className={styles.heroMeta}>
                  <div className={styles.heroStat}>
                    <strong>3.6x</strong>
                    <span>Avg. ROAS</span>
                  </div>
                  <div className={styles.heroStat}>
                    <strong>2.4x</strong>
                    <span>Qualified leads</span>
                  </div>
                  <div className={styles.heroStat}>
                    <strong>24/7</strong>
                    <span>Campaign monitoring</span>
                  </div>
                </div>
              </div>

              <div className={styles.heroVisualWrap}>
                <div className={styles.heroVisualCard}>
                  <div className={styles.visualBadge}>Growth strategy</div>
                  <div className={styles.visualMetric}>
                    <span>Performance</span>
                    <strong>+142%</strong>
                  </div>
                  <ul className={styles.visualList}>
                    <li>SEO & content</li>
                    <li>Brand systems</li>
                    <li>Paid media</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.discoverySection} id="contact">
          <div className="container">
            <div className={styles.discoveryCard}>
              <div className={styles.discoveryHeader}>
                <span className={styles.kicker}>Let&apos;s build your next move</span>
                <h2>Marketing that moves your business forward.</h2>
              </div>

              <div className={styles.discoveryGrid}>
                <div className={styles.discoveryField}>
                  <label>Business type</label>
                  <p>Professional services</p>
                </div>
                <div className={styles.discoveryField}>
                  <label>Main goal</label>
                  <p>More qualified leads</p>
                </div>
                <div className={styles.discoveryField}>
                  <label>Budget range</label>
                  <p>$1k - $5k / month</p>
                </div>
                <div className={styles.discoveryAction}>
                  <a href="tel:+18445853835" className={styles.ctaButton}>{phoneNumber}</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.sectionPadding} ${styles.servicesSection}`} id="services">
          <div className="container">
            <div className="text-center mb-5">
              <span className={styles.serviceEyebrow}>Capabilities</span>
              <h2 className={styles.sectionTitle}>Everything your brand needs to grow online</h2>
              <p className={styles.sectionSubtitle}>
                Strategy, creative direction, campaign execution, and conversion optimization built around your business goals.
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
                <span className={styles.kicker}>Clear process</span>
                <h2 className={styles.sectionTitle}>A focused growth plan that turns strategy into action</h2>
                <p className={styles.compareText}>
                  We combine brand thinking, digital execution, and measured reporting so your marketing keeps improving rather than guessing.
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
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85"
                    alt="Marketing strategy team working together"
                  />

                  <div className={styles.liveChart}>
                    <div className={styles.liveChartHeader}>
                      <span>Growth dashboard</span>
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
              <h2 className={styles.sectionTitle}>Why businesses choose SmTranslineInc</h2>
              <p className={styles.sectionSubtitle}>A sharper message, a stronger funnel, and a digital engine built for measurable growth.</p>
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
                <h2 className={styles.ctaTitle}>Ready to grow your business online?</h2>
                <p className={styles.ctaLead}>Partner with a digital marketing agency built to turn attention into measurable revenue.</p>
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
<SiteFooter />
    </div>
  );
}

