import React from "react";

function Avatar() {
  return (
    <div className="w-64 h-64 md:w-72 md:h-72 clip-hexagon overflow-hidden border-2 border-gray-700">
      <img
        src="../../Images/profile.png"
        alt="Belema Girma"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default Avatar;
