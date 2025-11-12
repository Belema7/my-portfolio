import React from "react";
import SingleInfo from "./SingleInfo";
import { TfiEmail } from "react-icons/tfi";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function ContactInfo() {
  return (
    <div className="flex flex-col gap-10 pt-10 text-gray-300">
      <SingleInfo
        text="belemagirma8@gmail.com"
        Icon={TfiEmail}
        href="mailto:belemagirma8@gmail.com"
      />
      <SingleInfo
        text="+251 933 391 417"
        Icon={FaPhone}
        href="tel:+251933391417"
      />
      <SingleInfo
        text="Addis Ababa, Ethiopia"
        Icon={FaLocationDot}
        href="https://maps.google.com/?q=Addis+Ababa,+Ethiopia"
      />
    </div>
  );
}

export default ContactInfo;