import InternalPage from "../internal-page";
import styles from "../internal-page.module.css";

export const metadata = { title: "Contact Us | SmTranslineInc", description: "Contact SmTranslineInc for digital marketing and web development services." };

export default function ContactPage() {
  return <InternalPage kicker="Contact us" title="Bring us your next challenge." intro="Tell us what you are building, improving, or trying to solve. We will get back to you with a useful next step.">
    <h2>Let&apos;s make the next move clear.</h2>
    <p>Whether you need a new website, a stronger digital marketing plan, or a partner to help your business grow online, we would like to hear from you.</p>
    <div className={styles.contactGrid}><div className={styles.contactCard}><strong>Call our office</strong><span>Speak with our team about your goals and timeline.</span><a href="tel:+18445853835">+1 844 585 3835 →</a></div><div className={styles.contactCard}><strong>Send an email</strong><span>Share a few details and we will respond as soon as possible.</span><a href="mailto:hello@smtranslineinc.com">hello@smtranslineinc.com →</a></div><div className={styles.contactCard}><strong>Visit our office</strong><span>701 W CAMBRIDGE AVE APT 204<br />FRESNO, CA, 93705</span></div></div>
    <h2>What to include</h2><p>A short overview of your business, what you would like to improve, and the kind of support you are looking for is a great place to start.</p>
  </InternalPage>;
}
