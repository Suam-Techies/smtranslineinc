import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div>
        <Link className="brand" href="/">
          <span className="brandMark">SM</span>
          <span>SmTranslineInc</span>
        </Link>
        <p>Digital marketing and development with a point of view.</p>
      </div>

      <div>
        <strong>Explore</strong>
        <Link href="/services">Services</Link>
        <Link href="/process">Our process</Link>
        <Link href="/about">About us</Link>
        <Link href="/contact">Contact us</Link>
      </div>

      <div>
        <strong>Information</strong>
        <Link href="/privacy-policy">Privacy policy</Link>
        <Link href="/terms-and-conditions">Terms &amp; conditions</Link>
      </div>

      <div>
        <strong>Office</strong>
        <address>
          701 W CAMBRIDGE AVE APT 204
          <br />
          FRESNO, CA, 93705
        </address>
        <a href="mailto:support@smtranslineinc.com">support@smtranslineinc.com</a>
        <a href="tel:+18445853835">+1 844 585 3835</a>
      </div>
    </footer>
  );
}
