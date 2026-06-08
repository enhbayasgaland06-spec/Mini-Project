"use client"
import Link from 'next/link'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const {user, logout} = useAuth()
  return (
    <nav className="bg-blue-600 p-4 flex gap-6">
      <Link href="/" className="text-white font-bold">
        Home
      </Link>
      <Link href="/users" className="text-white font-bold">
        Users
      </Link>

      {user ? (
        // Нэвтэрсэн үед  
        <div className="ml-auto flex gap-4 items-center">
          <span className="text-white">👤 {user.email}</span>
          <button
            onClick={logout}
            className="bg-white text-blue-600 
              px-3 py-1 rounded-lg font-bold"
          >
            Гарах
          </button>
        </div>
      ) : (
        // Нэвтрээгүй үед
        <Link href="/login" 
          className="ml-auto bg-white text-blue-600 
            px-3 py-1 rounded-lg font-bold">
          Нэвтрэх
        </Link>
      )}
    </nav>
  )
}