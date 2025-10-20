import { useState } from "react";
import menuData from "@/data/menu.json";

export default function EditMenu() {
  const [data, setData] = useState(menuData);
  const [newItem, setNewItem] = useState({ category: "", name: "", price: "" });

  const addItem = () => {
    if (!newItem.category || !newItem.name) return alert("Fill all fields!");
    const updated = { ...data };
    updated[newItem.category] = [
      ...(updated[newItem.category] || []),
      { id: Date.now(), name: newItem.name, price: newItem.price },
    ];
    setData(updated);
    setNewItem({ category: "", name: "", price: "" });
  };

  const deleteItem = (category, id) => {
    const updated = { ...data };
    updated[category] = updated[category].filter(item => item.id !== id);
    setData(updated);
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Edit Menu</h1>
      <div className="flex gap-2 mb-4">
        <input
          placeholder="Category"
          value={newItem.category}
          onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
          className="border p-2 rounded"
        />
        <input
          placeholder="Name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          className="border p-2 rounded"
        />
        <input
          placeholder="Price"
          value={newItem.price}
          onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
          className="border p-2 rounded"
        />
        <button onClick={addItem} className="bg-green-500 text-white px-4 rounded">Add</button>
      </div>

      {Object.keys(data).map(category => (
        <div key={category} className="mb-6">
          <h2 className="text-xl font-bold mb-2">{category}</h2>
          {data[category].map(item => (
            <div key={item.id} className="flex justify-between bg-gray-100 p-2 mb-2 rounded">
              <span>{item.name} - {item.price}</span>
              <button onClick={() => deleteItem(category, item.id)} className="text-red-600">Remove</button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
