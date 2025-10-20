import menuData from "../../data/menu.json";
import MenuCategory from "../../components/MenuCategory";

export default function HomeMenu() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center my-8">
        🍸 Our Drinks Menu
      </h1>
      {Object.keys(menuData).map(category => (
        <MenuCategory key={category} title={category} items={menuData[category]} />
      ))}
    </div>
  );
}
