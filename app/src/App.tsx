import { useEffect, useMemo, useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Blocks,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  CircleDot,
  Code2,
  Database,
  Github,
  Mail,
  MapPin,
  Menu,
  Network,
  ServerCog,
  ShieldCheck,
  Workflow,
  X,
} from 'lucide-react'

type Project = {
  status: string
  title: string
  summary: string
  proof: string
  tags: string[]
  href?: string
  linkLabel?: string
  tone: 'signal' | 'steel' | 'ember' | 'violet'
}

const projects: Project[] = [
  {
    status: 'Private alpha · active build',
    title: 'Zero Handoff',
    summary:
      'An owner-controlled operations system that captures failed executions, preserves context, proposes exact repairs, requires explicit authorization, and records verification evidence.',
    proof:
      'A complete vertical slice has been live-certified on an isolated AWS deployment with hardened containers, single-use approvals, separate verification authority, and immutable evidence.',
    tags: ['TypeScript', 'Docker', 'AWS', 'Controlled execution'],
    tone: 'signal',
  },
  {
    status: 'Client deployment · archived operational evidence',
    title: 'Commerce & Fulfillment Engineering',
    summary:
      'Delivered a custom merchant checkout and order workflow connecting direct-to-merchant payment handoffs, notification-based order matching, and shipping preparation.',
    proof:
      'Archived WooCommerce records (June 2025–February 2026): 7,559 orders, including 6,746 completed-status orders with $1.23M in recorded order value. Order statuses are not independent proof of settled payments.',
    tags: ['WooCommerce', 'Workflow automation', 'Shipping integrations', 'Payment handoffs'],
    href: '/work#commerce',
    linkLabel: 'Read the case study',
    tone: 'signal',
  },
  {
    status: 'MVP · operations control plane',
    title: 'PluginOps',
    summary:
      'A WordPress and WooCommerce plugin operations control plane for artifact intake, scanning, controlled work orders, export readiness, documentation, and audited release packaging.',
    proof:
      'Dockerized web, API, worker, and Postgres services with export gates, diff-based work orders, security documentation, CLI workflows, and explicit MVP limitations.',
    tags: ['Next.js', 'Python', 'Postgres', 'Docker'],
    href: 'https://github.com/MEF-works/pluginops-pro',
    linkLabel: 'Inspect repository',
    tone: 'steel',
  },
  {
    status: 'Public developer tool',
    title: 'repo-recon',
    summary:
      'A zero-config CLI that gives AI systems visual and behavioral context for a running application, not just a static view of its source code.',
    proof:
      'Detects modern frameworks, discovers routes, captures screenshots and DOM metadata, records runtime errors and API activity, and produces a portable context packet.',
    tags: ['Node.js', 'Puppeteer', 'CLI', 'Runtime analysis'],
    href: 'https://github.com/MEF-works/repo-recon',
    linkLabel: 'Inspect repository',
    tone: 'ember',
  },
  {
    status: 'Operator tooling · active',
    title: 'MEF CLI',
    summary:
      'A TypeScript command surface for infrastructure operations, project state, deployment, merchant intelligence, scraping, institutional data collection, and review workflows.',
    proof:
      'Includes configuration auditing, browser escalation, server commands, structured documentation, smoke tests, and multiple operational namespaces used across a private project network.',
    tags: ['TypeScript', 'Playwright', 'Supabase', 'Operations'],
    tone: 'violet',
  },
]

const capabilities = [
  {
    icon: ServerCog,
    title: 'Systems & cloud',
    body: 'Linux servers, Dockerized services, reverse proxies, deployment workflows, monitoring, DNS, TLS, storage, and incident recovery.',
  },
  {
    icon: Code2,
    title: 'Software delivery',
    body: 'TypeScript, React, Node.js, Python, APIs, databases, PWAs, WordPress and WooCommerce integrations, and operator-facing tools.',
  },
  {
    icon: Workflow,
    title: 'Operational architecture',
    body: 'Approval boundaries, workflow state, evidence capture, failure handling, audit trails, repeatable operations, and practical automation.',
  },
  {
    icon: BrainCircuit,
    title: 'AI-assisted engineering',
    body: 'Research, implementation, review, testing, debugging, and documentation accelerated by AI while architectural and deployment accountability stays human-owned.',
  },
]

