import Link from "next/link";
import styles from "./internal-page.module.css";

export function SiteHeader() {
  return <header className={styles.header}>
    <Link className={styles.brand} href="/"><span className={styles.brandMark}>SM</span><span>SmTranslineInc</span></Link>
    <nav className={styles.nav} aria-label="Main navigation"><Link href="/">Home</Link><Link href="/services">Services</Link><Link href="/process">Our process</Link><Link href="/about">About us</Link><Link href="/contact">Contact</Link></nav>
    <a className={styles.headerCta} href="tel:+18445853835">Let&apos;s talk <span aria-hidden="true">↗</span></a>
    <details className={styles.mobileMenu}><summary aria-label="Open navigation menu"><span /><span /><span /></summary><nav aria-label="Mobile navigation"><Link href="/">Home</Link><Link href="/services">Services</Link><Link href="/process">Our process</Link><Link href="/about">About us</Link><Link href="/contact">Contact</Link><a href="tel:+18445853835">Call us <span aria-hidden="true">↗</span></a></nav></details>
  </header>;
}

export function SiteFooter() {
  return <footer className={styles.footer}><div><Link className={styles.brand} href="/"><span className={styles.brandMark}>SM</span><span>SmTranslineInc</span></Link><p>Digital marketing and development with a point of view.</p></div><div><strong>Explore</strong><Link href="/services">Services</Link><Link href="/process">Our process</Link><Link href="/about">About us</Link><Link href="/contact">Contact us</Link></div><div><strong>Information</strong><Link href="/privacy-policy">Privacy policy</Link><Link href="/terms-and-conditions">Terms &amp; conditions</Link></div><div><strong>Office</strong><address>701 W CAMBRIDGE AVE APT 204<br />FRESNO, CA, 93705</address><a href="mailto:support@smtranslineinc.com">support@smtranslineinc.com</a><a href="tel:+18445853835">+1 844 585 3835</a></div></footer>;
}

export default function InternalPage({ kicker, title, intro, children }) {
  return (
    <div className={styles.page}>
      <SiteHeader />
      <main>
        <section className={styles.pageHero}><div className={styles.kicker}><span /> {kicker}</div><h1>{title}</h1><p>{intro}</p></section>
        <article className={styles.content}>{children}</article>
      </main>
      <SiteFooter />
    </div>
  );
}
