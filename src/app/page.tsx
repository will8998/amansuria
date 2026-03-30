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
            Aman Suria Damansara
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
            A Smarter Way to Sell
            <br />
            <span className="text-gold">Your Bungalow</span>
          </h1>

          <p className="mx-auto mb-4 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            RM6.5 Million &middot; A data-driven plan to sell faster, save
            more.
          </p>

          <p className="text-sm tracking-wide text-muted-dim">
            No agents. No inflated commissions. Just results.
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
            Something isn&apos;t working.
          </h2>

          <div className="space-y-5">
            {[
              {
                icon: "🏷️",
                text: 'The property is currently listed with an agent asking RM6.3M — priced below your target.',
              },

              {
                icon: "📷",
                text: "Current photography and marketing materials don\u2019t do the property justice — not done with the care a RM6.5M home deserves.",
              },
              {
                icon: "🌐",
                text: "No dedicated landing page, no targeted marketing.",
              },
              {
                icon: "⏳",
                text: "Result: the house sits on the market, unsold.",
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
      {/* SECTION 3 — MARKET DATA                     */}
      {/* ============================================ */}
      <section className="border-t border-border-subtle px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-xs font-medium tracking-[0.3em] uppercase text-gold-dim">
            Market Reality
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            What The Market Says
          </h2>
          <p className="mb-10 max-w-2xl text-base leading-relaxed text-muted">
            Comparable transactions in Aman Suria over the past 12 months.
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
                    prop: "Semi-D, Jalan PJU 1/46E",
                    size: "4,790 sqft",
                    price: "RM4,188,000",
                    psf: "RM874",
                    date: "Dec 2023",
                  },
                  {
                    prop: "Semi-D, Jalan PJU 1/46A",
                    size: "4,004 sqft",
                    price: "RM4,000,000",
                    psf: "RM999",
                    date: "Dec 2023",
                  },
                ].map((row, i) => (
                  <tr key={i} className="bg-surface transition-colors hover:bg-surface-elevated">
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
          <div className="mt-8 space-y-4 rounded-lg border border-gold/20 bg-gold/[0.04] p-6">
            <p className="text-base leading-relaxed text-foreground">
              At <strong className="text-gold">RM6.5M</strong>, your property
              is competitively priced at the top of the market. This price is
              achievable with aggressive, professional marketing — not a stale
              portal listing.
            </p>
            <p className="text-sm leading-relaxed text-muted">
              Median PSF in Aman Suria:{" "}
              <strong className="text-foreground">RM874</strong> &middot; Your
              property at{" "}
              <strong className="text-foreground">RM1,048 PSF</strong> is
              justified by the fully furnished status, rear reserve land
              (~1,000 sqft bonus), and bungalow premium.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 4 — THE MARKETING PLAN              */}
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
            Seven channels, one objective: get your bungalow sold at the right
            price.
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                num: "01",
                title: "Dedicated Property Website",
                desc: "Custom landing page with gallery, video, floor plan, Google Maps, comparable data.",
              },

              {
                num: "03",
                title: "Video Walkthrough",
                desc: "60-sec social cut + 3-min full walkthrough for YouTube.",
              },
              {
                num: "04",
                title: "Multi-Platform Listing",
                desc: "PropertyGuru, EdgeProp, iProperty, Mudah.my — all as Owner Direct.",
              },
              {
                num: "05",
                title: "Social Media Campaign",
                desc: "Facebook, Instagram, LinkedIn, WhatsApp groups, Chinese community networks, Xiaohongshu.",
              },
              {
                num: "06",
                title: "MM2H & PVIP Outreach",
                desc: "Actively target foreign buyers under Malaysia My Second Home and Premium Visa programmes. Approach MM2H and PVIP agencies directly — your bungalow is exactly what these buyers want.",
              },
              {
                num: "07",
                title: "Open Houses + Lead Management",
                desc: "Weekend viewings, printed brochures, every enquiry tracked and reported weekly.",
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
      {/* SECTION 5 — FEE STRUCTURE                   */}
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
                2% <span className="text-base font-normal text-muted">of actual sale price</span>
              </p>
              <p className="text-sm text-muted">
                RM130,000 on a RM6.5M sale — standard agent rate
              </p>
            </div>
            <div className="rounded-lg border border-border-subtle bg-surface p-6">
              <p className="mb-1 text-xs font-medium tracking-[0.2em] uppercase text-gold-dim">
                Upside Bonus
              </p>
              <p className="mb-2 text-2xl font-bold text-foreground">
                50/50 <span className="text-base font-normal text-muted">split above RM6.5M</span>
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
                Payment only after SPA signed{" "}
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
                    bonus: "—",
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
                    keep: "—",
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
      {/* SECTION 7 — PROTECTION                      */}
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
              "Simple 1-page Letter of Agreement — not a scary contract",
              "You make ALL final decisions on price and terms — we market, you decide",
              "We have no authority to sign anything on your behalf — no Power of Attorney",
              "Every buyer we bring is logged in a Viewing Register (WhatsApp + Google Sheet)",
              "Fee is only payable after the money is in your bank account",
              "Either of us can walk away with 14 days notice",
              "90-day tail protection — if a buyer we introduced closes after termination, the fee still applies",
              "Agreement stamped at LHDN (~RM10) for proper documentation",
              'Framed as "Marketing Services" — fully compliant with Malaysian law',
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
      {/* SECTION 8 — TIMELINE                        */}
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
                title: "Week 0 — Preparation",
                desc: "Hire photographer, engage property lawyer, stage the house.",
              },
              {
                week: "W1",
                title: "Week 1 — Content",
                desc: "Photos + video done, property website goes live.",
              },
              {
                week: "W2",
                title: "Week 2 — Launch",
                desc: "All portals listed, social media campaign launches.",
              },
              {
                week: "W3-4",
                title: "Week 3–4 — Viewings",
                desc: "Open houses, first viewings, weekly progress reports.",
              },
              {
                week: "W5-6",
                title: "Week 5–6 — Negotiate",
                desc: "Offers come in, negotiate best deal.",
              },
              {
                week: "W7-8",
                title: "Week 7–8 — Close",
                desc: "Accept offer, sign SPA, collect 10% deposit.",
              },
              {
                week: "W12-20",
                title: "Week 12–20 — Completion",
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
      {/* SECTION 9 — HOW THE SALE WORKS              */}
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
            Agents don&apos;t handle the legal process — <strong className="text-foreground">lawyers do</strong>. Even with an agent, a lawyer does all the actual paperwork. Here&apos;s who does what:
          </p>

          <div className="mb-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                role: "Us (Marketing)",
                tasks: "Find buyers, run marketing, coordinate viewings, negotiate price",
                icon: "📣",
              },
              {
                role: "Property Lawyer",
                tasks: "Draft SPA, handle title transfer, manage deposits, liaise with buyer\u2019s bank",
                icon: "⚖️",
              },
              {
                role: "Buyer\u2019s Bank",
                tasks: "Property valuation, loan approval, disbursement to your lawyer",
                icon: "🏦",
              },
              {
                role: "You (Owner)",
                tasks: "Approve price, sign SPA, receive money. That\u2019s it.",
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
            <p className="mb-3 text-sm font-semibold text-foreground">
              The step-by-step:
            </p>
            <div className="space-y-2">
              {[
                "We find a qualified buyer through marketing + MM2H/PVIP outreach",
                "We agree on price — you have final say on everything",
                "Property lawyer drafts the SPA (Sale & Purchase Agreement)",
                "Buyer signs SPA + pays 10% deposit (held by lawyer)",
                "Buyer\u2019s bank approves loan + values the property",
                "Bank disburses balance to your lawyer",
                "Lawyer transfers title — cash in your account",
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
              A property lawyer costs RM3,000–8,000. That&apos;s it. No agent needed at any step.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 10 — WHY ME                         */}
      {/* ============================================ */}
      <section className="border-t border-border-subtle px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-xs font-medium tracking-[0.3em] uppercase text-gold-dim">
            The Advantage
          </p>
          <h2 className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl">
            Why We&apos;ll Outperform Any Agent
          </h2>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                num: "01",
                title: "One Listing, Full Attention",
                desc: "An agent juggles 50+ listings. We have ONE — yours. Every hour we spend is on YOUR property.",
              },
              {
                num: "02",
                title: "Digital-First Marketing",
                desc: "Custom website, drone photography, social media campaigns. No agent does this for a single listing at this price point.",
              },
              {
                num: "03",
                title: "Skin in the Game",
                desc: "We care about this family. An agent clocks out at 5pm. We don\u2019t walk away.",
              },
              {
                num: "04",
                title: "Standard Rate, Premium Execution",
                desc: "Same 2% as any agent — but you get a custom website, drone footage, social media campaigns, and MM2H/PVIP outreach. No agent offers this. And if we don\u2019t sell it? You pay nothing.",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="rounded-lg border border-border-subtle bg-surface p-7 transition-colors hover:border-gold/20"
              >
                <span className="mb-4 block font-mono text-2xl font-bold text-gold/30">
                  {item.num}
                </span>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
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

      <section className="border-t border-border-subtle px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-medium tracking-[0.3em] uppercase text-gold-dim">
            First Step
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            The Current Listing Needs to Change
          </h2>
          <p className="mb-10 max-w-2xl text-base leading-relaxed text-muted">
            Before we can market the sale properly, the existing agent listing on PropertyGuru needs to be taken down or converted to <strong className="text-foreground">lease only</strong>. Here&apos;s why:
          </p>

          <div className="space-y-5">
            {[
              {
                icon: "🔀",
                title: "Conflicting listings confuse buyers",
                desc: "If the property appears as both \"For Sale\" by an agent AND \"For Sale\" by the owner on the same portals, buyers don\u2019t know who to contact. It looks disorganised and undermines confidence in the sale.",
              },
              {
                icon: "💰",
                title: "Price conflict kills credibility",
                desc: "The agent is listing at RM6.3M. We\u2019re marketing at RM6.5M. Two different prices for the same property on the same platform is a red flag for any serious buyer.",
              },
              {
                icon: "📉",
                title: "Duplicate listings suppress search ranking",
                desc: "Property portals like PropertyGuru penalise duplicate listings. Having two listings for the same address means neither ranks well in search results.",
              },
              {
                icon: "⚖️",
                title: "Avoids commission disputes",
                desc: "If a buyer contacts both the agent and us, there could be a dispute over who \"introduced\" the buyer — and who\u2019s owed a commission. A clean separation avoids this entirely.",
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
            <p className="mb-2 text-sm font-semibold text-foreground">
              What we recommend:
            </p>
            <p className="text-sm leading-relaxed text-muted">
              Ask Evelyn to either <strong className="text-gold">take down the sale listing entirely</strong>, or <strong className="text-gold">convert it to lease-only</strong>. This way, if someone wants to rent the property while it&apos;s on the market, she can still handle that — and we handle the sale separately with a clear, dedicated marketing strategy.
            </p>
          </div>
        </div>
      </section>

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
