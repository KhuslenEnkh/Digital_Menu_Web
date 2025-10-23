export default function MenuItem({ name, price }) {
  return (
    <div className="flex justify-between bg-white shadow-sm rounded-lg p-3">
      <span className="font-medium">{name}</span>
      <span className="text-gray-500">{price}</span>
    </div>
  );
}
