import { MapPin, Phone, Mail, Clock3, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHead } from "@/components/ui/SectionHead";
import { ContactForm } from "@/components/forms/ContactForm";
import { CtaBand } from "@/components/home/CtaBand";

export const metadata = {
  title: "Contact Us",
  description:
    "Speak directly with a senior Izzy Immigration consultant about citizenship by investment, residency, golden visas, global real estate, and luxury cruise experiences.",
};

export default function ContactPage() {
  const waLink = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  return (
    <>
      <PageHero
        title="Book A Consultation"
        subtitle="Talk directly with a senior consultant. No call centres, no delays — just a clear, honest read on your best route."
        crumb={[{ label: "Contact" }]}
      />

      <section className="section-space bg-white">
        <div className="container-izzy grid gap-12 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <SectionHead align="left" eyebrow="Contact Information" title="Let's Plan Your Application" tone="dark" />

            <div className="mt-8 grid gap-4">
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="group flex items-start gap-4 rounded-2xl border border-navy-100 bg-white p-5 shadow-sm transition-all hover:border-gold-500/60 hover:shadow-md"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-50 text-gold-700">
                  <Phone size={20} />
                </span>
                <span>
                  <span className="block text-[13px] font-bold uppercase tracking-wide text-slate-400">Requesting a Call</span>
                  <span className="mt-0.5 block text-[17px] font-extrabold text-navy-900 group-hover:text-gold-700">
                    {siteConfig.phoneDisplay}
                  </span>
                  <span className="block text-[12.5px] text-slate-500">{siteConfig.phoneIntl}</span>
                </span>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="group flex items-start gap-4 rounded-2xl border border-navy-100 bg-white p-5 shadow-sm transition-all hover:border-gold-500/60 hover:shadow-md"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-50 text-gold-700">
                  <Mail size={20} />
                </span>
                <span>
                  <span className="block text-[13px] font-bold uppercase tracking-wide text-slate-400">E-mail</span>
                  <span className="mt-0.5 block text-[17px] font-extrabold text-navy-900 group-hover:text-gold-700">
                    {siteConfig.email}
                  </span>
                </span>
              </a>

              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 rounded-2xl border border-navy-100 bg-white p-5 shadow-sm transition-all hover:border-emerald-500/60 hover:shadow-md"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                  <MessageCircle size={20} />
                </span>
                <span>
                  <span className="block text-[13px] font-bold uppercase tracking-wide text-slate-400">WhatsApp</span>
                  <span className="mt-0.5 block text-[17px] font-extrabold text-navy-900 group-hover:text-emerald-700">
                    Chat With a Consultant
                  </span>
                </span>
              </a>

              <div className="flex items-start gap-4 rounded-2xl border border-navy-100 bg-white p-5 shadow-sm">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-50 text-gold-700">
                  <Clock3 size={20} />
                </span>
                <span>
                  <span className="block text-[13px] font-bold uppercase tracking-wide text-slate-400">Working Hours</span>
                  <span className="mt-0.5 block text-[15px] font-bold text-navy-900">{siteConfig.hours}</span>
                  <span className="block text-[12.5px] text-slate-500">Weekend appointments available on request</span>
                </span>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="section-space !pt-0 bg-white">
        <div className="container-izzy">
          <SectionHead eyebrow="Global Presence" title="Our Offices" tone="dark" align="left" />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {siteConfig.offices.map((office) => (
              <div
                key={office.city}
                className="group rounded-[22px] border border-navy-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-900 text-gold-400">
                  <MapPin size={20} />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-navy-900">{office.city}</h3>
                <p className="mt-1 text-[12.5px] font-bold uppercase tracking-wide text-gold-700">{office.country}</p>
                <p className="mt-3 text-[13.5px] leading-relaxed text-slate-600">{office.address}</p>
                <a href={`tel:${office.phone.replace(/\s/g, "")}`} className="mt-3 block text-[13.5px] font-bold text-navy-900 hover:text-gold-700">
                  {office.phone}
                </a>
                <a href={`mailto:${office.email}`} className="mt-1 block text-[13.5px] font-bold text-navy-900 hover:text-gold-700">
                  {office.email}
                </a>
              </div>
            ))}
          </div>
          <p className="mt-6 rounded-2xl bg-navy-900 px-6 py-4 text-[13.5px] leading-relaxed text-white/80">
            Head office: <span className="font-bold text-gold-400">{siteConfig.address}</span> — Virtual
            consultations available worldwide. All sessions are private, encrypted, and confidential.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}