import { useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle,
  ExternalLink,
  Building2,
  BookOpen,
} from "lucide-react";
import { PROFESSOR, CONTACT_DETAILS } from "../../data/portfolioData";
import "./ContactPage.css";
import profileImage from "../../assets/Prof-Dr-T-N-profile.jpg";

/* ── Social icon resolver using clean inline SVGs ─────────────────── */
const SOCIAL_ICONS = {
  linkedin: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  ),
  instagram: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  ),
};

/* ── Contact Page ─────────────────────────────────────────────── */
export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    /* Simulate async send — replace with real endpoint as needed */
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1200);
  };

  return (
    <main className="contact-page page-enter">
      {/* ── Page Hero Strip ──────────────────────────────────── */}
      <div className="contact-hero">
        <div className="contact-hero-glow" aria-hidden="true" />
        <div className="container">
          <div
            className="section-label"
            style={{ justifyContent: "center", marginBottom: "1rem" }}
          >
            Get In Touch
          </div>
          <h1 className="contact-hero-title">
            Let's <span className="gradient-text">Connect</span>
          </h1>
          <p className="contact-hero-sub">{CONTACT_DETAILS.tagline}</p>
        </div>
      </div>

      {/* ── Two-Column Layout ─────────────────────────────────── */}
      <section className="contact-body section-sm">
        <div className="container">
          <div className="contact-grid">
            {/* ══ LEFT — Info Panel ══════════════════════════════ */}
            <aside className="contact-info-panel">
              {/* ── Profile identity card ── */}
              <div className="cip-identity">
                <div className="cip-avatar">
                  {profileImage ? <img src={profileImage} alt="Profile" /> : 'TG'}
                </div>
                <div>
                  <div className="cip-name">{PROFESSOR.name}</div>
                  <div className="cip-role">{PROFESSOR.title}</div>
                  <div className="cip-dept">{CONTACT_DETAILS.department}</div>
                </div>
              </div>

              {/* ── Direct Email ── */}
              <div className="cip-block">
                <div className="cip-block-label">
                  <Mail size={13} />
                  Direct Email
                </div>
                <a
                  href={CONTACT_DETAILS.emailHref}
                  className="cip-email-link"
                  id="contact-email-link"
                >
                  {CONTACT_DETAILS.email}
                  <ExternalLink size={12} className="cip-email-ext" />
                </a>
              </div>

              {/* ── Institution ── */}
              <div className="cip-block">
                <div className="cip-block-label">
                  <Building2 size={13} />
                  Institution
                </div>
                <div className="cip-institution-name">
                  {CONTACT_DETAILS.institution}
                </div>
                <div className="cip-institution-dept">
                  {CONTACT_DETAILS.department}
                </div>
              </div>

              {/* ── Office Address ── */}
              <div className="cip-block">
                <div className="cip-block-label">
                  <MapPin size={13} />
                  Office Address
                </div>
                <div className="cip-institution-dept" style={{ lineHeight: '1.6' }}>
                  {CONTACT_DETAILS.address}
                </div>
              </div>

              {/* ── Social Platforms ── */}
              <div className="cip-block">
                <div className="cip-block-label">
                  <BookOpen size={13} />
                  Social Profiles
                </div>
                <div className="cip-socials">
                  {CONTACT_DETAILS.socials.map((s) => (
                    <a
                      key={s.id}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`contact-social-${s.id}`}
                      className="cip-social-badge"
                      style={{
                        "--s-color": s.color,
                        "--s-glow": s.colorGlow,
                      }}
                      aria-label={s.label}
                    >
                      <span className="cip-social-icon">
                        {SOCIAL_ICONS[s.icon]}
                      </span>
                      <span className="cip-social-info">
                        <span className="cip-social-platform">
                          {s.platform}
                        </span>
                        <span className="cip-social-handle">{s.handle}</span>
                      </span>
                      <ExternalLink size={11} className="cip-social-ext" />
                    </a>
                  ))}
                </div>
              </div>

              {/* ── Availability note ── */}
              <div className="cip-availability">
                <span className="availability-dot" />
                <span>{CONTACT_DETAILS.availability}</span>
              </div>
            </aside>

            {/* ══ RIGHT — Message Form ════════════════════════════ */}
            <div className="contact-form-panel">
              {sent ? (
                /* ── Success state ── */
                <div className="form-success">
                  <div className="form-success-icon">
                    <CheckCircle size={40} strokeWidth={1.5} />
                  </div>
                  <h3>Message Received!</h3>
                  <p>
                    Thank you for reaching out. Prof. Dr. Ghorude will get back
                    to you shortly via your provided email address.
                  </p>
                  <button
                    className="btn btn-outline"
                    onClick={() => {
                      setSent(false);
                      setForm({
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                      });
                    }}
                    id="contact-send-another-btn"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                /* ── Form ── */
                <form
                  className="contact-form"
                  onSubmit={handleSubmit}
                  noValidate
                  id="contact-form"
                >
                  <div className="form-header">
                    <h2 className="form-title">Send a Message</h2>
                    <p className="form-subtitle">
                      Fill in the fields below and Prof. Dr. Ghorude will
                      respond promptly.
                    </p>
                  </div>

                  <div className="form-row">
                    <div
                      className={`form-field${errors.name ? " field-error" : ""}`}
                    >
                      <label htmlFor="cf-name" className="field-label">
                        Full Name
                      </label>
                      <input
                        id="cf-name"
                        name="name"
                        type="text"
                        className="field-input"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={handleChange}
                        autoComplete="name"
                      />
                      {errors.name && (
                        <span className="field-err-msg">{errors.name}</span>
                      )}
                    </div>

                    <div
                      className={`form-field${errors.email ? " field-error" : ""}`}
                    >
                      <label htmlFor="cf-email" className="field-label">
                        Email Address
                      </label>
                      <input
                        id="cf-email"
                        name="email" // Fixed: changed from name="name" to name="email"
                        type="email"
                        className="field-input"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={handleChange}
                        autoComplete="email"
                      />
                      {errors.email && (
                        <span className="field-err-msg">{errors.email}</span>
                      )}
                    </div>
                  </div>

                  <div
                    className={`form-field${errors.subject ? " field-error" : ""}`}
                  >
                    <label htmlFor="cf-subject" className="field-label">
                      Subject
                    </label>
                    <input
                      id="cf-subject"
                      name="subject"
                      type="text"
                      className="field-input"
                      placeholder="e.g. Course Registration, Research Collaboration…"
                      value={form.subject}
                      onChange={handleChange}
                    />
                    {errors.subject && (
                      <span className="field-err-msg">{errors.subject}</span>
                    )}
                  </div>

                  <div
                    className={`form-field form-field--grow${errors.message ? " field-error" : ""}`}
                  >
                    <label htmlFor="cf-message" className="field-label">
                      Message
                    </label>
                    <textarea
                      id="cf-message"
                      name="message"
                      className="field-input field-textarea"
                      placeholder="Write your message here…"
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                    />
                    {errors.message && (
                      <span className="field-err-msg">{errors.message}</span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className={`btn btn-primary form-submit${loading ? " loading" : ""}`}
                    disabled={loading}
                    id="contact-submit-btn"
                  >
                    {loading ? (
                      <>
                        <span className="submit-spinner" aria-hidden="true" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
            {/* ══ END RIGHT ══════════════════════════════════════ */}
          </div>
        </div>
      </section>
    </main>
  );
}
