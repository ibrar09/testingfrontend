const Card = ({ title, value, icon }) => (
  <div className="bg-white shadow-md rounded-lg p-5 flex items-center space-x-4">
    {icon && <div className="text-3xl">{icon}</div>}
    <div>
      <p className="text-gray-500 text-sm">{title}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  </div>
);

export default Card;
