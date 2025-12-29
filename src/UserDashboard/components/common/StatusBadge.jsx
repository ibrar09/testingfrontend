const StatusBadge = ({ status }) => {
  const colorMap = {
    completed: "bg-green-100 text-green-800",
    pending: "bg-yellow-100 text-yellow-800",
    cancelled: "bg-red-100 text-red-800",
    processing: "bg-blue-100 text-blue-800",
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${colorMap[status?.toLowerCase()] || "bg-gray-100 text-gray-800"}`}>
      {status || "N/A"}
    </span>
  );
};

export default StatusBadge;
