import { ButtonLink } from "./button";

export function IndianaServiceArea() {
  return <section className="mx-auto max-w-6xl px-6 py-12">
    <div className="glass-panel rounded-3xl p-7 sm:p-9">
      <h2 className="font-display text-2xl font-semibold text-midnight-slate">Indiana connections. Nationwide collaboration.</h2>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-cool-graphite sm:text-base">Serving Indianapolis, Bloomington, Evansville, and Jasper, Indiana, with consultations by appointment and remote service across the United States. Cyvexly does not operate a public walk-in storefront.</p>
      <ButtonLink href="/indiana-web-design" variant="text" className="mt-5">Explore Indiana web design →</ButtonLink>
    </div>
  </section>;
}
