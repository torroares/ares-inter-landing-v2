
'use client'
import Image from "next/image";
import { useState } from 'react'

export default function AresInterLanding() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-emerald-400/30">
      {/* Header */}
     <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 border-b border-white/10">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-24 items-center justify-between">
      {/* Logo & Name */}
      <a href="#home" className="flex items-center gap-3">
  <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-emerald-400/90 to-cyan-500/90 flex items-center justify-center shadow-lg">
    <img
  src="/images/areslogo.png"
  alt="Ares Inter Logo"
  className="h-15 w-15 object-contain opacity-95"
  style={{ maxWidth: '95%', maxHeight: '95%' }}
/>

  </div>
  <span className="text-xl font-semibold tracking-tight text-white">
    Ares Inter GmbH
  </span>
</a>


      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
        <a href="#services" className="hover:text-white transition-colors">Services</a>
        <a href="#industry" className="hover:text-white transition-colors">Sports Betting</a>
        <a href="#approach" className="hover:text-white transition-colors">Approach</a>
        <a href="#compliance" className="hover:text-white transition-colors">Compliance</a>
        <a href="#case-studies" className="hover:text-white transition-colors">Case Studies</a>
        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
      </nav>

      {/* CTA Button */}
      <a
        href="#contact"
        className="hidden md:inline-flex items-center rounded-2xl border border-white/20 px-5 py-2.5 text-sm font-medium hover:bg-white/10 transition-colors"
      >
        Free Consultation
      </a>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden rounded-xl border border-white/20 px-3 py-1.5 text-sm"
      >
        Menu
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  {menuOpen && (
    <div className="md:hidden border-t border-white/10 bg-neutral-950/95">
      <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-2 text-neutral-300">
        {['services', 'industry', 'approach', 'compliance', 'case-studies', 'contact'].map(id => (
          <a
            key={id}
            href={`#${id}`}
            onClick={() => setMenuOpen(false)}
            className="py-2 hover:text-white transition-colors"
          >
            {id.replace('-', ' ').toUpperCase()}
          </a>
        ))}
      </div>
    </div>
  )}
</header>


      {/* Hero */}
      <section id="home" className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">
                Consulting • Technology • Market Success
              </span>
              <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Strategic Advisory for{' '}
                <span className="bg-gradient-to-br from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Ambitious Growth
                </span>
              </h1>
              <p className="mt-4 text-neutral-300">
                Ares Inter GmbH partners with operators, suppliers, and startups to launch products, enter new markets,
                and build scalable software. We combine deep industry know-how with hands-on engineering to ship
                faster—compliantly.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-neutral-900 hover:opacity-90"
                >
                  Discuss your project
                </a>
                <a
                  href="#services"
                  className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold hover:bg-white/10"
                >
                  Explore services
                </a>
              </div>
              <p className="mt-4 text-xs text-neutral-400">Worldwide coverage • Remote & on-site</p>
            </div>
            <div className="relative">
              <div className="w-full rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-1 shadow-2xl">
                <div className="h-full w-full rounded-2xl bg-neutral-900 p-6 grid grid-rows-[auto,1fr] gap-4">
                  
                  <div className="grid grid-cols-3 gap-4">
                    <img src="/images/dashboard.png" alt="Live Ops" className="h-24 w-full rounded-xl object-cover" />
                    <img src="/images/metrics.png" alt="Metrics" className="h-24 w-full rounded-xl object-cover" />
                    <img src="/images/mobile-ui.png" alt="Mobile UI" className="h-24 w-full rounded-xl object-cover" />
                  </div>
                  <div className="h-[20px] sm:h-[100px] md:h-[100px] lg:h-[100px] rounded-xl bg-white/5 flex items-center justify-center text-sm text-neutral-300">
  Architecture • APIs • Compliance
