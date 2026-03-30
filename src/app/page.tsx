export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ============================================ */}
      {/* SECTION 1 — HERO                            */}
      {/* ============================================ */}
      <section className="relative flex min-h-[85vh] flex-col items-center justify-center px-6 py-24 text-center">
        {/* Subtle radial glow behind hero */}
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 40%, rgba(201,168,76,0.12) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-3xl">
          <p className="mb-6 text-sm font-medium tracking-[0.25em] uppercase text-gold">
            Aman Suria Damansara &middot; RM6.5 Million
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
            A Smarter Way to Sell
            <br />
            <span className="text-gold">Your Bungalow</span>
          </h1>

          <p className="mx-auto mb-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            A data-driven plan backed by market research, competitive analysis,
            and a clear execution strategy.
          </p>

          <p className="text-sm tracking-wide text-muted-dim">
            Prepared by <span className="text-gold">Belle &amp; William</span>
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="h-10 w-[1px] bg-gradient-to-b from-gold/60 to-transparent" />
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 2 — THE PROBLEM                     */}
      {/* ============================================ */}
      <section className="border-t border-border-subtle px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-medium tracking-[0.3em] uppercase text-gold-dim">
            The Current Situation
          </p>
          <h2 className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl">
            The Current Situation
          </h2>

          <div className="space-y-5">
            {[
              {
                icon: "🏷️",
                text: "The property is currently listed with an agent at RM6.3M — below target and without urgency.",
              },
              {
                icon: "📷",
                text: "Current photography and marketing materials don\u2019t do the property justice — not done with the care a RM6.5M home deserves.",
              },
              {
                icon: "🌐",
                text: "No dedicated landing page, no social media strategy, no targeted buyer outreach.",
              },
              {
                icon: "⏳",
                text: "Result: the house sits on the market without momentum.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-lg border border-border-subtle bg-surface p-5"
              >
                <span className="mt-0.5 text-lg">{item.icon}</span>
                <p className="text-base leading-relaxed text-muted">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 3 — MARKET INTELLIGENCE              */}
      {/* ============================================ */}
      <section className="border-t border-border-subtle px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-xs font-medium tracking-[0.3em] uppercase text-gold-dim">
            Market Intelligence
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            The Market Is On Our Side
          </h2>
          <p className="mb-12 max-w-2xl text-base leading-relaxed text-muted">
            Hard data from NAPIC, Bank Negara, and EdgeProp — not opinions.
          </p>

          {/* 6 stat cards — 2x3 grid */}
          <div className="mb-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                value: "+6.5%",
                suffix: "YoY",
                label:
                  "RM1M+ segment growth — fastest band nationally",
                source: "NAPIC 2025",
              },
              {
                value: "RM1,114",
                suffix: "",
                label:
                  "All-time PSF high in Aman Suria — set Nov 2025",
                source: "EdgeProp",
              },
              {
                value: "2.75%",
                suffix: "",
                label:
                  "OPR stable — no rate hike risk on the horizon",
                source: "BNM March 2026",
              },
              {
                value: "53",
                suffix: "",
                label:
                  "Total bungalows in Aman Suria — extreme scarcity",
                source: "Glomac / EdgeProp",
              },
              {
                value: "0",
                suffix: "",
                label:
                  "New luxury bungalow supply in the micro-market pipeline",
                source: "EdgeProp 2026",
              },
              {
                value: "6.5x",
                suffix: "",
                label:
                  "PSF appreciation since 2001 (RM172 \u2192 RM1,114)",
                source: "EdgeProp",
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="rounded-lg border border-border-subtle bg-surface p-6"
              >
                <p className="mb-2 text-3xl font-bold tracking-tight text-gold sm:text-4xl">
                  {stat.value}
                  {stat.suffix && (
                    <span className="ml-1 text-lg font-medium text-gold-dim">
                      {stat.suffix}
                    </span>
                  )}
                </p>
                <p className="mb-3 text-sm leading-relaxed text-foreground/85">
                  {stat.label}
                </p>
                <p className="text-xs font-medium tracking-wide text-muted-dim uppercase">
                  {stat.source}
                </p>
              </div>
            ))}
          </div>

          {/* Callout */}
          <div className="rounded-lg border border-gold/20 bg-gold/[0.04] p-6">
            <p className="text-base leading-relaxed text-foreground">
              The <strong className="text-gold">RM1M+ segment</strong> is the
              single fastest-growing price band nationally. Value grew{" "}
              <strong className="text-gold">+4.1%</strong> while volume fell{" "}
              <strong className="text-gold">-1.0%</strong> — a classic
              &ldquo;flight to quality&rdquo; pattern. Capital is concentrating
              in premium, well-located assets. This is the market environment to
              sell a RM6.5M freehold bungalow.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 4 — COMPARABLE TRANSACTIONS          */}
      {/* ============================================ */}
      <section className="border-t border-border-subtle px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-xs font-medium tracking-[0.3em] uppercase text-gold-dim">
            Comparable Transactions
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            What The Market Says
          </h2>
          <p className="mb-10 max-w-2xl text-base leading-relaxed text-muted">
            Recent transactions in Aman Suria and the immediate area.
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
                {[
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
                    prop: "Bungalow, DH Jalan Birah",
                    size: "~9,200 sqft",
                    price: "RM6,600,000",
                    psf: "RM719",
                    date: "May 2025",
                  },
                ].map((row, i) => (
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

                {/* Highlighted row — Your Property */}
                <tr className="bg-gold/[0.07]">
                  <td className="px-4 py-3.5 font-bold text-gold">
                    Your Property
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
          <div className="mt-8 rounded-lg border border-gold/20 bg-gold/[0.04] p-6">
            <p className="text-base leading-relaxed text-foreground">
              At <strong className="text-gold">RM1,048 PSF</strong>, this
              property is priced within the established transaction band for Aman
              Suria bungalows (RM908–RM1,114) and below the November 2025
              all-time high.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 5 — WHY AMAN SURIA                  */}
      {/* ============================================ */}
      <section className="border-t border-border-subtle px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-xs font-medium tracking-[0.3em] uppercase text-gold-dim">
            Competitive Positioning
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Why This Address Commands a Premium
          </h2>
          <p className="mb-10 max-w-3xl text-base leading-relaxed text-muted">
            Aman Suria sits at the intersection of four rare attributes that no
            single competitor replicates.
          </p>

          {/* 4 Feature Badges */}
          <div className="mb-12 flex flex-wrap gap-3">
            {[
              "Freehold",
              "True Single-Gate G&G",
              "Clubhouse (Gym + Pool)",
              "Sub-RM7M Bungalow",
            ].map((badge, i) => (
              <div
                key={i}
                className="flex items-center gap-2 rounded-lg border border-gold/20 bg-gold/[0.04] px-4 py-2.5"
              >
                <span className="text-sm text-gold">✅</span>
                <span className="text-sm font-medium text-foreground">
                  {badge}
                </span>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto rounded-lg border border-border-subtle">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-elevated">
                  <th className="px-4 py-3.5 font-medium text-muted">
                    Neighbourhood
                  </th>
                  <th className="px-4 py-3.5 text-center font-medium text-muted">
                    Freehold
                  </th>
                  <th className="px-4 py-3.5 text-center font-medium text-muted">
                    True G&amp;G
                  </th>
                  <th className="px-4 py-3.5 text-center font-medium text-muted">
                    Clubhouse
                  </th>
                  <th className="px-4 py-3.5 text-right font-medium text-muted">
                    Bungalow Price
                  </th>
                  <th className="px-4 py-3.5 font-medium text-muted">
                    Verdict
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-subtle">
                {/* Aman Suria — Highlighted */}
                <tr className="bg-gold/[0.07]">
                  <td className="px-4 py-3.5 font-bold text-gold">
                    Aman Suria
                  </td>
                  <td className="px-4 py-3.5 text-center font-bold text-gold">
                    ✅
                  </td>
                  <td className="px-4 py-3.5 text-center font-bold text-gold">
                    ✅
                  </td>
                  <td className="px-4 py-3.5 text-center font-bold text-gold">
                    ✅
                  </td>
                  <td className="px-4 py-3.5 text-right font-bold text-gold">
                    RM6.5M
                  </td>
                  <td className="px-4 py-3.5 font-bold text-gold">
                    All four ✅
                  </td>
                </tr>

                {[
                  {
                    area: "Damansara Heights",
                    freehold: "✅",
                    gg: "❌ Partial",
                    club: "❌",
                    price: "RM5–8M+",
                    verdict: "No G&G, no clubhouse",
                  },
                  {
                    area: "Tropicana Golf",
                    freehold: "❌ Leasehold",
                    gg: "✅",
                    club: "✅ Golf",
                    price: "RM4–25M",
                    verdict: "Leasehold = depreciating",
                  },
                  {
                    area: "Desa ParkCity",
                    freehold: "✅",
                    gg: "✅",
                    club: "✅",
                    price: "RM7–10M+",
                    verdict: "Starts at RM7M+",
                  },
                  {
                    area: "TTDI",
                    freehold: "✅",
                    gg: "❌ Partial",
                    club: "❌",
                    price: "RM5–6.9M",
                    verdict: "No G&G, no clubhouse",
                  },
                  {
                    area: "Kenny Hills",
                    freehold: "✅",
                    gg: "❌ Partial",
                    club: "❌",
                    price: "RM4–18M+",
                    verdict: "Ultra-prestige, no facilities",
                  },
                  {
                    area: "Bangsar",
                    freehold: "✅",
                    gg: "❌ Partial",
                    club: "❌",
                    price: "RM4–12M+",
                    verdict: "Urban, no G&G",
                  },
                  {
                    area: "Mutiara Damansara",
                    freehold: "✅",
                    gg: "✅",
                    club: "⚠️ Limited",
                    price: "RM4.5–7M",
                    verdict: "Smaller enclave",
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className="bg-surface transition-colors hover:bg-surface-elevated"
                  >
                    <td className="px-4 py-3.5 font-medium text-foreground">
                      {row.area}
                    </td>
                    <td className="px-4 py-3.5 text-center text-muted">
                      {row.freehold}
                    </td>
                    <td className="px-4 py-3.5 text-center text-muted">
                      {row.gg}
                    </td>
                    <td className="px-4 py-3.5 text-center text-muted">
                      {row.club}
                    </td>
                    <td className="px-4 py-3.5 text-right text-muted">
                      {row.price}
                    </td>
                    <td className="px-4 py-3.5 text-sm text-muted-dim">
                      {row.verdict}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Gold callout */}
          <div className="mt-8 rounded-lg border border-gold/20 bg-gold/[0.04] p-6">
            <p className="text-base leading-relaxed text-foreground">
              TTDI bungalows are priced at{" "}
              <strong className="text-gold">RM6.8–6.9M</strong> — MORE than
              Aman Suria — yet offer no single-gate G&amp;G perimeter and no
              clubhouse. Damansara Heights&apos; Seri Beringin sub-enclave has a
              median of <strong className="text-gold">RM6.9M</strong>. At
              RM6.5M, Aman Suria is priced{" "}
              <strong className="text-gold">BELOW</strong> these competitors
              while offering superior security infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 6 — WHO WILL BUY THIS               */}
      {/* ============================================ */}
      <section className="border-t border-border-subtle px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-xs font-medium tracking-[0.3em] uppercase text-gold-dim">
            Buyer Targeting
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            We Know Exactly Who to Target
          </h2>
          <p className="mb-12 max-w-2xl text-base leading-relaxed text-muted">
            Three buyer archetypes based on PJ/Damansara market demographics.
          </p>

          <div className="mb-12 grid gap-6 lg:grid-cols-3">
            {/* Archetype 1 */}
            <div className="rounded-lg border border-border-subtle bg-surface p-6">
              <span className="mb-3 block text-2xl">🏠</span>
              <h3 className="mb-4 text-base font-bold text-gold">
                The Malaysian-Chinese Upgrader
              </h3>
              <ul className="space-y-2.5 text-sm leading-relaxed text-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-muted-dim" />
                  45–58yo, business owner or senior executive
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-muted-dim" />
                  Currently in semi-D in Tropicana / Bandar Utama / Kota
                  Damansara
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-muted-dim" />
                  Kids at Sri KDU or Tropicana International
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-muted-dim" />
                  Parents moving in — needs 5+1 config
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-muted-dim" />
                  Has RM3–5M equity + business liquidity
                </li>
              </ul>
              <div className="mt-5 border-t border-border-subtle pt-4">
                <p className="text-xs font-medium tracking-wide text-gold-dim uppercase">
                  How we reach them
                </p>
                <p className="mt-1.5 text-sm text-muted">
                  Golf club networks, WhatsApp groups, school parent communities,
                  PropertyGuru
                </p>
              </div>
            </div>

            {/* Archetype 2 */}
            <div className="rounded-lg border border-border-subtle bg-surface p-6">
              <span className="mb-3 block text-2xl">✈️</span>
              <h3 className="mb-4 text-base font-bold text-gold">
                The Returning Diaspora
              </h3>
              <ul className="space-y-2.5 text-sm leading-relaxed text-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-muted-dim" />
                  38–52yo, Malaysian-Chinese returning from Singapore / Australia
                  / UK
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-muted-dim" />
                  Foreign currency savings make RM assets extremely attractive
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-muted-dim" />
                  Wants to be near family, in a familiar neighbourhood
                </li>
              </ul>
              <div className="mt-5 border-t border-border-subtle pt-4">
                <p className="text-xs font-medium tracking-wide text-gold-dim uppercase">
                  How we reach them
                </p>
                <p className="mt-1.5 text-sm text-muted">
                  PropertyGuru Singapore, LinkedIn, agent referrals, Facebook
                  Malaysian expat groups
                </p>
              </div>
            </div>

            {/* Archetype 3 */}
            <div className="rounded-lg border border-border-subtle bg-surface p-6">
              <span className="mb-3 block text-2xl">👨‍👩‍👧‍👦</span>
              <h3 className="mb-4 text-base font-bold text-gold">
                The Multi-Generational Family
              </h3>
              <ul className="space-y-2.5 text-sm leading-relaxed text-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-muted-dim" />
                  50–65yo, established family, parents or in-laws moving in
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-muted-dim" />
                  Prioritizes security (G&amp;G), community (clubhouse), and
                  space (6,200+ sqft)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-muted-dim" />
                  The 5+1 bedroom + home office configuration is a direct
                  cultural match
                </li>
              </ul>
              <div className="mt-5 border-t border-border-subtle pt-4">
                <p className="text-xs font-medium tracking-wide text-gold-dim uppercase">
                  How we reach them
                </p>
                <p className="mt-1.5 text-sm text-muted">
                  Community networks, word of mouth, Aman Suria resident
                  referrals
                </p>
              </div>
            </div>
          </div>

          {/* Callout */}
          <div className="rounded-lg border border-gold/20 bg-gold/[0.04] p-6">
            <p className="text-base leading-relaxed text-foreground">
              <strong className="text-gold">99%</strong> of luxury property
              buyers in Malaysia are local (NAPIC/Savills 2025). The primary
              buyer is already in the PJ/Damansara corridor — likely within 10km
              of this property.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 7 — THE MARKETING PLAN               */}
      {/* ============================================ */}
      <section className="border-t border-border-subtle px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-xs font-medium tracking-[0.3em] uppercase text-gold-dim">
            The Marketing Plan
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            What We Will Do
          </h2>
          <p className="mb-12 max-w-2xl text-base leading-relaxed text-muted">
            Six channels, one objective.
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                num: "01",
                title: "Dedicated Property Website",
                desc: "Custom landing page with gallery, video, floor plan, Google Maps, comparable data. Already built and ready to launch.",
              },
              {
                num: "02",
                title: "Multi-Platform Listing",
                desc: "PropertyGuru, EdgeProp, iProperty, Mudah.my — all as \u2018Owner Direct\u2019. Premium featured listings.",
              },
              {
                num: "03",
                title: "Social Media Campaign",
                desc: "Facebook, Instagram, LinkedIn, WhatsApp groups, Chinese community networks.",
              },
              {
                num: "04",
                title: "Video Walkthrough + AI Virtual Staging",
                desc: "Cinematic video + AI-powered virtual staging to showcase the property with modern, aspirational interiors. Buyers see the home\u2019s full potential before visiting.",
              },
              {
                num: "05",
                title: "Targeted Buyer Outreach",
                desc: "Direct outreach to upgraders in Tropicana/Bandar Utama, returning diaspora networks, wealth managers, relocation consultants.",
              },
              {
                num: "06",
                title: "Open Houses + Lead Management",
                desc: "Weekend viewings by appointment, pre-qualified attendees, printed brochures, every enquiry tracked and reported weekly.",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="group rounded-lg border border-border-subtle bg-surface p-6 transition-colors hover:border-gold/30 hover:bg-surface-elevated"
              >
                <span className="mb-3 block font-mono text-xs text-gold-dim">
                  {item.num}
                </span>
                <h3 className="mb-2 text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 8 — RENTAL INCOME ANGLE              */}
      {/* ============================================ */}
      <section className="border-t border-border-subtle px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-xs font-medium tracking-[0.3em] uppercase text-gold-dim">
            Investment Angle
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Not Just a Sale — An Investment Asset
          </h2>
          <p className="mb-10 max-w-2xl text-base leading-relaxed text-muted">
            Even while marketing for sale, this property generates income.
          </p>

          <p className="mb-8 text-base text-foreground">
            Comparable PJ/Damansara bungalows command{" "}
            <strong className="text-gold">RM13,000–RM18,000/month</strong> in
            rental.
          </p>

          {/* Rental Table */}
          <div className="mb-8 overflow-x-auto rounded-lg border border-border-subtle">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-elevated">
                  <th className="px-4 py-3.5 font-medium text-muted">
                    Monthly Rent
                  </th>
                  <th className="px-4 py-3.5 text-right font-medium text-muted">
                    Annual Income
                  </th>
                  <th className="px-4 py-3.5 text-right font-medium text-muted">
                    Gross Yield on RM6.5M
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-subtle">
                {[
                  {
                    rent: "RM13,000",
                    annual: "RM156,000",
                    yield: "2.4%",
                  },
                  {
                    rent: "RM15,000",
                    annual: "RM180,000",
                    yield: "2.8%",
                  },
                  {
                    rent: "RM18,000",
                    annual: "RM216,000",
                    yield: "3.3%",
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className="bg-surface transition-colors hover:bg-surface-elevated"
                  >
                    <td className="px-4 py-3.5 font-medium text-foreground">
                      {row.rent}
                    </td>
                    <td className="px-4 py-3.5 text-right font-mono text-foreground">
                      {row.annual}
                    </td>
                    <td className="px-4 py-3.5 text-right font-mono text-gold">
                      {row.yield}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Callout */}
          <div className="rounded-lg border border-gold/20 bg-gold/[0.04] p-6">
            <p className="mb-4 text-base leading-relaxed text-foreground">
              With strong demand from{" "}
              <strong className="text-gold">MM2H and PVIP visa holders</strong>{" "}
              seeking premium G&amp;G homes in PJ, the existing agent can
              continue handling lease enquiries while we focus exclusively on the
              sale. Dual-track: earn while we sell.
            </p>
            <p className="text-sm leading-relaxed text-muted">
              <strong className="text-foreground">Note:</strong> Foreign
              ownership restrictions in Selangor mean MM2H/PVIP holders typically
              lease rather than purchase freehold landed — making YOUR property a
              high-demand rental asset for this segment.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 9 — FEE STRUCTURE                    */}
      {/* ============================================ */}
      <section className="border-t border-border-subtle px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-xs font-medium tracking-[0.3em] uppercase text-gold-dim">
            Fee Structure
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Our Fee — Simple and Fair
          </h2>
          <p className="mb-12 max-w-2xl text-base leading-relaxed text-muted">
            Transparent, performance-aligned, zero risk for you.
          </p>

          {/* Fee components */}
          <div className="mb-12 grid gap-5 sm:grid-cols-2">
            <div className="rounded-lg border border-border-subtle bg-surface p-6">
              <p className="mb-1 text-xs font-medium tracking-[0.2em] uppercase text-gold-dim">
                Base Fee
              </p>
              <p className="mb-2 text-2xl font-bold text-foreground">
                2%{" "}
                <span className="text-base font-normal text-muted">
                  of actual sale price
                </span>
              </p>
              <p className="text-sm text-muted">
                RM130,000 on a RM6.5M sale — standard market rate
              </p>
            </div>
            <div className="rounded-lg border border-border-subtle bg-surface p-6">
              <p className="mb-1 text-xs font-medium tracking-[0.2em] uppercase text-gold-dim">
                Upside Bonus
              </p>
              <p className="mb-2 text-2xl font-bold text-foreground">
                50/50{" "}
                <span className="text-base font-normal text-muted">
                  split above RM6.5M
                </span>
              </p>
              <p className="text-sm text-muted">
                We only earn more when you earn more
              </p>
            </div>
          </div>

          {/* Payment triggers */}
          <div className="mb-12 flex flex-col gap-3 sm:flex-row sm:gap-8">
            <div className="flex items-center gap-2.5">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold" />
              <span className="text-sm text-muted">
                Only after SPA signed{" "}
                <strong className="text-foreground">AND</strong> full payment
                received
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold" />
              <span className="text-sm text-muted">
                If unsold:{" "}
                <strong className="text-foreground">RM0. Zero risk.</strong>
              </span>
            </div>
          </div>

          {/* Scenario table */}
          <div className="overflow-x-auto rounded-lg border border-border-subtle">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-elevated">
                  <th className="px-4 py-3.5 font-medium text-muted">
                    Sale Price
                  </th>
                  <th className="px-4 py-3.5 text-right font-medium text-muted">
                    Base (2%)
                  </th>
                  <th className="px-4 py-3.5 text-right font-medium text-muted">
                    Bonus
                  </th>
                  <th className="px-4 py-3.5 text-right font-medium text-muted">
                    Total Fee
                  </th>
                  <th className="px-4 py-3.5 text-right font-medium text-muted">
                    You Keep
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-subtle">
                {[
                  {
                    sale: "RM6,500,000",
                    base: "RM130,000",
                    bonus: "\u2014",
                    total: "RM130,000",
                    keep: "RM6,370,000",
                    highlight: true,
                  },
                  {
                    sale: "RM6,800,000",
                    base: "RM136,000",
                    bonus: "RM150,000",
                    total: "RM286,000",
                    keep: "RM6,514,000",
                    highlight: false,
                  },
                  {
                    sale: "RM7,000,000",
                    base: "RM140,000",
                    bonus: "RM250,000",
                    total: "RM390,000",
                    keep: "RM6,610,000",
                    highlight: false,
                  },
                  {
                    sale: "No sale",
                    base: "RM0",
                    bonus: "RM0",
                    total: "RM0",
                    keep: "\u2014",
                    highlight: false,
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className={
                      row.highlight ? "bg-gold/[0.07]" : "bg-surface"
                    }
                  >
                    <td
                      className={`px-4 py-3.5 ${row.highlight ? "font-bold text-gold" : "text-foreground"}`}
                    >
                      {row.sale}
                    </td>
                    <td className="px-4 py-3.5 text-right font-mono text-muted">
                      {row.base}
                    </td>
                    <td className="px-4 py-3.5 text-right font-mono text-muted">
                      {row.bonus}
                    </td>
                    <td
                      className={`px-4 py-3.5 text-right font-mono ${row.highlight ? "font-bold text-gold" : "text-foreground"}`}
                    >
                      {row.total}
                    </td>
                    <td
                      className={`px-4 py-3.5 text-right ${row.highlight ? "font-bold text-gold" : "font-medium text-foreground"}`}
                    >
                      {row.keep}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 10 — LEGAL PROTECTION                */}
      {/* ============================================ */}
      <section className="border-t border-border-subtle px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-medium tracking-[0.3em] uppercase text-gold-dim">
            Legal Safeguards
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Protection For Both of Us
          </h2>
          <p className="mb-10 max-w-2xl text-base leading-relaxed text-muted">
            This is structured to be fair, transparent, and fully within your
            control at all times.
          </p>

          <div className="space-y-3">
            {[
              "Simple 1-page Letter of Agreement \u2014 not a scary contract",
              "You make ALL final decisions on price and terms \u2014 we market, you decide",
              "We have no authority to sign anything on your behalf \u2014 no Power of Attorney",
              "Every buyer we bring is logged in a Viewing Register (WhatsApp + Google Sheet)",
              "Fee is only payable after the money is in your bank account",
              "Either of us can walk away with 14 days notice",
              "90-day tail protection \u2014 if a buyer we introduced closes after termination, the fee still applies",
              "Agreement stamped at LHDN (~RM10) for proper documentation",
              'Framed as "Marketing Services" \u2014 fully compliant with Malaysian law',
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3.5 rounded-lg border border-border-subtle bg-surface px-5 py-4"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-xs text-gold">
                  ✓
                </span>
                <p className="text-sm leading-relaxed text-foreground/85">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 11 — HOW THE SALE WORKS              */}
      {/* ============================================ */}
      <section className="border-t border-border-subtle px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-xs font-medium tracking-[0.3em] uppercase text-gold-dim">
            The Process
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            How The Sale Works Without an Agent
          </h2>
          <p className="mb-12 max-w-2xl text-base leading-relaxed text-muted">
            Agents don&apos;t handle the legal process —{" "}
            <strong className="text-foreground">lawyers do</strong>.
          </p>

          <div className="mb-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                role: "Us (Marketing)",
                tasks:
                  "Find buyers, run marketing, coordinate viewings, negotiate price",
                icon: "📣",
              },
              {
                role: "Property Lawyer",
                tasks:
                  "Draft SPA, handle title transfer, manage deposits, liaise with buyer\u2019s bank",
                icon: "⚖️",
              },
              {
                role: "Buyer\u2019s Bank",
                tasks:
                  "Property valuation, loan approval, disbursement to your lawyer",
                icon: "🏦",
              },
              {
                role: "You (Owner)",
                tasks:
                  "Approve price, sign SPA, receive money. That\u2019s it.",
                icon: "✍️",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-lg border border-border-subtle bg-surface p-5"
              >
                <span className="mb-3 block text-2xl">{item.icon}</span>
                <h3 className="mb-2 text-sm font-bold text-gold">
                  {item.role}
                </h3>
                <p className="text-xs leading-relaxed text-muted">
                  {item.tasks}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-lg border border-gold/20 bg-gold/[0.04] p-6">
            <p className="mb-4 text-sm font-semibold text-foreground">
              The step-by-step:
            </p>
            <div className="space-y-2">
              {[
                "We find a qualified buyer through marketing + targeted outreach",
                "We agree on price \u2014 you have final say on everything",
                "Property lawyer drafts the SPA",
                "Buyer signs SPA + pays 10% deposit (held by lawyer)",
                "Buyer\u2019s bank approves loan + values the property",
                "Bank disburses balance to your lawyer",
                "Lawyer transfers title \u2014 cash in your account",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 font-mono text-[10px] font-bold text-gold">
                    {i + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-muted">{step}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-dim">
              A property lawyer costs RM3,000–8,000. That&apos;s it. No agent
              needed at any step.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 12 — TIMELINE                        */}
      {/* ============================================ */}
      <section className="border-t border-border-subtle px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-medium tracking-[0.3em] uppercase text-gold-dim">
            Execution Plan
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            The Plan — Week by Week
          </h2>
          <p className="mb-12 max-w-2xl text-base leading-relaxed text-muted">
            From kickoff to cash in hand. Every step planned.
          </p>

          <div className="relative space-y-0">
            {/* Timeline line */}
            <div className="absolute top-0 bottom-0 left-[19px] w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent sm:left-[23px]" />

            {[
              {
                week: "W0",
                title: "Preparation",
                desc: "Stage the house, hire photographer, engage property lawyer.",
              },
              {
                week: "W1",
                title: "Content",
                desc: "Photos, video, AI virtual staging of all rooms, website goes live.",
              },
              {
                week: "W2",
                title: "Launch",
                desc: "All portals listed, social media campaign begins, outreach starts.",
              },
              {
                week: "W3-4",
                title: "Viewings",
                desc: "Open houses, first viewings, weekly progress reports.",
              },
              {
                week: "W5-6",
                title: "Negotiate",
                desc: "Offers come in, negotiate best deal.",
              },
              {
                week: "W7-8",
                title: "Close",
                desc: "Accept offer, sign SPA, collect 10% deposit.",
              },
              {
                week: "W12-20",
                title: "Completion",
                desc: "Buyer loan processing + completion. Cash in hand.",
              },
            ].map((item, i) => (
              <div key={i} className="relative flex gap-5 pb-8 sm:gap-6">
                {/* Dot */}
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-surface text-xs font-bold text-gold sm:h-12 sm:w-12 sm:text-sm">
                  {item.week}
                </div>
                <div className="pt-1.5 sm:pt-2.5">
                  <h3 className="mb-1 text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 13 — CURRENT LISTING MUST CHANGE     */}
      {/* ============================================ */}
      <section className="border-t border-border-subtle px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-medium tracking-[0.3em] uppercase text-gold-dim">
            First Step
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            The Current Listing Needs to Change
          </h2>
          <p className="mb-10 max-w-2xl text-base leading-relaxed text-muted">
            Before we can market the sale properly, the existing agent listing
            needs to be taken down or converted to{" "}
            <strong className="text-foreground">lease only</strong>.
          </p>

          <div className="space-y-5">
            {[
              {
                icon: "🔀",
                title: "Conflicting listings confuse buyers",
                desc: "Two listings for the same property \u2014 one agent, one owner \u2014 looks disorganised and undermines buyer confidence.",
              },
              {
                icon: "💰",
                title: "Price conflict kills credibility",
                desc: "The agent lists at RM6.3M. We\u2019re marketing at RM6.5M. Two different prices on the same portal is a red flag.",
              },
              {
                icon: "📉",
                title: "Duplicate listings suppress search ranking",
                desc: "Property portals penalise duplicate listings. Neither ranks well in search results.",
              },
              {
                icon: "⚖️",
                title: "Avoids commission disputes",
                desc: "If a buyer contacts both the agent and us, there\u2019s a dispute over who introduced them \u2014 and who\u2019s owed commission.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-lg border border-border-subtle bg-surface p-5"
              >
                <span className="mt-0.5 text-lg">{item.icon}</span>
                <div>
                  <h3 className="mb-1 text-sm font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-gold/20 bg-gold/[0.04] p-6">
            <p className="text-sm font-semibold text-foreground">
              Recommendation:
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Ask the agent to{" "}
              <strong className="text-gold">
                take down the sale listing entirely
              </strong>
              , or{" "}
              <strong className="text-gold">convert it to lease-only</strong>.
              She handles rentals, we handle the sale — clean separation, no
              conflicts.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 14 — CTA                             */}
      {/* ============================================ */}
      <section className="border-t border-border-subtle px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-medium tracking-[0.3em] uppercase text-gold-dim">
            Let&apos;s Do This
          </p>
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s Get Going
          </h2>
          <p className="mx-auto max-w-lg text-lg leading-relaxed text-muted">
            With love,
            <br />
            <strong className="text-gold">Belle &amp; William</strong>
          </p>
        </div>
      </section>

      {/* ============================================ */}
      {/* FOOTER                                      */}
      {/* ============================================ */}
      <footer className="border-t border-border-subtle px-6 py-10">
        <p className="text-center text-xs tracking-wide text-muted-dim">
          Prepared with care for Dad &middot; March 2026
        </p>
      </footer>
    </div>
  );
}
