import React from "react";
import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedin, FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";

function ContactSocial({ isVisible }) {
  const socialItems = [
    {
      link: "https://www.linkedin.com/in/belemagirma/",
      Icon: FaLinkedin,
      label: "LinkedIn",
      delay: 1200
    },
    {
      link: "https://github.com/Belema7",
      Icon: FaGithub,
      label: "GitHub",
      delay: 1400
    },
    {
      link: "https://www.instagram.com/belema711/",
      Icon: FaInstagram,
      label: "Instagram",
      delay: 1600
    },
    {
      link: "https://t.me/BelemaGr",
      Icon: FaTelegram,
      label: "Telegram",
      delay: 1800
    },
  ];

  return (
    <div className={`text-center transition-all duration-1000 ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
    }`} style={{ transitionDelay: '1000ms' }}>
      <h3 className="text-2xl font-bold text-[#15d1e9] mb-6 drop-shadow-[0_0_10px_#15d1e9]">
        Let's Connect
      </h3>
      
      <div className="flex justify-center gap-6 flex-wrap">
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

      <p className="text-gray-400 mt-6 text-lg">
        Feel free to reach out through any platform
      </p>
    </div>
  );
}

export default ContactSocial;