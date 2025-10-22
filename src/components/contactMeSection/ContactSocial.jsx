import React from "react";
import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedin, FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";

function ContactSocial() {
  return (
    <div className="flex gap-5 mt-4">
      <SingleContactSocial
        link="https://www.linkedin.com/in/belemagirma/"
        Icon={FaLinkedin}
      />
      <SingleContactSocial link="https://github.com/Belema7" Icon={FaGithub} />
      <SingleContactSocial
        link="https://www.instagram.com/belema711/"
        Icon={FaInstagram}
      />
      <SingleContactSocial link="https://t.me/BelemaGr" Icon={FaTelegram} />
    </div>
  );
}

export default ContactSocial;
