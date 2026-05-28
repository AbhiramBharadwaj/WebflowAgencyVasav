import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import randomLeadsImg from "@/gallery/randomLeads.jpeg";
import waitingResultsImg from "@/gallery/WaitingForResults.jpeg";

type FormData = {
  name: string;
  id: string;
  phone: string;
  owner: "" | "yes" | "no";
};

const realityPoints = [
  "Website projects getting delayed for weeks with no clear updates",
  "Beautiful pages that still fail to generate qualified enquiries",
  "WordPress/plugin issues whenever small content edits are needed",
  "Post-launch dependency on developers for every tiny website change",
  "Inconsistent brand quality across sales pages and core website",
  "Agencies that design fast but ignore conversion strategy",
];

const systemHighlights = [
  {
    titlePrefix: "THIS ISN'T JUST ANOTHER",
    accent: "Pretty Website",
    titleSuffix: "AGENCY SERVICE.",
    body:
      "Most website projects focus on visuals and ignore business outcomes. Vasav's Webflow Launch System starts with positioning and conversion flow first.\n\nSo your site doesn't just look premium. It helps you attract better inbound leads and convert more visitors into discovery calls.",
    cardTitle: "Looks Good, Doesn't Convert",
    cardNote: "Design without strategy",
    cardClass: "from-slate-900 via-slate-800 to-blue-900",
    image: randomLeadsImg,
    imageAlt: "Website that looks good but does not convert",
  },
  {
    titlePrefix: "THIS IS NOT A",
    accent: "Template And Disappear",
    titleSuffix: "PROGRAM.",
    body:
      "You get a clear process: discovery, structure, design, build, and handover. No confusion, no bloated setup, no random execution.\n\nEvery section is designed to reduce friction and build trust, so prospects move from interest to enquiry faster.",
    cardTitle: "Waiting For Launch",
    cardNote: "Delays, edits, rework",
    cardClass: "from-slate-900 via-indigo-900 to-slate-900",
    image: waitingResultsImg,
    imageAlt: "Waiting for website launch",
  },
];

const testimonials = [
  {
    quote:
      "We struggled for months with random enquiries asking only about cost. After switching to Webflow Launch System, our calendar finally filled with serious, emotionally ready clients. In the first 30 days alone, we booked 42 high-quality consultations.",
    name: " Nivedita Rao",
    title: "Webflow Specialist, Bangalore",
  },
  {
    quote:
      "The biggest shift was trust. Couples arrived with clarity, confidence, and far fewer doubts. The WhatsApp nurturing system alone improved our show-up rates from 38% to 81%. This is the most reliable appointment engine we've used.",
    name: " Kaustubh Patel",
    title: "Webflow Business Owner, Ahmedabad",
  },
  {
    quote:
      "We had tried agencies before, but nothing felt structured. Webflow Launch System changed everything. The funnel built more trust than any ad we've run. We recorded 3x more booking enquiries in our second month.",
    name: " Meera Vinay",
    title: "Senior Embryologist, Mumbai",
  },
  {
    quote:
      "The quality of consultations went up drastically. These weren't window shoppers — they were clients actively seeking Webflow development package. Our team finally had predictable appointments every week.",
    name: " Anil Verma",
    title: "Webflow Consultant, Pune",
  },
];

const components = [
  {
    icon: "🎯",
    title: "Webflow-Niche Audience Targeting",
    body:
      "We create service-specific campaigns for:\n• full Webflow development\n• pre-Webflow events\n• destination Webflows\n• decor & coordination\n• luxury Webflow development\n\nHyper-targeted to clients in your city who are actively searching for Webflow development services right now.",
  },
  {
    icon: "📄",
    title: "Trust-Building Funnel",
    body:
      "Done-for-you landing pages tailored for buyer psychology and trust-building. No generic templates.\n\nDesigned specifically to:\n• Address concerns and objections\n• Build credibility\n• Pre-qualify based on budget and readiness\n• Guide clients toward booking (not just clicking)",
  },
  {
    icon: "💬",
    title: "Lead Follow-Up by Trained Agents",
    body:
      "• Instant replies (within 5 minutes)\n• 40-60% faster conversions\n• Message + Call + WhatsApp automation\n• No lead left behind\n\nYour team focuses on consultations, we handle the follow-up.",
  },
  {
    icon: "✅",
    title: "Pre-Qualification System",
    body:
      "We filter every lead based on:\n• Budget range (right fit for your packages?)\n• Service need (right fit for your team?)\n• City/location (within your service area?)\n• Event timeline (qualified for your calendar?)\n• Readiness to book (immediate, 3 months, or 6 months)\n\nOnly serious, qualified clients reach your calendar.",
  },
  {
    icon: "📅",
    title: "Appointment Calendar Integration",
    body:
      "High-intent leads get booked directly into your calendar.\n\nAutomated reminders sent via:\n• WhatsApp (24 hours before)\n• SMS (1 hour before)\n• Email confirmation\n\nReduces no-shows from 50% to 15-20%.",
  },
  {
    icon: "📊",
    title: "Dedicated Growth Manager",
    body:
      "• Weekly optimization & scaling\n• Call quality audits\n• Performance reporting\n• Strategy adjustments\n\nYou get a dedicated partner, not just a vendor.",
  },
];

