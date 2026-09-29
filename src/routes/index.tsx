import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Menu, MoveUpRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

import northline from "../assets/northline-auto.jpg";
import oraTable from "../assets/ora-restaurant.jpg";
import formHouse from "../assets/formhouse-realestate.jpg";
import beforeAfter from "../assets/before-after-plumbing.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "S/01 Studio — Websites That Build Business" },
      {
        name: "description",
        content:
          "Independent web design and development for businesses ready to look established, earn trust, and turn visits into enquiries.",
      },
      { property: "og:title", content: "S/01 Studio — Websites That Build Business" },
      {
        property: "og:description",
        content: "Modern websites, designed with intent and built to work hard for your business.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const projects = [
  {
    number: "01",
    name: "Northline Motors",
    industry: "Automotive · Service booking",
    description: "Precision engineering translated into a faster, clearer booking experience.",
    image: northline,
    dimensions: [1536, 1024] as const,
  },
  {
    number: "02",
    name: "Ora Table",
    industry: "Hospitality · Reservations",
    description: "A warm, editorial presence that makes the first taste happen online.",
    image: oraTable,
    dimensions: [1536, 1024] as const,
  },
  {
    number: "03",
    name: "Form House",
    industry: "Real estate · Property search",
    description: "Architecture-led property discovery for considered buyers.",
    image: formHouse,
    dimensions: [1536, 1024] as const,
  },
];

const services = [
  "Website design",
  "Website development",
  "Mobile-first design",
  "Booking & contact systems",
  "Website redesign",
  "SEO & performance foundations",
];

const process = [
  ["01", "Discover", "We get clear on the business, the people it serves, and what the website needs to achieve."],
  ["02", "Design", "I shape the visual direction, structure, and key moments before a line of code is written."],
  ["03", "Build", "The design becomes a fast, responsive website with every interaction considered."],
  ["04", "Launch", "We test, refine, and put the finished site to work for your business."],
];

function BrandMark() {
  return (
    <a href="#top" className="brand-mark" aria-label="S/01 Studio home">
      <span>S/01</span>
      <small>Digital studio</small>
    </a>
  );
}

function ArrowLink({ href, children, inverse = false }: { href: string; children: React.ReactNode; inverse?: boolean }) {
  return (
    <a href={href} className={inverse ? "action-link action-link-inverse" : "action-link"}>
      <span>{children}</span>
      <ArrowRight aria-hidden="true" />
    </a>
  );
}

function BuildStage() {
  return (
    <div className="build-stage" aria-label="Animated sequence of websites being built">
      <div className="browser-bar">
        <span /><span /><span />
        <p>studio / live build</p>
        <b>84%</b>
      </div>
      <div className="build-canvas">
        {projects.map((project, index) => (
          <img
            key={project.name}
            className={`build-frame build-frame-${index + 1}`}
            src={project.image}
            alt={`${project.name} website in progress`}
            width={project.dimensions[0]}
            height={project.dimensions[1]}
          />
        ))}
        <div className="build-grid" aria-hidden="true" />
        <div className="build-cursor" aria-hidden="true"><span>Refine layout</span></div>
        <div className="build-progress" aria-hidden="true"><i /></div>
      </div>
      <div className="build-footer"><span>Designing</span><span>Building</span><span>Refining</span></div>
    </div>
  );
}

