import React from "react";
import ContactMeRight from "./ContactMeRight";

function ContactMeMain() {
  return (
    <section
      id="contact"
      className="max-w-[1200px] mx-auto mt-[100px] px-6 py-16 text-white"
    >
      <h2 className="text-5xl md:text-6xl font-bold text-[#15d1e9] mb-12 text-center">
        Contact Me
      </h2>

      <div className="relative flex flex-col lg:flex-row gap-12 bg-[#0d0d0d] border border-[#15d1e9]/20 p-10 rounded-3xl shadow-lg shadow-[#15d1e9]/10 overflow-hidden">
        <div className="absolute inset-0 rounded-3xl bg-[#15d1e9]/5 blur-2xl -z-10"></div>
        <ContactMeRight />
      </div>
    </section>
  );
}

export default ContactMeMain;