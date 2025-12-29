// src/components/common/StatusBadge.jsx
import React from "react";

const StatusBadge = ({ status }) => {
  let color = "gray";
  if (status === "pending") color = "yellow";
  else if (status === "sent") color = "green";

  return (
    <span className={`px-2 py-1 rounded text-white bg-${color}-500`}>
      {status}
    </span>
  );
};

export default StatusBadge; // make sure it's default export
