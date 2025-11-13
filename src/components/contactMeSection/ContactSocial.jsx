import React from "react";
import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedin, FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";

function ContactSocial({ isVisible }) {
  const socialItems = [
    {
      link: "https://www.linkedin.com/in/belemagirma/",
      Icon: FaLinkedin,
      label: "LinkedIn",
      delay: 700
    },
    {
      link: "https://github.com/Belema7",
      Icon: FaGithub,
      label: "GitHub",
      delay: 800
    },
    {
      link: "https://www.instagram.com/belema711/",
      Icon: FaInstagram,
      label: "Instagram",
      delay: 900
    },
    {
      link: "https://t.me/BelemaGr",
      Icon: FaTelegram,
      label: "Telegram",
      delay: 1000
    },
  ];

  return (
    <div className={`text-center transition-all duration-500 ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
    }`} style={{ transitionDelay: '600ms' }}>
      <h3 className="text-xl font-bold text-[#15d1e9] mb-6">
        Let's Connect
      </h3>
      
      <div className="flex justify-center gap-4 flex-wrap">
        {socialItems.map((item, index) => (
          <SingleContactSocial
            key={index}
            link={item.link}
            Icon={item.Icon}
            label={item.label}
            delay={item.delay}
          />
        ))}
      </div>

      <p className="text-gray-400 mt-6 text-sm">
        Feel free to reach out through any platform
      </p>
    </div>
  );
}

export default ContactSocial;