const evolution = [
  ['Web & commerce', 'Websites, ecommerce operations, SEO, funnels, custom WordPress and WooCommerce work.'],
  ['Applications & integrations', 'Full-stack applications, APIs, payment integrations, dashboards, databases, and automation.'],
  ['Infrastructure & operations', 'Docker, Linux, reverse proxies, deployment systems, monitoring, incident recovery, and operator tooling.'],
  ['Controlled systems', 'Authorization boundaries, evidence-preserving workflows, agent operations, and resilient execution architecture.'],
]

function BrandMark() {
  return (
    <a className="brand" href="/" aria-label="MEnterprise Firm Inc. home">
      <span className="brand-symbol" aria-hidden="true">
        <span>M</span>
      </span>
      <span className="brand-copy">
        <strong>MEnterprise</strong>
        <small>Firm Inc.</small>
      </span>
    </a>
  )
}

function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <BrandMark />
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="/#commerce">Commercial work</a>
          <a href="/work">Selected work</a>
          <a href="/about">About</a>
          <a className="nav-cta" href="mailto:mike@mefworks.com?subject=MEnterprise%20Firm%20Inquiry">
            Start a conversation <ArrowUpRight size={15} />
          </a>
        </nav>
        <button
          className="menu-button"
          type="button"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <a href="/#commerce">Commercial work</a>
          <a href="/work">Selected work</a>
          <a href="/about">About</a>
          <a href="mailto:mike@mefworks.com?subject=MEnterprise%20Firm%20Inquiry">Start a conversation</a>
        </nav>
      )}
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <BrandMark />
          <p>Privately owned software products and applied systems engineering.</p>
        </div>
        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/work">Selected work</a>
          <a href="https://github.com/MEF-works" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://builtbymef.pro" target="_blank" rel="noreferrer">BuiltByMEF</a>
        </div>
        <div className="footer-contact">
          <span>Warren, Ohio</span>
          <a href="mailto:mike@mefworks.com">mike@mefworks.com</a>
          <span>Remote and relocation opportunities</span>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} MEnterprise Firm Inc.</span>
        <span>Founded December 3, 2020</span>
      </div>
    </footer>
  )
}

function StatusRail() {
  const items = [
    ['Founded', '2020'],
    ['Delivered work', 'Commercial operations'],
    ['Current build', 'Zero Handoff'],
    ['Availability', 'Projects + remote roles'],
  ]

  return (
    <div className="status-rail" aria-label="Company status">
      {items.map(([label, value]) => (
        <div className="status-item" key={label}>
          <span>{label}</span>
          <strong>{value}</strong>
        </div>
      ))}
    </div>
  )
}

