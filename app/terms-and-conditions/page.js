import InternalPage from "../internal-page";

export const metadata = { title: "Terms and Conditions | SmTranslineInc", description: "Terms and Conditions for using the SmTranslineInc website." };

export default function TermsPage() {
  return <InternalPage kicker="Information" title="Terms & conditions" intro="Effective September 15, 2026. These terms describe the basic conditions for using the SmTranslineInc website.">
    <h2>Using this website</h2><p>You may use this website for lawful purposes and in a way that does not interrupt, damage, or attempt to gain unauthorized access to the website or its systems.</p>
    <h2>Our content</h2><p>Text, visual design, branding, and other materials on this website belong to SmTranslineInc or its licensors. You may not copy, republish, or commercially use this content without written permission.</p>
    <h2>Services and proposals</h2><p>Information on this website is general information about our capabilities, not a binding offer. Specific services, timelines, fees, and deliverables are defined in a separate written agreement.</p>
    <h2>Third-party links</h2><p>This website may reference third-party websites or services. SmTranslineInc is not responsible for their content, availability, or privacy practices.</p>
    <h2>Contact</h2><p>Questions about these terms can be sent to <a href="mailto:hello@smtranslineinc.com">hello@smtranslineinc.com</a>.</p>
  </InternalPage>;
}
