import menuData from "@/data/menu.json";
import MenuCategory from "@/components/MenuCategory";

export default function Menu() {
  return (
    <div>
      {Object.keys(menuData).map(category => (
        <MenuCategory key={category} title={category} items={menuData[category]} />
      ))}
    </div>
  );
}
