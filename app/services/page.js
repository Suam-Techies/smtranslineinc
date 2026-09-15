import InternalPage from "../internal-page";
import styles from "../internal-page.module.css";

export const metadata = { title: "Services | SmTranslineInc", description: "Digital marketing, web development, brand strategy, and growth support from SmTranslineInc." };

export default function ServicesPage() {
  return <InternalPage kicker="Our services" title="Everything your digital presence needs to move forward." intro="We bring strategy, design, development, and marketing together to create digital experiences that look sharp and work hard.">
    <div className={styles.serviceList}>
      <section className={styles.serviceItem}><span>01</span><div><h2>Brand strategy</h2><p>Find the clearest position in your market, then give your team the language and direction to communicate it consistently.</p><ul><li>Positioning and audience insight</li><li>Brand messaging and voice</li><li>Campaign and content direction</li></ul></div></section>
      <section className={styles.serviceItem}><span>02</span><div><h2>Digital marketing</h2><p>Build a steady stream of the right attention through useful content, targeted campaigns, and smarter measurement.</p><ul><li>Search and content marketing</li><li>Social media strategy and creative</li><li>Paid campaigns and performance reporting</li></ul></div></section>
      <section className={styles.serviceItem}><span>03</span><div><h2>Web development</h2><p>Turn your strategy into a fast, responsive website or web application that makes it easy for people to take the next step.</p><ul><li>Responsive website development</li><li>Landing pages and conversion paths</li><li>Performance, accessibility, and CMS support</li></ul></div></section>
      <section className={styles.serviceItem}><span>04</span><div><h2>Growth support</h2><p>Keep improving after launch with practical insight, ongoing experiments, and a partner who understands the bigger picture.</p><ul><li>Analytics and conversion review</li><li>Website updates and optimization</li><li>Monthly strategy and creative support</li></ul></div></section>
    </div>
    <p className={styles.pageLink}><a href="/contact">Tell us what you are working on →</a></p>
  </InternalPage>;
}
