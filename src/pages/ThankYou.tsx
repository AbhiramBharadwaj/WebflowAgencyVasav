import React from "react";
import vasavImg from "@/gallery/Gemini_Generated_Image_oukh5youkh5youkh Medium.jpeg";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-16 text-slate-900">
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-10 shadow-xl">
          <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-orange-100 blur-3xl" />
          <div className="absolute -left-20 bottom-0 h-48 w-48 rounded-full bg-blue-100 blur-3xl" />

          <div className="relative z-10 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-3xl">
              ✅
            </div>
            <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
              Appointment confirmed
            </div>
            <h1 className="text-4xl font-black text-slate-900 sm:text-5xl">Appointment Confirmed</h1>
            <p className="mt-4 text-lg text-slate-700 sm:text-xl">
              Your call is confirmed. We’ll review your details and come prepared with a plan tailored to your company.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                "Check your email/WhatsApp for confirmation",
                "Bring your current lead numbers & challenges",
                "Be ready to discuss growth goals",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 text-sm text-slate-700">
              You’ll receive the meeting details by email and WhatsApp shortly.
            </div>

            <div className="mt-8 px-1 py-2">
              <div className="flex flex-col items-start gap-6 text-left sm:flex-row sm:items-start">
                <div className="h-64 w-64 overflow-hidden rounded-2xl sm:h-72 sm:w-72">
                  <img
                    src={vasavImg}
                    alt="Vasav"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="max-w-2xl">
                  <div className="text-base font-semibold text-slate-900">Vasav</div>
                  <div className="mt-1 text-base font-semibold uppercase tracking-[0.2em] text-slate-600">
                    passionate webflow wizard
                  </div>
                  <p className="mt-3 text-lg leading-7 text-slate-700">
                    I&apos;m on a mission to design impactful websites using no-code and low-code platforms, pushing creative boundaries to build stunning digital experiences. I&apos;m Vasav, a passionate Webflow developer with 5 years of experience crafting high-performance, visually strong websites. I specialize in responsive design, Webflow CMS, and custom animations to create seamless, engaging user journeys that help brands stand out and convert.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
