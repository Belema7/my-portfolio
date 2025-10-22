import React from "react";
import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";

function ContactMeRight() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-10">
      <div className="relative">
        <div className="absolute inset-0 rounded-full blur-lg bg-[#15d1e9]/40"></div>
        <img
          src="/Images/gmail.png"
          alt="Contact Illustration"
          className="relative z-10 max-w-[280px] rounded-2xl shadow-lg shadow-[#15d1e9]/20"
        />
      </div>

      <ContactInfo />
      <ContactSocial />
    </div>
  );
}

export default ContactMeRight;
