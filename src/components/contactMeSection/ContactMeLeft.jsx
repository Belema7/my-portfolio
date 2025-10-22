import React from "react";
import ContactForm from "./ContactForm";

function ContactMeLeft() {
  return (
    <div className="flex-1">
      <h2 className="text-[#15d1e9] text-3xl font-semibold mb-4">
        Get In Touch 💬
      </h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        I’d love to hear from you! Whether you have a question, a project idea,
        or just want to say hi — feel free to drop a message below. I’ll respond
        as soon as I can!
      </p>
      <ContactForm />
    </div>
  );
}

export default ContactMeLeft;
