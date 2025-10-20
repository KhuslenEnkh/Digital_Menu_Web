import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <nav className="bg-white shadow-md p-4 flex justify-between">
        <h1 className="text-xl font-bold">🍸 My Digital Menu</h1>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/edit">Edit</Link>
          <Link href="/about">About</Link>
        </div>
      </nav>
      <main className="p-6">{children}</main>
      <footer className="text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} My Digital Menu
      </footer>
    </div>
  );
}
