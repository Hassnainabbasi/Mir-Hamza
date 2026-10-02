import { lazy, Suspense, useEffect, useRef, useState, type FormEvent, type MouseEvent as ReactMouseEvent } from "react";
import { AnimatePresence, motion, useInView } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUp,
  BadgeCheck,
  BarChart3,
  Bot,
  Boxes,
  BrainCircuit,
  Check,
  ChevronRight,
  Code2,
  ContactRound,
  Crown,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  MessageCircle,
  MousePointer2,
  Phone,
  Send,
  Sparkles,
  Smartphone,
  Target,
  TrendingUp,
  Users,
  X,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const portrait = new URL("../src/assets/mir-hamza-portrait.jpeg", import.meta.url).href;
const PortfolioScene = lazy(() => import("@/components/PortfolioScene"));

gsap.registerPlugin(ScrollTrigger);

export default Portfolio;

const services = [
  { number: "01", icon: TrendingUp, title: "Social Media Growth", text: "Platform-native strategies that turn attention into a loyal, engaged community." },
  { number: "02", icon: Target, title: "Paid Advertising", text: "Precision-led Meta and Google campaigns engineered for profitable acquisition." },
  { number: "03", icon: Megaphone, title: "Brand Visibility", text: "Sharper positioning and content systems that make your brand impossible to ignore." },
  { number: "04", icon: BarChart3, title: "Lead Generation", text: "Conversion-focused funnels that transform qualified interest into dependable sales." },
  { number: "05", icon: BadgeCheck, title: "Quality & Relationships", text: "Detail-driven delivery, clear communication, and partnerships built to last." },
];
const digitalServices = [
  { icon: Code2, title: "Website Development", text: "Responsive, polished websites built around your brand, customers, and business goals." },
  { icon: Smartphone, title: "App Development", text: "Mobile app experiences designed to make your product useful, intuitive, and easy to grow." },
  { icon: Boxes, title: "ERP Systems", text: "Connected tools for managing operations, inventory, finance, and essential workflows." },
  { icon: ContactRound, title: "CRM Systems", text: "Organize leads and customer relationships, with follow-up workflows that keep teams moving." },
  { icon: Megaphone, title: "Marketing & Growth", text: "Digital campaigns and content strategies that build visibility and bring in qualified customers." },
  { icon: Bot, title: "AI Chatbots", text: "Conversational assistants that answer questions, support customers, and qualify new leads." },
  { icon: BrainCircuit, title: "AI Integration & Intelligence", text: "Bring AI into your existing tools and workflows to automate tasks and surface useful insights." },
];

const experience = [
  { company: "Vibesroot Marketing Agency", duration: "02 YEARS", role: "Digital Marketing Manager", featured: true },
  { company: "Pakistan Aesthetic", duration: "1.5 YEARS", role: "Social Media Marketing Manager" },
  { company: "Kashees", duration: "08 MONTHS", role: "Social Media Marketing Manager With Video Shoot" },
  { company: "Gulmohar City", duration: "06 MONTHS", role: "Social Media Manager" },
];

const skills = [
  ["Digital Marketing", 96], ["Paid Campaigns", 94], ["Meta Ads", 92], ["Content Strategy", 90],
  ["Leadership", 88], ["Sales", 86], ["Time Management", 94], ["Upwork", 84], ["CIT & DIT", 89],
] as const;

