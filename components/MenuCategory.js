import MenuItem from "./MenuItem";

export default function MenuCategory({ title, items }) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4">{title}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(item => (
          <MenuItem key={item.id} name={item.name} price={item.price} />
        ))}
      </div>
    </section>
  );
}
