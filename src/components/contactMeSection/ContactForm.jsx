import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_fncblpr", "template_qh0me0g", form.current, {
        publicKey: "Ql1h9M4K2yXTsWGbU",
      })
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          setTimeout(() => setIsSent(false), 3000);
        },
        (error) => console.error("FAILED...", error.text)
      );
  };

  return (
    <div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-4 text-white"
      >
        <input
          name="from_name"
          type="text"
          placeholder="Your name..."
          required
          className="h-12 rounded-lg bg-[#645558] px-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <input
          name="from_email"
          type="email"
          placeholder="example@email.com"
          required
          className="h-12 rounded-lg bg-[#645558] px-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <textarea
          name="message"
          rows="6"
          placeholder="Leave me a message..."
          required
          className="rounded-lg bg-[#645558] p-3 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <button
          type="submit"
          className="w-full rounded-lg border border-cyan-500 text-white h-12 font-semibold text-lg hover:bg-cyan-600 bg-cyan-500 transition-all duration-300"
        >
          Send Message
        </button>
      </form>

      {isSent && (
        <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg text-center animate-fade-in">
          ✅ Message sent successfully!
        </div>
      )}
    </div>
  );
}

export default ContactForm;
