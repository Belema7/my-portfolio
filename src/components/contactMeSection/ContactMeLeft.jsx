import React from "react";
import ContactForm from "./ContactForm";

function ContactMeLeft() {
  return (
    <div className="flex flex-col gap-6 max-w-lg">
      <div>
        <h2 className="text-[#fb9718] text-3xl font-semibold mb-3">
          Get In Touch
        </h2>
        <p className="text-gray-200 leading-relaxed">
          Have a question, idea, or opportunity? I’d love to hear from you.
          Whether it’s about collaboration, freelancing, or mentorship — feel
          free to reach out anytime.
        </p>
      </div>
      <ContactForm />
    </div>
  );
}

export default ContactMeLeft;
