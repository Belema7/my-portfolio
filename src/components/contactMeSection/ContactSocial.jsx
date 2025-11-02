import React from "react";
import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedin, FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";

function ContactSocial() {
  return (
    <div className="flex gap-4">
      <SingleContactSocial
        link="https://www.linkedin.com/in/belemagirma/"
        Icon={FaLinkedin}
        label="LinkedIn"
      />
      <SingleContactSocial
        link="https://github.com/Belema7"
        Icon={FaGithub}
        label="GitHub"
      />
      <SingleContactSocial
        link="https://www.instagram.com/belema711/"
        Icon={FaInstagram}
        label="Instagram"
      />
      <SingleContactSocial
        link="https://t.me/BelemaGr"
        Icon={FaTelegram}
        label="Telegram"
      />
    </div>
  );
}

export default ContactSocial;