import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="header">
      <Link className="brand" href="/">
        <span className="brandMark">SM</span>
        <span>SmTranslineInc</span>
      </Link>

      <nav className="nav" aria-label="Main navigation">
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/process">Our process</Link>
        <Link href="/about">About us</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      <a className="headerCta" href="tel:+18445853835">
        Let&apos;s talk <span aria-hidden="true">↗</span>
      </a>

      <details className="mobileMenu">
        <summary aria-label="Open navigation menu">
          <span />
          <span />
          <span />
        </summary>
        <nav aria-label="Mobile navigation">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/process">Our process</Link>
          <Link href="/about">About us</Link>
          <Link href="/contact">Contact</Link>
          <a href="tel:+18445853835">
            Call us <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </details>
    </header>
  );
}
