import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({ icon, onClick, color }) => {
  const iconColorClass = color === "danger" ? "text-red-600" : "text-blue-600";

  return (
    <FontAwesomeIcon
      icon={icon}
      onClick={onClick}
      className={`cursor-pointer ${iconColorClass} hover:text-gray-800`}
    />
  );
};

export default Icon;
