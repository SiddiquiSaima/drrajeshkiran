import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import doctorAsset from "@/assets/dr-rajesh-kiran.png.asset.json";
const doctorImg = doctorAsset.url;
import {
  Phone, MessageCircle, MapPin, Mail, Instagram, Calendar, ChevronDown,
  Stethoscope, Activity, Droplets, HeartPulse, Microscope, Pill, ShieldCheck,
  Award, GraduationCap, UserCheck, Clock, ArrowRight, CheckCircle2, Quote, Menu, X,
} from "lucide-react";

const PHONE = "+918088276359";
const PHONE_DISPLAY = "+91 80882 76359";
const EMAIL = "kvrajeshkiran198@gmail.com";
const INSTAGRAM = "drrk_kidneydoctor";
const ADDRESS =
  "RK Kidney Care Clinic, 744, 6th Main 12th Cross, beside NTI Ground, behind Maja Thindi, HMT Layout 5th Block, Vidyaranyapura, Bengaluru, Karnataka 560097";

const DEFAULT_WA_MSG =
  "Hello Doctor, I would like to book an appointment with Dr. Rajesh Kiran for kidney consultation. Please share available timing.";

const waLink = (msg = DEFAULT_WA_MSG) =>
  `https://wa.me/918088276359?text=${encodeURIComponent(msg)}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Rajesh Kiran | Nephrologist & Kidney Specialist in Vidyaranyapura, Bengaluru" },
      { name: "description", content: "Book appointment with Dr. Rajesh Kiran, Consultant Nephrologist & Transplant Physician at RK Kidney Care Clinic, Vidyaranyapura, Bengaluru. CKD, AKI, dialysis, renal biopsy, kidney stones & transplant care." },
      { property: "og:title", content: "Dr. Rajesh Kiran | Nephrologist & Kidney Specialist, Bengaluru" },
      { property: "og:description", content: "Consultant Nephrologist & Transplant Physician. Book your kidney consultation today." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Physician",
          name: "Dr. Rajesh Kiran",
          medicalSpecialty: "Nephrology",
          jobTitle: "Consultant Nephrologist and Transplant Physician",
          telephone: PHONE,
          email: EMAIL,
          address: {
            "@type": "PostalAddress",
            streetAddress: "744, 6th Main 12th Cross, HMT Layout 5th Block, Vidyaranyapura",
            addressLocality: "Bengaluru",
            addressRegion: "Karnataka",
            postalCode: "560097",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
  component: Index,
});

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#guidance", label: "Guidance" },
  { href: "#appointment", label: "Appointment" },
  { href: "#location", label: "Location" },
  { href: "#faq", label: "FAQ" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <Guidance />
        <Appointment />
        <Location />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <FloatingActions />
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
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-[var(--shadow-soft)]"
          : "bg-background/60 backdrop-blur-sm"
      }`}
    >
      <div className="container-x flex items-center justify-between py-3 md:py-4">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground shadow-[var(--shadow-soft)]">
            <Stethoscope className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className="block font-display font-bold text-[15px] md:text-base text-primary">
              Dr. Rajesh Kiran
            </span>
            <span className="block text-[11px] md:text-xs text-muted-foreground">
              Nephrologist & Transplant Physician
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-muted-foreground">
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
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:opacity-90 transition shadow-[var(--shadow-soft)]"
          >
            <MessageCircle className="h-4 w-4" /> Book Appointment
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
      <div className="container-x pt-12 md:pt-20 pb-16 md:pb-24">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
          <div>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Kidney Care • Bengaluru
            </span>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.05] text-primary">
              Advanced Kidney Care by a Specialist Nephrologist in Bengaluru
            </h1>
            <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
              Consultant Nephrologist and Transplant Physician providing expert care for
              kidney diseases, dialysis, renal biopsy, kidney stones, and kidney
              transplant-related conditions.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
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
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Consultant Nephrologist",
                "Transplant Physician",
                "Kidney Disease Specialist",
                "Bengaluru",
              ].map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-1.5 rounded-full bg-card border border-border px-3 py-1.5 text-xs font-medium text-foreground/80 shadow-[var(--shadow-soft)]"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-accent" /> {b}
                </span>
              ))}
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
                  alt="Dr. Rajesh Kiran, Consultant Nephrologist and Transplant Physician"
                  width={1024}
                  height={1280}
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="hidden sm:flex absolute -left-4 bottom-8 items-center gap-3 rounded-2xl bg-card border border-border px-4 py-3 shadow-[var(--shadow-elevated)]">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-soft text-accent">
                  <HeartPulse className="h-5 w-5" />
                </span>
                <div className="leading-tight">
                  <div className="text-xs text-muted-foreground">Specialty</div>
                  <div className="text-sm font-semibold text-primary">Nephrology & Transplant</div>
                </div>
              </div>
              <div className="hidden sm:flex absolute -right-4 top-10 items-center gap-3 rounded-2xl bg-card border border-border px-4 py-3 shadow-[var(--shadow-elevated)]">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary-soft text-primary">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div className="leading-tight">
                  <div className="text-xs text-muted-foreground">Clinic</div>
                  <div className="text-sm font-semibold text-primary">RK Kidney Care</div>
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
    { icon: Award, label: "Consultant Nephrologist" },
    { icon: UserCheck, label: "Transplant Physician" },
    { icon: GraduationCap, label: "Evidence-Based Care" },
    { icon: Clock, label: "By Appointment" },
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

