import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";

export { SiteHeader, SiteFooter };

export default function InternalPage({ kicker, title, intro, children }) {
  return (
    <div className="page">
      <SiteHeader />
      <main>
        <section className="pageHero">
          <div className="kicker"><span /> {kicker}</div>
          <h1>{title}</h1>
          <p>{intro}</p>
        </section>
        <article className="content">{children}</article>
      </main>
      <SiteFooter />
    </div>
  );
}