function ControlVisual() {
  const steps = ['Failure', 'Context', 'Proposal', 'Approval', 'Execute', 'Verify']
  return (
    <div className="control-visual" aria-label="Zero Handoff controlled execution flow">
      <div className="visual-glow" aria-hidden="true" />
      <div className="visual-head">
        <span className="eyebrow-dot"><CircleDot size={14} /> Live system model</span>
        <span className="visual-state">OWNER CONTROLLED</span>
      </div>
      <div className="execution-core">
        <div className="core-ring core-ring-one" />
        <div className="core-ring core-ring-two" />
        <div className="core-center">
          <ShieldCheck size={30} />
          <strong>Exact authority</strong>
          <span>One approved action</span>
        </div>
      </div>
      <div className="flow-list">
        {steps.map((step, index) => (
          <div className="flow-step" key={step}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{step}</strong>
            {index < steps.length - 1 && <ChevronRight size={14} />}
          </div>
        ))}
      </div>
      <div className="visual-foot">
        <span><Check size={14} /> Single-use approval</span>
        <span><Check size={14} /> Immutable evidence</span>
      </div>
    </div>
  )
}

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <article className={`project-card project-${project.tone}${featured ? ' project-featured' : ''}`}>
      <div className="project-topline">
        <span>{project.status}</span>
        <Blocks size={18} />
      </div>
      <h3>{project.title}</h3>
      <p className="project-summary">{project.summary}</p>
      <div className="project-proof">
        <span>What is demonstrated</span>
        <p>{project.proof}</p>
      </div>
      <div className="tag-list">
        {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
      </div>
      {project.href ? (
        <a className="project-link" href={project.href} target={project.href.startsWith("http") ? "_blank" : undefined} rel={project.href.startsWith("http") ? "noreferrer" : undefined}>
          {project.linkLabel ?? 'View project'} <ArrowUpRight size={16} />
        </a>
      ) : (
        <span className="project-link project-link-muted">Private evidence available for qualified review</span>
      )}
    </article>
  )
}

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero-section">
          <div className="hero-grid shell">
            <div className="hero-copy">
              <div className="kicker"><span /> Software products & applied systems engineering</div>
              <h1>
                Complex problems.<br />
                <em>Systems that work.</em>
              </h1>
              <p className="hero-lead">
                MEnterprise Firm Inc. designs, integrates, and operates practical software systems, from commerce and fulfillment workflows to backend services, cloud infrastructure, and automation. Clear decisions, reliable execution, and accountability beyond launch.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="mailto:mike@mefworks.com?subject=Engineering%20Project%20Inquiry">Discuss a project <ArrowRight size={17} /></a>
                <a className="button button-secondary" href="#commerce">See commercial work</a>
              </div>
              <div className="hero-note">
                <ShieldCheck size={18} />
                <span>Understand the problem. Build what matters. Own the outcome.</span>
              </div>
            </div>
            <ControlVisual />
          </div>
          <div className="shell"><StatusRail /></div>
        </section>

        <section className="section commerce-section" id="commerce">
          <div className="shell">
            <div className="section-heading split-heading">
              <div>
                <span className="section-kicker">Delivered commercial engineering</span>
                <h2>Real requirements. Real operational use.</h2>
              </div>
              <p>
                A working business system has to do more than pass a demo. It needs to carry orders, support people doing the work, and make consequential decisions visible.
              </p>
            </div>
            <div className="commerce-grid">
              <div className="commerce-story">
                <span className="status-pill"><CircleDot size={13} /> Merchant deployment · archived records</span>
                <h3>Checkout, fulfillment, and judgment in the right places.</h3>
                <p>
                  A merchant needed a checkout flow without conventional payment processor integrations. I engineered the WooCommerce workflow around direct-to-merchant payment handoffs, order matching from notification emails, and shipping preparation through customized third-party integrations.
                </p>
                <p>
                  The critical boundary was intentional: a payment notification could advance the workflow, but the merchant verified actual receipt of funds in their own account before completing orders and releasing fulfillment.
                </p>
                <a className="text-link" href="/work#commerce">See the engineering case study <ArrowRight size={16} /></a>
              </div>
              <div className="commerce-evidence">
                <div className="architecture-header"><span>Archived WooCommerce data</span><span>JUN 2025 – FEB 2026</span></div>
                <div className="commerce-metrics">
                  <div><strong>7,559</strong><span>Total recorded orders</span></div>
                  <div><strong>6,746</strong><span>Completed-status orders</span></div>
                  <div><strong>$1.23M</strong><span>Completed-status order value</span></div>
                </div>
                <p className="commerce-caveat">
                  These are application-recorded order figures, not independently verified bank settlements. Project architecture and sanitized supporting evidence are available for qualified review.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section focus-section" id="focus">
          <div className="shell">
            <div className="section-heading split-heading">
              <div>
                <span className="section-kicker">Current focus</span>
                <h2>Zero Handoff</h2>
              </div>
              <p>
                A controlled operations layer for situations where software or agents can diagnose a problem, but ownership of the repair must remain with a human operator.
              </p>
            </div>
            <div className="focus-grid">
              <div className="focus-story">
                <span className="status-pill"><CircleDot size={13} /> Private alpha · live-certified vertical slice</span>
                <h3>Automation should not quietly inherit authority.</h3>
                <p>
                  Zero Handoff separates detection, diagnosis, approval, execution, verification, and evidence. The system can help determine what should happen next without deciding that it has permission to do it.
                </p>
                <div className="principle-grid">
                  <div><strong>01</strong><span>Preserve the original failure context.</span></div>
                  <div><strong>02</strong><span>Propose an exact repair, not a vague intention.</span></div>
                  <div><strong>03</strong><span>Require single-use owner authorization.</span></div>
                  <div><strong>04</strong><span>Verify separately and retain evidence.</span></div>
                </div>
                <a className="text-link" href="/work#zero-handoff">Read the project overview <ArrowRight size={16} /></a>
              </div>
              <div className="architecture-card">
                <div className="architecture-header">
                  <span>Execution boundary</span>
                  <span>PROVEN LOOP</span>
                </div>
                <div className="architecture-stack">
                  {[
                    ['Observe', 'Failure remains an execution event'],
                    ['Diagnose', 'Immutable context snapshot created'],
                    ['Authorize', 'Exact repair approved once'],
                    ['Execute', 'Lease and authority remain explicit'],
                    ['Verify', 'Separate authorization records evidence'],
                  ].map(([title, detail], index) => (
                    <div className="architecture-row" key={title}>
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <div><strong>{title}</strong><p>{detail}</p></div>
                      <Check size={17} />
                    </div>
                  ))}
                </div>
                <div className="architecture-footer">
                  <span><Database size={17} /> Immutable evidence</span>
                  <span><Network size={17} /> Explicit state transitions</span>
                  <span><ShieldCheck size={17} /> Hardened deployment</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section work-preview">
          <div className="shell">
            <div className="section-heading split-heading">
              <div>
                <span className="section-kicker">Selected engineering work</span>
                <h2>Systems with a job to do.</h2>
              </div>
              <div className="heading-action">
                <p>Client-delivered workflows, public developer tools, and current products. Each project is presented with its real scope and evidence.</p>
                <a className="text-link" href="/work">View all selected work <ArrowRight size={16} /></a>
              </div>
            </div>
            <div className="project-grid">
              {projects.slice(1, 4).map((project) => <ProjectCard project={project} key={project.title} />)}
            </div>
          </div>
        </section>

        <section className="section capability-section">
          <div className="shell">
            <div className="section-heading narrow-heading">
              <span className="section-kicker">What the company can support</span>
              <h2>Across the boundary between software and operations.</h2>
              <p>
                The work is strongest where an application must connect to real infrastructure, real users, and real operational consequences.
              </p>
            </div>
            <div className="capability-grid">
              {capabilities.map(({ icon: Icon, title, body }) => (
                <article className="capability-card" key={title}>
                  <div className="capability-icon"><Icon size={21} /></div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section founder-section" id="about">
          <div className="shell founder-grid">
            <div className="founder-portrait" aria-label="Founder profile graphic">
              <div className="portrait-grid" aria-hidden="true" />
              <div className="portrait-monogram">MF</div>
              <div className="portrait-label">
                <span>Founder / Applied Systems Engineer</span>
                <strong>Michael Fluet</strong>
              </div>
            </div>
            <div className="founder-copy">
              <span className="section-kicker">Founder briefing</span>
              <h2>From physical systems to software people depend on.</h2>
              <p>
                Before software, Michael spent nearly two decades troubleshooting commercial doors and mechanical systems where the outcome had to work in the real world. He brought that same approach to paid web and commerce projects, integrations, backend services, cloud infrastructure, and operational automation.
              </p>
              <p>
                His approach is straightforward: understand the constraints, choose proportionate solutions, test assumptions, communicate clearly, and take responsibility for delivery. AI accelerates research and implementation, but it does not replace that judgment.
              </p>
              <div className="founder-actions">
                <a className="button button-primary" href="/about">Read the full briefing <ArrowRight size={17} /></a>
                <a className="icon-link" href="https://github.com/MEF-works" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
              </div>
            </div>
          </div>
        </section>

        <section className="section method-section">
          <div className="shell method-grid">
            <div>
              <span className="section-kicker">Human + AI collaboration</span>
              <h2>Acceleration without outsourced accountability.</h2>
              <p>
                AI helps explore approaches, implement, review, debug, and document at greater speed. Architecture, validation, client communication, and deployment decisions remain human responsibilities.
              </p>
            </div>
            <div className="responsibility-panel">
              <div className="responsibility-column">
                <span>AI accelerates</span>
                {['Research unfamiliar systems', 'Explore implementation paths', 'Review and test code', 'Trace failures and document work'].map((item) => (
                  <div key={item}><BrainCircuit size={16} /> {item}</div>
                ))}
              </div>
              <div className="responsibility-divider" />
              <div className="responsibility-column responsibility-human">
                <span>Human accountability</span>
                {['Define the actual problem', 'Choose architecture and boundaries', 'Validate behavior and security', 'Own deployment and consequences'].map((item) => (
                  <div key={item}><ShieldCheck size={16} /> {item}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section contact-section">
          <div className="shell contact-panel">
            <div>
              <span className="section-kicker">Available for selected work</span>
              <h2>Have a system to build, improve, or untangle?</h2>
              <p>
                I take on focused engineering work where reliability, clear thinking, and follow-through matter. Open to client projects, technical partnerships, and remote engineering roles.
              </p>
            </div>
            <div className="contact-actions">
              <a className="button button-light" href="mailto:mike@mefworks.com?subject=Engineering%20Project%20Inquiry">Discuss a project <Mail size={17} /></a>
              <a className="button button-ghost" href="mailto:mike@mefworks.com?subject=Engineering%20Role%20Inquiry">Discuss a role <ArrowUpRight size={17} /></a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero shell">
          <span className="section-kicker">About the company & founder</span>
          <h1>Practical engineering. Ownership from problem to outcome.</h1>
          <p>
            Founded in 2020, MEnterprise Firm Inc. builds software products and delivers technical work rooted in operational needs. The experience spans client commerce workflows, applications and integrations, cloud operations, and owner-controlled automation.
          </p>
        </section>

        <section className="section about-company-section">
          <div className="shell about-two-column">
            <div>
              <span className="section-kicker">MEnterprise Firm Inc.</span>
              <h2>Built to own the work and understand the system.</h2>
            </div>
            <div className="prose-block">
              <p>
                The company began as a vehicle for web, ecommerce, and digital business work. Each real deployment exposed the next layer of the problem: integrations, payments, data, automation, infrastructure, monitoring, deployment, and the operating controls required to keep systems useful after launch.
              </p>
              <p>
                Today, MEnterprise develops owned software products and selected client systems. The standard is practical: understand the business constraint, build what is needed, validate behavior, and leave operators with a system they can actually use. Project write-ups distinguish commercial deployments, working tools, and experiments so readers can evaluate the evidence directly.
              </p>
            </div>
          </div>
        </section>

        <section className="section evolution-section">
          <div className="shell">
            <div className="section-heading narrow-heading">
              <span className="section-kicker">Technical progression</span>
              <h2>The path has been cumulative.</h2>
            </div>
            <div className="evolution-list">
              {evolution.map(([title, body], index) => (
                <article key={title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div><h3>{title}</h3><p>{body}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section founder-long-section">
          <div className="shell founder-long-grid">
            <div className="founder-badge">
              <span>MF</span>
              <strong>Michael Fluet</strong>
              <small>Founder & Applied Systems Engineer</small>
              <div><MapPin size={15} /> Warren, Ohio</div>
              <div><BriefcaseBusiness size={15} /> Remote + relocation</div>
            </div>
            <div className="prose-block founder-prose">
              <span className="section-kicker">Founder briefing</span>
              <h2>Dependability isn't a feature. It's how I work.</h2>
              <p>
                I'm the founder of MEnterprise Firm Inc. and an applied systems engineer based in Warren, Ohio. For nearly two decades before software, I worked with commercial doors, mechanical troubleshooting, and field operations. That taught me to understand a system before changing it, communicate plainly, and be accountable when something needs to work. I carried those habits into paid web and commerce projects, backend applications, integrations, cloud infrastructure, and automation.
              </p>
              <p>
                I use AI as an engineering collaborator to explore alternatives, accelerate implementation, challenge assumptions, and improve the feedback loop. But I take ownership of the problem definition, the architecture we choose, the testing, the integrations, and the consequences of shipping. When something is uncertain, I would rather investigate it than pretend otherwise.
              </p>
              <p>
                I enjoy difficult problems and believe good engineering is often about finding the simpler solution that still respects the real constraints. I'm easy to work with, direct about tradeoffs, and serious about follow-through. I'm open to the right engineering role, client project, or technical partnership. If there's a useful problem to solve, I'd be glad to talk.
              </p>
            </div>
          </div>
        </section>

        <section className="section ai-method-section">
          <div className="shell">
            <div className="section-heading split-heading">
              <div>
                <span className="section-kicker">How AI fits into the work</span>
                <h2>More iterations. Faster feedback. Same accountability.</h2>
              </div>
              <p>
                AI has not removed the need to understand the system. It has made it possible to work through more engineering problems, test more assumptions, and receive feedback at a much higher frequency.
              </p>
            </div>
            <div className="ai-method-grid">
              <div className="ai-method-card">
                <BrainCircuit size={25} />
                <h3>Used for acceleration</h3>
                <ul>
                  <li>Technical research and unfamiliar-system orientation</li>
                  <li>Implementation assistance and alternative approaches</li>
                  <li>Code review, testing, debugging, and documentation</li>
                  <li>Adversarial evaluation of assumptions and designs</li>
                </ul>
              </div>
              <div className="ai-method-card human-card">
                <ShieldCheck size={25} />
                <h3>Retained as human responsibility</h3>
                <ul>
                  <li>Problem definition and commercial context</li>
                  <li>Architecture, security boundaries, and tradeoffs</li>
                  <li>Validation of behavior, limitations, and claims</li>
                  <li>Deployment decisions and production consequences</li>
                </ul>
              </div>
            </div>
            <div className="assessment-teaser">
              <div>
                <span>For future due diligence</span>
                <h3>A candid AI work-history assessment is being prepared.</h3>
                <p>
                  ChatGPT and Claude will receive the same prompt and be asked to identify demonstrated strengths, weaknesses, knowledge gaps, and areas that remain professionally unproven. The reports will be optional, brief, and published as context rather than endorsement.
                </p>
              </div>
              <span className="teaser-state">COMING AFTER EVIDENCE REVIEW</span>
            </div>
          </div>
        </section>

        <section className="section about-cta-section">
          <div className="shell contact-panel">
            <div>
              <span className="section-kicker">Judge the work directly</span>
              <h2>Review selected systems and the code that can be made public.</h2>
            </div>
            <div className="contact-actions">
              <a className="button button-light" href="/work">Selected work <ArrowRight size={17} /></a>
              <a className="button button-ghost" href="https://github.com/MEF-works" target="_blank" rel="noreferrer">GitHub <Github size={17} /></a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function WorkPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero shell">
          <span className="section-kicker">Selected engineering work</span>
          <h1>Projects chosen for what they demonstrate, not how many were built.</h1>
          <p>
            This collection emphasizes operational architecture, deployable systems, failure handling, automation, and tools that connect software to real work. Public code is linked where appropriate. Private systems are described with their maturity and proof boundaries intact.
          </p>
        </section>

        <section className="section work-page-section">
          <div className="shell work-page-grid">
            {projects.map((project, index) => (
              <div id={index === 0 ? 'zero-handoff' : undefined} key={project.title}>
                <ProjectCard project={project} featured={index === 0} />
              </div>
            ))}
          </div>
        </section>

        <section className="section evidence-section">
          <div className="shell evidence-panel">
            <div>
              <span className="section-kicker">Evidence standard</span>
              <h2>Every featured claim should point somewhere.</h2>
            </div>
            <div className="evidence-list">
              {[
                ['Code', 'Repository history, architecture, implementation, and documented limitations.'],
                ['Deployment', 'Live environments, container configuration, infrastructure, and operational state.'],
                ['Behavior', 'Tests, demonstrations, logs, screenshots, and repeatable workflows.'],
                ['Outcome', 'Customer use, operating value, production incidents resolved, or measurable business activity.'],
              ].map(([title, detail], index) => (
                <div key={title}><span>{String(index + 1).padStart(2, '0')}</span><div><strong>{title}</strong><p>{detail}</p></div></div>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section">
          <div className="shell contact-panel">
            <div>
              <span className="section-kicker">Technical review</span>
              <h2>Need deeper context on a private build?</h2>
              <p>Sanitized architecture, demonstrations, and supporting evidence can be discussed for legitimate employment, partnership, or program review.</p>
            </div>
            <div className="contact-actions">
              <a className="button button-light" href="mailto:mike@mefworks.com?subject=Technical%20Project%20Review">Request context <Mail size={17} /></a>
              <a className="button button-ghost" href="https://github.com/MEF-works" target="_blank" rel="noreferrer">Public GitHub <Github size={17} /></a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function NotFoundPage() {
  return (
    <>
      <Header />
      <main className="not-found shell">
        <span>404</span>
        <h1>This route is not part of the system.</h1>
        <p>The page may have moved, been retired, or never existed.</p>
        <a className="button button-primary" href="/">Return home <ArrowRight size={17} /></a>
      </main>
      <Footer />
    </>
  )
}

function App() {
  const path = useMemo(() => window.location.pathname.replace(/\/+$/, '') || '/', [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [path])

  if (path === '/') return <HomePage />
  if (path === '/about') return <AboutPage />
  if (path === '/work') return <WorkPage />
  return <NotFoundPage />
}

export default App