/* ---------- About ---------- */
function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="eyebrow">About the Doctor</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-primary">
            About Dr. Rajesh Kiran
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Dr. Rajesh Kiran is a <strong className="text-foreground">Consultant Nephrologist
            and Transplant Physician</strong> with expertise in diagnosis, treatment, and
            long-term care of kidney-related disorders. He provides consultation for acute
            and chronic kidney problems, dialysis care, renal biopsy, kidney transplant
            evaluation, and related nephrology conditions.
          </p>

          <ul className="mt-7 grid sm:grid-cols-2 gap-3">
            {[
              "Comprehensive nephrology consultations",
              "Pre- and post-transplant follow-up",
              "Personalised dialysis guidance",
              "Long-term CKD monitoring",
            ].map((t) => (
              <li
                key={t}
                className="flex items-start gap-2.5 rounded-xl border border-border bg-card px-4 py-3"
              >
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-foreground/85">{t}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-95"
            >
              <MessageCircle className="h-4 w-4" /> Get Kidney Consultation
            </a>
            <a
              href="#appointment"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-primary hover:border-primary/40"
            >
              Book Visit <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Stethoscope, t: "Specialist Consults", d: "Targeted nephrology evaluation" },
              { icon: Droplets, t: "Dialysis Support", d: "Plans tailored to each patient" },
              { icon: Microscope, t: "Renal Biopsy", d: "Detailed kidney diagnosis" },
              { icon: HeartPulse, t: "Transplant Care", d: "Pre & post-transplant follow-up" },
            ].map((c) => (
              <div
                key={c.t}
                className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-soft text-accent">
                  <c.icon className="h-5 w-5" />
                </span>
                <div className="mt-4 font-semibold text-primary">{c.t}</div>
                <div className="text-xs text-muted-foreground mt-1 leading-relaxed">{c.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Services ---------- */
const SERVICES = [
  {
    icon: Activity,
    title: "Glomerular Disease",
    desc: "Diagnosis and management of kidney filtering disorders, protein leakage, swelling, and related kidney conditions.",
  },
  {
    icon: HeartPulse,
    title: "Acute Kidney Injury",
    desc: "Evaluation and treatment of sudden kidney function decline due to infection, dehydration, medicines, or other causes.",
  },
  {
    icon: ShieldCheck,
    title: "Chronic Kidney Disease",
    desc: "Long-term care and monitoring for reduced kidney function, diabetes- and hypertension-related kidney disease.",
  },
  {
    icon: Droplets,
    title: "Dialysis Care",
    desc: "Guidance and care for patients requiring hemodialysis or dialysis-related support.",
  },
  {
    icon: Microscope,
    title: "Renal Biopsy",
    desc: "Consultation and evaluation for kidney biopsy when detailed diagnosis of kidney disease is required.",
  },
  {
    icon: Pill,
    title: "Renal Calculi (Kidney Stones)",
    desc: "Kidney stone consultation, prevention guidance, and ongoing kidney function monitoring.",
  },
  {
    icon: Stethoscope,
    title: "Kidney Transplant",
    desc: "Pre-transplant evaluation, post-transplant follow-up, medicine guidance, and long-term monitoring.",
  },
];

function Services() {
  return (
    <section id="services" className="section-pad bg-secondary/60">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Services</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-primary">
            Comprehensive Kidney Care, in One Place
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Specialised nephrology consultation across the full spectrum of kidney health —
            from prevention and early detection to advanced transplant care.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="group relative rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elevated)] hover:-translate-y-0.5 transition"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground shadow-[var(--shadow-soft)]">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display font-bold text-lg text-primary">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:gap-2.5 transition-all"
              >
                Consult now <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Guidance ---------- */
const GUIDANCE = [
  {
    title: "When to consult a nephrologist",
    points: [
      "Swelling in legs or face",
      "High creatinine or protein in urine",
      "Blood in urine or reduced urine output",
      "Uncontrolled BP or diabetes with kidney issues",
    ],
  },
  {
    title: "Before your appointment",
    points: [
      "Latest blood and urine reports",
      "Ultrasound or scan reports",
      "Current medicines list",
      "Discharge summary & previous records",
    ],
  },
  {
    title: "Dialysis patient guidance",
    points: [
      "Track weight, BP and urine output",
      "Follow dialysis schedule strictly",
      "Report breathlessness or swelling",
      "Flag fever, weakness or chest discomfort",
    ],
  },
  {
    title: "Transplant patient guidance",
    points: [
      "Never miss immunosuppressant doses",
      "Monitor creatinine regularly",
      "Avoid self-medication",
      "Consult promptly for fever or low urine output",
    ],
  },
  {
    title: "Kidney stone prevention",
    points: [
      "Maintain adequate daily hydration",
      "Follow personalised dietary advice",
      "Avoid self-medication for pain",
      "Evaluate any pain, fever or blood in urine",
    ],
  },
];

function Guidance() {
  return (
    <section id="guidance" className="section-pad">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Kidney Health Guidance</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-primary">
            Trusted Guidance for Better Kidney Health
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Quick reference notes the doctor shares with patients and families.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {GUIDANCE.map((g) => (
            <div
              key={g.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
            >
              <h3 className="font-display font-bold text-lg text-primary">{g.title}</h3>
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

/* ---------- Appointment ---------- */
function Appointment() {
  const [form, setForm] = useState({
    name: "", phone: "", age: "", concern: "", date: "", time: "",
  });

  const onChange = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg =
`Hello Doctor, I want to book an appointment.

Patient Name: ${form.name}
Phone: ${form.phone}
Age: ${form.age}
Concern: ${form.concern}
Preferred Date: ${form.date}
Preferred Time: ${form.time}

Please confirm availability.`;
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="appointment" className="section-pad bg-secondary/60">
      <div className="container-x grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
        <div className="rounded-3xl border border-border bg-card p-6 md:p-9 shadow-[var(--shadow-elevated)]">
          <span className="eyebrow">Book an Appointment</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-primary">
            Request a Consultation
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Fill in the details — we'll open WhatsApp with your request pre-filled to confirm
            your slot.
          </p>

          <form onSubmit={submit} className="mt-7 grid sm:grid-cols-2 gap-4">
            <Field label="Patient Name" required>
              <input required value={form.name} onChange={onChange("name")}
                className="form-input" placeholder="Full name" />
            </Field>
            <Field label="Phone Number" required>
              <input required type="tel" value={form.phone} onChange={onChange("phone")}
                className="form-input" placeholder="10-digit number" />
            </Field>
            <Field label="Age">
              <input value={form.age} onChange={onChange("age")} className="form-input" placeholder="Years" />
            </Field>
            <Field label="Preferred Date">
              <input type="date" value={form.date} onChange={onChange("date")} className="form-input" />
            </Field>
            <Field label="Preferred Time">
              <input type="time" value={form.time} onChange={onChange("time")} className="form-input" />
            </Field>
            <Field label="Main Concern" full>
              <textarea
                value={form.concern}
                onChange={onChange("concern")}
                rows={3}
                className="form-input resize-none"
                placeholder="Briefly describe your symptoms or reason for visit"
              />
            </Field>
            <div className="sm:col-span-2 flex flex-wrap gap-3 pt-2">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-soft)] hover:opacity-90 transition"
              >
                <MessageCircle className="h-4 w-4" /> Send via WhatsApp
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
          <ContactCard
            icon={Phone}
            label="Call the clinic"
            value={PHONE_DISPLAY}
            href={`tel:${PHONE}`}
            cta="Call Now"
          />
          <ContactCard
            icon={MessageCircle}
            label="WhatsApp the doctor"
            value={PHONE_DISPLAY}
            href={waLink()}
            cta="WhatsApp Now"
            accent
            external
          />
          <ContactCard
            icon={Mail}
            label="Email the clinic"
            value={EMAIL}
            href={`mailto:${EMAIL}`}
            cta="Send Email"
          />
          <ContactCard
            icon={Instagram}
            label="Follow on Instagram"
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

/* ---------- Location ---------- */
function Location() {
  const mapsQuery = encodeURIComponent("RK Kidney Care Clinic Vidyaranyapura Bengaluru");
  return (
    <section id="location" className="section-pad">
      <div className="container-x grid lg:grid-cols-2 gap-8 items-stretch">
        <div className="rounded-3xl border border-border bg-card p-7 md:p-9 shadow-[var(--shadow-soft)] flex flex-col">
          <span className="eyebrow">Visit the Clinic</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-primary">
            RK Kidney Care Clinic
          </h2>
          <div className="mt-6 flex items-start gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
              <MapPin className="h-5 w-5" />
            </span>
            <p className="text-sm text-muted-foreground leading-relaxed">{ADDRESS}, India</p>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
            <a href={`tel:${PHONE}`} className="flex items-center gap-2 text-foreground hover:text-primary">
              <Phone className="h-4 w-4 text-accent" /> {PHONE_DISPLAY}
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-foreground hover:text-primary truncate">
              <Mail className="h-4 w-4 text-accent" /> {EMAIL}
            </a>
          </div>

          <div className="mt-auto pt-7 flex flex-wrap gap-3">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-95"
            >
              <MapPin className="h-4 w-4" /> Get Directions
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-primary hover:border-primary/40"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Appointment
            </a>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden border border-border bg-card shadow-[var(--shadow-soft)] min-h-[360px]">
          <iframe
            title="RK Kidney Care Clinic location"
            src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
            className="w-full h-full min-h-[360px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
const REVIEWS = [
  "Dr. Rajesh Kiran explained the condition clearly and guided us well through the treatment process.",
  "The consultation was thorough and the doctor took time to answer every question we had about dialysis.",
  "Felt reassured throughout the kidney transplant follow-up — the guidance has been clear and consistent.",
];

function Testimonials() {
  return (
    <section className="section-pad bg-secondary/60">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Patient Voices</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-primary">
            What Patients Share
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Sample placeholders — to be replaced with real, consented patient reviews.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {REVIEWS.map((r, i) => (
            <figure
              key={i}
              className="relative rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
            >
              <Quote className="h-7 w-7 text-accent/60" />
              <blockquote className="mt-3 text-sm text-foreground/85 leading-relaxed">
                "{r}"
              </blockquote>
              <figcaption className="mt-5 flex items-center justify-between text-xs">
                <span className="font-semibold text-primary">Patient Review</span>
                <span className="rounded-full bg-muted px-2 py-1 text-muted-foreground">Sample</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
const FAQS = [
  {
    q: "When should I consult a nephrologist?",
    a: "You should consult if you have high creatinine, protein in urine, blood in urine, swelling, reduced urine output, uncontrolled BP, diabetes-related kidney issues, or recurrent kidney stones.",
  },
  {
    q: "Can I book an appointment through WhatsApp?",
    a: "Yes, you can directly book an appointment through WhatsApp or by calling the clinic.",
  },
  {
    q: "What reports should I bring?",
    a: "Bring blood reports, urine reports, ultrasound/scan reports, prescription, current medicines, discharge summary, and any previous kidney-related records.",
  },
  {
    q: "Does the doctor provide kidney transplant consultation?",
    a: "Yes, consultation is available for kidney transplant evaluation and post-transplant follow-up.",
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
            Quick answers to help you prepare for your visit. For anything specific, please
            reach out directly.
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
      <div className="container-x py-14 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-accent-foreground">
              <Stethoscope className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <div className="font-display font-bold text-lg">Dr. Rajesh Kiran</div>
              <div className="text-xs text-primary-foreground/70">
                Consultant Nephrologist & Transplant Physician
              </div>
            </div>
          </div>
          <p className="mt-5 text-sm text-primary-foreground/75 leading-relaxed">
            Expert kidney care at RK Kidney Care Clinic — focused on accurate diagnosis,
            evidence-based treatment, and compassionate long-term follow-up.
          </p>
        </div>

        <div>
          <h4 className="font-display font-bold text-sm uppercase tracking-wider text-primary-foreground/80">
            Quick Links
          </h4>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {[
              ["Home", "#top"], ["About", "#about"], ["Services", "#services"],
              ["Appointment", "#appointment"], ["Location", "#location"], ["Contact", "#appointment"],
            ].map(([l, h]) => (
              <li key={l}><a href={h} className="text-primary-foreground/80 hover:text-accent">{l}</a></li>
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
              <a href={`https://instagram.com/${INSTAGRAM}`} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                @{INSTAGRAM}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" />
              <span className="text-primary-foreground/80">RK Kidney Care Clinic, Vidyaranyapura, Bengaluru</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container-x py-6 flex flex-col md:flex-row gap-4 justify-between text-xs text-primary-foreground/70">
          <p>© {new Date().getFullYear()} RK Kidney Care Clinic. All rights reserved.</p>
          <p className="max-w-2xl md:text-right">
            <strong className="text-primary-foreground/90">Medical Disclaimer:</strong> This
            website is for information and appointment booking only. It does not provide
            emergency medical care. For emergencies, visit the nearest hospital immediately.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Floating Actions ---------- */
function FloatingActions() {
  return (
    <div className="fixed z-40 right-4 bottom-4 md:right-6 md:bottom-6 flex flex-col gap-3">
      <a
        href={`tel:${PHONE}`}
        aria-label="Call clinic"
        className="md:hidden grid h-[52px] w-[52px] place-items-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-elevated)] hover:scale-105 transition"
      >
        <Phone className="h-5 w-5" />
      </a>
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp appointment"
        className="grid h-[56px] w-[56px] place-items-center rounded-full bg-accent text-accent-foreground shadow-[var(--shadow-elevated)] hover:scale-105 transition relative"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute inset-0 rounded-full animate-ping bg-accent/40" aria-hidden />
      </a>
    </div>
  );
}
