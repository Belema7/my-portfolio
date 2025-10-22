import React from "react";
import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";

function ContactMeRight() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 text-white">
      <img
        src="/images/email.jpg"
        alt="Contact Me"
        className="max-w-[300px] rounded-xl shadow-md"
      />
      <ContactInfo />
      <ContactSocial />
    </div>
  );
}

export default ContactMeRight;
