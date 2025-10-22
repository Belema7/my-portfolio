import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_fncblpr', 'template_qh0me0g', form.current, {
        publicKey: 'Ql1h9M4K2yXTsWGbU',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setIsSent(true);
          form.current.reset();
          setTimeout(() => setIsSent(false), 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="bg-[#0d0d0d] p-6 md:p-8 rounded-2xl shadow-lg border border-[#15d1e9]/20 mt-8">
      <form className="flex flex-col gap-4" ref={form} onSubmit={sendEmail}>
        <input
          name="from_name"
          type="text"
          placeholder="Your name..."
          required
          className="h-12 rounded-lg bg-[#1a1a1a] text-white px-3 focus:outline-none focus:ring-2 focus:ring-[#15d1e9] transition-all"
        />
        <input
          name="from_email"
          type="email"
          placeholder="example@gmail.com"
          required
          className="h-12 rounded-lg bg-[#1a1a1a] text-white px-3 focus:outline-none focus:ring-2 focus:ring-[#15d1e9] transition-all"
        />
        <textarea
          name="message"
          rows="9"
          placeholder="Leave me a message..."
          required
          className="rounded-lg bg-[#1a1a1a] text-white p-3 focus:outline-none focus:ring-2 focus:ring-[#15d1e9] transition-all"
        />

        <button
          type="submit"
          className="w-full rounded-lg border border-[#15d1e9] text-white h-12 font-semibold text-lg bg-[#15d1e9]/10 hover:bg-[#15d1e9]/30 transition-all duration-500"
        >
          Send Message
        </button>
      </form>

      {isSent && (
        <div className="mt-4 p-3 bg-[#15d1e9]/20 text-[#15d1e9] rounded-lg text-center">
          ✅ Message successfully sent!
        </div>
      )}
    </div>
  );
}

export default ContactForm;
