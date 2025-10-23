import MenuItem from "./MenuItem";

export default function MenuSlide({ title, sections }) {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      <div className="space-y-6">
        {Array.isArray(sections)
          ? (
            <div className="grid sm:grid-cols-2 gap-4">
              {sections.map(item => (
                <MenuItem key={item.id} {...item} />
              ))}
            </div>
          )
          : (
            Object.keys(sections).map(sub => (
              <div key={sub}>
                <h3 className="text-xl font-semibold mt-4 mb-2 underline">{sub}</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {sections[sub].map(item => (
                    <MenuItem key={item.id} {...item} />
                  ))}
                </div>
              </div>
            ))
          )
        }
      </div>
    </div>
  );
}
