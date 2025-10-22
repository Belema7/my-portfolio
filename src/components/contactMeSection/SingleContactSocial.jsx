import React from "react";

function SingleContactSocial({ Icon, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="h-12 w-12 border border-[#fb9718] text-[#fb9718] rounded-full flex items-center justify-center text-2xl hover:bg-[#fb9718] hover:text-white transition duration-300"
    >
      <Icon />
    </a>
  );
}

export default SingleContactSocial;
