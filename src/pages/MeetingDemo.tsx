import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import randomLeadsImg from "@/gallery/randomLeads.jpeg";
import waitingResultsImg from "@/gallery/WaitingForResults.jpeg";
import systemizedFlowImg from "@/gallery/SystemizedFlow.jpeg";

const realityPoints = [
  "Months or years of trying without success",
  "Uncertainty about IVF, IUI, or next steps",
  "Emotional stress and feeling alone in the process",
  "Concerns about cost and success rates",
  "Fear of procedures or side effects",
  "Need for a trusted fertility specialist to guide you",
];

const systemHighlights = [
  {
    titlePrefix: "PERSONALIZED",
    accent: "IVF CARE",
    titleSuffix: "FOR EVERY COUPLE.",
    body:
      "At MotherHood, Dr. Vinay designs protocols based on your medical history, age, and goals.\n\nExpect clear guidance, transparent options, and a plan you understand.",
    cardTitle: "Personalized Protocols",
    cardNote: "Tailored for your journey.",
    cardClass: "from-slate-900 via-slate-800 to-blue-900",
    image: randomLeadsImg,
    imageAlt: "Personalized IVF care",
  },
  {
    titlePrefix: "ADVANCED",
    accent: "LAB TECHNOLOGY",
    titleSuffix: "WITH ETHICAL PRACTICE.",
    body:
      "We use modern IVF techniques such as ICSI, PGT, and blastocyst culture while prioritizing safety, comfort, and transparency.",
    cardTitle: "Advanced Lab",
    cardNote: "Modern, careful, precise.",
    cardClass: "from-slate-900 via-indigo-900 to-slate-900",
    image: waitingResultsImg,
    imageAlt: "Advanced IVF lab care",
  },
  {
    titlePrefix: "COMPASSIONATE",
    accent: "SUPPORT",
    titleSuffix: "AT EVERY STEP.",
    body:
      "From your first consultation to pregnancy testing, our team provides counseling, check-ins, and 24/7 guidance so you feel supported and informed.",
    cardTitle: "Supportive Care",
    cardNote: "Guidance you can trust.",
    cardClass: "from-slate-900 via-slate-800 to-emerald-900",
    image: systemizedFlowImg,
    imageAlt: "Supportive care team",
  },
];

const testimonials = [
  {
    quote:
      "After years of trying, we finally felt understood. Dr. Vinay explained every step clearly and gave us hope again.",
    name: "Meera & Arjun",
    title: "Banglore",
  },
  {
    quote:
      "The care felt personal, not rushed. The team guided us with patience and we always knew what to expect next.",
    name: "Ritu & Karan",
    title: "Banglore",
  },
  {
    quote:
      "We were worried about cost and procedures, but the transparency made everything easier. Highly recommend MotherHood.",
    name: "Neha & Vikram",
    title: "Banglore",
  },
  {
    quote:
      "Dr. Vinay treated us like family. The emotional support mattered as much as the medical care.",
    name: "Isha & Rahul",
    title: "Banglore",
  },
];

const components = [
  {
    icon: "🎯",
    title: "Comprehensive Fertility Evaluation",
    body:
      "Thorough testing and medical review to understand the root cause of infertility and design the right plan.",
  },
  {
    icon: "📄",
    title: "Transparent Pricing Guidance",
    body:
      "Clear package breakdowns, optional add-ons, and EMI support so you can plan confidently.",
  },
  {
    icon: "💬",
    title: "Counseling & Emotional Support",
    body:
      "We understand the emotional toll. Our team provides guidance and reassurance throughout your journey.",
  },
  {
    icon: "✅",
    title: "Personalized Treatment Plans",
    body:
      "Every plan is tailored to your age, history, and fertility goals.",
  },
  {
    icon: "📅",
    title: "Modern IVF Lab",
    body:
      "State-of-the-art lab practices including ICSI, PGT, and blastocyst culture.",
  },
  {
    icon: "📊",
    title: "Post-Transfer Monitoring",
    body:
      "Careful monitoring after embryo transfer with timely follow-ups and support.",
  },
];

const qualificationBoxes = [
  {
    title: "Ethical, Patient-First Care",
    body:
      "We prioritize honesty, safety, and clarity at every step of the IVF process.",
  },
  {
    title: "Advanced Technology, Trusted Results",
    body:
      "Modern lab methods combined with careful, individualized treatment plans.",
  },
  {
    title: "Support Beyond Treatment",
    body:
      "Emotional counseling and ongoing guidance for couples and families.",
  },
];