function Index() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main id="top" className="overflow-hidden bg-background text-foreground">
      <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
        <BrandMark />
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#about">About</a>
        </nav>
        <a className="header-cta" href="#contact">Start a project <MoveUpRight /></a>
        <details className="mobile-nav">
          <summary aria-label="Open navigation"><Menu /></summary>
          <div><a href="#work">Work</a><a href="#services">Services</a><a href="#process">Process</a><a href="#contact">Start a project</a></div>
        </details>
      </header>

      <section className="hero-section">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Independent web design & development</p>
            <h1>Websites that make businesses <em>look established.</em></h1>
            <div className="hero-bottom">
              <p>I design and build modern websites for businesses ready to earn more trust, make a stronger first impression, and turn visits into action.</p>
              <div className="hero-actions"><ArrowLink href="#work" inverse>View work</ArrowLink><a className="text-link" href="#contact">Start a project <MoveUpRight /></a></div>
            </div>
          </div>
          <BuildStage />
        </div>
        <a className="scroll-cue" href="#work"><ArrowDown /><span>Selected work</span></a>
      </section>

      <section id="work" className="light-section selected-work">
        <div className="section-heading">
          <p className="eyebrow"><span /> Selected work · 2026</p>
          <h2>Built to look good.<br /><em>Designed to work.</em></h2>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project" key={project.name}>
              <div className="project-meta"><span>{project.number}</span><p>{project.industry}</p><MoveUpRight /></div>
              <div className="project-visual">
                <img src={project.image} alt={`${project.name} finished website`} loading="lazy" width={project.dimensions[0]} height={project.dimensions[1]} />
              </div>
              <div className="project-caption"><h3>{project.name}</h3><p>{project.description}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="transformation-section">
        <div className="transformation-copy">
          <p className="eyebrow eyebrow-light"><span /> Website redesign</p>
          <h2>Same business.<br /><em>Different impression.</em></h2>
          <p>Your website shapes how capable, current, and trustworthy your business feels—often before you get the chance to speak.</p>
          <div className="transformation-points"><span>Clearer message</span><span>Better mobile journey</span><span>Stronger calls to action</span></div>
        </div>
        <div className="transformation-visual">
          <img src={beforeAfter} alt="Before and after redesign of a plumbing business website" loading="lazy" width={1792} height={1024} />
          <div className="comparison-sweep" aria-hidden="true" />
        </div>
      </section>

      <section id="services" className="light-section services-section">
        <div className="services-intro">
          <p className="eyebrow"><span /> What I do</p>
          <h2>Design sense,<br /><em>business sense.</em></h2>
          <p>Every decision has a job: explain what you do, build trust, and make the next step obvious.</p>
        </div>
        <div className="service-list">
          {services.map((service, index) => <div key={service}><span>0{index + 1}</span><h3>{service}</h3><ArrowRight /></div>)}
        </div>
      </section>

      <section id="process" className="process-section">
        <div className="process-header"><p className="eyebrow eyebrow-light"><span /> The process</p><h2>Clear from first call<br />to <em>go live.</em></h2></div>
        <div className="process-list">
          {process.map(([number, title, text]) => (
            <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className="light-section value-section">
        <div className="value-quote">
          <Sparkles aria-hidden="true" />
          <p>People decide how they feel about your business <em>before</em> they decide to contact it.</p>
        </div>
        <div className="value-copy">
          <p className="eyebrow"><span /> Why better matters</p>
          <h2>Make the first<br />impression count.</h2>
          <p>A considered website makes your business easier to trust, easier to understand, and easier to choose—on every screen.</p>
          <ArrowLink href="#contact">Build a better presence</ArrowLink>
        </div>
      </section>

      <section id="about" className="about-section">
        <p className="eyebrow eyebrow-light"><span /> About the studio</p>
        <div className="about-grid">
          <h2>Independent by design.<br /><em>Invested by nature.</em></h2>
          <div><p>I’m an independent designer and developer who combines modern visual thinking with practical business functionality.</p><p>That means one point of contact, a thoughtful process, and a website made around your business—not squeezed into a template.</p></div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <p className="eyebrow"><span /> Have a project in mind?</p>
        <h2>Your next website<br />should do more<br /><em>than exist.</em></h2>
        <div className="contact-bottom"><p>Let’s build something that gives your business the presence it deserves.</p><a href="mailto:jaspreetsinghj158@gmail.com">Start a project <MoveUpRight /></a></div>
      </section>

      <footer>
        <BrandMark />
        <div><a href="#work">Work</a><a href="#services">Services</a><a href="#about">About</a></div>
        <div><a href="mailto:jaspreetsinghj158@gmail.com">Email</a><a href="#top">Instagram</a><a href="#top">LinkedIn</a></div>
        <p>© 2026 S/01 Studio</p>
      </footer>
    </main>
  );
}