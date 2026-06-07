import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 flex gap-6">
      <Link href="/" className="text-white font-bold">
        Home
      </Link>
      <Link href="/users" className="text-white font-bold">
        Users
      </Link>
      <Link href="/login" className="text-white font-bold">
        Login
      </Link>
    </nav>
  )
}