function Portfolio() {
  const heroRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [cursor, setCursor] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".hero-word", { y: 90, opacity: 0, rotateX: -50, stagger: 0.09, duration: 1.1, ease: "power4.out", delay: 0.2 });
      gsap.from(".hero-reveal", { y: 24, opacity: 0, stagger: 0.12, duration: 0.9, ease: "power3.out", delay: 0.7 });
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.from(element, { y: 52, opacity: 0, duration: 0.85, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 84%" } });
      });
      gsap.from(".timeline-fill", { scaleY: 0, transformOrigin: "top", ease: "none", scrollTrigger: { trigger: "#experience", start: "top 55%", end: "bottom 75%", scrub: 0.8 } });
    }, heroRef);
    const move = (event: globalThis.MouseEvent) => setCursor({ x: event.clientX, y: event.clientY });
    window.addEventListener("mousemove", move);
    return () => { context.revert(); window.removeEventListener("mousemove", move); };
  }, []);

  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <main ref={heroRef} className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="cursor-glow pointer-events-none fixed z-[70] hidden h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-3xl md:block" style={{ left: cursor.x, top: cursor.y }} aria-hidden />
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/75 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 md:px-10 lg:px-16">
          <a href="#top" className="group flex items-center gap-3" aria-label="Mir Hamza Bhatti home">
            <span className="grid h-10 w-10 place-items-center border border-primary/50 font-display text-sm text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">MHB</span>
            <span className="hidden font-heading text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground sm:block">Mir Hamza Bhatti</span>
          </a>
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            {[["Expertise", "#expertise"], ["Services", "#services"], ["Experience", "#experience"], ["Skills", "#skills"], ["Contact", "#contact"]].map(([label, href]) => (
              <a key={label} href={href} className="nav-link text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary">{label}</a>
            ))}
          </nav>
          <div className="hidden lg:block"><Button asChild className="h-11 rounded-none border border-primary/40 bg-primary px-6 font-heading text-[11px] uppercase tracking-[0.16em] text-primary-foreground hover:bg-gold-bright"><a href="#contact">Start a project <ArrowDownRight /></a></Button></div>
          <Button size="icon" variant="ghost" className="lg:hidden" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</Button>
        </div>
        <AnimatePresence>{menuOpen && <motion.nav initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-border bg-background px-5 lg:hidden">{[["Expertise", "#expertise"], ["Services", "#services"], ["Experience", "#experience"], ["Skills", "#skills"], ["Contact", "#contact"]].map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)} className="flex items-center justify-between border-b border-border py-5 font-heading text-sm uppercase tracking-[0.14em]">{label}<ChevronRight className="h-4 w-4 text-primary" /></a>)}</motion.nav>}</AnimatePresence>
      </header>

      <section id="top" className="relative min-h-[860px] border-b border-border pt-20 lg:h-[min(940px,100vh)] lg:min-h-[760px]">
        <div className="absolute inset-0 z-0 opacity-90">
          <Suspense fallback={<div className="h-full w-full bg-background" />}><PortfolioScene /></Suspense>
        </div>
        <div className="hero-grid absolute inset-0 z-[1] opacity-40" aria-hidden />
        <div className="relative z-10 mx-auto grid h-full max-w-[1440px] items-center gap-8 px-5 py-14 md:px-10 lg:grid-cols-[1.05fr_.65fr] lg:px-16 lg:py-12">
          <div className="relative pt-8 lg:pt-0">
            <div className="hero-reveal mb-8 flex items-center gap-4"><span className="h-px w-12 bg-primary" /><p className="font-heading text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">Digital growth architect · Karachi / Global</p></div>
            <h1 className="max-w-4xl font-display text-[clamp(3.5rem,8.4vw,8.6rem)] font-medium uppercase leading-[0.78] text-foreground">
              <span className="block overflow-hidden pb-3"><span className="hero-word inline-block">Mir Hamza</span></span>
              <span className="block overflow-hidden pb-4"><span className="hero-word text-outline inline-block">Bhatti</span></span>
            </h1>
            <p className="hero-reveal mt-7 max-w-xl border-l border-cyan/70 pl-5 text-base leading-8 text-muted-foreground md:text-lg">Digital Marketing & Social Media Marketing Expert driving high ROI, global growth, and business scalability.</p>
            <div className="hero-reveal mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 border border-primary/30 bg-surface/70 px-4 py-2 text-xs text-foreground backdrop-blur-md"><Crown className="h-4 w-4 text-primary" /> Alhamdulillah 100+ global clients served</span>
              <span className="inline-flex items-center gap-2 border border-cyan/30 bg-surface/70 px-4 py-2 text-xs text-foreground backdrop-blur-md"><Check className="h-4 w-4 text-cyan" /> 100% satisfied results</span>
            </div>
            <div className="hero-reveal mt-10 flex flex-wrap items-center gap-6">
              <motion.div whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }}><Button asChild className="h-14 rounded-none border border-primary/40 bg-primary px-8 font-heading text-xs uppercase tracking-[0.16em] text-primary-foreground shadow-luxury hover:bg-gold-bright"><a href="#contact">Get marketing done <ArrowRight /></a></Button></motion.div>
              <a href="#expertise" className="group inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.17em] text-muted-foreground transition-colors hover:text-foreground"><span className="grid h-11 w-11 place-items-center rounded-full border border-border transition-colors group-hover:border-cyan"><ArrowDownRight className="h-4 w-4" /></span>Explore expertise</a>
            </div>
          </div>
          <TiltPortrait />
        </div>
        <div className="absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground lg:flex"><MousePointer2 className="h-3.5 w-3.5 text-cyan" /> Scroll to explore</div>
      </section>

      <section className="border-b border-border bg-surface/55">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 divide-x divide-y divide-border md:grid-cols-4 md:divide-y-0">
          <Counter value={100} suffix="+" label="Global clients" /><Counter value={6} suffix="+" label="Years experience" /><Counter value={300} suffix="+" label="Campaigns" /><Counter value={99} suffix="%" label="Satisfaction rate" />
        </div>
      </section>

      <section id="expertise" className="relative px-5 py-28 md:px-10 lg:px-16 lg:py-40">
        <div className="mx-auto max-w-[1312px]">
          <SectionHeading eyebrow="Selected expertise" title={<>Strategy built to <span className="text-primary">perform.</span></>} intro="From the first impression to the final conversion, every move is designed around measurable business outcomes." />
          <div className="mt-16 grid border-l border-t border-border md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => <ServiceCard key={service.title} service={service} index={index} />)}
            <div data-reveal className="flex min-h-72 flex-col justify-between border-b border-r border-border bg-primary p-7 text-primary-foreground md:p-9">
              <Sparkles className="h-8 w-8" /><div><p className="font-display text-3xl uppercase leading-tight">Your next growth story starts here.</p><a href="#contact" className="mt-6 inline-flex items-center gap-3 font-heading text-[11px] font-bold uppercase tracking-[0.16em]">Let’s talk <ArrowRight className="h-4 w-4" /></a></div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="border-y border-border bg-surface/35 px-5 py-28 md:px-10 lg:px-16 lg:py-40">
        <div className="mx-auto max-w-[1312px]">
          <SectionHeading eyebrow="What we deliver" title={<>Digital services for <span className="text-cyan">what’s next.</span></>} intro="From your first website to connected systems and practical AI, get the technology and growth support your business needs." />
          <div className="mt-16 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">
            {digitalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <article key={service.title} data-reveal className="group min-h-64 border-b border-r border-border bg-card p-7 transition-colors hover:bg-card-hover md:p-9">
                  <div className="flex items-start justify-between">
                    <span className="grid h-11 w-11 place-items-center border border-border text-cyan transition-colors group-hover:border-cyan/60 group-hover:bg-cyan/10"><Icon className="h-5 w-5" /></span>
                    <span className="font-display text-xs text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mt-12 font-display text-xl uppercase leading-tight">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{service.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="experience" className="border-y border-border bg-surface/35 px-5 py-28 md:px-10 lg:px-16 lg:py-40">
        <div className="mx-auto grid max-w-[1312px] gap-16 lg:grid-cols-[.65fr_1.35fr]">
          <div className="lg:sticky lg:top-32 lg:self-start"><SectionHeading eyebrow="Career journey" title={<>Experience that <span className="text-cyan">compounds.</span></>} intro="A cross-functional path through growth, quality, sales, and relationship management." /></div>
          <div className="relative pl-8 md:pl-12">
            <div className="absolute bottom-0 left-0 top-0 w-px bg-border" /><div className="timeline-fill absolute left-0 top-0 h-full w-px bg-gradient-luxury" />
            {experience.map((item, index) => (
              <article key={item.company} data-reveal className="group relative border-b border-border py-8 first:pt-0 md:py-10">
                <span className={`absolute -left-[2.28rem] top-10 h-2.5 w-2.5 rotate-45 border md:-left-[3.28rem] ${item.featured ? "border-primary bg-primary shadow-gold" : "border-muted-foreground bg-background"}`} />
                <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-start"><div><p className="mb-3 font-heading text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">{String(index + 1).padStart(2, "0")} / {item.duration}</p><h3 className="font-display text-2xl uppercase leading-tight text-foreground transition-colors group-hover:text-primary md:text-3xl">{item.company}</h3><p className="mt-2 text-sm text-muted-foreground">{item.role}</p></div><ArrowDownRight className="mt-2 hidden h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-cyan md:block" /></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="px-5 py-28 md:px-10 lg:px-16 lg:py-40">
        <div className="mx-auto max-w-[1312px]">
          <SectionHeading eyebrow="Capabilities & foundation" title={<>Skills sharpened by <span className="text-primary">practice.</span></>} intro="A versatile toolkit built for modern marketing teams and ambitious founders." />
          <div className="mt-16 grid gap-16 lg:grid-cols-[1.1fr_.9fr]">
            <div className="grid gap-x-10 gap-y-7 sm:grid-cols-2">{skills.map(([name, value]) => <SkillBar key={name} name={name} value={value} />)}</div>
            <div data-reveal className="border-l border-border pl-7 md:pl-10">
              <p className="mb-8 font-heading text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan">Education</p>
              {[{ place: "Karachi University", study: "Graduation in Arts — ADa" }, { place: "National Boys College", study: "Pre-Engineering" }, { place: "The City Grammar School", study: "Secondary Education" }].map((item, index) => <div key={item.place} className="relative border-t border-border py-6"><span className="absolute -left-10 top-7 font-display text-xs text-primary md:-left-14">0{index + 1}</span><h3 className="font-heading text-base font-semibold text-foreground">{item.place}</h3><p className="mt-1 text-sm text-muted-foreground">{item.study}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative border-t border-border bg-surface/60 px-5 py-28 md:px-10 lg:px-16 lg:py-40">
        <div className="contact-grid absolute inset-0 opacity-30" aria-hidden />
        <div className="relative mx-auto grid max-w-[1312px] gap-16 lg:grid-cols-[.85fr_1.15fr]">
          <div data-reveal><p className="mb-6 font-heading text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">Available for select projects</p><h2 className="font-display text-[clamp(3rem,6vw,6.2rem)] uppercase leading-[0.88]">Let’s build<br /><span className="text-outline">momentum.</span></h2><p className="mt-7 max-w-md text-base leading-8 text-muted-foreground">Tell me where your business is now—and where you want it to go. I’ll help map the smartest path forward.</p>
            <div className="mt-10 space-y-3"><ContactLink icon={MessageCircle} label="WhatsApp" value="0309-3073563" href="https://wa.me/923093073563" /><ContactLink icon={Mail} label="Email" value="hb866395@gmail.com" href="mailto:hb866395@gmail.com" /><ContactLink icon={MapPin} label="Based in" value="Karachi, Pakistan" /></div>
          </div>
          <form data-reveal onSubmit={submitContact} className="border border-border bg-background/80 p-6 backdrop-blur-xl md:p-10">
            <div className="mb-9 flex items-center justify-between"><div><p className="font-display text-2xl uppercase">Start a conversation</p><p className="mt-2 text-sm text-muted-foreground">Usually replies within 24 hours.</p></div><Send className="h-6 w-6 text-cyan" /></div>
            <div className="grid gap-6 sm:grid-cols-2"><Field label="Your name"><Input required name="name" placeholder="Full name" /></Field><Field label="Email address"><Input required type="email" name="email" placeholder="name@company.com" /></Field></div>
            <div className="mt-6"><Field label="Business name"><Input name="business" placeholder="Your company or brand" /></Field></div>
            <div className="mt-6"><Field label="Project brief"><Textarea required name="message" placeholder="What growth challenge can I help solve?" className="min-h-36 resize-none" /></Field></div>
            <Button type="submit" className="mt-7 h-14 w-full rounded-none bg-primary font-heading text-xs uppercase tracking-[0.16em] text-primary-foreground hover:bg-gold-bright">Send project inquiry <ArrowRight /></Button>
          </form>
        </div>
      </section>

      <footer className="border-t border-border px-5 py-10 md:px-10 lg:px-16"><div className="mx-auto flex max-w-[1312px] flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"><div><p className="font-display text-xl uppercase">Mir Hamza Bhatti</p><p className="mt-2 text-xs text-muted-foreground">Digital Marketing & Social Media Marketing Expert</p></div><div className="flex items-center gap-6"><p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">© 2026. All rights reserved.</p><Button asChild size="icon" variant="outline" className="rounded-none"><a href="#top" aria-label="Back to top"><ArrowUp /></a></Button></div></div></footer>

      <Dialog open={sent} onOpenChange={setSent}><DialogContent className="max-w-md rounded-none border-primary/30 bg-background p-9 shadow-luxury"><div className="mb-3 grid h-12 w-12 place-items-center border border-cyan/40 bg-cyan/10 text-cyan"><Check /></div><DialogHeader><DialogTitle className="font-display text-2xl uppercase">Message ready</DialogTitle><DialogDescription className="pt-2 leading-6">Thank you for reaching out. For the fastest response, continue directly on WhatsApp or email.</DialogDescription></DialogHeader><div className="mt-3 grid gap-3 sm:grid-cols-2"><Button asChild className="rounded-none"><a href="https://wa.me/923093073563" target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp</a></Button><Button asChild variant="outline" className="rounded-none"><a href="mailto:hb866395@gmail.com"><Mail /> Email</a></Button></div></DialogContent></Dialog>
    </main>
  );
}

function TiltPortrait() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  function move(event: ReactMouseEvent<HTMLDivElement>) { const rect = event.currentTarget.getBoundingClientRect(); setTilt({ x: ((event.clientY - rect.top) / rect.height - 0.5) * -7, y: ((event.clientX - rect.left) / rect.width - 0.5) * 7 }); }
  return <motion.div className="hero-reveal relative mx-auto w-full max-w-[430px] lg:mr-0" onMouseMove={move} onMouseLeave={() => setTilt({ x: 0, y: 0 })} animate={{ rotateX: tilt.x, rotateY: tilt.y }} transition={{ type: "spring", stiffness: 180, damping: 20 }} style={{ transformPerspective: 1000 }}>
    <div className="absolute -inset-3 border border-primary/15" /><div className="relative aspect-[4/5] overflow-hidden border border-border bg-card shadow-portrait"><img src={portrait} alt="Editorial portrait placeholder for Mir Hamza Bhatti" width={1024} height={1280} className="h-full w-full object-cover grayscale-[15%]" /><div className="absolute inset-0 bg-portrait-overlay" /><div className="absolute bottom-0 left-0 right-0 flex items-end justify-between border-t border-foreground/10 bg-background/65 p-5 backdrop-blur-md"><div><p className="font-heading text-[10px] uppercase tracking-[0.2em] text-cyan">Performance marketer</p><p className="mt-1 font-display text-lg uppercase">Pakistan · Global</p></div><Zap className="h-5 w-5 text-primary" /></div><span className="absolute right-4 top-4 border border-foreground/15 bg-background/50 px-3 py-1 text-[9px] uppercase tracking-[0.16em] text-muted-foreground backdrop-blur"></span></div>
  </motion.div>;
}

function Counter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null); const inView = useInView(ref, { once: true, margin: "-40px" }); const [display, setDisplay] = useState(0);
  useEffect(() => { if (!inView) return; let frame = 0; const start = performance.now(); const tick = (now: number) => { const progress = Math.min((now - start) / 1400, 1); setDisplay(Math.round(value * (1 - Math.pow(1 - progress, 3)))); if (progress < 1) frame = requestAnimationFrame(tick); }; frame = requestAnimationFrame(tick); return () => cancelAnimationFrame(frame); }, [inView, value]);
  return <div ref={ref} className="px-5 py-9 text-center md:py-12"><p className="font-display text-4xl text-primary md:text-5xl">{display}{suffix}</p><p className="mt-2 font-heading text-[9px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">{label}</p></div>;
}

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: React.ReactNode; intro: string }) { return <div data-reveal className="max-w-3xl"><div className="mb-5 flex items-center gap-4"><span className="h-px w-10 bg-primary" /><p className="font-heading text-[10px] font-semibold uppercase tracking-[0.26em] text-primary">{eyebrow}</p></div><h2 className="font-display text-[clamp(2.7rem,5vw,5.4rem)] uppercase leading-[0.92]">{title}</h2><p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground">{intro}</p></div>; }

function ServiceCard({ service, index }: { service: (typeof services)[number]; index: number }) { const Icon = service.icon; return <motion.article data-reveal whileHover={{ y: -7 }} className="group relative min-h-72 overflow-hidden border-b border-r border-border bg-card p-7 transition-colors hover:bg-card-hover md:p-9"><div className="absolute right-0 top-0 h-px w-0 bg-gradient-luxury transition-all duration-500 group-hover:w-full" /><div className="flex items-start justify-between"><span className="grid h-11 w-11 place-items-center border border-border text-cyan transition-colors group-hover:border-cyan/60 group-hover:bg-cyan/10"><Icon className="h-5 w-5" /></span><span className="font-display text-xs text-muted-foreground">0{index + 1}</span></div><div className="mt-16"><h3 className="font-display text-2xl uppercase leading-tight">{service.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{service.text}</p></div></motion.article>; }

function SkillBar({ name, value }: { name: string; value: number }) { return <div data-reveal><div className="mb-3 flex items-center justify-between"><p className="font-heading text-xs font-semibold text-foreground">{name}</p><span className="font-display text-xs text-primary">{value}%</span></div><div className="h-px bg-border"><motion.div initial={{ width: 0 }} whileInView={{ width: `${value}%` }} viewport={{ once: true }} transition={{ duration: 1.1, ease: "easeOut" }} className="h-px bg-gradient-luxury" /></div></div>; }
function ContactLink({ icon: Icon, label, value, href }: { icon: typeof Phone; label: string; value: string; href?: string }) { const content = <><span className="grid h-11 w-11 place-items-center border border-border text-cyan"><Icon className="h-4 w-4" /></span><span><span className="block text-[9px] uppercase tracking-[0.18em] text-muted-foreground">{label}</span><span className="mt-1 block text-sm text-foreground">{value}</span></span></>; return href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="group flex items-center gap-4">{content}</a> : <div className="flex items-center gap-4">{content}</div>; }
function Field({ label, children }: { label: string; children: React.ReactNode }) { return <label className="block"><span className="mb-2 block font-heading text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">{label}</span>{children}</label>; }

