export default function MenuItem({ name, price }) {
    return (
      <div className="bg-white shadow-md rounded-lg p-4 flex justify-between">
        <span className="font-medium">{name}</span>
        <span className="text-gray-500">{price}</span>
      </div>
    );
  }
  