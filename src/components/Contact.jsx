import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log("Cek Environment Variables:");
    console.log("Service ID:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
    console.log("Template ID:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
    console.log("Public Key:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

    // Gunakan Service ID dan Template ID yang sudah kita buat tadi
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Pesan berhasil terkirim ke Faithza!");
          form.current.reset(); // Mengosongkan form setelah sukses
        },
        (error) => {
          console.log(error.text);
          alert("Gagal mengirim pesan: " + error.text);
        },
      );
  };
  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <h2 className="section-title">Contact Me</h2>
        <span className="section-number">( 05 )</span>
      </div>

      <div className="contact-container">
        {/* Sisi Kiri: Form */}
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <div className="form-row">
            <div className="form-group">
              <label>Name *</label>
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <label>Phone *</label>
              <input
                type="text"
                name="user_phone"
                placeholder="+62 ..."
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Email *</label>
            <input
              type="email"
              name="user_email"
              placeholder="email@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label>Message *</label>
            <textarea
              name="message"
              placeholder="Write your message here..."
              rows="4"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn-send">
            Send Now
          </button>
        </form>

        {/* Sisi Kanan: Social & Contact Info */}
        <div className="contact-info-sidebar">
          <div className="social-links">
            <a
              href="https://www.instagram.com/faithasalia?igsh=eG9lZzRvZWR5NDQ2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/faithza-mandolang-29a19b1a0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <div className="direct-contact">
            <div className="contact-box">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=faithzaazalia@gmail.com&su=Inquiry%20from%20Portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                Email
              </a>
            </div>
            <div className="contact-box">
              <a
                href="https://wa.me/6285339017033"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
