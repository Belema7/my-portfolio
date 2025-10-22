import React from "react";
import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";

function ContactMeMain() {
  return (
    <section
      id="contact"
      className="max-w-[1200px] mx-auto mt-24 px-6 flex flex-col gap-12 items-center justify-center"
    >
      <h2 className="text-5xl md:text-6xl text-cyan-600 font-bold text-center">
        Contact Me
      </h2>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-16 bg-[#53423e] p-8 rounded-2xl shadow-lg w-full">
        <ContactMeLeft />
        <ContactMeRight />
      </div>
    </section>
  );
}

export default ContactMeMain;
