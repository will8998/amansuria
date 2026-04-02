import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "How a Property Sale Works in Malaysia — Full Subsale Process Guide",
  description:
    "A complete guide to the Malaysian property subsale process. Every step, every cost, every legal requirement — from listing to title transfer. Based on Malaysian law.",
};

/* ──────────────────────────────────────────────── */
/*  DATA                                            */
/* ──────────────────────────────────────────────── */

const processSteps = [
  {
    step: "1",
    title: "Listing & Marketing",
    desc: "Property is marketed on portals (PropertyGuru, iProperty, EdgeProp), social media, and targeted outreach. Agent or owner-direct.",
  },
  {
    step: "2",
    title: "Buyer Found \u2014 Negotiate Terms",
    desc: "Agree on sale price and key terms. Buyer may need loan pre-approval from their bank.",
  },
  {
    step: "3",
    title: "Earnest Deposit (2\u20133%)",
    desc: "Buyer pays earnest deposit to show commitment. This is market practice \u2014 not legally mandated. Typically 2\u20133% of purchase price, paid with a Letter of Offer / OTP.",
  },
  {
    step: "4",
    title: "Engage Lawyers",
    desc: "Both parties appoint lawyers. The SPA must be drafted by a licensed lawyer \u2014 it is a criminal offence for non-lawyers to do this for a fee (Legal Profession Act 1976, Section 37(2)). Penalty: RM500 fine (first offence) / RM2,000 or 6 months imprisonment (repeat).",
  },
  {
    step: "5",
    title: "SPA Signed + Balance Deposit (10% total)",
    desc: "Sale & Purchase Agreement is signed by both parties. Buyer pays balance deposit, bringing total to 10% of purchase price. Paid to seller\u2019s lawyer\u2019s client account. The SPA is now legally binding \u2014 clock starts on all deadlines.",
  },
  {
    step: "6",
    title: "Buyer\u2019s Loan Processing",
    desc: "Buyer\u2019s bank conducts property valuation, processes loan approval. Timeline: typically 60\u201390 days. If loan rejected and SPA has a financing condition clause, SPA is terminated and deposits refunded in full.",
  },
  {
    step: "7",
    title: "RPGT Filing (within 60 days)",
    desc: "Both seller and buyer must file CKHT forms with LHDN within 60 days of SPA date. Buyer\u2019s lawyer withholds 3% of purchase price for RPGT (Section 21B(1), RPGT Act 1976). Failure to file is an offence.",
  },
  {
    step: "8",
    title: "Seller\u2019s Bank Redemption",
    desc: "If seller has an existing mortgage, seller\u2019s lawyer requests a redemption statement from the bank. The outstanding loan amount will be paid from sale proceeds before the seller receives the balance.",
  },
  {
    step: "9",
    title: "Balance Payment (90%)",
    desc: "Buyer\u2019s bank releases balance 90% to seller\u2019s lawyer\u2019s client account. The lawyer then: (1) pays seller\u2019s bank to discharge the mortgage, (2) withholds 3% RPGT for LHDN, (3) deducts legal fees, (4) releases the remaining balance to the seller.",
  },
  {
    step: "10",
    title: "Title Transfer (MOT)",
    desc: "Memorandum of Transfer (Form 14A) must be attested by an authorized person under National Land Code 1965, Section 211: Advocate & Solicitor, Magistrate, Land Administrator, Registrar, Notary Public, or State Director. Stamp duty paid by buyer.",
  },
  {
    step: "11",
    title: "Discharge of Charge",
    desc: "Seller\u2019s bank executes Form 16N (Discharge of Charge) under NLC Section 281. Filed at Land Office. Title is now clean \u2014 no more bank claim.",
  },
  {
    step: "12",
    title: "Transaction Complete",
    desc: "Title registered under buyer\u2019s name. Buyer\u2019s bank registers new charge (if financed). Seller receives net proceeds. Keys handed over.",
  },
];

