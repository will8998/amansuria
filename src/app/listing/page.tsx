import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aman Suria Bungalow — RM6.5M Freehold | Owner Direct Sale",
  description:
    "Premium freehold bungalow in Aman Suria Damansara, PJ. 6,200+ sqft land, 5+1 bed, fully furnished. MM2H & PVIP eligible. No agent commission — buy direct from owner.",
};

const galleryItems = [
  "Living Room",
  "Master Bedroom",
  "Master Bathroom & Spa",
  "Wet Kitchen",
  "Dry Kitchen",
  "Home Office",
  "Bedroom 2",
  "Bedroom 3",
  "Garden & Rear Reserve",
  "4-Car Porch",
  "Exterior Front View",
  "Aerial Drone View",
];

const features = [
  "Walk-in wardrobe Master",
  "Spa bathroom Master",
  "Wet & Dry Kitchen",
  "Brand new solar water heater",
  "Secluded private road",
  "Fully furnished",
];

const community = [
  "G&G 24/7 security",
  "Clubhouse gym + pool",
  "Active resident association",
  "Next to Tropicana Golf",
];

const amenities = [
  { name: "Tropicana Golf & Country Resort", distance: "Adjacent" },
  { name: "1Utama Shopping Centre", distance: "5 min" },
  { name: "The Starling Mall", distance: "7 min" },
  { name: "IKEA Damansara", distance: "8 min" },
  { name: "Ara Damansara LRT", distance: "10 min" },
  { name: "Sprint / LDP / NKVE", distance: "3 min" },
  { name: "Schools: Sayfol, Sri KDU, REAL", distance: "Nearby" },
];

const transactions = [
  {
    prop: "Bungalow, Lorong PJU 1/46G",
    size: "6,006 sqft",
    price: "RM6,330,000",
    psf: "RM1,054",
    date: "Sep 2023",
  },
  {
    prop: "Bungalow, Jalan PJU 1/46G",
    size: "5,920 sqft",
    price: "RM5,375,000",
    psf: "RM908",
    date: "Sep 2023",
  },
  {
    prop: "Semi-D, Lorong PJU 1/46A",
    size: "3,035 sqft",
    price: "RM3,100,000",
    psf: "RM1,021",
    date: "Oct 2025",
  },
  {
    prop: "Semi-D, Jalan PJU 1/46A",
    size: "3,035 sqft",
    price: "RM3,100,000",
    psf: "RM1,021",
    date: "Oct 2025",
  },
];

const specs = [
  { label: "Land", value: "6,200+ sqft", sub: "+~1,000 sqft rear reserve" },
  { label: "Built-Up", value: "~5,000 sqft", sub: null },
  { label: "Bedrooms", value: "5+1", sub: null },
  { label: "Bathrooms", value: "5+1", sub: null },
  { label: "Home Office", value: "Yes", sub: null },
  { label: "Car Porch", value: "4 Cars", sub: null },
  { label: "Tenure", value: "Freehold", sub: null },
  { label: "Title", value: "Individual", sub: null },
];

