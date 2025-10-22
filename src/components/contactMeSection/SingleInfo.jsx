import React from "react";

function SingleInfo({ text, Icon }) {
  return (
    <div className="flex items-center gap-3">
      <Icon className="text-[#15d1e9] text-2xl" />
      <p className="text-gray-300">{text}</p>
    </div>
  );
}

export default SingleInfo;