const moneyFlowWithLoan = [
  { item: "Total Sale Price", amount: "RM1,000,000", highlight: false },
  {
    item: "Less: Outstanding Bank Loan",
    amount: "\u2212RM400,000",
    highlight: false,
  },
  {
    item: "Less: RPGT Withholding (3%)",
    amount: "\u2212RM30,000",
    highlight: false,
  },
  {
    item: "Less: Legal Fees (est.)",
    amount: "\u2212RM10,000",
    highlight: false,
  },
  {
    item: "Less: Agent Commission (2%)",
    amount: "\u2212RM20,000",
    highlight: false,
  },
  { item: "Net to Seller", amount: "RM540,000", highlight: true },
];

const moneyFlowNoLoan = [
  { item: "Total Sale Price", amount: "RM1,000,000", highlight: false },
  { item: "Less: Outstanding Bank Loan", amount: "\u2014", highlight: false },
  {
    item: "Less: RPGT Withholding (3%)",
    amount: "\u2212RM30,000",
    highlight: false,
  },
  {
    item: "Less: Legal Fees (est.)",
    amount: "\u2212RM10,000",
    highlight: false,
  },
  {
    item: "Less: Agent Commission (2%)",
    amount: "\u2212RM20,000",
    highlight: false,
  },
  { item: "Net to Seller", amount: "RM940,000", highlight: true },
];

const lawyerReasons = [
  {
    num: "01",
    title: "Bank Loan Must Be Settled First",
    desc: "If there\u2019s an existing mortgage, the lawyer must pay the bank from sale proceeds to discharge the charge. If money goes directly to seller, the bank doesn\u2019t get paid, the charge isn\u2019t discharged, and the buyer gets encumbered title. No buyer\u2019s lawyer will allow this.",
  },
  {
    num: "02",
    title: "RPGT Withholding Is Mandatory",
    desc: "Under Section 21B(1) of the RPGT Act 1976, the buyer is legally required to withhold 3% of the purchase price and remit it to LHDN within 60 days. This is managed by the lawyer.",
  },
  {
    num: "03",
    title: "SPA Terms Require It",
    desc: "The standard SPA stipulates payment to \u2018the Vendor\u2019s solicitors as stakeholders.\u2019 This is a contractual obligation \u2014 not optional. The lawyer holds funds as a neutral checkpoint.",
  },
  {
    num: "04",
    title: "Protection Against Fraud",
    desc: "Routing money through the lawyer\u2019s client account provides an audit trail and verification layer. The lawyer must confirm the seller\u2019s identity and title before releasing funds.",
  },
];

const legalFeeScales = [
  { band: "First RM500,000", rate: "1.0%" },
  { band: "RM500,001 \u2013 RM1,000,000", rate: "0.8%" },
  { band: "RM1,000,001 \u2013 RM3,000,000", rate: "0.7%" },
  { band: "RM3,000,001 \u2013 RM5,000,000", rate: "0.6%" },
  { band: "Above RM5,000,000", rate: "0.5%" },
];

const rpgtRates = [
  {
    period: "Within 3 years",
    citizen: "30%",
    company: "30%",
    foreigner: "30%",
  },
  { period: "4th year", citizen: "20%", company: "20%", foreigner: "30%" },
  { period: "5th year", citizen: "15%", company: "15%", foreigner: "30%" },
  {
    period: "6th year onwards",
    citizen: "0%",
    company: "10%",
    foreigner: "10%",
  },
];

const legalReferences = [
  {
    topic: "SPA drafting",
    act: "Legal Profession Act 1976 [Act 166]",
    section: "s.37(2)(a)",
    detail: "Criminal offence for non-lawyers",
  },
  {
    topic: "MOT attestation",
    act: "National Land Code 1965 [Act 56]",
    section: "s.211(1)",
    detail: "6 authorized attestors",
  },
  {
    topic: "RPGT withholding",
    act: "RPGT Act 1976 [Act 169]",
    section: "s.21B(1)",
    detail: "3% retention by buyer",
  },
  {
    topic: "RPGT exemption",
    act: "RPGT Act 1976 [Act 169]",
    section: "s.8",
    detail: "Once-in-lifetime private residence",
  },
  {
    topic: "Stamp duty",
    act: "Stamp Act 1949 [Act 378]",
    section: "First Schedule",
    detail: "1% / 2% / 3% / 4% tiered",
  },
  {
    topic: "Legal fees",
    act: "SRO 2023 [P.U.(A) 228/2023]",
    section: "Table 1",
    detail: "1.0% / 0.8% / 0.7% / 0.6% / 0.5%",
  },
  {
    topic: "Discharge of charge",
    act: "National Land Code 1965 [Act 56]",
    section: "s.281",
    detail: "Form 16N",
  },
  {
    topic: "Agent commission",
    act: "Act 242",
    section: "Scale of Fees Rules",
    detail: "Maximum 3%",
  },
  {
    topic: "Earnest deposit",
    act: "No statute",
    section: "Market practice",
    detail: "2\u20133% (negotiable)",
  },
  {
    topic: "Seller obligations",
    act: "Contracts Act 1950 [Act 136]",
    section: "ss.56, 74",
    detail: "Contractual, ~3+1 months",
  },
];

