import React from "react";

function SingleContactSocial({ Icon, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-2xl h-12 w-12 flex items-center justify-center rounded-full border border-[#15d1e9] text-[#15d1e9]
      hover:bg-[#15d1e9] hover:text-black transition-all duration-300 shadow-md hover:shadow-[#15d1e9]/50"
    >
      <Icon />
    </a>
  );
}

export default SingleContactSocial;
