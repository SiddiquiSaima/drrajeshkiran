import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import doctorAsset from "@/assets/dr-rajesh-kiran.png.asset.json";
const doctorImg = doctorAsset.url;
import {
  Phone, MessageCircle, MapPin, Mail, Instagram, Calendar, ChevronDown,
  Stethoscope, Activity, Droplets, HeartPulse, Microscope, Pill, ShieldCheck,
  Award, GraduationCap, UserCheck, Clock, ArrowRight, CheckCircle2, Quote, Menu, X,
  Star, Languages, AlertTriangle, FileText, Upload, Video, BookOpen, Calculator,
  Users, Building2, Navigation,
} from "lucide-react";

const PHONE = "+918088276359";
const PHONE_DISPLAY = "+91 80882 76359";
const EMAIL = "kvrajeshkiran198@gmail.com";
const INSTAGRAM = "drrk_kidneydoctor";

const DEFAULT_WA_MSG =
  "Hello Dr. Rajesh Kiran K V Clinic, I would like to book an appointment for kidney consultation.";

const waLink = (msg: string = DEFAULT_WA_MSG) =>
  `https://wa.me/918088276359?text=${encodeURIComponent(msg)}`;

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=Dr+Rajesh+Kiran+Nephrologist+Bengaluru+reviews";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Rajesh Kiran K V | Expert Kidney Care | Nephrologist in Bangalore" },
      {
        name: "description",
        content:
          "Consult Dr. Rajesh Kiran K V, Consultant Nephrologist and Kidney Transplant Physician in Bangalore. Expert care for CKD, dialysis, kidney transplant, hypertension, diabetic kidney disease, and kidney-related conditions.",
      },
      { property: "og:title", content: "Dr. Rajesh Kiran K V | Expert Kidney Care | Nephrologist in Bangalore" },
      {
        property: "og:description",
        content:
          "Consultant Nephrologist & Kidney Transplant Physician — 12+ years experience. CKD, dialysis, transplant, hypertension. Fortis Hospital Yeshwanthpur & multiple clinics.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Physician",
          name: "Dr. Rajesh Kiran K V",
          medicalSpecialty: ["Nephrology", "Kidney Transplantation"],
          jobTitle: "Consultant Nephrologist and Kidney Transplant Physician",
          telephone: PHONE,
          email: EMAIL,
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5",
            reviewCount: "5",
          },
          areaServed: "Bengaluru",
        }),
      },
    ],
  }),
  component: Index,
});

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#reviews", label: "Reviews" },
  { href: "#locations", label: "Consult At" },
  { href: "#appointment", label: "Appointment" },
  { href: "#guidance", label: "Guidance" },
  { href: "#faq", label: "FAQ" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <GoogleReviews />
        <Stats />
        <About />
        <Services />
        <Locations />
        <WhenToConsult />
        <BeforeVisit />
        <RedFlags />
        <Guidance />
        <RiskAssessment />
        <Appointment />
        <Telehealth />
        <Blog />
        <FAQ />
      </main>
      <Footer />
      <FloatingActions />
      <MobileStickyBar />
    </div>
  );
}