const qualificationBoxes = [
  {
    title: "Clear Offer & Positioning",
    body:
      "We first review your offer clarity, audience fit, and brand message before design starts.\n\nIf your positioning is vague, even a beautiful website will underperform.",
  },
  {
    title: "Fast Decision Readiness",
    body:
      "This sprint works best with founders and teams who can make decisions quickly.\n\nFast launch needs active collaboration, not long feedback loops.",
  },
  {
    title: "Premium Quality Focus",
    body:
      "We focus on businesses that value premium design and conversion quality, not cheap patchwork builds.\n\nIf long-term brand credibility matters, this is a strong fit.",
  },
];

const readinessChecks = [
  "You need a premium website delivered fast without endless delays.",
  "You want a site that supports conversion, not just aesthetics.",
  "You want to edit content yourself after launch.",
  "You want a predictable process instead of random execution.",
  "You want a Webflow partner who communicates clearly.",
  "You want your website to strengthen premium brand perception.",
];

const faqs = [
  {
    q: "Why Webflow instead of WordPress or custom code?",
    a: "Webflow gives you faster production, cleaner visual control, and easier day-to-day edits for your team without heavy plugin dependency.",
  },
  {
    q: "How quickly can we launch?",
    a: "Most projects can be launched in around 14 days once scope and content are finalized.",
  },
  {
    q: "Can we update the website ourselves after launch?",
    a: "Yes. You get a clean CMS setup and handover so your team can edit text, images, and content sections confidently.",
  },
  {
    q: "What if we need more changes after launch?",
    a: "Additional updates can be handled in follow-up sprints. Routine content changes can usually be managed by your team directly.",
  },
  {
    q: "Do you work only with specific industries?",
    a: "Mainly with founders, coaches, agencies, and service businesses that need premium positioning and conversion-focused pages.",
  },
  {
    q: "Is this only design and development, or strategy too?",
    a: "Both. Positioning and page structure are defined first, then design and Webflow development are executed end-to-end.",
  },
  {
    q: "Is there a long-term contract?",
    a: "No mandatory lock-in for the initial project. Ongoing support is optional.",
  },
  
];