const readinessChecks = [
  "You have been trying to conceive for 12+ months without success.",
  "You want a clear fertility evaluation and next-step guidance.",
  "You are considering IVF, IUI, or advanced fertility treatment options.",
  "You want transparent costs and realistic success expectations.",
  "You are ready to meet a trusted fertility specialist in Banglore.",
  "You want compassionate support for both partners throughout treatment.",
];

const faqs = [
  {
    q: "What is the success rate of IVF at MotherHood?",
    a: "Success rates vary by age and medical history. During your consultation, Dr. Vinay will review your case and share realistic expectations for your situation.",
  },
  {
    q: "How much does IVF cost?",
    a: "IVF packages are discussed transparently during consultation. We provide clear cost breakdowns and can share EMI options if needed.",
  },
  {
    q: "Is IVF painful?",
    a: "Most steps are not painful. Injections may cause mild discomfort, and egg retrieval is done under light sedation.",
  },
  {
    q: "How long does an IVF cycle take?",
    a: "A typical cycle takes 4–6 weeks from start of medication to embryo transfer, followed by a 10–14 day wait for pregnancy testing.",
  },
  {
    q: "Do you accept insurance?",
    a: "Coverage varies by provider. Our team can help you understand what your policy includes.",
  },
  {
    q: "What if IVF doesn't work the first time?",
    a: "Many couples need more than one cycle. We review the results, adjust the plan, and guide you on next steps.",
  },
  {
    q: "Are there side effects?",
    a: "IVF medications can cause temporary effects like bloating or mood changes. Serious complications are rare and monitored closely.",
  },
  {
    q: "How do we get started?",
    a: "Book a consultation with Dr. Vinay. We'll review your history, answer questions, and outline the best treatment path.",
  },
  
];

