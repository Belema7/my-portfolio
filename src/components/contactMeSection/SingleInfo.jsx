import React from "react";

function SingleInfo({ text, Icon }) {
  return (
    <div className="flex gap-3 items-center text-lg">
      <Icon className="text-2xl text-cyan-500" />
      <p>{text}</p>
    </div>
  );
}

export default SingleInfo;
