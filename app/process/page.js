import InternalPage from "../internal-page";
import styles from "../internal-page.module.css";

export const metadata = { title: "Our Process | SmTranslineInc", description: "Explore the SmTranslineInc process for strategy, design, development, and digital marketing projects." };

export default function ProcessPage() {
  return <InternalPage kicker="Our process" title="Clear steps. Better work." intro="Good work gets easier when everyone knows what happens next. Our process keeps the work focused, collaborative, and connected to your goals.">
    <div className={styles.processList}>
      <section className={styles.processItem}><span>01</span><div><h2>Discover</h2><p>We learn how your business works, who you serve, what is getting in the way, and where the strongest opportunity is hiding.</p><strong>Output: goals, audience insight, and a focused brief.</strong></div></section>
      <section className={styles.processItem}><span>02</span><div><h2>Define</h2><p>We shape the strategic direction, content structure, visual language, and technical plan that will guide the project.</p><strong>Output: a clear direction everyone can align around.</strong></div></section>
      <section className={styles.processItem}><span>03</span><div><h2>Build</h2><p>We design and develop the experience, keeping communication open and decisions grounded in what your users need.</p><strong>Output: a polished, responsive digital experience.</strong></div></section>
      <section className={styles.processItem}><span>04</span><div><h2>Grow</h2><p>We launch thoughtfully, review what the data tells us, and help you keep the momentum going after the first release.</p><strong>Output: a practical roadmap for continued improvement.</strong></div></section>
    </div>
    <p className={styles.pageLink}><a href="/contact">Start with a conversation →</a></p>
  </InternalPage>;
}
