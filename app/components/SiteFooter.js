import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footerBrandBlock">
        <Link className="brand" href="/" aria-label="SmTranslineInc home">
          <Image
            src="/transline.png"
            alt="SmTranslineInc"
            width={260}
            height={76}
            className="brandLogo footerBrandLogo"
          />
        </Link>
        <p>Digital marketing and development with a point of view.</p>

        <div className="socialLinks">
          <a className="socialLink" href="https://instagram.com/smtranslineinc" target="_blank" rel="noreferrer" aria-label="Instagram">
            <i className="bi bi-instagram" aria-hidden="true" />
            <span>Instagram</span>
          </a>
          <a className="socialLink" href="https://x.com/smtranslineinc" target="_blank" rel="noreferrer" aria-label="Twitter (X)">
            <i className="bi bi-twitter-x" aria-hidden="true" />
            <span>Twitter (X)</span>
          </a>
          <a className="socialLink" href="https://pinterest.com/smtranslineinc" target="_blank" rel="noreferrer" aria-label="Pinterest">
            <i className="bi bi-pinterest" aria-hidden="true" />
            <span>Pinterest</span>
          </a>
        </div>
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
