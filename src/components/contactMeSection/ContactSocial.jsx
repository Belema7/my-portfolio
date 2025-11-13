import React from "react";
import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedin, FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";

function ContactSocial({ isVisible }) {
  const socials = [
    { Icon: FaLinkedin, link: "https://www.linkedin.com/in/belemagirma/", label: "LinkedIn" },
    { Icon: FaGithub, link: "https://github.com/Belema7", label: "GitHub" },
    { Icon: FaInstagram, link: "https://www.instagram.com/belema711/", label: "Instagram" },
    { Icon: FaTelegram, link: "https://t.me/BelemaGr", label: "Telegram" },
  ];

  return (
    <div
      className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <h3 className="text-3xl font-bold text-[#15d1e9] mb-8">
        Let's Connect
      </h3>

      <div className="flex justify-center gap-8 flex-wrap">
        {socials.map((social, i) => (
          <SingleContactSocial
            key={i}
            link={social.link}
            Icon={social.Icon}
            label={social.label}
            delay={1200 + i * 150}
          />
        ))}
      </div>

      <p className="mt-8 text-gray-400 text-lg">
        I'm always open to new opportunities and collaborations
      </p>
    </div>
  );
}

export default ContactSocial;