export default function ListingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ============================================ */}
      {/* SECTION 1 — HERO                            */}
      {/* ============================================ */}
      <section className="relative flex min-h-[60vh] items-end">
        {/* Placeholder image area */}
        <div className="absolute inset-0 flex items-center justify-center bg-surface">
          <div className="text-center">
            <div className="mb-3 text-4xl opacity-20">&#9633;</div>
            <p className="text-sm tracking-wide text-muted-dim">
              Hero Photo &mdash; Bungalow Exterior at Dusk
            </p>
          </div>
        </div>

        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, var(--background) 0%, rgba(11,17,33,0.85) 40%, transparent 100%)",
          }}
        />

        {/* Content overlay */}
        <div className="relative z-10 w-full px-6 pb-12 pt-24 sm:pb-16">
          <div className="mx-auto max-w-4xl">
            {/* Badge */}
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="inline-block rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold tracking-[0.15em] uppercase text-gold">
                For Sale &mdash; Owner Direct
              </span>
              <span className="inline-block rounded-full border border-gold-bright/20 bg-gold-bright/5 px-3 py-1 text-[10px] font-medium tracking-[0.15em] uppercase text-gold-bright">
                No Agent Commission
              </span>
            </div>

            <p className="mb-2 text-sm font-medium tracking-[0.2em] uppercase text-gold-dim">
              Aman Suria Damansara, Petaling Jaya
            </p>

            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              RM 6,500,000
            </h1>

            <p className="text-base tracking-wide text-muted sm:text-lg">
              Freehold &middot; Gated &amp; Guarded &middot; Bungalow
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 2 — PROPERTY DETAILS                */}
      {/* ============================================ */}
      <section className="border-t border-border-subtle px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-xs font-medium tracking-[0.3em] uppercase text-gold-dim">
            Property Overview
          </p>
          <h2 className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl">
            Property Details
          </h2>

          {/* Key specs grid */}
          <div className="mb-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {specs.map((spec) => (
              <div
                key={spec.label}
                className="rounded-lg border border-border-subtle bg-surface p-5"
              >
                <p className="mb-1 text-[10px] font-medium tracking-[0.25em] uppercase text-muted-dim">
                  {spec.label}
                </p>
                <p className="text-lg font-bold text-foreground">
                  {spec.value}
                </p>
                {spec.sub && (
                  <p className="mt-0.5 text-xs text-muted-dim">{spec.sub}</p>
                )}
              </div>
            ))}
          </div>

          {/* Feature highlights */}
          <div className="mb-14">
            <p className="mb-5 text-xs font-medium tracking-[0.3em] uppercase text-gold-dim">
              Feature Highlights
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {features.map((feat) => (
                <div
                  key={feat}
                  className="flex items-center gap-3 rounded-lg border border-border-subtle bg-surface px-5 py-3.5"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-xs text-gold">
                    &#10003;
                  </span>
                  <p className="text-sm text-foreground/85">{feat}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Community */}
          <div>
            <p className="mb-5 text-xs font-medium tracking-[0.3em] uppercase text-gold-dim">
              Community
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {community.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-lg border border-border-subtle bg-surface px-5 py-3.5"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-xs text-gold">
                    &#10003;
                  </span>
                  <p className="text-sm text-foreground/85">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 3 — PHOTO GALLERY                   */}
      {/* ============================================ */}
      <section className="border-t border-border-subtle px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-xs font-medium tracking-[0.3em] uppercase text-gold-dim">
            Gallery
          </p>
          <h2 className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl">
            Photo Gallery
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <div
                key={item}
                className="group relative overflow-hidden rounded-lg border border-border-subtle bg-surface-elevated"
                style={{ aspectRatio: "3 / 2" }}
              >
                <div className="flex h-full w-full items-center justify-center">
                  <div className="text-center">
                    <div className="mb-2 text-2xl opacity-15">&#9633;</div>
                    <p className="text-xs tracking-wide text-muted-dim">
                      {item}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 4 — VIDEO WALKTHROUGH               */}
      {/* ============================================ */}
      <section className="border-t border-border-subtle px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-xs font-medium tracking-[0.3em] uppercase text-gold-dim">
            Video Walkthrough
          </p>
          <h2 className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl">
            Take a Tour
          </h2>

          <div
            className="relative flex items-center justify-center overflow-hidden rounded-lg border border-border-subtle bg-surface-elevated"
            style={{ aspectRatio: "16 / 9" }}
          >
            <div className="text-center">
              {/* Play button */}
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-2xl text-gold transition-colors">
                &#9654;
              </div>
              <p className="mb-1 text-sm font-medium text-foreground/70">
                Video Coming Soon
              </p>
              <p className="text-xs text-muted-dim">3-minute walkthrough</p>
            </div>
          </div>

          <p className="mt-5 text-center text-sm text-muted-dim">
            Full walkthrough available on YouTube
          </p>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 5 — FLOOR PLAN                      */}
      {/* ============================================ */}
      <section className="border-t border-border-subtle px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-xs font-medium tracking-[0.3em] uppercase text-gold-dim">
            Floor Plan
          </p>
          <h2 className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl">
            Layout Overview
          </h2>

          <div className="grid gap-5 sm:grid-cols-2">
            {["Ground Floor", "First Floor"].map((floor) => (
              <div
                key={floor}
                className="flex items-center justify-center overflow-hidden rounded-lg border border-border-subtle bg-surface-elevated"
                style={{ aspectRatio: "2 / 1" }}
              >
                <div className="text-center">
                  <div className="mb-2 text-2xl opacity-15">&#9633;</div>
                  <p className="text-xs tracking-wide text-muted-dim">
                    {floor}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-sm text-muted-dim">
            Detailed floor plans available upon request.
          </p>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 6 — LOCATION & MAP                  */}
      {/* ============================================ */}
      <section className="border-t border-border-subtle px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-xs font-medium tracking-[0.3em] uppercase text-gold-dim">
            Location
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Prime PJ Address
          </h2>
          <p className="mb-10 text-base leading-relaxed text-muted">
            Aman Suria Damansara, Jalan PJU 1/46, 47301 Petaling Jaya, Selangor
          </p>

          {/* Google Maps embed */}
          <div className="mb-12 overflow-hidden rounded-lg border border-border-subtle">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.8!2d101.607!3d3.133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMDcnNTkuMCJOIDEwMcKwMzYnMjYuMCJF!5e0!3m2!1sen!2smy!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Aman Suria Damansara Location"
            />
          </div>

          {/* Nearby amenities */}
          <p className="mb-5 text-xs font-medium tracking-[0.3em] uppercase text-gold-dim">
            Nearby
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {amenities.map((a) => (
              <div
                key={a.name}
                className="flex items-center justify-between rounded-lg border border-border-subtle bg-surface px-5 py-3.5"
              >
                <p className="text-sm text-foreground/85">{a.name}</p>
                <span className="ml-3 shrink-0 text-xs font-medium text-gold-dim">
                  {a.distance}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 7 — MARKET DATA                     */}
      {/* ============================================ */}
      <section className="border-t border-border-subtle px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-xs font-medium tracking-[0.3em] uppercase text-gold-dim">
            Market Value
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Priced With Data
          </h2>
          <p className="mb-10 max-w-2xl text-base leading-relaxed text-muted">
            Recent transactions in Aman Suria Damansara (JPPH verified).
          </p>

          {/* Data Table */}
          <div className="overflow-x-auto rounded-lg border border-border-subtle">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-elevated">
                  <th className="px-4 py-3.5 font-medium text-muted">
                    Property
                  </th>
                  <th className="px-4 py-3.5 text-right font-medium text-muted">
                    Size
                  </th>
                  <th className="px-4 py-3.5 text-right font-medium text-muted">
                    Price
                  </th>
                  <th className="px-4 py-3.5 text-right font-medium text-muted">
                    PSF
                  </th>
                  <th className="px-4 py-3.5 text-right font-medium text-muted">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-subtle">
                {transactions.map((row, i) => (
                  <tr
                    key={i}
                    className="bg-surface transition-colors hover:bg-surface-elevated"
                  >
                    <td className="px-4 py-3.5 text-foreground">{row.prop}</td>
                    <td className="px-4 py-3.5 text-right text-muted">
                      {row.size}
                    </td>
                    <td className="px-4 py-3.5 text-right font-medium text-foreground">
                      {row.price}
                    </td>
                    <td className="px-4 py-3.5 text-right font-mono text-muted">
                      {row.psf}
                    </td>
                    <td className="px-4 py-3.5 text-right text-muted-dim">
                      {row.date}
                    </td>
                  </tr>
                ))}

                {/* Highlighted row — This Property */}
                <tr className="bg-gold/[0.07]">
                  <td className="px-4 py-3.5 font-bold text-gold">
                    This Property
                  </td>
                  <td className="px-4 py-3.5 text-right font-bold text-gold">
                    6,200+ sqft
                  </td>
                  <td className="px-4 py-3.5 text-right font-bold text-gold">
                    RM6,500,000
                  </td>
                  <td className="px-4 py-3.5 text-right font-mono font-bold text-gold">
                    RM1,048
                  </td>
                  <td className="px-4 py-3.5 text-right font-bold text-gold">
                    &mdash;
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Analysis */}
          <div className="mt-8 space-y-4 rounded-lg border border-gold/20 bg-gold/[0.04] p-6">
            <p className="text-base leading-relaxed text-foreground">
              Priced at{" "}
              <strong className="text-gold">RM1,048 PSF</strong> &mdash; in
              line with recent bungalow transactions. Fully furnished +
              ~1,000 sqft bonus rear reserve land.
            </p>
            <p className="text-sm leading-relaxed text-muted">
              Owner direct &mdash;{" "}
              <strong className="text-gold">no agent commission</strong>. The
              listed price IS your price.
            </p>
            <p className="text-sm leading-relaxed text-muted">
              <strong className="text-foreground">MM2H &amp; PVIP eligible</strong> &mdash;
              this freehold bungalow qualifies for foreign ownership under Malaysia My Second Home
              and Premium Visa programmes.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 8 — WHATSAPP CTA                    */}
      {/* ============================================ */}
      <section className="border-t border-border-subtle px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-medium tracking-[0.3em] uppercase text-gold-dim">
            Interested?
          </p>
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Arrange a Viewing
          </h2>
          <p className="mx-auto mb-10 max-w-lg text-base leading-relaxed text-muted">
            Available for viewing by appointment. Contact the owner directly
            &mdash; no agents, no middlemen.
          </p>

          <a
            href="https://wa.me/60XXXXXXXXXX"
            className="inline-flex items-center gap-2.5 rounded-full border border-gold bg-gold/10 px-8 py-4 text-base font-semibold text-gold transition-all hover:bg-gold/20 hover:shadow-[0_0_30px_rgba(201,168,76,0.15)]"
          >
            <span className="text-lg">&#9742;</span>
            WhatsApp to Arrange Viewing
          </a>

          <p className="mt-5 text-sm text-muted">
            Or call: +60 XX-XXXX XXXX
          </p>

          <p className="mt-3 text-xs text-muted-dim">
            Serious enquiries only. Viewings weekends by appointment.
          </p>
        </div>
      </section>

      {/* ============================================ */}
      {/* FOOTER                                      */}
      {/* ============================================ */}
      <footer className="border-t border-border-subtle px-6 py-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs tracking-wide text-muted-dim">
            Aman Suria Damansara &middot; Freehold Bungalow &middot; Owner
            Direct Sale
          </p>
          <p className="mt-2 text-xs text-muted-dim/60">
            Listed March 2026 &middot; All data sourced from JPPH
          </p>
        </div>
      </footer>
    </div>
  );
}