/* ---------- Header ---------- */
function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-[var(--shadow-soft)]"
          : "bg-background/70 backdrop-blur-sm"
      }`}
    >
      <div className="container-x flex items-center justify-between py-3 md:py-4">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground shadow-[var(--shadow-soft)]">
            <Stethoscope className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className="block font-display font-bold text-[15px] md:text-base text-primary">
              Dr. Rajesh Kiran K V
            </span>
            <span className="block text-[11px] md:text-xs text-muted-foreground">
              Expert Kidney Care • Nephrologist & Transplant Physician
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-primary hover:border-primary/40 transition"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
          <a
            href="#appointment"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:opacity-90 transition shadow-[var(--shadow-soft)]"
          >
            <Calendar className="h-4 w-4" /> Book Appointment
          </a>
        </div>

        <button
          aria-label="Menu"
          className="lg:hidden grid h-10 w-10 place-items-center rounded-xl border border-border bg-card text-primary"
          onClick={() => setOpen((s) => !s)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-x py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-primary-soft"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-semibold text-primary"
              >
                <Phone className="h-4 w-4" /> Call
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------- Hero ---------- */
const HERO_BADGES = [
  "Chronic Kidney Disease (CKD)",
  "Dialysis Care",
  "Kidney Transplantation",
  "Hypertension Management",
  "Glomerular Diseases",
];

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1100px 600px at 90% -10%, oklch(0.95 0.04 175 / 0.55), transparent 60%), radial-gradient(900px 500px at -10% 10%, oklch(0.94 0.05 250 / 0.6), transparent 60%), linear-gradient(180deg, #fff, var(--background))",
        }}
      />
      <div className="container-x pt-10 md:pt-16 pb-14 md:pb-20">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
          <div>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Expert Kidney Care • Bangalore
            </span>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.05] text-primary">
              Dr. Rajesh Kiran K V
            </h1>
            <p className="mt-3 text-base md:text-lg font-semibold text-foreground/80">
              Consultant Nephrologist &amp; Kidney Transplant Physician
            </p>
            <p className="mt-1 text-sm md:text-base text-accent font-semibold tracking-wide">
              Expert Kidney Care
            </p>

            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <GraduationCap className="h-[18px] w-[18px] text-primary" />
                <span>MBBS, MD (Internal Medicine), DrNB (Nephrology)</span>
              </li>
              <li className="flex items-center gap-2">
                <Award className="h-[18px] w-[18px] text-primary" />
                <span>12+ years of clinical experience</span>
              </li>
              <li className="flex items-center gap-2">
                <Building2 className="h-[18px] w-[18px] text-primary" />
                <span>Currently at Fortis Hospital, Yeshwanthpur</span>
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {HERO_BADGES.map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-1.5 rounded-full bg-card border border-border px-3 py-1.5 text-xs font-medium text-foreground/80 shadow-[var(--shadow-soft)]"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-accent" /> {b}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#appointment"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elevated)] hover:opacity-95 transition"
              >
                <Calendar className="h-4 w-4" /> Book Appointment
              </a>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-primary hover:border-primary/40 transition"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-soft)] hover:opacity-90 transition"
              >
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div
                aria-hidden
                className="absolute -inset-6 rounded-[2.5rem] -z-10"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.85 0.07 220 / 0.6), oklch(0.9 0.08 175 / 0.5))",
                  filter: "blur(8px)",
                }}
              />
              <div className="overflow-hidden rounded-[2rem] bg-card shadow-[var(--shadow-elevated)] border border-border">
                <img
                  src={doctorImg}
                  alt="Dr. Rajesh Kiran K V, Consultant Nephrologist and Kidney Transplant Physician, Bangalore"
                  width={1024}
                  height={1280}
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="hidden sm:flex absolute -left-4 bottom-8 items-center gap-3 rounded-2xl bg-card border border-border px-4 py-3 shadow-[var(--shadow-elevated)]">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-soft text-accent">
                  <Star className="h-5 w-5 fill-current" />
                </span>
                <div className="leading-tight">
                  <div className="text-xs text-muted-foreground">Google Rating</div>
                  <div className="text-sm font-semibold text-primary">5.0 / 5 Stars</div>
                </div>
              </div>
              <div className="hidden sm:flex absolute -right-4 top-10 items-center gap-3 rounded-2xl bg-card border border-border px-4 py-3 shadow-[var(--shadow-elevated)]">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary-soft text-primary">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div className="leading-tight">
                  <div className="text-xs text-muted-foreground">Specialty</div>
                  <div className="text-sm font-semibold text-primary">Nephrology & Transplant</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const items = [
    { icon: Award, label: "12+ Years Experience" },
    { icon: UserCheck, label: "Kidney Transplant Physician" },
    { icon: Building2, label: "Fortis Hospital, Yeshwanthpur" },
    { icon: Star, label: "5.0 Google Rating" },
  ];
  return (
    <section className="border-y border-border bg-card/60">
      <div className="container-x py-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((it) => (
            <div key={it.label} className="flex items-center gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary-soft text-primary">
                <it.icon className="h-[18px] w-[18px]" />
              </span>
              <span className="text-sm font-medium text-foreground/80">{it.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Google Reviews ---------- */
const REVIEWS = [
  {
    name: "Preety Singhania",
    text: "I am deeply grateful to Dr. Rajesh for the exceptional care and support he has provided to my mother over the past year. During a very difficult time when she was hospitalized due to CKD, his guidance, kindness, and dedication gave us both great confidence.",
  },
  {
    name: "Sudhakara Ts",
    text: "Consulted Doctor for one of my relatives suffering due to kidney issues. Doctor explained the kidney condition clearly. We came to know it was CKD. Very well explained by the doctor and we are getting good treatment. Doctor is just one message away. Patient is feeling well now.",
  },
  {
    name: "Manju Marshal",
    text: "Happy to say that the doctor is patient and considerate enough to understand your case history and actual issue unlike others. One of the best Nephrologists in the locality. Feel free to clarify anything related to the health of your kidneys.",
  },
  {
    name: "Sailatha Mallya",
    text: "I strongly recommend Dr. Rajesh Kiran, Nephrologist, with utmost confidence and without any second thought. His care and guidance have made a positive difference.",
  },
  {
    name: "Dr. Ranjith B.S",
    text: "Dr. Rajesh Kiran is a specialist in kidney-related diseases including kidney transplant. He is very calm and composed and cleared all my doubts. The patient recovered quickly after starting treatment.",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-0.5 text-[oklch(0.78_0.16_85)]">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
    </div>
  );
}

function GoogleReviews() {
  return (
    <section id="reviews" className="section-pad bg-secondary/60">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow">Google Reviews</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-primary">
              5.0 / 5 on Google — Trusted by Kidney Patients & Families
            </h2>
            <div className="mt-3 flex items-center gap-3">
              <Stars />
              <span className="text-sm font-semibold text-foreground/80">5.0 Rating</span>
              <span className="text-sm text-muted-foreground">• Verified Google Reviews</span>
            </div>
          </div>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-95"
          >
            Read More Google Reviews <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map((r) => (
            <figure
              key={r.name}
              className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] flex flex-col"
            >
              <div className="flex items-center justify-between">
                <Stars />
                <span className="text-[10px] font-semibold uppercase tracking-wide rounded-full bg-primary-soft text-primary px-2 py-1">
                  Verified Google Review
                </span>
              </div>
              <Quote className="mt-3 h-5 w-5 text-accent/60" />
              <blockquote className="mt-2 text-sm text-foreground/85 leading-relaxed flex-1">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-4 pt-4 border-t border-border flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  {r.name.charAt(0)}
                </span>
                <span className="font-semibold text-primary text-sm">{r.name}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Stats ---------- */
const STATS = [
  { icon: Award, value: "12+", label: "Years Experience" },
  { icon: Microscope, value: "200+", label: "Kidney Biopsies" },
  { icon: Droplets, value: "300+", label: "Dialysis Catheter Insertions" },
  { icon: HeartPulse, value: "1000+", label: "CKD Patients Managed" },
  { icon: Users, value: "150+", label: "Kidney Transplant Cases Involved" },
];

function Stats() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">By the Numbers</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-primary">
            Experience You Can Trust
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-border bg-card p-5 text-center shadow-[var(--shadow-soft)]"
            >
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary">
                <s.icon className="h-6 w-6" />
              </span>
              <div className="mt-4 font-display font-extrabold text-3xl text-primary">{s.value}</div>
              <div className="mt-1 text-xs text-muted-foreground leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- About / Doctor Profile ---------- */
function About() {
  return (
    <section id="about" className="section-pad bg-secondary/60">
      <div className="container-x grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-elevated)]">
            <img
              src={doctorImg}
              alt="Dr. Rajesh Kiran K V — Consultant Nephrologist"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="mt-4 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-xs text-muted-foreground">Reg. Number</div>
              <div className="font-semibold text-primary">KMC / placeholder</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Languages</div>
              <div className="font-semibold text-primary">EN • KN • HI • TE</div>
            </div>
          </div>
        </div>

        <div>
          <span className="eyebrow">Doctor Profile</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-primary">
            About Dr. Rajesh Kiran K V
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Dr. Rajesh Kiran K V is a{" "}
            <strong className="text-foreground">Consultant Nephrologist and Kidney Transplant Physician</strong>{" "}
            with over <strong className="text-foreground">12 years of clinical experience</strong> in
            the diagnosis, treatment and long-term management of kidney diseases. He provides expert
            care for chronic kidney disease (CKD), acute kidney injury (AKI), hemodialysis,
            peritoneal dialysis, kidney transplant evaluation and post-transplant follow-up,
            resistant hypertension, diabetic kidney disease and glomerular disorders.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            His patient-care philosophy is built on clear communication, evidence-based treatment
            and compassionate long-term follow-up — supporting patients and families through every
            stage of kidney care.
          </p>

          <div className="mt-7 grid sm:grid-cols-2 gap-4">
            <ProfileBlock
              icon={GraduationCap}
              title="Qualifications"
              items={["MBBS", "MD — Internal Medicine", "DrNB — Nephrology"]}
            />
            <ProfileBlock
              icon={Building2}
              title="Hospital Affiliation"
              items={["Fortis Hospital, Yeshwanthpur", "RK Kidney Care Clinic", "Multiple consult locations"]}
            />
            <ProfileBlock
              icon={ShieldCheck}
              title="Areas of Expertise"
              items={["CKD & dialysis care", "Kidney transplantation", "Glomerular diseases"]}
            />
            <ProfileBlock
              icon={Award}
              title="Experience"
              items={["12+ years clinical practice", "Transplant care experience", "1000+ CKD patients managed"]}
            />
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#appointment"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-95"
            >
              <Calendar className="h-4 w-4" /> Book Appointment
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-card p-5 flex items-start gap-4 shadow-[var(--shadow-soft)]">
            <Languages className="h-6 w-6 text-accent shrink-0 mt-0.5" />
            <div>
              <div className="font-display font-bold text-primary text-sm">Languages Spoken</div>
              <div className="mt-1 text-sm text-muted-foreground">
                English • Kannada • Hindi • Telugu
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProfileBlock({
  icon: Icon, title, items,
}: { icon: React.ComponentType<{ className?: string }>; title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
      <div className="flex items-center gap-2.5">
        <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary-soft text-primary">
          <Icon className="h-[18px] w-[18px]" />
        </span>
        <div className="font-display font-bold text-primary text-sm">{title}</div>
      </div>
      <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
        {items.map((i) => (
          <li key={i} className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" /> <span>{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- Services ---------- */
const SERVICES = [
  {
    icon: ShieldCheck,
    title: "Chronic Kidney Disease (CKD)",
    desc: "Long-term care and monitoring for reduced kidney function, including diabetic and hypertensive kidney disease.",
    symptoms: "Swelling, fatigue, foamy urine, high creatinine",
  },
  {
    icon: HeartPulse,
    title: "Acute Kidney Injury (AKI)",
    desc: "Evaluation and treatment of sudden kidney function decline due to infection, dehydration or medicines.",
    symptoms: "Reduced urine output, swelling, nausea",
  },
  {
    icon: Droplets,
    title: "Hemodialysis",
    desc: "Guidance and care for patients on maintenance hemodialysis including access and adequacy review.",
    symptoms: "Worsening kidney function, fluid overload",
  },
  {
    icon: Droplets,
    title: "Peritoneal Dialysis",
    desc: "Home-based dialysis evaluation, training support, and ongoing PD adequacy monitoring.",
    symptoms: "Need for home dialysis, ESRD",
  },
  {
    icon: Stethoscope,
    title: "Kidney Transplant Evaluation",
    desc: "Comprehensive workup for kidney transplant candidacy, donor evaluation and counselling.",
    symptoms: "Advanced CKD, ESRD",
  },
  {
    icon: UserCheck,
    title: "Post-Transplant Care",
    desc: "Long-term post-transplant follow-up, immunosuppression management and infection prevention.",
    symptoms: "Post-transplant fever, low urine output, raised creatinine",
  },
  {
    icon: Activity,
    title: "Resistant Hypertension",
    desc: "Evaluation and management of difficult-to-control blood pressure and secondary hypertension.",
    symptoms: "BP not controlled on 3+ medicines",
  },
  {
    icon: HeartPulse,
    title: "Diabetic Kidney Disease",
    desc: "Specialised management of kidney involvement in diabetes to slow progression.",
    symptoms: "Diabetes with protein in urine, swelling",
  },
  {
    icon: Microscope,
    title: "Proteinuria",
    desc: "Evaluation of protein leak in urine including indications for kidney biopsy.",
    symptoms: "Foamy urine, swelling, protein in urine reports",
  },
  {
    icon: Activity,
    title: "Glomerulonephritis",
    desc: "Diagnosis and management of immune-mediated kidney inflammation and filtering disorders.",
    symptoms: "Blood in urine, swelling, hypertension",
  },
  {
    icon: Pill,
    title: "Electrolyte Disorders",
    desc: "Evaluation and correction of sodium, potassium, calcium and acid–base imbalances.",
    symptoms: "Weakness, palpitations, confusion",
  },
  {
    icon: Pill,
    title: "Kidney Stone Evaluation",
    desc: "Stone work-up, metabolic evaluation, prevention guidance and kidney function monitoring.",
    symptoms: "Flank pain, blood in urine, recurrent stones",
  },
];

function Services() {
  return (
    <section id="services" className="section-pad">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Services</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-primary">
            Expert Kidney Care, End to End
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Specialised nephrology consultation across the full spectrum of kidney health — from
            early CKD and dialysis support to advanced transplant care.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="group relative rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elevated)] hover:-translate-y-0.5 transition flex flex-col"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground shadow-[var(--shadow-soft)]">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display font-bold text-lg text-primary">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <div className="mt-4 rounded-lg bg-primary-soft/60 px-3 py-2 text-xs text-foreground/80">
                <span className="font-semibold text-primary">Consult if:</span> {s.symptoms}
              </div>
              <a
                href="#appointment"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:gap-2.5 transition-all"
              >
                Book appointment <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Locations ---------- */
const LOCATIONS = [
  {
    name: "RK Kidney Care Clinic",
    address: "Vidyaranyapura, Bengaluru",
    landmark: "Near NTI Ground, HMT Layout 5th Block",
    timings: "Mon–Sat • Timings on request",
    mapsQuery: "RK Kidney Care Clinic Vidyaranyapura Bengaluru",
  },
  {
    name: "Fortis Hospital, Yeshwanthpur",
    address: "Yeshwanthpur, Bengaluru",
    landmark: "Near Yeshwanthpur Railway Station",
    timings: "By appointment",
    mapsQuery: "Fortis Hospital Yeshwanthpur Bengaluru",
  },
  {
    name: "Medparc Hospital",
    address: "Sambaram College Road, Bengaluru",
    landmark: "Sambaram College Road",
    timings: "By appointment",
    mapsQuery: "Medparc Hospital Sambaram College Road Bengaluru",
  },
  {
    name: "Chethan Diagnostics",
    address: "Kodigehalli Main Road, Sahakar Nagar, Bengaluru",
    landmark: "Sahakar Nagar",
    timings: "By appointment",
    mapsQuery: "Chethan Diagnostics Kodigehalli Sahakar Nagar Bengaluru",
  },
  {
    name: "Sidhvin Hospital",
    address: "Chikkaballapur",
    landmark: "Central Chikkaballapur",
    timings: "By appointment",
    mapsQuery: "Sidhvin Hospital Chikkaballapur",
  },
  {
    name: "Bhavana Nursing Home",
    address: "Chintamani",
    landmark: "Central Chintamani",
    timings: "By appointment",
    mapsQuery: "Bhavana Nursing Home Chintamani",
  },
];

function Locations() {
  return (
    <section id="locations" className="section-pad bg-secondary/60">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Consult At</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-primary">
            Where to Meet Dr. Rajesh Kiran K V
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Consultations available across multiple hospitals and clinics in Bengaluru and around.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {LOCATIONS.map((l) => {
            const q = encodeURIComponent(l.mapsQuery);
            const mapsLink = `https://www.google.com/maps/search/?api=1&query=${q}`;
            return (
              <div
                key={l.name}
                className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] flex flex-col"
              >
                <div className="flex items-start gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-primary text-base leading-snug">
                      {l.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{l.address}</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Navigation className="h-3.5 w-3.5 text-accent" /> {l.landmark}
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="h-3.5 w-3.5 text-accent" /> {l.timings}
                  </li>
                </ul>
                <div className="mt-5 grid grid-cols-2 gap-2 mt-auto pt-4">
                  <a
                    href="#appointment"
                    className="inline-flex items-center justify-center gap-1.5 rounded-full bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground hover:opacity-95"
                  >
                    <Calendar className="h-3.5 w-3.5" /> Book
                  </a>
                  <a
                    href={mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-full border border-border bg-background px-3 py-2 text-xs font-semibold text-primary hover:border-primary/40"
                  >
                    <Navigation className="h-3.5 w-3.5" /> Directions
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- When to consult ---------- */
const CONSULT_SIGNS = [
  "Creatinine above normal range",
  "Protein in urine",
  "Swelling of legs or face",
  "Uncontrolled blood pressure",
  "Diabetes affecting kidneys",
  "Recurrent kidney stones",
  "Declining kidney function",
  "Kidney transplant follow-up",
];

function WhenToConsult() {
  return (
    <section className="section-pad">
      <div className="container-x grid lg:grid-cols-[1fr_1.1fr] gap-10 items-center">
        <div>
          <span className="eyebrow">When to See a Nephrologist</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-primary">
            When Should You See a Nephrologist?
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Early kidney evaluation can change long-term outcomes. Consult Dr. Rajesh Kiran K V if
            you or a family member has any of the following:
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#appointment"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-95"
            >
              <Calendar className="h-4 w-4" /> Book a Kidney Consultation
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
        <ul className="grid sm:grid-cols-2 gap-3">
          {CONSULT_SIGNS.map((s) => (
            <li
              key={s}
              className="flex items-start gap-2.5 rounded-xl border border-border bg-card px-4 py-3 shadow-[var(--shadow-soft)]"
            >
              <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <span className="text-sm font-medium text-foreground/85">{s}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Before Visit ---------- */
const BRING = [
  "Previous medical records",
  "Creatinine reports",
  "Urine reports",
  "Ultrasound scans",
  "Kidney biopsy reports",
  "Current medication list",
  "Discharge summaries",
];

function BeforeVisit() {
  return (
    <section className="section-pad bg-secondary/60">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Before Your Visit</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-primary">
            Before Your Visit — Please Bring
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Having these ready helps the doctor give you a faster, more accurate assessment.
          </p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {BRING.map((b) => (
            <div
              key={b}
              className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] flex items-start gap-3"
            >
              <FileText className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <span className="text-sm font-medium text-foreground/85">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Red Flags ---------- */
const RED_FLAGS = [
  "Sudden decrease in urine output",
  "Breathlessness with swelling",
  "Rapid rise in creatinine",
  "Persistent vomiting in kidney disease",
  "Severe hyperkalemia",
  "Hypertensive emergency",
];

function RedFlags() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <div className="rounded-3xl border border-destructive/30 bg-destructive/5 p-6 md:p-10">
          <div className="flex items-start gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-destructive text-destructive-foreground shrink-0">
              <AlertTriangle className="h-5 w-5" />
            </span>
            <div>
              <span className="eyebrow !bg-destructive/10 !text-destructive">Urgent Awareness</span>
              <h2 className="mt-3 text-2xl md:text-3xl font-extrabold text-primary">
                Seek Medical Attention If You Have
              </h2>
            </div>
          </div>
          <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {RED_FLAGS.map((f) => (
              <div
                key={f}
                className="flex items-start gap-2.5 rounded-xl border border-destructive/20 bg-card px-4 py-3"
              >
                <AlertTriangle className="h-[18px] w-[18px] text-destructive shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-foreground/85">{f}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-foreground/80">
            <strong className="text-destructive">Important:</strong> If symptoms are severe, please
            visit the nearest emergency department immediately.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Guidance ---------- */
const GUIDANCE = [
  {
    title: "CKD Patients",
    icon: ShieldCheck,
    points: [
      "Salt restriction",
      "Blood pressure monitoring",
      "Diabetes control",
      "Regular creatinine testing",
    ],
  },
  {
    title: "Dialysis Patients",
    icon: Droplets,
    points: [
      "Fluid restriction",
      "Vascular access care",
      "Missed dialysis warning signs",
      "Report breathlessness or swelling",
    ],
  },
  {
    title: "Kidney Transplant Patients",
    icon: HeartPulse,
    points: [
      "Medication adherence",
      "Infection precautions",
      "Follow-up schedule",
      "Monitor creatinine regularly",
    ],
  },
];

function Guidance() {
  return (
    <section id="guidance" className="section-pad bg-secondary/60">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Kidney Patient Guidance</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-primary">
            Guidance for Kidney Patients & Families
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Practical guidance Dr. Rajesh Kiran K V shares with his kidney patients.
          </p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {GUIDANCE.map((g) => (
            <div
              key={g.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground">
                <g.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display font-bold text-lg text-primary">{g.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {g.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-foreground/80">
                    <CheckCircle2 className="h-[18px] w-[18px] text-accent shrink-0 mt-0.5" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-8 text-xs text-muted-foreground italic text-center max-w-2xl mx-auto">
          This information is for general awareness only and does not replace direct medical
          consultation.
        </p>
      </div>
    </section>
  );
}

/* ---------- Risk Assessment ---------- */
function RiskAssessment() {
  const [age, setAge] = useState("");
  const [diabetes, setDiabetes] = useState("no");
  const [bp, setBp] = useState("no");
  const [creat, setCreat] = useState("");
  const [protein, setProtein] = useState("no");
  const [result, setResult] = useState<null | { level: string; tone: string; msg: string }>(null);

  const onCheck = (e: React.FormEvent) => {
    e.preventDefault();
    let score = 0;
    const a = parseInt(age || "0", 10);
    if (a >= 60) score += 2; else if (a >= 40) score += 1;
    if (diabetes === "yes") score += 2;
    if (bp === "yes") score += 1;
    const c = parseFloat(creat || "0");
    if (c >= 2) score += 3; else if (c >= 1.3) score += 2;
    if (protein === "yes") score += 2;

    if (score >= 6) {
      setResult({
        level: "High",
        tone: "destructive",
        msg: "Based on your inputs, your risk markers are high. Please consult a nephrologist promptly for a detailed kidney evaluation.",
      });
    } else if (score >= 3) {
      setResult({
        level: "Moderate",
        tone: "accent",
        msg: "Your inputs suggest moderate kidney risk. Consider booking a kidney consultation for further evaluation and lifestyle guidance.",
      });
    } else {
      setResult({
        level: "Low",
        tone: "success",
        msg: "Your inputs suggest low basic risk. Continue regular health checks, blood pressure and sugar monitoring.",
      });
    }
  };

  const toneClass = useMemo(() => {
    if (!result) return "";
    if (result.tone === "destructive") return "border-destructive/30 bg-destructive/5 text-destructive";
    if (result.tone === "accent") return "border-accent/30 bg-accent-soft text-accent-foreground";
    return "border-success/30 bg-success/10 text-success";
  }, [result]);

  return (
    <section className="section-pad">
      <div className="container-x grid lg:grid-cols-[1fr_1.1fr] gap-10">
        <div>
          <span className="eyebrow">Kidney Risk Assessment</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-primary">
            Quick Kidney Risk Check
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Answer a few simple questions for a basic awareness check. This tool gives a general
            indication only and does not replace medical consultation.
          </p>
          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-border bg-card p-4">
            <Calculator className="h-5 w-5 text-accent mt-0.5" />
            <p className="text-xs text-muted-foreground">
              <strong className="text-foreground">Disclaimer:</strong> This tool is for basic
              awareness only and does not replace medical consultation, diagnosis, or treatment.
            </p>
          </div>
        </div>

        <form
          onSubmit={onCheck}
          className="rounded-3xl border border-border bg-card p-6 md:p-8 shadow-[var(--shadow-soft)]"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Age">
              <input className="form-input" type="number" min="0" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Years" />
            </Field>
            <Field label="Serum Creatinine (mg/dL)">
              <input className="form-input" type="number" step="0.1" value={creat} onChange={(e) => setCreat(e.target.value)} placeholder="e.g. 1.2" />
            </Field>
            <Field label="Diabetes">
              <select className="form-input" value={diabetes} onChange={(e) => setDiabetes(e.target.value)}>
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </Field>
            <Field label="Uncontrolled Blood Pressure">
              <select className="form-input" value={bp} onChange={(e) => setBp(e.target.value)}>
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </Field>
            <Field label="Protein in Urine" full>
              <select className="form-input" value={protein} onChange={(e) => setProtein(e.target.value)}>
                <option value="no">No / Not known</option>
                <option value="yes">Yes</option>
              </select>
            </Field>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-95"
            >
              <Calculator className="h-4 w-4" /> Check Risk
            </button>
            <a
              href="#appointment"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90"
            >
              <Calendar className="h-4 w-4" /> Consult a Nephrologist
            </a>
          </div>

          {result && (
            <div className={`mt-6 rounded-2xl border p-5 ${toneClass}`}>
              <div className="font-display font-bold text-lg">Basic Risk: {result.level}</div>
              <p className="mt-2 text-sm leading-relaxed text-foreground/85">{result.msg}</p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

/* ---------- Appointment ---------- */
function Appointment() {
  const [form, setForm] = useState({
    type: "New Consultation",
    name: "",
    phone: "",
    age: "",
    location: "RK Kidney Care Clinic",
    date: "",
    time: "",
    reason: "",
    consent: false,
  });
  const [fileName, setFileName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onChange =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const value =
        e.target instanceof HTMLInputElement && e.target.type === "checkbox"
          ? e.target.checked
          : e.target.value;
      setForm((f) => ({ ...f, [k]: value }));
    };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.consent) return;
    const msg = `Hello Dr. Rajesh Kiran K V Clinic, I would like to book an appointment.

Type: ${form.type}
Patient Name: ${form.name}
Phone: ${form.phone}
Age: ${form.age}
Preferred Clinic: ${form.location}
Preferred Date: ${form.date}
Preferred Time: ${form.time}
Reason for Visit: ${form.reason}
${fileName ? `Report attached (to send): ${fileName}` : ""}

Please confirm the slot.`;
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="appointment" className="section-pad bg-secondary/60">
        <div className="container-x">
          <div className="max-w-2xl mx-auto rounded-3xl border border-border bg-card p-8 md:p-12 text-center shadow-[var(--shadow-elevated)]">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent text-accent-foreground">
              <CheckCircle2 className="h-7 w-7" />
            </span>
            <h2 className="mt-5 text-2xl md:text-3xl font-extrabold text-primary">
              Thank you — Appointment Request Received
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Our team will contact you shortly to confirm your slot.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-95"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </div>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 text-xs text-muted-foreground hover:text-primary underline"
            >
              Book another appointment
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="appointment" className="section-pad bg-secondary/60">
      <div className="container-x grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
        <div className="rounded-3xl border border-border bg-card p-6 md:p-9 shadow-[var(--shadow-elevated)]">
          <span className="eyebrow">Book an Appointment</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-primary">
            Request a Kidney Consultation
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Fill in your details — we'll confirm your slot over WhatsApp or call.
          </p>

          <form onSubmit={submit} className="mt-7 grid sm:grid-cols-2 gap-4">
            <Field label="Consultation Type" full>
              <select className="form-input" value={form.type} onChange={onChange("type")}>
                <option>New Consultation</option>
                <option>Follow-up Consultation</option>
                <option>Video Consultation</option>
                <option>Dialysis Review</option>
                <option>Transplant Follow-up</option>
              </select>
            </Field>
            <Field label="Patient Name" required>
              <input required className="form-input" value={form.name} onChange={onChange("name")} placeholder="Full name" />
            </Field>
            <Field label="Phone Number" required>
              <input required type="tel" className="form-input" value={form.phone} onChange={onChange("phone")} placeholder="10-digit number" />
            </Field>
            <Field label="Age">
              <input className="form-input" value={form.age} onChange={onChange("age")} placeholder="Years" />
            </Field>
            <Field label="Preferred Clinic">
              <select className="form-input" value={form.location} onChange={onChange("location")}>
                {LOCATIONS.map((l) => (
                  <option key={l.name}>{l.name}</option>
                ))}
              </select>
            </Field>
            <Field label="Preferred Date">
              <input type="date" className="form-input" value={form.date} onChange={onChange("date")} />
            </Field>
            <Field label="Preferred Time">
              <input type="time" className="form-input" value={form.time} onChange={onChange("time")} />
            </Field>
            <Field label="Reason for Visit" full>
              <textarea
                className="form-input resize-none"
                rows={3}
                value={form.reason}
                onChange={onChange("reason")}
                placeholder="Briefly describe your symptoms or reason for visit"
              />
            </Field>
            <Field label="Upload Reports (optional)" full>
              <label className="flex items-center gap-3 rounded-xl border border-dashed border-border bg-background px-4 py-3 cursor-pointer hover:border-primary/40 transition">
                <Upload className="h-5 w-5 text-accent" />
                <span className="text-sm text-muted-foreground flex-1 truncate">
                  {fileName || "Blood, creatinine, USG, biopsy or discharge summary"}
                </span>
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="hidden"
                  onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
                />
                <span className="text-xs font-semibold text-primary">Choose file</span>
              </label>
              <p className="mt-1 text-[11px] text-muted-foreground">
                Note: Secure upload integration can be connected later. For now, please share the
                report via WhatsApp after submitting.
              </p>
            </Field>
            <Field label=" " full>
              <label className="flex items-start gap-2.5 text-xs text-muted-foreground cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={onChange("consent")}
                  required
                  className="mt-0.5 h-4 w-4 accent-[var(--color-primary)]"
                />
                <span>
                  I consent to share my health details and reports for appointment and
                  consultation purposes.
                </span>
              </label>
            </Field>
            <div className="sm:col-span-2 flex flex-wrap gap-3 pt-2">
              <button
                type="submit"
                disabled={!form.consent}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] hover:opacity-95 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Calendar className="h-4 w-4" /> Submit Appointment Request
              </button>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-semibold text-primary hover:border-primary/40"
              >
                <Phone className="h-4 w-4" /> Call Clinic
              </a>
            </div>
          </form>
        </div>

        <div className="flex flex-col gap-4">
          <ContactCard icon={Phone} label="Call the clinic" value={PHONE_DISPLAY} href={`tel:${PHONE}`} cta="Call Now" />
          <ContactCard
            icon={MessageCircle}
            label="WhatsApp the clinic"
            value={PHONE_DISPLAY}
            href={waLink()}
            cta="Chat on WhatsApp"
            accent
            external
          />
          <ContactCard icon={Mail} label="Email" value={EMAIL} href={`mailto:${EMAIL}`} cta="Send Email" />
          <ContactCard
            icon={Instagram}
            label="Instagram"
            value={`@${INSTAGRAM}`}
            href={`https://instagram.com/${INSTAGRAM}`}
            cta="Open Profile"
            external
          />
        </div>
      </div>
      <style>{`
        .form-input {
          width: 100%;
          background: var(--color-background);
          border: 1px solid var(--color-border);
          border-radius: 0.75rem;
          padding: 0.75rem 0.875rem;
          font-size: 0.875rem;
          color: var(--color-foreground);
          transition: border-color .15s, box-shadow .15s;
          outline: none;
        }
        .form-input::placeholder { color: var(--color-muted-foreground); }
        .form-input:focus {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 4px oklch(0.36 0.12 250 / 0.12);
        }
      `}</style>
    </section>
  );
}

function Field({
  label, children, required, full,
}: { label: string; children: React.ReactNode; required?: boolean; full?: boolean }) {
  return (
    <label className={`flex flex-col gap-1.5 ${full ? "sm:col-span-2" : ""}`}>
      <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {label}{required && <span className="text-destructive ml-1">*</span>}
      </span>
      {children}
    </label>
  );
}

function ContactCard({
  icon: Icon, label, value, href, cta, accent, external,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string; value: string; href: string; cta: string; accent?: boolean; external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`group rounded-2xl border border-border p-5 shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-elevated)] ${
        accent ? "bg-accent text-accent-foreground" : "bg-card"
      }`}
    >
      <div className="flex items-start gap-4">
        <span
          className={`grid h-12 w-12 place-items-center rounded-xl ${
            accent ? "bg-accent-foreground/10 text-accent-foreground" : "bg-primary-soft text-primary"
          }`}
        >
          <Icon className="h-5 w-5" />
        </span>
        <div className="flex-1 min-w-0">
          <div className={`text-xs font-semibold uppercase tracking-wide ${accent ? "opacity-80" : "text-muted-foreground"}`}>
            {label}
          </div>
          <div className="mt-1 font-display font-bold truncate">{value}</div>
          <div className={`mt-2 inline-flex items-center gap-1 text-sm font-semibold ${accent ? "" : "text-accent"}`}>
            {cta} <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" />
          </div>
        </div>
      </div>
    </a>
  );
}

/* ---------- Telehealth ---------- */
function Telehealth() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <div className="rounded-3xl border border-border bg-card p-6 md:p-10 shadow-[var(--shadow-soft)] grid lg:grid-cols-[1fr_0.9fr] gap-8 items-center">
          <div>
            <span className="eyebrow">Online Consultation</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-primary">
              Video Consultation with Dr. Rajesh Kiran K V
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Connect with the doctor remotely for kidney consultations, follow-ups and report
              reviews. Convenient for outstation patients, transplant follow-up and dialysis
              review.
            </p>
            <ul className="mt-5 grid sm:grid-cols-2 gap-2 text-sm text-foreground/80">
              {[
                "Teleconsultation booking",
                "UPI / online payment (coming soon)",
                "Auto meeting link on confirmation",
                "Digital prescription where applicable",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <CheckCircle2 className="h-[18px] w-[18px] text-accent shrink-0 mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted-foreground">
              Note: Backend integration for payments and auto meeting links can be connected later.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#appointment"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-95"
              >
                <Video className="h-4 w-4" /> Book Video Consultation
              </a>
              <a
                href={waLink("Hello Dr. Rajesh Kiran K V Clinic, I would like to book a video consultation for kidney consultation.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp to Schedule
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Video, t: "Video Call", d: "Secure meeting link" },
              { icon: FileText, t: "Share Reports", d: "Send via WhatsApp" },
              { icon: Pill, t: "E-Prescription", d: "Digital where possible" },
              { icon: Clock, t: "Flexible Slots", d: "Convenient timings" },
            ].map((c) => (
              <div
                key={c.t}
                className="rounded-2xl border border-border bg-background p-5 shadow-[var(--shadow-soft)]"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-soft text-accent">
                  <c.icon className="h-5 w-5" />
                </span>
                <div className="mt-4 font-semibold text-primary text-sm">{c.t}</div>
                <div className="text-xs text-muted-foreground mt-1">{c.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Blog ---------- */
const BLOGS = [
  { title: "What is CKD?", desc: "Understanding chronic kidney disease in simple terms — stages, causes and care." },
  { title: "When is Dialysis Needed?", desc: "How nephrologists decide on dialysis and what patients can expect." },
  { title: "Kidney Transplant FAQs", desc: "Common questions on kidney transplant — eligibility, donors and outcomes." },
  { title: "Low-Potassium Diet", desc: "Foods to choose and avoid for safer kidney nutrition." },
  { title: "Protein Intake in CKD", desc: "How much protein is safe in chronic kidney disease." },
  { title: "Understanding Creatinine", desc: "What your creatinine value means for your kidney health." },
  { title: "How Diabetes Affects Kidneys", desc: "The link between diabetes and diabetic kidney disease." },
  { title: "Blood Pressure & Kidney Health", desc: "Why BP control is essential to protect your kidneys." },
];

function Blog() {
  return (
    <section className="section-pad bg-secondary/60">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Kidney Health Education</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-primary">
            Patient Education & Resources
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Patient-friendly reads on common kidney conditions, dialysis and transplant care.
          </p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BLOGS.map((b) => (
            <article
              key={b.title}
              className="group rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elevated)] transition flex flex-col"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary-soft text-primary">
                <BookOpen className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display font-bold text-primary leading-snug">{b.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed flex-1">{b.desc}</p>
              <a
                href="#appointment"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:gap-2.5 transition-all"
              >
                Book appointment <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
        <p className="mt-8 text-xs text-muted-foreground italic text-center max-w-3xl mx-auto">
          Medical Disclaimer: Articles are for general patient awareness only. They do not replace
          personal medical consultation, diagnosis or treatment by a qualified nephrologist.
        </p>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
const FAQS = [
  {
    q: "When should I consult a nephrologist?",
    a: "Consult if you have high creatinine, protein in urine, blood in urine, swelling, reduced urine output, uncontrolled BP, diabetes-related kidney issues or recurrent kidney stones.",
  },
  {
    q: "Can I book an appointment through WhatsApp?",
    a: "Yes, you can book an appointment directly through WhatsApp or by calling the clinic.",
  },
  {
    q: "What reports should I bring for my visit?",
    a: "Bring blood reports, urine reports, ultrasound/scan reports, prescription, current medicines, discharge summary and any previous kidney-related records.",
  },
  {
    q: "Does Dr. Rajesh Kiran K V offer kidney transplant consultation?",
    a: "Yes, consultation is available for kidney transplant evaluation, pre-transplant workup and post-transplant follow-up.",
  },
  {
    q: "Is video consultation available?",
    a: "Yes, video consultation is available for follow-ups, report reviews and outstation patients.",
  },
  {
    q: "Is emergency service available?",
    a: "For emergency symptoms, please visit the nearest emergency hospital immediately.",
  },
];

function FAQ() {
  return (
    <section id="faq" className="section-pad">
      <div className="container-x grid lg:grid-cols-[0.9fr_1.1fr] gap-10">
        <div>
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-primary">
            Questions Patients Often Ask
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Quick answers to help you prepare for your visit. For anything specific, reach out
            directly.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-95"
            >
              <MessageCircle className="h-4 w-4" /> Ask on WhatsApp
            </a>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-primary hover:border-primary/40"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>
        </div>
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <details
              key={i}
              className="group rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] open:shadow-[var(--shadow-elevated)] transition"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                <span className="font-display font-semibold text-primary text-[15px]">{f.q}</span>
                <ChevronDown className="h-5 w-5 text-accent shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-x py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-accent-foreground">
              <Stethoscope className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <div className="font-display font-bold text-lg">Dr. Rajesh Kiran K V</div>
              <div className="text-xs text-primary-foreground/70">
                Consultant Nephrologist & Kidney Transplant Physician
              </div>
            </div>
          </div>
          <p className="mt-5 text-sm text-primary-foreground/75 leading-relaxed max-w-md">
            Expert Kidney Care — focused on accurate diagnosis, evidence-based treatment and
            compassionate long-term follow-up for CKD, dialysis and kidney transplant patients in
            Bangalore.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm font-semibold text-primary-foreground border border-primary-foreground/20"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold text-sm uppercase tracking-wider text-primary-foreground/80">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["About", "#about"],
              ["Services", "#services"],
              ["Reviews", "#reviews"],
              ["Consult At", "#locations"],
              ["Appointment", "#appointment"],
              ["Guidance", "#guidance"],
              ["FAQ", "#faq"],
              ["Privacy Policy", "#privacy"],
              ["Terms", "#terms"],
            ].map(([l, h]) => (
              <li key={l}>
                <a href={h} className="text-primary-foreground/80 hover:text-accent">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-sm uppercase tracking-wider text-primary-foreground/80">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <Phone className="h-4 w-4 mt-0.5 text-accent shrink-0" />
              <a href={`tel:${PHONE}`} className="hover:text-accent">{PHONE_DISPLAY}</a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="h-4 w-4 mt-0.5 text-accent shrink-0" />
              <a href={`mailto:${EMAIL}`} className="hover:text-accent break-all">{EMAIL}</a>
            </li>
            <li className="flex items-start gap-2.5">
              <Instagram className="h-4 w-4 mt-0.5 text-accent shrink-0" />
              <a
                href={`https://instagram.com/${INSTAGRAM}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                @{INSTAGRAM}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" />
              <span className="text-primary-foreground/80">
                Bengaluru • Fortis Hospital, Yeshwanthpur & multiple clinics
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div id="privacy" className="border-t border-primary-foreground/15">
        <div className="container-x py-8 grid md:grid-cols-2 gap-6 text-xs text-primary-foreground/70 leading-relaxed">
          <div>
            <div className="font-display font-bold text-sm text-primary-foreground mb-2">
              Privacy Policy & Data Privacy
            </div>
            <p>
              Any information you share through the appointment form or WhatsApp is used solely to
              schedule and provide your consultation. Personal health information is kept
              confidential and shared only with the doctor and authorised clinic staff. We do not
              sell or share your data with third parties for marketing.
            </p>
          </div>
          <div id="terms">
            <div className="font-display font-bold text-sm text-primary-foreground mb-2">
              Terms & Medical Disclaimer
            </div>
            <p>
              This website is for general information and appointment booking only and does not
              provide emergency medical care. Content on this site does not replace professional
              medical advice, diagnosis or treatment. For emergencies, visit the nearest hospital
              immediately.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container-x py-6 flex flex-col md:flex-row gap-2 justify-between text-xs text-primary-foreground/70">
          <p>© {new Date().getFullYear()} Dr. Rajesh Kiran K V — Expert Kidney Care. All rights reserved.</p>
          <p>Nephrologist • Kidney Transplant Physician • Bangalore</p>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Floating Actions ---------- */
function FloatingActions() {
  return (
    <div className="fixed z-40 right-4 bottom-20 md:bottom-6 md:right-6 flex flex-col gap-3">
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group relative grid h-[56px] w-[56px] place-items-center rounded-full bg-accent text-accent-foreground shadow-[var(--shadow-elevated)] hover:scale-105 transition"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute inset-0 rounded-full animate-ping bg-accent/40" aria-hidden />
        <span className="hidden md:block absolute right-[68px] top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-card border border-border px-3 py-1.5 text-xs font-semibold text-primary shadow-[var(--shadow-soft)]">
          Chat with Us
        </span>
      </a>
    </div>
  );
}

/* ---------- Mobile Sticky Bar ---------- */
function MobileStickyBar() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-card border-t border-border shadow-[0_-8px_24px_-12px_oklch(0.3_0.1_250/0.2)]">
      <div className="grid grid-cols-3 gap-1 p-2">
        <a
          href={`tel:${PHONE}`}
          className="inline-flex flex-col items-center gap-0.5 rounded-lg py-2 text-[11px] font-semibold text-primary"
        >
          <Phone className="h-5 w-5" /> Call
        </a>
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-col items-center gap-0.5 rounded-lg py-2 text-[11px] font-semibold text-accent-foreground bg-accent"
        >
          <MessageCircle className="h-5 w-5" /> WhatsApp
        </a>
        <a
          href="#appointment"
          className="inline-flex flex-col items-center gap-0.5 rounded-lg py-2 text-[11px] font-semibold text-primary-foreground bg-primary"
        >
          <Calendar className="h-5 w-5" /> Book
        </a>
      </div>
    </div>
  );
}