const pitfalls = [
  {
    num: "01",
    title: "Not discharging existing mortgage in time",
    desc: "Delays in getting the bank\u2019s redemption statement can push the entire timeline back. Start the process early.",
  },
  {
    num: "02",
    title: "Tenanted property at completion date",
    desc: "Buyer expects vacant possession. If tenants haven\u2019t moved out, completion is delayed and you may face penalty interest.",
  },
  {
    num: "03",
    title: "Outstanding maintenance fees / quit rent arrears",
    desc: "All arrears must be settled before transfer. Land Office will reject the MOT filing if quit rent is outstanding.",
  },
  {
    num: "04",
    title: "Underestimating RPGT liability",
    desc: "Many sellers don\u2019t realize RPGT applies to them until they see the 3% withholding. Plan for it upfront.",
  },
  {
    num: "05",
    title: "Unrealistic completion timeline",
    desc: "Leasehold properties need state consent \u2014 this can add 3\u20136 months. Even freehold transfers take 2\u20134 months minimum.",
  },
  {
    num: "06",
    title: "No financing condition clause in SPA",
    desc: "If the buyer\u2019s loan is rejected and there\u2019s no financing clause, the deposit may be forfeited \u2014 leading to disputes.",
  },
  {
    num: "07",
    title: "Signing OTP without legal advice",
    desc: "The OTP can contain binding terms. Always have a lawyer review before signing anything.",
  },
  {
    num: "08",
    title: "Forgetting to file CKHT forms within 60 days",
    desc: "Both seller and buyer must file. Failure is an offence under the RPGT Act 1976. Your lawyer will handle this \u2014 but confirm it\u2019s done.",
  },
];

/* ──────────────────────────────────────────────── */
/*  PAGE                                            */
/* ──────────────────────────────────────────────── */

