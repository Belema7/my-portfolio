import React from "react";
import SingleInfo from "./SingleInfo";
import { TfiEmail } from "react-icons/tfi";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function ContactInfo() {
  return (
    <div className="flex flex-col gap-4 text-gray-300">
      <SingleInfo text="BelemaGirma8@gmail.com" Icon={TfiEmail} />
      <SingleInfo text="+251 933 391 417" Icon={FaPhone} />
      <SingleInfo text="Addis Ababa, Ethiopia" Icon={FaLocationDot} />
    </div>
  );
}

export default ContactInfo;
