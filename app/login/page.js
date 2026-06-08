"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { useAuth } from "../context/AuthContext"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, SetPassWord] = useState("")
    const [success, SetSuccess] = useState(false)
    const {login} = useAuth()
    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault()
        login(email)
        SetSuccess(true)
       

        // 2 секундын дараа users руу шилж
        setTimeout(() => {
            router.push("/users")
        }, 2000)
    }

    return(
         <div className="min-h-screen bg-gray-100 
      flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow w-96">
        <h1 className="text-2xl font-bold mb-6 text-black">Нэвтрэх</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border p-2 rounded-lg"
              placeholder="email@gmail.com"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">
              Нууц үг
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => SetPassWord(e.target.value)}
              className="w-full border p-2 rounded-lg text-black"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white 
              p-2 rounded-lg font-bold hover:bg-blue-700"
          >
            Нэвтрэх
          </button>
        </form>

        {success && (
          <p className="text-green-500 font-bold mt-4 text-center">
            ✅ Амжилттай нэвтэрлээ! Шилжиж байна...
          </p>
        )}
      </div>
    </div>
    )
}