export default function ProcessPage() {
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
            Property Sale Guide
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
            <span className="text-gold">The Process</span>
          </h1>

          <p className="mx-auto mb-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            A complete guide to the subsale process &mdash; every step, every
            cost, every legal requirement explained clearly.
          </p>

          <p className="text-sm tracking-wide text-muted-dim">
            Prepared by{" "}
            <span className="text-gold">Belle &amp; William</span> &middot;
            Based on Malaysian Law
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="h-10 w-[1px] bg-gradient-to-b from-gold/60 to-transparent" />
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 2 — KEY PARTIES INVOLVED             */}
      {/* ============================================ */}
      <section className="border-t border-border-subtle px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-xs font-medium tracking-[0.3em] uppercase text-gold-dim">
            Key Parties
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Who Is Involved in a Property Sale
          </h2>
          <p className="mb-12 max-w-2xl text-base leading-relaxed text-muted">
            Every property transaction involves multiple parties, each with a
            specific role.
          </p>

          {/* 4 primary parties */}
          <div className="mb-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "🏠",
                role: "Seller (Owner)",
                tasks:
                  "You \u2014 the property owner. You make all final decisions on price and terms.",
              },
              {
                icon: "🤝",
                role: "Buyer",
                tasks:
                  "The purchaser. May pay cash or use bank financing.",
              },
              {
                icon: "\u2696\uFE0F",
                role: "Lawyers",
                tasks:
                  "Handle SPA drafting, title transfer, loan docs, RPGT filing. Legally required under LPA 1976, s.37.",
              },
              {
                icon: "🏦",
                role: "Banks",
                tasks:
                  "Seller\u2019s bank (discharge existing loan) and Buyer\u2019s bank (provide financing).",
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

          {/* 3 additional parties */}
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              {
                icon: "📣",
                role: "Real Estate Agent",
                tasks:
                  "Markets the property, finds buyers. Commission: max 3% (regulated by BOVAEP under Act 242).",
              },
              {
                icon: "🏛️",
                role: "LHDN (Inland Revenue)",
                tasks: "Collects RPGT and stamp duty.",
              },
              {
                icon: "📋",
                role: "Land Office",
                tasks: "Registers the title transfer.",
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
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 3 — THE FULL PROCESS                 */}
      {/* ============================================ */}
      <section className="border-t border-border-subtle px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-medium tracking-[0.3em] uppercase text-gold-dim">
            Step by Step
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            The Full Process &mdash; 12 Steps
          </h2>
          <p className="mb-12 max-w-2xl text-base leading-relaxed text-muted">
            From listing to title transfer. Every step a seller needs to
            understand.
          </p>

          <div className="relative space-y-0">
            {/* Timeline line */}
            <div className="absolute top-0 bottom-0 left-[19px] w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent sm:left-[23px]" />

            {processSteps.map((item, i) => (
              <div key={i} className="relative flex gap-5 pb-8 sm:gap-6">
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-surface text-xs font-bold text-gold sm:h-12 sm:w-12 sm:text-sm">
                  {item.step}
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
      {/* SECTION 4 — MONEY FLOW                       */}
      {/* ============================================ */}
      <section className="border-t border-border-subtle px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-xs font-medium tracking-[0.3em] uppercase text-gold-dim">
            Money Flow
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Where Every Ringgit Goes
          </h2>
          <p className="mb-12 max-w-2xl text-base leading-relaxed text-muted">
            Worked example on a RM1,000,000 sale with RM400,000 outstanding bank
            loan.
          </p>

          {/* Scenario 1: With outstanding loan */}
          <p className="mb-5 text-xs font-medium tracking-[0.3em] uppercase text-gold-dim">
            Scenario 1 &mdash; With Outstanding Bank Loan (RM400,000)
          </p>
          <div className="mb-10 overflow-x-auto rounded-lg border border-border-subtle">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-elevated">
                  <th className="px-4 py-3.5 font-medium text-muted">Item</th>
                  <th className="px-4 py-3.5 text-right font-medium text-muted">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-subtle">
                {moneyFlowWithLoan.map((row, i) => (
                  <tr
                    key={i}
                    className={
                      row.highlight ? "bg-gold/[0.07]" : "bg-surface"
                    }
                  >
                    <td
                      className={`px-4 py-3.5 ${row.highlight ? "font-bold text-gold" : "text-foreground"}`}
                    >
                      {row.item}
                    </td>
                    <td
                      className={`px-4 py-3.5 text-right font-mono ${row.highlight ? "font-bold text-gold" : "text-muted"}`}
                    >
                      {row.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Scenario 2: No outstanding loan */}
          <p className="mb-5 text-xs font-medium tracking-[0.3em] uppercase text-gold-dim">
            Scenario 2 &mdash; No Outstanding Bank Loan
          </p>
          <div className="mb-10 overflow-x-auto rounded-lg border border-border-subtle">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-elevated">
                  <th className="px-4 py-3.5 font-medium text-muted">Item</th>
                  <th className="px-4 py-3.5 text-right font-medium text-muted">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-subtle">
                {moneyFlowNoLoan.map((row, i) => (
                  <tr
                    key={i}
                    className={
                      row.highlight ? "bg-gold/[0.07]" : "bg-surface"
                    }
                  >
                    <td
                      className={`px-4 py-3.5 ${row.highlight ? "font-bold text-gold" : "text-foreground"}`}
                    >
                      {row.item}
                    </td>
                    <td
                      className={`px-4 py-3.5 text-right font-mono ${row.highlight ? "font-bold text-gold" : "text-muted"}`}
                    >
                      {row.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Callout */}
          <div className="rounded-lg border border-gold/20 bg-gold/[0.04] p-6">
            <p className="text-base leading-relaxed text-foreground">
              The <strong className="text-gold">RPGT withholding (RM30,000)</strong>{" "}
              may be refunded by LHDN if the seller qualifies for exemption
              &mdash; e.g., Malaysian citizen selling their private residence
              (once-in-a-lifetime exemption under RPGT Act 1976, Section 8).
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 5 — WHY MONEY GOES THROUGH LAWYER    */}
      {/* ============================================ */}
      <section className="border-t border-border-subtle px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-xs font-medium tracking-[0.3em] uppercase text-gold-dim">
            Critical Question
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Why the Money Goes Through the Lawyer
          </h2>
          <p className="mb-12 max-w-2xl text-base leading-relaxed text-muted">
            This is the most common question sellers ask. There are four
            mandatory reasons.
          </p>

          <div className="mb-10 grid gap-5 sm:grid-cols-2">
            {lawyerReasons.map((item) => (
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

          {/* Callout */}
          <div className="rounded-lg border border-gold/20 bg-gold/[0.04] p-6">
            <p className="text-base leading-relaxed text-foreground">
              Think of the lawyer as a{" "}
              <strong className="text-gold">checkpoint, not a destination</strong>.
              The money is 100% yours &mdash; it just passes through the lawyer
              first so the bank, tax office, and fees are settled. The remaining
              balance goes directly to you.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 6 — LEGAL FEES                       */}
      {/* ============================================ */}
      <section className="border-t border-border-subtle px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-xs font-medium tracking-[0.3em] uppercase text-gold-dim">
            Legal Fees
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            What Lawyers Cost
          </h2>
          <p className="mb-12 max-w-2xl text-base leading-relaxed text-muted">
            Fees are set by law &mdash; not by the lawyer. Solicitors&apos;
            Remuneration Order 2023.
          </p>

          <div className="mb-6 overflow-x-auto rounded-lg border border-border-subtle">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-elevated">
                  <th className="px-4 py-3.5 font-medium text-muted">
                    Purchase Price
                  </th>
                  <th className="px-4 py-3.5 text-right font-medium text-muted">
                    Scale Fee
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-subtle">
                {legalFeeScales.map((row, i) => (
                  <tr
                    key={i}
                    className="bg-surface transition-colors hover:bg-surface-elevated"
                  >
                    <td className="px-4 py-3.5 text-foreground">{row.band}</td>
                    <td className="px-4 py-3.5 text-right font-mono text-gold">
                      {row.rate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3.5 rounded-lg border border-border-subtle bg-surface px-5 py-4">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-xs text-gold">
                +
              </span>
              <p className="text-sm leading-relaxed text-foreground/85">
                8% SST on legal fees. These are{" "}
                <strong className="text-foreground">
                  mandatory minimum rates
                </strong>{" "}
                &mdash; solicitors cannot charge below scale.
              </p>
            </div>
          </div>

          <p className="mt-6 text-xs tracking-wide text-muted-dim">
            Source: Solicitors&apos; Remuneration Order 2023 [P.U.(A) 228/2023],
            made under Legal Profession Act 1976, Section 116
          </p>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 7 — RPGT                             */}
      {/* ============================================ */}
      <section className="border-t border-border-subtle px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-xs font-medium tracking-[0.3em] uppercase text-gold-dim">
            Tax
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            RPGT &mdash; Real Property Gains Tax
          </h2>
          <p className="mb-12 max-w-2xl text-base leading-relaxed text-muted">
            Tax on profit from property disposal. Rates depend on holding period
            and residency status (w.e.f. 1 Jan 2022).
          </p>

          <div className="mb-8 overflow-x-auto rounded-lg border border-border-subtle">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-elevated">
                  <th className="px-4 py-3.5 font-medium text-muted">
                    Holding Period
                  </th>
                  <th className="px-4 py-3.5 text-right font-medium text-muted">
                    Citizens &amp; PRs
                  </th>
                  <th className="px-4 py-3.5 text-right font-medium text-muted">
                    Companies
                  </th>
                  <th className="px-4 py-3.5 text-right font-medium text-muted">
                    Foreigners
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-subtle">
                {rpgtRates.map((row, i) => (
                  <tr
                    key={i}
                    className="bg-surface transition-colors hover:bg-surface-elevated"
                  >
                    <td className="px-4 py-3.5 font-medium text-foreground">
                      {row.period}
                    </td>
                    <td className="px-4 py-3.5 text-right font-mono text-muted">
                      {row.citizen}
                    </td>
                    <td className="px-4 py-3.5 text-right font-mono text-muted">
                      {row.company}
                    </td>
                    <td className="px-4 py-3.5 text-right font-mono text-muted">
                      {row.foreigner}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mb-8 text-xs tracking-wide text-muted-dim">
            Source: RPGT Act 1976 [Act 169], Schedule 5
          </p>

          {/* Exemptions */}
          <p className="mb-5 text-xs font-medium tracking-[0.3em] uppercase text-gold-dim">
            Key Exemptions
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3.5 rounded-lg border border-border-subtle bg-surface px-5 py-4">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-xs text-gold">
                1
              </span>
              <div>
                <p className="mb-1 text-sm font-semibold text-foreground">
                  Once-in-a-Lifetime Exemption (Section 8, RPGT Act 1976)
                </p>
                <p className="text-sm leading-relaxed text-muted">
                  Malaysian citizens and PRs can exempt the{" "}
                  <strong className="text-foreground">
                    full chargeable gain
                  </strong>{" "}
                  on disposal of their private residence. Must file Form CKHT 3.
                  Election is irrevocable.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3.5 rounded-lg border border-border-subtle bg-surface px-5 py-4">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-xs text-gold">
                2
              </span>
              <div>
                <p className="mb-1 text-sm font-semibold text-foreground">
                  Automatic Exemption (Schedule 4, Para 2)
                </p>
                <p className="text-sm leading-relaxed text-muted">
                  RM10,000 or 10% of chargeable gain, whichever is greater.
                  Applies to every disposal automatically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 8 — AGENT COMMISSION                 */}
      {/* ============================================ */}
      <section className="border-t border-border-subtle px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-xs font-medium tracking-[0.3em] uppercase text-gold-dim">
            Agent Commission
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            What Agents Charge &mdash; and Why
          </h2>
          <p className="mb-12 max-w-2xl text-base leading-relaxed text-muted">
            Regulated by BOVAEP under the Valuers, Appraisers, Estate Agents and
            Property Managers Act 1981 [Act 242].
          </p>

          <div className="mb-10 space-y-3">
            {[
              "Maximum 3% commission on sale price \u2014 regulated cap under Act 242.",
              "Commission is paid by the seller.",
              "Negotiable downward \u2014 commonly 2\u20133% for residential property.",
              "For rental: 1 month\u2019s rent as commission.",
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

          {/* Agent incentive problem */}
          <p className="mb-5 text-xs font-medium tracking-[0.3em] uppercase text-gold-dim">
            The Agent Incentive Problem (Rental Example)
          </p>
          <div className="mb-8 overflow-x-auto rounded-lg border border-border-subtle">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-elevated">
                  <th className="px-4 py-3.5 font-medium text-muted">
                    Scenario
                  </th>
                  <th className="px-4 py-3.5 text-right font-medium text-muted">
                    Monthly Rent
                  </th>
                  <th className="px-4 py-3.5 text-right font-medium text-muted">
                    Agent Earns
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-subtle">
                <tr className="bg-surface transition-colors hover:bg-surface-elevated">
                  <td className="px-4 py-3.5 text-foreground">
                    Quick close at lower price
                  </td>
                  <td className="px-4 py-3.5 text-right font-mono text-muted">
                    RM10,000
                  </td>
                  <td className="px-4 py-3.5 text-right font-mono text-foreground">
                    RM10,000
                  </td>
                </tr>
                <tr className="bg-surface transition-colors hover:bg-surface-elevated">
                  <td className="px-4 py-3.5 text-foreground">
                    Hold out for higher price
                  </td>
                  <td className="px-4 py-3.5 text-right font-mono text-muted">
                    RM11,000
                  </td>
                  <td className="px-4 py-3.5 text-right font-mono text-foreground">
                    RM11,000
                  </td>
                </tr>
                <tr className="bg-gold/[0.07]">
                  <td className="px-4 py-3.5 font-bold text-gold">
                    Difference to agent
                  </td>
                  <td className="px-4 py-3.5 text-right font-mono text-gold">
                    +RM1,000/mo
                  </td>
                  <td className="px-4 py-3.5 text-right font-mono font-bold text-gold">
                    Only RM1,000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="rounded-lg border border-gold/20 bg-gold/[0.04] p-6">
            <p className="text-base leading-relaxed text-foreground">
              The agent earns{" "}
              <strong className="text-gold">nothing until a deal closes</strong>.
              The difference between RM10k and RM11k rent is only RM1,000 to the
              agent &mdash; but could mean months of extra waiting. This creates a
              structural incentive to{" "}
              <strong className="text-gold">
                push for quick closes at lower prices
              </strong>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 10 — LEGAL REFERENCES                */}
      {/* ============================================ */}
      <section className="border-t border-border-subtle px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-xs font-medium tracking-[0.3em] uppercase text-gold-dim">
            Legal References
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Key Legal References
          </h2>
          <p className="mb-12 max-w-2xl text-base leading-relaxed text-muted">
            Every law cited in this guide, consolidated in one table.
          </p>

          <div className="overflow-x-auto rounded-lg border border-border-subtle">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-elevated">
                  <th className="px-4 py-3.5 font-medium text-muted">Topic</th>
                  <th className="px-4 py-3.5 font-medium text-muted">Act</th>
                  <th className="px-4 py-3.5 font-medium text-muted">
                    Section
                  </th>
                  <th className="px-4 py-3.5 font-medium text-muted">
                    Key Detail
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-subtle">
                {legalReferences.map((row, i) => (
                  <tr
                    key={i}
                    className="bg-surface transition-colors hover:bg-surface-elevated"
                  >
                    <td className="px-4 py-3.5 font-medium text-foreground">
                      {row.topic}
                    </td>
                    <td className="px-4 py-3.5 text-muted">{row.act}</td>
                    <td className="px-4 py-3.5 font-mono text-xs text-gold-dim">
                      {row.section}
                    </td>
                    <td className="px-4 py-3.5 text-muted">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 12 — COMMON PITFALLS                 */}
      {/* ============================================ */}
      <section className="border-t border-border-subtle px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-xs font-medium tracking-[0.3em] uppercase text-gold-dim">
            Watch Out
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Common Pitfalls for Sellers
          </h2>
          <p className="mb-12 max-w-2xl text-base leading-relaxed text-muted">
            Mistakes that delay or derail property transactions. Avoid all of
            these.
          </p>

          <div className="grid gap-5 sm:grid-cols-2">
            {pitfalls.map((item) => (
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
      {/* SECTION 13 — DISCLAIMER                      */}
      {/* ============================================ */}
      <section className="border-t border-border-subtle px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-medium tracking-[0.3em] uppercase text-gold-dim">
            Important
          </p>
          <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">
            Disclaimer
          </h2>

          <div className="rounded-lg border border-gold/20 bg-gold/[0.04] p-6">
            <p className="text-base leading-relaxed text-foreground">
              This page is for{" "}
              <strong className="text-gold">general guidance only</strong> and
              does not constitute legal advice. All information is based on
              Malaysian law as of April 2026. Laws, regulations, and government
              policies may change. Always consult a{" "}
              <strong className="text-gold">
                licensed Malaysian conveyancing lawyer
              </strong>{" "}
              before proceeding with any property transaction.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FOOTER                                      */}
      {/* ============================================ */}
      <footer className="border-t border-border-subtle px-6 py-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs tracking-wide text-muted-dim">
            Property Sale Process Guide &middot; Based on Malaysian Law &middot;
            April 2026
          </p>
          <p className="mt-2 text-xs text-muted-dim/60">
            Prepared by Belle &amp; William
          </p>
        </div>
      </footer>
    </div>
  );
}
