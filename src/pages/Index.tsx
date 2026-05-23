import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import randomLeadsImg from "@/gallery/randomLeads.jpeg";
import waitingResultsImg from "@/gallery/WaitingForResults.jpeg";
import systemizedFlowImg from "@/gallery/SystemizedFlow.jpeg";

type FormData = {
  name: string;
  id: string;
  phone: string;
  owner: "" | "yes" | "no";
};

const realityPoints = [
  "Empty consultation slots despite spending lakhs on ads",
  "Enquiries that ask only about price, never book",
  "50-70% no-show rates wasting your team's time",
  "Random walk-ins with no follow-up system",
  "Feast-or-famine months (30 consultations one month, 5 the next)",
  "Agencies that dump low-quality leads and disappear",
];

const systemHighlights = [
  {
    titlePrefix: "THIS ISN'T JUST ANOTHER",
    accent: "We'll Get You Leads",
    titleSuffix: "AGENCY SERVICE.",
    body:
      "Most agencies dump random Facebook leads into your inbox and disappear. IVF Pipeline System does something different.\n\nWe build a structured patient journey that brings emotionally ready, financially qualified couples straight to your consultation room.",
    cardTitle: "Random Leads",
    cardNote: "Inbox chaos + price shoppers",
    cardClass: "from-slate-900 via-slate-800 to-blue-900",
    image: randomLeadsImg,
    imageAlt: "Random leads cluttering inbox",
  },
  {
    titlePrefix: "THIS IS NOT A",
    accent: "Run Ads And Hope",
    titleSuffix: "PROGRAM.",
    body:
      "We don't rely on luck, boosted posts, or broad targeting.\n\nWe engineer a complete appointment pipeline using data, psychology, and trust-building touchpoints so every enquiry moves closer to your clinic, step-by-step.",
    cardTitle: "Waiting For Results",
    cardNote: "Low intent. Slow follow-up.",
    cardClass: "from-slate-900 via-indigo-900 to-slate-900",
    image: waitingResultsImg,
    imageAlt: "Waiting for results",
  },
  {
    titlePrefix: "THIS IS A FULL-STACK",
    accent: "Patient-Appointment",
    titleSuffix: "SYSTEM.",
    body:
      "A complete, end-to-end infrastructure built to help IVF clinics move from unpredictable walk-ins to stable, systemised, high-quality consultations every month — without chasing referrals or discount-driven marketing.",
    cardTitle: "Systemised Flow",
    cardNote: "Booked consultations, every week.",
    cardClass: "from-slate-900 via-slate-800 to-emerald-900",
    image: systemizedFlowImg,
    imageAlt: "Systemized flow in clinic",
  },
];

const testimonials = [
  {
    quote:
      "We struggled for months with random enquiries asking only about cost. After switching to IVF Pipeline System, our calendar finally filled with serious, emotionally ready couples. In the first 30 days alone, we booked 42 high-quality consultations.",
    name: "Dr. Nivedita Rao",
    title: "IVF Specialist, Bengaluru",
  },
  {
    quote:
      "The biggest shift was trust. Couples arrived with clarity, confidence, and far fewer doubts. The WhatsApp nurturing system alone improved our show-up rates from 38% to 81%. This is the most reliable appointment engine we've used.",
    name: "Dr. Kaustubh Patel",
    title: "Fertility Center Director, Ahmedabad",
  },
  {
    quote:
      "We had tried agencies before, but nothing felt structured. IVF Pipeline System changed everything. The funnel built more trust than any ad we've run. We recorded 3x more cycle-start enquiries in our second month.",
    name: "Dr. Meera Vinay",
    title: "Senior Embryologist, Mumbai",
  },
  {
    quote:
      "The quality of consultations went up drastically. These weren't window shoppers — they were couples actively seeking IVF treatment. Our team finally had predictable appointments every week.",
    name: "Dr. Anil Verma",
    title: "Fertility Surgeon, Pune",
  },
];

