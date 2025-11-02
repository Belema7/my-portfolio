import React from "react";

function SingleContactSocial({ Icon, link, label }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit my ${label}`}
      className="text-2xl w-12 h-12 flex items-center justify-center rounded-full border border-[#15d1e9] text-[#15d1e9]
                 hover:bg-[#15d1e9] hover:text-black hover:scale-110 transition-all duration-300 
                 shadow-md hover:shadow-[#15d1e9]/50"
    >
      <Icon />
    </a>
  );
}

export default SingleContactSocial;