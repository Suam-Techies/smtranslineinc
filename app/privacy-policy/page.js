import InternalPage from "../internal-page";

export const metadata = { title: "Privacy Policy | SmTranslineInc", description: "Privacy Policy for SmTranslineInc." };

export default function PrivacyPolicyPage() {
  return <InternalPage kicker="Information" title="Privacy policy" intro="Effective September 15, 2026. This policy explains how SmTranslineInc handles information shared through this website.">
    <h2>Information we receive</h2><p>We may receive information you choose to provide when you contact us, including your name, email address, phone number, company details, and the contents of your message.</p>
    <h2>How we use information</h2><p>We use contact information to respond to inquiries, discuss services, provide requested information, and manage our business relationship. We do not sell personal information.</p>
    <h2>Website analytics</h2><p>We may use standard analytics and technical information such as browser type, device information, and pages visited to understand website performance and improve the experience.</p>
    <h2>Data choices</h2><p>You may contact us at <a href="mailto:hello@smtranslineinc.com">hello@smtranslineinc.com</a> to ask about the personal information we hold or to request an update or deletion, subject to applicable requirements.</p>
    <h2>Contact</h2><p>Questions about this policy can be sent to <a href="mailto:hello@smtranslineinc.com">hello@smtranslineinc.com</a>.</p>
  </InternalPage>;
}
