import InternalPage from "../internal-page";

export const metadata = { title: "About Us | SmTranslineInc", description: "Learn how SmTranslineInc brings strategy, design, development, and marketing together." };

export default function AboutPage() {
  return <InternalPage kicker="About SmTranslineInc" title="A practical partner for ambitious ideas." intro="We help businesses turn a good offer into a clear brand, a better digital experience, and a stronger reason to be chosen.">
    <h2>Strategy, creative, and code in one conversation.</h2>
    <p>SmTranslineInc is a digital marketing and development agency built for organizations ready to move with more clarity. We bring together the thinking behind your brand and the tools that bring it to life online.</p>
    <p>Our work is collaborative, focused, and grounded in outcomes. That means asking better questions, making purposeful design decisions, and building digital experiences that are useful for your customers and your team.</p>
    <h2>What we believe</h2>
    <ul><li>Clear thinking creates better creative work.</li><li>Technology should make a business easier to understand and easier to choose.</li><li>The best growth comes from consistent, useful experiences.</li></ul>
    <h2>Ready to build what is next?</h2>
    <p><a href="/contact">Start a conversation with our team →</a></p>
  </InternalPage>;
}
