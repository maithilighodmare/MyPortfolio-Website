import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import "../styles/Contact.css";
import Toast from "./Toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [toast, setToast] = useState({ message: "", type: "success" });

  useEffect(() => {
    if (!toast.message) {
      return undefined;
    }

    const timer = setTimeout(() => {
      setToast({ message: "", type: "success" });
    }, 2600);

    return () => clearTimeout(timer);
  }, [toast.message]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setIsSending(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );
      setStatus("Message sent successfully.");
      setToast({ message: "Email sent successfully.", type: "success" });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("Failed to send. Please try again.");
      setToast({ message: "Failed to send email.", type: "error" });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="contact-wrapper">
      <div className="contact-inner">
        <div className="contact-intro">
          <span className="contact-eyebrow">Let’s talk</span>
          <h2>Have a project in mind?</h2>
          <p>I’d love to hear what you’re building, learning, or dreaming up. Send me a note and I’ll get back to you.</p>
          <a className="contact-detail" href="mailto:ghodmaremaithili1@gmail.com">
            <span className="contact-detail-icon"><FaEnvelope aria-hidden="true" /></span>
            ghodmaremaithili1@gmail.com
          </a>
          <div className="contact-detail">
            <span className="contact-detail-icon"><FaMapMarkerAlt aria-hidden="true" /></span>
            Nagpur, Maharashtra
          </div>
          <span className="contact-note"><span aria-hidden="true">✦</span> Always open to meaningful opportunities</span>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-heading">
            <h3>Send a message</h3>
            <p>I’ll be in touch soon.</p>
          </div>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          rows="6"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={isSending}>
          {isSending ? "Sending..." : <>Send message <FaPaperPlane aria-hidden="true" /></>}
        </button>
        {status ? <p className="contact-status">{status}</p> : null}
        </form>
      </div>
      <Toast
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ message: "", type: "success" })}
      />
    </section>
  );
};

export default Contact;