</div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust logos */}
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs uppercase tracking-widest text-neutral-400">
            Trusted by teams across iGaming, data & sport
          </p>
          <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 items-center">
            <img src="/images/aws.png" alt="AWS" className="h-[64px] mx-auto opacity-90 hover:opacity-100 transition" />
            <img src="/images/googlecloud.png" alt="Google Cloud" className="h-[64px] mx-auto opacity-90 hover:opacity-100 transition" />
            <img src="/images/stripe.png" alt="Stripe" className="h-[64px] mx-auto opacity-90 hover:opacity-100 transition" />
            <img src="/images/sportradar.png" alt="Sportradar" className="h-[64px] mx-auto opacity-90 hover:opacity-100 transition" />
            <img src="/images/kambi.png" alt="Kambi" className="h-[64px] mx-auto opacity-90 hover:opacity-100 transition" />
            <img src="/images/geniussports.png" alt="Genius Sports" className="h-[64px] mx-auto opacity-90 hover:opacity-100 transition" />
          </div>
        </div>
      </section>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Services */}
      <section id="services" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold">Services</h2>
            <p className="mt-2 text-neutral-300">
              Modular support from idea to operations—engage via workshop, project, or interim roles.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Technology & Product Advisory', desc: 'Architecture reviews, platform/vendor selection, build-vs-buy, roadmaps, KPIs.' },
              { title: 'Market Entry & Product Launch', desc: 'Go-to-market, pricing, partnerships, localization, launch ops, change management.' },
              { title: 'Software Engineering', desc: 'Greenfield builds, API design, integrations (Odds, Payment, KYC), Web & Mobile.' },
              { title: 'Software Adaptation', desc: 'Refactoring, performance tuning, migrations, white-labeling, modular extensions.' },
              { title: 'Data, ML & Personalization', desc: 'Real-time feeds, recommendation systems, risk models, fraud detection, CDP setups.' },
              { title: 'Operations & Scale', desc: 'Cloud ops, SRE, monitoring, SLAs, cost optimization, 24/7 readiness.' }
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-neutral-900 p-6 shadow">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-neutral-300">{item.desc}</p>
                <div className="mt-4 flex gap-2 text-xs text-neutral-400">
                  <span className="rounded-full border border-white/10 px-2 py-1">Workshop</span>
                  <span className="rounded-full border border-white/10 px-2 py-1">Project</span>
                  <span className="rounded-full border border-white/10 px-2 py-1">Interim</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section id="industry" className="bg-gradient-to-b from-white/5 to-transparent py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold">Focus: Sports Betting</h2>
              <p className="mt-3 text-neutral-300">
                We understand the full betting value chain: odds aggregation, risk management, live data, payment/KYC/AML,
                player protection, promotion mechanics, and compliance across jurisdictions. We help you balance growth,
                integrity, and regulatory expectations.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-neutral-300">
                <li>• Platform strategy: retail, online, mobile, and omnichannel flows</li>
                <li>• Integrations: data providers, payments, IDV/KYC, geolocation</li>
                <li>• Live ops: in-play trading, latency, monitoring, incident response</li>
                <li>• Responsible gaming & player safety by design</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-neutral-900 p-6">
              <h3 className="text-lg font-semibold">What we deliver</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  'Market scans & entry plans',
                  'Regulatory readiness checklists',
                  'Technical architecture blueprints',
                  'API & integration maps',
                  'Data & ML use-case roadmaps',
                  'Launch playbooks & KPIs'
                ].map((t) => (
                  <div key={t} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-neutral-200">
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold">Our Approach</h2>
            <p className="mt-2 text-neutral-300">Lightweight, outcome-driven, and collaborative with your in-house teams.</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: '01', title: 'Discovery', desc: 'Clarify goals, constraints, and success metrics. Rapid risk/ROI scan.' },
              { step: '02', title: 'Blueprint', desc: 'Architecture, integrations, and operating model translated into a plan.' },
              { step: '03', title: 'Build & Integrate', desc: 'Agile delivery with CI/CD, rigorous QA, and security best practices.' },
              { step: '04', title: 'Launch & Scale', desc: 'Go-live readiness, SRE, observability, and data-driven iteration.' }
            ].map((i) => (
              <div key={i.step} className="rounded-3xl border border-white/10 bg-neutral-900 p-6">
                <div className="text-xs text-neutral-400">{i.step}</div>
                <h3 className="mt-1 text-lg font-semibold">{i.title}</h3>
                <p className="mt-2 text-sm text-neutral-300">{i.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section id="compliance" className="bg-gradient-to-b from-white/5 to-transparent py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-neutral-900 p-6">
              <h2 className="text-3xl font-semibold">Compliance by Design</h2>
              <p className="mt-3 text-neutral-300">
                We build with regulation in mind—privacy, AML, KYC, RG—so scalability never comes at the cost of trust. Our
                playbooks align product, legal, and engineering from day one.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-neutral-300">
                <li>• Jurisdiction mapping & licensing pathways</li>
                <li>• Audit-ready documentation & controls</li>
                <li>• Data governance, retention & observability</li>
                <li>• Vendor due diligence & SLAs</li>
              </ul>
            </div>
            <div className="grid gap-3">
              {[
                'Privacy-first data flows',
                'Real-time monitoring & alerting',
                'Infrastructure as Code & repeatable environments',
                'Pen-test & security hardening support'
              ].map((t) => (
                <div key={t} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-neutral-200">
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold">Selected Case Studies</h2>
            <p className="mt-2 text-neutral-300">Proof of impact across betting and adjacent gaming tech.</p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { h: 'Multi-market Launch', p: 'Global launch of a sports betting provider; localisation, KYC, payments.', img: 'multi-market.png' },
              { h: 'Latency Reduction', p: 'Cut in-play update latency by 38% via edge caching and stream optimization.', img: 'latency.png' },
              { h: 'Risk & RG', p: 'Integrated ML-driven risk scoring and responsible gaming interventions.', img: 'risk-ml.png' }
            ].map((c, idx) => (
              <div key={idx} className="rounded-3xl border border-white/10 bg-neutral-900 p-6">
                <img src={`/images/${c.img}`} alt={c.h} className="h-36 w-full rounded-2xl object-cover" />
                <h3 className="mt-4 text-lg font-semibold">{c.h}</h3>
                <p className="mt-2 text-sm text-neutral-300">{c.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 p-10 text-center">
          <h2 className="text-3xl font-semibold">Ready to build responsibly and scale fast?</h2>
          <p className="mt-2 text-neutral-300">Tell us about your goals. We’ll share a pragmatic plan in the first call.</p>
          <div className="mt-6">
            <a
              href="#contact"
              className="inline-flex items-center rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-neutral-900 hover:opacity-90"
            >
              Book a discovery call
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-white/10 bg-white/5 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold">Contact</h2>
              <p className="mt-3 text-neutral-300">Let’s talk about outcomes, timelines, and architecture. No fluff.</p>
              <div className="mt-6 space-y-3 text-sm text-neutral-300">
                <p><span className="text-neutral-400">Company:</span> Ares Inter GmbH</p>
                <p><span className="text-neutral-400">Email:</span> contact@aresinter.net</p>
		
                <p><span className="text-neutral-400">Address:</span> Birsstr. 320b, CH-4052 Basel, Switzerland</p>
              </div>
            </div>
            <form
  action="https://formspree.io/f/xeorwplq"   // <- DEIN ENDPOINT
  method="POST"
  className="rounded-3xl border border-white/10 bg-neutral-900 p-6 space-y-4"
>
  <div>
    <label className="text-sm text-neutral-300">Name</label>
    <input name="name" required className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-800 px-3 py-2 text-sm outline-none focus:border-emerald-400" />
  </div>
  <div>
    <label className="text-sm text-neutral-300">Work Email</label>
    <input type="email" name="email" required className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-800 px-3 py-2 text-sm outline-none focus:border-emerald-400" />
  </div>
  <div>
    <label className="text-sm text-neutral-300">Project</label>
    <textarea name="message" required className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-800 px-3 py-2 text-sm outline-none focus:border-emerald-400" rows={4} />
  </div>

  {/* optional: Betreff + Redirect + Honeypot */}
  <input type="hidden" name="_subject" value="New inquiry via Ares Inter website" />
  <input type="text" name="_gotcha" style={{ display: 'none' }} /> {/* Spam-Honeypot */}
  {/* <input type="hidden" name="_redirect" value="https://aresinter.ch/thanks" /> */}

  <button type="submit" className="w-full rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-neutral-900 hover:opacity-90">
    Send Inquiry
  </button>
</form>

          </div>
        </div>
      </section>

      {/* Legal */}
      <section id="legal" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-neutral-900 p-6">
            <h3 className="text-xl font-semibold">Privacy Policy (short)</h3>
            <p className="mt-2 text-sm text-neutral-300">
              We process contact data solely to respond to inquiries. No tracking without consent. You can request deletion at any time.
            </p>
            <ul className="mt-3 text-sm text-neutral-300 list-disc pl-5">
              <li>Controller: Ares Inter GmbH</li>
              <li>Purposes: communication, project scoping</li>
              <li>Legal basis: consent / legitimate interests</li>
              <li>Retention: as required for the inquiry</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-neutral-900 p-6">
            <h3 className="text-xl font-semibold">Imprint</h3>
            <p className="mt-2 text-sm text-neutral-300">
              Ares Inter GmbH — Birsstr. 320b, CH-4052 Basel, Switzerland, Company Register CH-270-4003027-3, VAT ID CHE-116.097.951. Contact: contact@aresinter.net
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-neutral-400 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Ares Inter GmbH. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#legal" className="hover:text-white">Privacy</a>
            <a href="#legal" className="hover:text-white">Imprint</a>
          </div>
        </div>
      </footer>
    </div>
  )
}