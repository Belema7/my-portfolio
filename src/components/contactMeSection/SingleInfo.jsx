import React from "react";

function SingleInfo({ text, Icon, href }) {
  const content = (
    <div className="flex items-center gap-3">
      <Icon className="text-[#15d1e9] text-2xl flex-shrink-0" />
      <p className="text-gray-300 break-all">{text}</p>
    </div>
  );

  return href ? (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="hover:text-[#15d1e9] transition-colors duration-200"
    >
      {content}
    </a>
  ) : (
    content
  );
}

export default SingleInfo;