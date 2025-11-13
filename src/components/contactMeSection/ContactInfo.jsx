import React from "react";
import SingleInfo from "./SingleInfo";
import { TfiEmail } from "react-icons/tfi";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function ContactInfo({ isVisible }) {
  const contactItems = [
    {
      text: "belemagirma8@gmail.com",
      Icon: TfiEmail,
      href: "mailto:belemagirma8@gmail.com",
      delay: 600
    },
    {
      text: "+251 933 391 417",
      Icon: FaPhone,
      href: "tel:+251933391417",
      delay: 800
    },
    {
      text: "Addis Ababa, Ethiopia",
      Icon: FaLocationDot,
      href: "https://maps.google.com/?q=Addis+Ababa,+Ethiopia",
      delay: 1000
    },
  ];

  return (
    <div className="flex flex-col gap-8 pt-6 text-gray-300">
      {contactItems.map((item, index) => (
        <div
          key={index}
          className={`transition-all duration-700 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`}
          style={{ transitionDelay: `${item.delay}ms` }}
        >
          <SingleInfo
            text={item.text}
            Icon={item.Icon}
            href={item.href}
          />
        </div>
      ))}
    </div>
  );
}

export default ContactInfo;