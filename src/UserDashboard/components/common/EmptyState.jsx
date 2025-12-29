const EmptyState = ({ message = "No records found." }) => (
  <div className="text-center py-10 text-gray-400">{message}</div>
);

export default EmptyState;
