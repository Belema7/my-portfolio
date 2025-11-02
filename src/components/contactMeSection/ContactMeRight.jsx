import React from "react";
import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";

function ContactMeRight() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-10">
      <div className="relative w-full max-w-md mx-auto">
        <div className="absolute inset-0 rounded-full bg-[#15d1e9]/40 blur-xl -z-10"></div>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          <img
            src="/Images/gmail.png"
            alt="Email illustration"
            className="relative z-10 w-48 h-48 md:w-64 md:h-64 object-contain rounded-2xl shadow-lg shadow-[#15d1e9]/20"
          />
          <ContactInfo />
        </div>
      </div>

      <ContactSocial />
    </div>
  );
}

export default ContactMeRight;