const Index = () => {
  const navigate = useNavigate();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [errors, setErrors] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(-1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    id: "",
    phone: "",
    owner: "yes",
  });

  useEffect(() => {
    document.body.style.overflow = isFormOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isFormOpen]);

  const resetForm = () => {
    setFormData({
      name: "",
      id: "",
      phone: "",
      owner: "yes",
    });
    setErrors(null);
  };

  const openForm = () => {
    resetForm();
    setIsFormOpen(true);
  };

  const handleNext = async () => {
    if (isSubmitting) {
      return;
    }
    setErrors(null);
    if (!formData.name || !formData.id || !formData.phone) {
      setErrors("Please complete all required fields.");
      return;
    }
    if (!/^\+?\d{10,}$/.test(formData.phone.replace(/\s+/g, ""))) {
      setErrors("Phone number should include at least 10 digits.");
      return;
    }

    setIsSubmitting(true);
    setIsFormOpen(false);
    navigate("/book");
  };

  const renderCtaNote = (textClass: string, accentClass: string) => (
    <div className={`mt-3 text-center text-xs ${textClass}`}>
      <div className={`font-semibold ${accentClass}`}>Hurry Up Only 3 slots left ....</div>
      <div>Only for founders and teams serious about launching a premium, conversion-focused Webflow website.</div>
    </div>
  );

  return (
    <div className="editorial-page bg-white text-slate-900">
      <main>
        <section className="relative overflow-hidden bg-[#ecebe7] text-[#0b0b0c]">
          <div className="mx-auto flex min-h-[88vh] max-w-6xl flex-col items-center justify-center gap-6 px-4 py-16 text-center">
            <div className="space-y-6">
              <div className="editorial-kicker mx-auto w-fit">
                Attention Founders, Coaches &amp; Agencies
              </div>
              <h1
                className="mx-auto max-w-4xl text-4xl font-black leading-[0.96] tracking-tight sm:text-6xl lg:text-7xl"
                style={{ textWrap: "balance" }}
              >
                <span className="block">
                  We build <span className="editorial-marker">Webflow Websites</span> that
                </span>
                <span className="block">look expensive,</span>
                <span className="block">launch in 14 days,</span>
                <span className="block">and actually convert</span>
                <span className="block">with our proven</span>
                <span className="block sm:whitespace-nowrap">
                  <span className="editorial-marker">Webflow Launch System™</span>
                </span>
              </h1>

              <p className="handwritten text-xl font-semibold text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.45)] sm:text-2xl"></p>
              

              <p
                className="mx-auto max-w-3xl text-lg font-semibold leading-relaxed text-slate-700 sm:text-xl"
                style={{ textWrap: "balance" }}
              >
                <span className="block font-black text-[#19191b]">No slow timelines. No broken handovers.</span>
                <span className="block">
                  Just premium positioning, <span className="font-black">just high-quality execution</span>
                </span>
                <span className="block">and a site your team can edit without developer dependency.</span>
              </p>

              <div className="mx-auto w-fit rounded-full border border-[#d5d2ca] bg-[#f3f2ed] px-4 py-2 text-sm font-semibold text-[#222] shadow-sm">
                Premium quality. Fast delivery. Self-editable after launch.
              </div>

             

              <div className="flex flex-col items-center gap-3">
                <button
                  onClick={openForm}
                  className="cta-button cta-shine w-full max-w-xl text-xl font-black focus:outline-none focus:ring-4 focus:ring-black/20"
                >
                  Book Your Free Website Audit
                </button>
                
                {renderCtaNote("text-slate-600", "text-slate-800")}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#ecebe7] py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mx-auto max-w-4xl rounded-3xl border border-[#d5d2ca] bg-[#f7f6f2] px-6 py-10 text-center shadow-sm sm:px-10">
              <div className="editorial-kicker mx-auto mb-5 flex w-fit items-center gap-3">
                Reality Check
              </div>
              <h2 className="text-3xl font-extrabold sm:text-4xl">
                Most Businesses Don't Need Another Website. They Need One That Actually Performs.
              </h2>
              <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-[#f2d302]" />
              <p className="mt-5 text-xl leading-8 text-slate-700">
                Founders invest in websites expecting growth, but most projects become slow, bloated, and difficult to maintain after launch.
              </p>
              <p className="mt-4 text-xl leading-8 text-slate-700">
                The difference is not just design quality. It's structure, speed, and conversion-focused execution from day one.
              </p>

              <div className="mt-8 space-y-3 text-center text-lg leading-8 text-slate-700">
                <p className="text-lg font-bold text-slate-700">But here's the reality most teams face:</p>
                <div className="mx-auto flex max-w-2xl flex-col items-center gap-2">
                  {realityPoints.map((item) => (
                    <div
                      key={item}
                      className="flex w-full items-start justify-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-3 text-base font-semibold text-slate-700 shadow-sm"
                    >
                      <span className="mt-1 h-2 w-2 rounded-full bg-[#0066FF]" />
                      <span className="text-center">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <button
                  onClick={openForm}
                  className="cta-button cta-shine"
                >
                  Book Your Free Website Audit
                </button>
              </div>
              {renderCtaNote("text-slate-600", "text-orange-600")}
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold uppercase tracking-wide text-slate-800">The Webflow Launch System</h3>
            </div>

            <div className="mt-8 space-y-12">
              {systemHighlights.map((item, index) => {
                const isReversed = index % 2 === 1;
                return (
                  <div key={item.titlePrefix} className="grid gap-8 md:grid-cols-2 md:items-center">
                    <div className={isReversed ? "md:order-2" : ""}>
                      <h3 className="text-2xl font-black text-slate-900 leading-tight">
                        {item.titlePrefix}{" "}
                        <span className="editorial-marker">{item.accent}</span>{" "}
                        {item.titleSuffix}
                      </h3>
                      <p className="mt-4 whitespace-pre-line text-base leading-7 text-slate-700">{item.body}</p>
                    </div>
                    <div className={isReversed ? "md:order-1" : ""}>
                      <div className={`relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#d5d2ca] bg-gradient-to-br ${item.cardClass} shadow-sm`}>
                        <img
                          src={item.image}
                          alt={item.imageAlt}
                          className="absolute inset-0 h-full w-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />
                        <div className="relative z-10 flex h-full flex-col justify-between p-6 text-white">
                          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70"></div>
                          <div>
                            <div className="text-2xl font-black">{item.cardTitle}</div>
                            <div className="mt-2 text-sm text-white/80">{item.cardNote}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-2xl font-black text-slate-900 sm:text-3xl">
                THIS IS A FULL STACK <span className="editorial-marker">WEBSITE POSITIONING + BUILD SYSTEM.</span>
              </h3>
              <p className="mt-4 text-lg text-slate-700">
                Because high-converting websites are not built with templates alone. They come from clear positioning, thoughtful UX, and clean Webflow execution that supports real business outcomes.
              </p>
            </div>

            <div className="mt-10 flex justify-center">
              <button
                onClick={openForm}
                className="cta-button cta-shine"
              >
                Book Your Free Website Audit
              </button>
            </div>
            {renderCtaNote("text-slate-600", "text-orange-600")}
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#ecebe7] py-16">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-200/40 blur-3xl" />
            <div className="absolute -bottom-24 right-10 h-64 w-64 rounded-full bg-orange-200/40 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-6xl px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d5d2ca] bg-[#f3f2ed] px-4 py-2 text-sm font-semibold text-[#b42318] shadow-sm">
                ⚠️ Important
              </div>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                We're Selective About Which Projects We Take
              </h2>
              <p className="mt-3 text-lg text-slate-700">Currently, We Accept Only 3 Build Slots Per Month</p>
              <p className="mt-3 text-base text-slate-600">
                Fast, premium website outcomes only happen when the team is serious about execution and collaboration.
                This is how we evaluate fit:
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {qualificationBoxes.map((item, idx) => (
                <div key={item.title} className="rounded-2xl border border-[#d5d2ca] bg-[#f7f6f2] p-[1px] shadow-sm">
                  <div className="rounded-2xl bg-[#f7f6f2] p-8">
                    <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                      <span>Fit Check</span>
                      <span className="text-[#c23b22]">0{idx + 1}</span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-4 whitespace-pre-line text-slate-700">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <button
                onClick={openForm}
                className="cta-button cta-shine"
              >
                Book Your Free Website Audit
              </button>
            </div>
            {renderCtaNote("text-slate-600", "text-orange-600")}
          </div>
        </section>

        {/* <section className="bg-gradient-to-br from-[#0B1534] via-[#0E1F50] to-[#0B3B98] py-16 text-white">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-center text-3xl font-bold sm:text-4xl">Real Webflow Businesss. Real Results.</h2>
            <p className="mt-3 text-center text-base text-slate-200">
              Hear directly from Webflow development company leaders using the Webflow Launch System.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {testimonials.map((item) => (
                <div key={item.name} className="rounded-2xl border border-white/15 bg-white/10 p-8 shadow-lg backdrop-blur">
                  <p className="text-lg leading-relaxed text-slate-100">"{item.quote}"</p>
                  <div className="mt-5 font-semibold text-white">{item.name}</div>
                  <div className="text-sm text-slate-300">{item.title}</div>
                </div>
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <button
                onClick={openForm}
                className="cta-button cta-shine bg-white text-[#0B1534] hover:shadow-lg"
              >
                Book Your Free Strategy Call Now
              </button>
            </div>
            {renderCtaNote("text-white/80", "text-orange-300")}
          </div>
        </section> */}

        

        <section className="bg-[#ecebe7] py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-center text-4xl font-black tracking-tight sm:text-5xl">
              APPLY FOR THIS <span className="editorial-marker">ONLY IF…</span>
            </h2>
            <p className="mt-3 text-center text-lg text-slate-700 sm:text-xl">
              Team size doesn't matter. Clarity and execution speed do.
            </p>
            <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-2">
              {readinessChecks.map((item, idx) => (
                <div key={item} className="rounded-2xl border border-[#d5d2ca] bg-[#f7f6f2] p-4 shadow-sm">
                  <div className="flex items-start gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#111] text-base font-bold text-white">
                      {idx + 1}
                    </span>
                    <p className="text-lg font-semibold leading-snug text-slate-900">{item}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <button
                onClick={openForm}
                className="cta-button cta-shine w-full max-w-2xl rounded-xl"
              >
                Book Your Free Website Audit
              </button>
            </div>
            {renderCtaNote("text-slate-600", "text-orange-600")}
          </div>
        </section>

        <section id="faq" className="bg-[#ecebe7] py-16 text-[#111]">
          <div className="mx-auto max-w-5xl px-4">
            <h2 className="text-center text-3xl font-bold sm:text-4xl">Frequently Asked Questions</h2>
            <div className="mt-10 space-y-3">
              {faqs.map((item, idx) => {
                const isOpen = activeFAQ === idx;
                return (
                  <div key={item.q} className="overflow-hidden rounded-xl border border-[#d5d2ca] bg-[#f7f6f2]">
                    <button
                      onClick={() => setActiveFAQ(isOpen ? -1 : idx)}
                      className="flex w-full items-center justify-between px-6 py-4 text-left text-[#111]"
                    >
                      <span className="text-lg font-semibold">{item.q}</span>
                      <span className="text-2xl">{isOpen ? "−" : "+"}</span>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 text-base leading-7 text-slate-700">{item.a}</div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="mt-10 flex justify-center">
              <button
                onClick={openForm}
                className="cta-button cta-shine"
              >
                Book Your Free Website Audit
              </button>
            </div>
            {renderCtaNote("text-slate-600", "text-slate-800")}
          </div>
        </section>

        <section className="bg-[#ecebe7] py-16 text-[#111]">
          <div className="mx-auto max-w-5xl px-4 text-center">
            <h2 className="text-4xl font-bold sm:text-5xl">You're One Step Away From a Website That Sells Your Value Better</h2>
            <p className="mt-4 text-xl text-slate-700">
              Most businesses lose deals online not because their service is weak, but because their website fails to build trust fast enough.
              With this system, your website becomes a stronger sales asset, not a digital brochure.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3">
              <button
                onClick={openForm}
                className="cta-button cta-shine w-full max-w-md text-xl font-semibold hover:shadow-xl"
              >
                Book Your Free Website Audit
              </button>
              {renderCtaNote("text-slate-600", "text-slate-800")}
              
              <p className="text-xs italic text-slate-500">
                Your application will be carefully reviewed. If your project isn't the right fit, we'll tell you clearly and suggest next steps.
              </p>
            </div>
          </div>
        </section>
      </main>

      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={() => setIsFormOpen(false)} />
          <div className="relative z-10 w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
              <div>
                <div className="text-lg font-semibold text-slate-900">Quick Check Before Booking</div>
              </div>
              <button
                onClick={() => setIsFormOpen(false)}
                className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-600 hover:bg-slate-200"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 px-6 py-6">
              {errors && <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{errors}</div>}

              <div className="grid gap-4">
                <label className="space-y-2">
                  <span className="text-sm font-semibold text-slate-800">Full Name*</span>
                  <input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="[Your Name] or [Your Full Name]"
                    className="w-full rounded-lg border border-slate-200 px-3 py-3 text-sm focus:border-[#0066FF] focus:outline-none"
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-semibold text-slate-800">Email ID*</span>
                  <input
                    value={formData.id}
                    onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-slate-200 px-3 py-3 text-sm focus:border-[#0066FF] focus:outline-none"
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-semibold text-slate-800">Phone Number (WhatsApp)*</span>
                  <input
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 "
                    className="w-full rounded-lg border border-slate-200 px-3 py-3 text-sm focus:border-[#0066FF] focus:outline-none"
                  />
                  <p className="text-xs text-slate-500">We'll send appointment confirmation via WhatsApp</p>
                </label>

                <div className="space-y-3 rounded-lg bg-slate-50 p-4">
                  <div className="text-sm font-semibold text-slate-800">Are you the owner or decision-maker of the business?*</div>
                  <div className="grid gap-3 md:grid-cols-2">
                    {[
                      { label: "✅ Yes", value: "yes" },
                      { label: "⛔ No", value: "no" },
                    ].map((option) => (
                      <button
                        type="button"
                        key={option.value}
                        onClick={() => setFormData({ ...formData, owner: option.value as "yes" | "no" })}
                        className={`rounded-lg border px-3 py-3 text-left text-sm font-semibold transition ${
                          formData.owner === option.value ? "border-[#0066FF] bg-blue-50 text-[#0B1534]" : "border-slate-200 bg-white"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                  {formData.owner === "no" && (
                    <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
                      This program is designed for decision-makers. If you're a team member, please share this with your founder.
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center border-t border-slate-100 px-6 py-5">
              {formData.owner === "yes" ? (
                <button
                  onClick={handleNext}
                  disabled={isSubmitting}
                  className="cta-button cta-shine w-full max-w-sm bg-[#0066FF] text-white hover:bg-[#0a58d8] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "Submitting..." : "Sumit and Proceed"}
                </button>
              ) : (
                <button
                  onClick={() => setIsFormOpen(false)}
                  className="cta-button w-full max-w-sm bg-slate-200 text-slate-700 hover:bg-slate-300"
                >
                  Close
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
