import { useState } from 'react'
import { Phone, Envelope, MapPin, CheckCircle, ArrowRight, InstagramLogo } from '@phosphor-icons/react'
import FadeIn from '../components/FadeIn'

const PHONE = '(559) 213-7176'
const PHONE_HREF = 'tel:5592137176'

const SERVICES_LIST = [
  'Mowing & Edging',
  'Bush Shrubbing',
  'Bush Removal',
  'Overgrown Tree Trimming',
  'Junk Pickup & Removal',
  'Flower Bed Cleanup',
  'Dog Waste Removal',
  'Irrigation Repair',
  'Multiple Services',
  'Other / Not Sure',
]

const INITIAL_FORM = {
  name: '',
  phone: '',
  email: '',
  service: '',
  details: '',
}

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulate submission (replace with real form handler, e.g. Formspree or EmailJS)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────────────── */}
      <section className="relative pt-28 pb-16 bg-forest overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <img
            src="https://picsum.photos/seed/fresno-lawn-contact/1920/600"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
              Get a Free Quote
            </h1>
            <p className="text-white/70 text-lg max-w-md">
              Tell us about your property and we'll get back to you fast, usually within a few hours.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── CONTACT MAIN ─────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">

            {/* ── FORM (left) ─────────────────────────────────── */}
            <div className="lg:col-span-3">
              <FadeIn>
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-cream-dark">
                  <h2 className="text-2xl font-bold text-ink mb-1">Request a Quote</h2>
                  <p className="text-ink/50 text-sm mb-7">
                    Fill out the form below and we'll reach out to schedule your free estimate.
                  </p>

                  {submitted ? (
                    <div className="flex flex-col items-center text-center py-10 gap-4">
                      <div className="w-16 h-16 bg-grass/10 rounded-full flex items-center justify-center">
                        <CheckCircle size={36} className="text-grass" weight="fill" />
                      </div>
                      <h3 className="text-xl font-bold text-ink">Request received!</h3>
                      <p className="text-ink/60 text-sm max-w-xs">
                        Thanks {form.name ? form.name.split(' ')[0] : ''}! We'll be in touch shortly to confirm your free estimate.
                      </p>
                      <button
                        onClick={() => { setSubmitted(false); setForm(INITIAL_FORM) }}
                        className="mt-2 text-grass text-sm font-semibold hover:underline"
                      >
                        Submit another request
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Name */}
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="name" className="text-sm font-semibold text-ink">
                            Full Name <span className="text-grass" aria-hidden="true">*</span>
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            autoComplete="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Jane Smith"
                            className="px-4 py-3 rounded-xl border border-cream-dark bg-cream text-ink placeholder-ink/40 text-sm focus:outline-none focus:ring-2 focus:ring-grass focus:border-transparent transition"
                          />
                        </div>

                        {/* Phone */}
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="phone" className="text-sm font-semibold text-ink">
                            Phone Number <span className="text-grass" aria-hidden="true">*</span>
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            autoComplete="tel"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="(559) 555-0100"
                            className="px-4 py-3 rounded-xl border border-cream-dark bg-cream text-ink placeholder-ink/40 text-sm focus:outline-none focus:ring-2 focus:ring-grass focus:border-transparent transition"
                          />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-1.5 sm:col-span-2">
                          <label htmlFor="email" className="text-sm font-semibold text-ink">
                            Email Address
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="jane@example.com"
                            className="px-4 py-3 rounded-xl border border-cream-dark bg-cream text-ink placeholder-ink/40 text-sm focus:outline-none focus:ring-2 focus:ring-grass focus:border-transparent transition"
                          />
                        </div>

                        {/* Service needed */}
                        <div className="flex flex-col gap-1.5 sm:col-span-2">
                          <label htmlFor="service" className="text-sm font-semibold text-ink">
                            Service Needed <span className="text-grass" aria-hidden="true">*</span>
                          </label>
                          <select
                            id="service"
                            name="service"
                            required
                            value={form.service}
                            onChange={handleChange}
                            className="px-4 py-3 rounded-xl border border-cream-dark bg-cream text-ink text-sm focus:outline-none focus:ring-2 focus:ring-grass focus:border-transparent transition appearance-none cursor-pointer"
                          >
                            <option value="" disabled>Select a service...</option>
                            {SERVICES_LIST.map((s) => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                        </div>

                        {/* Project details */}
                        <div className="flex flex-col gap-1.5 sm:col-span-2">
                          <label htmlFor="details" className="text-sm font-semibold text-ink">
                            Project Details
                          </label>
                          <textarea
                            id="details"
                            name="details"
                            rows={4}
                            value={form.details}
                            onChange={handleChange}
                            placeholder="Tell us about your property, yard size, any specific concerns, or anything else we should know..."
                            className="px-4 py-3 rounded-xl border border-cream-dark bg-cream text-ink placeholder-ink/40 text-sm focus:outline-none focus:ring-2 focus:ring-grass focus:border-transparent transition resize-none"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-grass text-white font-bold rounded-full hover:bg-grass-light active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 text-base"
                      >
                        {loading ? (
                          <span className="inline-block w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            Send My Request
                            <ArrowRight size={18} weight="bold" />
                          </>
                        )}
                      </button>

                      <p className="mt-3 text-center text-ink/40 text-xs">
                        We'll respond within a few hours during business hours.
                      </p>
                    </form>
                  )}
                </div>
              </FadeIn>
            </div>

            {/* ── CONTACT INFO (right) ─────────────────────────── */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              {/* Call card */}
              <FadeIn direction="left" delay={0.1}>
                <div className="bg-forest rounded-2xl p-6 text-white">
                  <p className="text-grass font-semibold text-xs uppercase tracking-widest mb-3">
                    Prefer to call?
                  </p>
                  <p className="font-bold text-2xl mb-1">{PHONE}</p>
                  <p className="text-white/60 text-sm mb-5">
                    Call or text us anytime. We're usually available Mon-Sat, 7am-6pm.
                  </p>
                  <a
                    href={PHONE_HREF}
                    className="inline-flex items-center gap-2 px-5 py-3 bg-grass text-white font-semibold rounded-full hover:bg-grass-light active:scale-[0.97] transition-all duration-200 text-sm"
                  >
                    <Phone size={16} weight="bold" />
                    Call Now
                  </a>
                  <a
                    href={`sms:5592137176`}
                    className="inline-flex items-center gap-2 ml-2 px-5 py-3 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-200 text-sm"
                  >
                    Text Us
                  </a>
                </div>
              </FadeIn>

              {/* Details card */}
              <FadeIn direction="left" delay={0.18}>
                <div className="bg-white rounded-2xl p-6 border border-cream-dark">
                  <h3 className="font-bold text-ink text-base mb-4">Contact Details</h3>
                  <ul className="space-y-3.5">
                    <li>
                      <a
                        href={PHONE_HREF}
                        className="flex items-center gap-3 text-ink/70 hover:text-forest transition-colors text-sm"
                      >
                        <div className="w-8 h-8 bg-grass/10 rounded-lg flex items-center justify-center shrink-0">
                          <Phone size={15} className="text-grass" weight="bold" />
                        </div>
                        {PHONE}
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:hello@sallyslawncare.com"
                        className="flex items-center gap-3 text-ink/70 hover:text-forest transition-colors text-sm"
                      >
                        <div className="w-8 h-8 bg-grass/10 rounded-lg flex items-center justify-center shrink-0">
                          <Envelope size={15} className="text-grass" weight="bold" />
                        </div>
                        hello@sallyslawncare.com
                      </a>
                    </li>
                    <li>
                      <span className="flex items-start gap-3 text-ink/70 text-sm">
                        <div className="w-8 h-8 bg-grass/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                          <MapPin size={15} className="text-grass" weight="bold" />
                        </div>
                        Fresno, Clovis &amp; Surrounding Central Valley Areas
                      </span>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-ink/70 hover:text-forest transition-colors text-sm"
                      >
                        <div className="w-8 h-8 bg-grass/10 rounded-lg flex items-center justify-center shrink-0">
                          <InstagramLogo size={15} className="text-grass" weight="bold" />
                        </div>
                        DM us on Instagram
                      </a>
                    </li>
                  </ul>
                </div>
              </FadeIn>

              {/* What to expect */}
              <FadeIn direction="left" delay={0.26}>
                <div className="bg-cream-dark rounded-2xl p-6 border border-cream-dark">
                  <h3 className="font-bold text-ink text-base mb-4">What happens next?</h3>
                  <ol className="space-y-3">
                    {[
                      'We contact you within a few hours',
                      'We schedule a free property walk',
                      'You get a clear, no-pressure quote',
                      'We get to work when you\'re ready',
                    ].map((step, i) => (
                      <li key={step} className="flex items-start gap-3">
                        <span className="w-6 h-6 bg-grass text-white text-xs font-bold rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <span className="text-ink/70 text-sm leading-snug">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