const Index = () => {
  const navigate = useNavigate();
  const [activeFAQ, setActiveFAQ] = useState(0);

  const openForm = () => {
    navigate("/bookingdemopage");
  };

  const renderCtaNote = (textClass: string, accentClass: string) => (
    <div className={`mt-3 text-center text-xs ${textClass}`}>
      <div className={`font-semibold ${accentClass}`}>Limited consultation slots this week.</div>
      <div>Private, confidential guidance with MotherHood in Banglore.</div>
    </div>
  );

  return (
    <div className="bg-white text-slate-900">
      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0B1534] via-[#0E1F50] to-[#0B3B98] text-white">
          <div className="mx-auto flex min-h-[88vh] max-w-6xl flex-col items-center justify-center gap-6 px-4 py-16 text-center">
            <div className="space-y-6">
              <div className="mx-auto w-fit rounded-full bg-[#365CF5] px-5 py-2 text-sm font-semibold text-white shadow-lg">
                MotherHood, Banglore
              </div>
              <h1
                className="mx-auto max-w-4xl text-4xl font-black leading-tight tracking-tight drop-shadow-[0_6px_18px_rgba(0,0,0,0.45)] sm:text-6xl lg:text-7xl"
                style={{ textWrap: "balance" }}
              >
                <span className="block">Struggling to Conceive? You're Not Alone.</span>
                <span className="block">
                  MotherHood in <span className="text-blue-300">Banglore</span> offers advanced care
                </span>
                <span className="block text-orange-400 sm:whitespace-nowrap">with Dr. Vinay.</span>
              </h1>

              <p className="handwritten text-xl font-semibold text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.45)] sm:text-2xl"></p>
              

              <p
                className="mx-auto max-w-3xl text-lg font-semibold leading-relaxed text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.45)] sm:text-xl"
                style={{ textWrap: "balance" }}
              >
                <span className="block font-black">Compassionate, ethical, and patient-first IVF care.</span>
                <span className="block">Clear guidance, advanced technology, and support at every step.</span>
                <span className="block">Book your consultation and start your journey today.</span>
              </p>

              <div className="mx-auto w-fit rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 shadow-sm">
                4.8/5 rating • 500+ success stories
              </div>

             

              <div className="flex flex-col items-center gap-3">
                <button
                  onClick={openForm}
                  className="cta-button cta-shine w-full max-w-xl bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 text-xl font-black text-white hover:brightness-95 focus:outline-none focus:ring-4 focus:ring-orange-200"
                >
                  Book Your Consultation
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
                We Understand
              </div>
              <h2 className="text-3xl font-extrabold sm:text-4xl">
                Fertility journeys can feel overwhelming — you don't have to face it alone.
              </h2>
              <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-orange-400 via-orange-300 to-blue-400" />
              <p className="mt-5 text-xl leading-8 text-slate-700">
                We know the emotional weight of trying month after month. Our team listens, explains, and supports you with care.
              </p>
              <p className="mt-4 text-xl leading-8 text-slate-700">
                At MotherHood, we focus on the human journey — guiding you with clarity, compassion, and trusted medical expertise.
              </p>

              <div className="mt-8 space-y-3 text-center text-lg leading-8 text-slate-700">
                <p className="text-lg font-bold text-slate-700">Common concerns we hear from couples:</p>
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
                  Book Your Consultation
                </button>
              </div>
              {renderCtaNote("text-slate-600", "text-orange-600")}
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold uppercase tracking-wide text-slate-800">MotherHood Care Approach</h3>
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
                A COMPLETE <span className="text-blue-600">IVF CARE JOURNEY.</span>
              </h3>
              <p className="mt-4 text-lg text-slate-700">
                From the first consultation to ongoing support, we guide you with clarity, compassion, and trusted medical care.
              </p>
            </div>

            <div className="mt-10 flex justify-center">
              <button
                onClick={openForm}
                className="cta-button cta-shine bg-[#0066FF] text-white hover:bg-[#0a58d8]"
              >
                Book Your Consultation
              </button>
            </div>
            {renderCtaNote("text-slate-600", "text-orange-600")}
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Clinic Details</div>
                  <h2 className="mt-3 text-3xl font-bold text-slate-900">MotherHood — Banglore</h2>
                  <div className="mt-4 space-y-3 text-base text-slate-700">
                    <div>
                      <div>MotherHood</div>
                    </div>
                    <div>
                      <div>Banglore</div>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Lead clinician</div>
                      <div>Dr. Vinay, Fertility Specialist</div>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Phone</div>
                      <div>+919066759991</div>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Email</div>
                      <div>vinay@gmail.com</div>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Address</div>
                      <div>Banglore</div>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-6 text-center text-sm text-slate-500 lg:w-80">
                  Clinic Logo / Photo Placeholder
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#F9FBFF] py-16">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-200/40 blur-3xl" />
            <div className="absolute -bottom-24 right-10 h-64 w-64 rounded-full bg-orange-200/40 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-6xl px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600 shadow-sm">
                Our Promise
              </div>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                Ethical, Advanced, and Patient-Centered IVF Care
              </h2>
              <p className="mt-3 text-lg text-slate-700">
                We focus on transparency, safety, and compassion for every couple who walks through our doors.
              </p>
              <p className="mt-3 text-base text-slate-600">
                These care pillars guide how we support you throughout your fertility journey:
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {qualificationBoxes.map((item, idx) => (
                <div key={item.title} className="rounded-2xl bg-gradient-to-br from-blue-100/70 via-white to-orange-100/70 p-[1px] shadow-lg">
                  <div className="rounded-2xl bg-white p-8">
                    <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                      <span>Care Pillar</span>
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
                Book Your Consultation
              </button>
            </div>
            {renderCtaNote("text-slate-600", "text-orange-600")}
          </div>
        </section>

        {/* <section className="bg-gradient-to-br from-[#0B1534] via-[#0E1F50] to-[#0B3B98] py-16 text-white">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-center text-3xl font-bold sm:text-4xl">Real IVF Clinics. Real Results.</h2>
            <p className="mt-3 text-center text-base text-slate-200">
              Hear directly from families who found support at MotherHood.
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
                Book Your Consultation
              </button>
            </div>
            {renderCtaNote("text-white/80", "text-orange-300")}
          </div>
        </section> */}

        

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-center text-4xl font-black tracking-tight sm:text-5xl">
              You May Be Ready <span className="text-blue-600">If…</span>
            </h2>
            <p className="mt-3 text-center text-lg text-slate-700 sm:text-xl">
              These signs can help you decide whether it's the right time to speak with a fertility specialist.
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
                Book Your Consultation
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
                Book Your Consultation
              </button>
            </div>
            {renderCtaNote("text-white/80", "text-orange-300")}
          </div>
        </section>

        <section className="bg-gradient-to-br from-[#0B1534] via-[#0E1F50] to-[#0B3B98] py-16 text-white">
          <div className="mx-auto max-w-5xl px-4 text-center">
            <h2 className="text-4xl font-bold sm:text-5xl">You're One Step Away From Starting Your Family</h2>
            <p className="mt-4 text-xl text-slate-100">
              At MotherHood, we guide you with clarity, compassion, and proven care so you can move forward with confidence.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3">
              <button
                onClick={openForm}
                className="cta-button cta-shine w-full max-w-md bg-white text-xl font-semibold text-[#0B1534] hover:shadow-xl"
              >
                Book Your Consultation
              </button>
              {renderCtaNote("text-white/80", "text-orange-300")}
              
              <p className="text-xs italic text-slate-300">
                We'll confirm your appointment by phone or WhatsApp within 24 hours.
              </p>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
};

export default Index;