const components = [
  {
    icon: "🎯",
    title: "Clinic-Specific Patient Targeting",
    body:
      "We create treatment-specific campaigns for:\n• IVF cycles\n• IUI treatments\n• Egg freezing\n• Donor programs\n• ICSI procedures\n\nHyper-targeted to couples in your city who are actively searching for fertility solutions right now.",
  },
  {
    icon: "📄",
    title: "Trust-Building Funnel",
    body:
      "Done-for-you landing pages tailored for medical psychology and trust-building. No generic templates.\n\nDesigned specifically to:\n• Address fears and concerns\n• Build credibility\n• Pre-qualify based on budget and readiness\n• Guide couples toward booking (not just clicking)",
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
      "We filter every patient based on:\n• Budget (can they afford treatment?)\n• Treatment need (right fit for your clinic?)\n• City/location (within your service area?)\n• Medical history (qualified candidate?)\n• Readiness to book (timeline: immediate, 3 months, 6 months?)\n\nOnly serious, qualified couples reach your calendar.",
  },
  {
    icon: "📅",
    title: "Appointment Calendar Integration",
    body:
      "High-intent leads get booked directly into your clinic calendar.\n\nAutomated reminders sent via:\n• WhatsApp (24 hours before)\n• SMS (1 hour before)\n• Email confirmation\n\nReduces no-shows from 50% to 15-20%.",
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
    title: "Deep Clinic Alignment Check",
    body:
      "We review whether your clinic's values, ethics, and treatment approach align with our trust-building patient pathway.\n\nSince IVF decisions are emotional and sensitive, we only partner with clinics committed to care, clarity, and ethical communication.",
  },
  {
    title: "Growth Positioning Opportunities",
    body:
      "We examine your clinic's current visibility, strengths, and differentiation within your market.\n\nIf your positioning is unclear or outdated, conversions suffer.\n\nYou don't need fancy branding — just clarity and a strong treatment message.",
  },
  {
    title: "Quality vs. Quantity Focus",
    body:
      "We prefer clinics that want consistent, meaningful appointments — not low-quality lead dumps or bargain hunters.\n\nIf your focus is long-term growth and real IVF cycle starts, our system will be an excellent fit.\n\nClients remember impact, not just money.",
  },
];

const readinessChecks = [
  "You want more IVF consultations every month without increasing your current ad spend.",
  "Your team struggles to follow up consistently, and you want a system that does it reliably.",
  "You want a predictable, structured IVF appointment system instead of random leads.",
  "You want clarity on exactly where your clinic is losing enquiries in the patient journey.",
  "You want to improve your enquiry → consultation → walk-in conversions with a proven framework.",
  "You want a done-for-you system so your clinic grows even when you're not monitoring everything yourself.",
];

const faqs = [
  {
    q: "How is the IVF Pipeline System different from regular agencies?",
    a: "We Focus On Booked IVF Consultations, Not Random Leads, Using A Complete Patient-to-Appointment Pipeline That Pre-Qualifies Every Couple Before They Reach You.",
  },
  {
    q: "How soon can we expect results?",
    a: "Most Clinics Start Receiving Qualified Consultation Bookings Within 7-14 Days Of Launch, With 20-30+ Monthly Appointments By Week 3-4.",
  },
  {
    q: "Will you work with other IVF clinics in my city?",
    a: "No. We Only Work With 1-2 Clinics Per City To Protect Your Market Share And Ensure You're Not Competing With Our Own Clients.",
  },
  {
    q: "What if it doesn't work for my clinic?",
    a: "We Guarantee 20+ Qualified Appointments In Your First 30 Days, Or We Keep Working At No Additional Cost Until We Hit That Number.",
  },
  {
    q: "Do I need a website or marketing experience?",
    a: "No. We Build The Complete System For You — Landing Pages, Follow-Up Automation, Calendar Integration — You Just Show Up For Consultations.",
  },
  {
    q: "What type of couples will this attract?",
    a: "Emotionally Ready, Financially Qualified Couples Who Are Actively Searching For IVF Treatment And Ready To Book Within 30-90 Days.",
  },
  {
    q: "Why is the IVF Pipeline System™ effective?",
    a: "It's Built On Data From 50+ IVF Clinics, Uses Patient Psychology At Every Step, And Pre-Qualifies Based On Budget, Timeline, And Readiness — Not Just Random Clicks.",
  },
  {
    q: "Is there a long-term contract?",
    a: "We Recommend 90 Days To Fully Optimize Your Pipeline, But We Offer Flexible Options Based On Your Clinic's Needs And Commitment Level.",
  },
  {
    q: "Do you guarantee IVF cycle starts?",
    a: "We Guarantee Consultation Bookings (20-30+/Month). Cycle Conversions Depend On Your Consultation Quality, Pricing, And Patient Experience.",
  },
  
];

const Index = () => {
  const navigate = useNavigate();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [errors, setErrors] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    id: "",
    phone: "",
    owner: "yes",
  });
  const sheetsWebhookUrl =
    "https://script.google.com/macros/s/AKfycbwOiA3f3FAlMbl66C_y7EoFLgU7B4Ogb8c4E2t5mbF0QdtPlOgf4AVZLEJrEJr85X2s/exec";
  const isLocalhost =
    typeof window !== "undefined" &&
    (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1");
  const webhookUrl = isLocalhost
    ? "https://n8n.autonetlabs.com/webhook/lead-notify"
    : "/api/lead";
  console.log("Webhook env:", webhookUrl);

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
    try {
      const ownerLabel = formData.owner === "yes" ? "Yes" : "No";
      const leadId = `lead_${Date.now()}_${Math.floor(1000 + Math.random() * 9000)}`;
      const receivedTime = new Date().toLocaleString("en-IN", {
        dateStyle: "medium",
        timeStyle: "short",
      });
      const leadPayload = {
        lead_id: leadId,
        received_time: receivedTime,
        full_name: formData.name.trim(),
        email: formData.id.trim(),
        phone: formData.phone.trim(),
        status: "New Lead",
        qna_simple: `owner: ${ownerLabel}`,
        whatsapp_message:
          `*🚨 NEW LEAD ENQUIRY - IVF PIPELINE SYSTEM!*\n\n` +
          `🔥 Status: New Lead\n` + 
          `🕒 Received Time: ${receivedTime}\n` +
          `👤 Name: ${formData.name.trim()}\n` +
          `📞 Phone: ${formData.phone.trim()}\n` +
          `📧 Email: ${formData.id.trim()}\n` +
          `🏥 Decision Maker: ${ownerLabel}\n`,
      };
      console.log("[LeadCapture] Payload", leadPayload);
      const leadResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(leadPayload),
      });
      if (!leadResponse.ok) {
        const leadErrorBody = await leadResponse.text().catch(() => "");
        throw new Error(`Lead webhook failed (${leadResponse.status}) ${leadErrorBody}`);
      }

      const payload = JSON.stringify({
        fullName: formData.name.trim(),
        id: formData.id.trim(),
        phone: formData.phone.trim(),
        isClinicOwner: formData.owner === "yes",
        source: "website-enquiry",
      });

      await fetch(sheetsWebhookUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: payload,
      }).catch((error) => {
        console.error("[LeadCapture] Sheets webhook failed", error);
      });

      setIsFormOpen(false);
      navigate("/book");
    } catch (error) {
      console.error("[LeadCapture] Submission failed", error);
      setErrors("Lead submission failed. Please try again in a few seconds.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderCtaNote = (textClass: string, accentClass: string) => (
    <div className={`mt-3 text-center text-xs ${textClass}`}>
      <div className={`font-semibold ${accentClass}`}>Hurry Up Only 3 slots left ....</div>
      <div>Only for IVF clinics &amp; fertility centers serious about scaling with a structured appointment system.</div>
    </div>
  );

  return (
    <div className="bg-white text-slate-900">
      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0B1534] via-[#0E1F50] to-[#0B3B98] text-white">
          <div className="mx-auto flex min-h-[88vh] max-w-6xl flex-col items-center justify-center gap-6 px-4 py-16 text-center">
            <div className="space-y-6">
              <div className="mx-auto w-fit rounded-full bg-[#365CF5] px-5 py-2 text-sm font-semibold text-white shadow-lg">
                Attention IVF Clinic Owners
              </div>
              <h1
                className="mx-auto max-w-4xl text-4xl font-black leading-tight tracking-tight drop-shadow-[0_6px_18px_rgba(0,0,0,0.45)] sm:text-6xl lg:text-7xl"
                style={{ textWrap: "balance" }}
              >
                <span className="block">
                  We help <span className="text-orange-400">IVF CLINICS</span> book{" "}
                  <span className="text-blue-300">20–30+</span> qualified consultations per month
                </span>
                <span className="block">with our proven</span>
                <span className="block text-orange-400 sm:whitespace-nowrap">IVF Pipeline System</span>
              </h1>

              <p className="handwritten text-xl font-semibold text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.45)] sm:text-2xl"></p>
              

              <p
                className="mx-auto max-w-3xl text-lg font-semibold leading-relaxed text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.45)] sm:text-xl"
                style={{ textWrap: "balance" }}
              >
                <span className="block font-black">No random leads. No tire-kickers.</span>
                <span className="block">
                  Just emotionally-ready, <span className="font-black">financially-qualified</span>
                </span>
                <span className="block">couples booked directly into your calendar.</span>
              </p>

              <div className="mx-auto w-fit rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 shadow-sm">
                Expected revenue impact: ₹15L+ per month
              </div>

             

              <div className="flex flex-col items-center gap-3">
                <button
                  onClick={openForm}
                  className="cta-button cta-shine w-full max-w-xl bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 text-xl font-black text-white hover:brightness-95 focus:outline-none focus:ring-4 focus:ring-orange-200"
                >
                  Book Your Call Now
                </button>
                
                {renderCtaNote("text-white/80", "text-orange-300")}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F8F9FA] py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white px-6 py-10 text-center shadow-xl sm:px-10">
              <div className="mx-auto mb-5 flex w-fit items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 shadow-sm">
                Reality Check
              </div>
              <h2 className="text-3xl font-extrabold sm:text-4xl">
                Every Couple Who Walks Into Your Clinic Is Carrying a Dream They're Afraid to Lose.
              </h2>
              <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-orange-400 via-orange-300 to-blue-400" />
              <p className="mt-5 text-xl leading-8 text-slate-700">
                They arrive with hope in their eyes and fear in their hearts, trusting you with the dream they hold closest to their soul.
              </p>
              <p className="mt-4 text-xl leading-8 text-slate-700">
                While other agencies chase numbers, we focus on the human journey — guiding each couple gently from their first moment of courage to the moment they walk into your clinic feeling safe, seen, and supported.
              </p>

              <div className="mt-8 space-y-3 text-center text-lg leading-8 text-slate-700">
                <p className="text-lg font-bold text-slate-700">But here's the reality most IVF clinic owners face:</p>
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
                  className="cta-button cta-shine bg-[#0066FF] text-white hover:bg-[#0a58d8]"
                >
                  Book Your Call Now
                </button>
              </div>
              {renderCtaNote("text-slate-600", "text-orange-600")}
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold uppercase tracking-wide text-slate-800">The IVF Pipeline System™</h3>
            </div>

            <div className="mt-8 space-y-12">
              {systemHighlights.map((item, index) => {
                const isReversed = index % 2 === 1;
                return (
                  <div key={item.titlePrefix} className="grid gap-8 md:grid-cols-2 md:items-center">
                    <div className={isReversed ? "md:order-2" : ""}>
                      <h3 className="text-2xl font-black text-slate-900">
                        {item.titlePrefix}{" "}
                        <span className="handwritten text-blue-600">{item.accent}</span>{" "}
                        {item.titleSuffix}
                      </h3>
                      <p className="mt-4 whitespace-pre-line text-base leading-7 text-slate-700">{item.body}</p>
                    </div>
                    <div className={isReversed ? "md:order-1" : ""}>
                      <div className={`relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br ${item.cardClass} shadow-lg`}>
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
                THIS IS A FULL STACK <span className="text-blue-600">IVF BUSINESS-BUILDING SYSTEM.</span>
              </h3>
              <p className="mt-4 text-lg text-slate-700">
                Because fertility decisions aren’t made through casual ads. They’re shaped by a structured, emotionally intelligent system that transforms online interest into real appointments with your clinic.
              </p>
            </div>

            <div className="mt-10 flex justify-center">
              <button
                onClick={openForm}
                className="cta-button cta-shine bg-[#0066FF] text-white hover:bg-[#0a58d8]"
              >
                Book Your Call Now
              </button>
            </div>
            {renderCtaNote("text-slate-600", "text-orange-600")}
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#F9FBFF] py-16">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-200/40 blur-3xl" />
            <div className="absolute -bottom-24 right-10 h-64 w-64 rounded-full bg-orange-200/40 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-6xl px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 shadow-sm">
                ⚠️ Important
              </div>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                We're Extremely Selective About Which IVF Clinics We Work With
              </h2>
              <p className="mt-3 text-lg text-slate-700">Currently, We Only Accept Clinics That Meet Our Top 10% Standards</p>
              <p className="mt-3 text-base text-slate-600">
                Predictable IVF growth only works when we partner with clinics who are serious about patient care and system-driven results.
                This is how we evaluate if your clinic is the right fit:
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {qualificationBoxes.map((item, idx) => (
                <div key={item.title} className="rounded-2xl bg-gradient-to-br from-blue-100/70 via-white to-orange-100/70 p-[1px] shadow-lg">
                  <div className="rounded-2xl bg-white p-8">
                    <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                      <span>Fit Check</span>
                      <span className="text-blue-600">0{idx + 1}</span>
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
                className="cta-button cta-shine bg-[#0066FF] text-white hover:bg-[#0a58d8]"
              >
                Book Your Call Now
              </button>
            </div>
            {renderCtaNote("text-slate-600", "text-orange-600")}
          </div>
        </section>

        {/* <section className="bg-gradient-to-br from-[#0B1534] via-[#0E1F50] to-[#0B3B98] py-16 text-white">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-center text-3xl font-bold sm:text-4xl">Real IVF Clinics. Real Results.</h2>
            <p className="mt-3 text-center text-base text-slate-200">
              Hear directly from IVF clinic leaders using the IVF Pipeline System.
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

        

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-center text-4xl font-black tracking-tight sm:text-5xl">
              APPLY FOR THIS <span className="text-blue-600">ONLY IF…</span>
            </h2>
            <p className="mt-3 text-center text-lg text-slate-700 sm:text-xl">
              We don't care how big your clinic is. We care how committed you are. If you want predictable growth, we have the system to ignite it.
            </p>
            <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-2">
              {readinessChecks.map((item, idx) => (
                <div key={item} className="rounded-2xl border-2 border-blue-500/40 bg-white p-4 shadow-sm">
                  <div className="flex items-start gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-md bg-blue-600 text-base font-bold text-white">
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
                className="cta-button cta-shine w-full max-w-2xl rounded-xl bg-[#365CF5] text-white hover:bg-[#2746c9]"
              >
                Book Your Call Now
              </button>
            </div>
            {renderCtaNote("text-slate-600", "text-orange-600")}
          </div>
        </section>

        <section id="faq" className="bg-[#0F1A35] py-16 text-white">
          <div className="mx-auto max-w-5xl px-4">
            <h2 className="text-center text-3xl font-bold sm:text-4xl">Frequently Asked Questions</h2>
            <div className="mt-10 space-y-3">
              {faqs.map((item, idx) => {
                const isOpen = activeFAQ === idx;
                return (
                  <div key={item.q} className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
                    <button
                      onClick={() => setActiveFAQ(isOpen ? -1 : idx)}
                      className="flex w-full items-center justify-between px-6 py-4 text-left text-white"
                    >
                      <span className="text-lg font-semibold">{item.q}</span>
                      <span className="text-2xl">{isOpen ? "−" : "+"}</span>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 text-base leading-7 text-slate-200">{item.a}</div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="mt-10 flex justify-center">
              <button
                onClick={openForm}
                className="cta-button cta-shine bg-white text-[#0B1534] hover:shadow-lg"
              >
                Book Your Call Now
              </button>
            </div>
            {renderCtaNote("text-white/80", "text-orange-300")}
          </div>
        </section>

        <section className="bg-gradient-to-br from-[#0B1534] via-[#0E1F50] to-[#0B3B98] py-16 text-white">
          <div className="mx-auto max-w-5xl px-4 text-center">
            <h2 className="text-4xl font-bold sm:text-5xl">You're One Step Away From Becoming The Clinic That Gives Hope a Real Chance</h2>
            <p className="mt-4 text-xl text-slate-100">
              Most clinics lose couples not because they lack expertise... but because worried, emotional families never get the clarity, confidence, and guidance they desperately need.
              With our system, every couple feels supported, understood, and ready to take their next step with you.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3">
              <button
                onClick={openForm}
                className="cta-button cta-shine w-full max-w-md bg-white text-xl font-semibold text-[#0B1534] hover:shadow-xl"
              >
                Book Your Call Now
              </button>
              {renderCtaNote("text-white/80", "text-orange-300")}
              
              <p className="text-xs italic text-slate-300">
                Your application will be carefully reviewed. If your clinic isn't a suitable fit, we'll let you know honestly and respectfully.
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
                    placeholder="Dr. [Your Name] or [Your Full Name]"
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
                  <div className="text-sm font-semibold text-slate-800">Are you the owner of IVF clinic / fertility center ?*</div>
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
                      Our system/program/service is not applicable to you at this moment, thanks for your time.
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
