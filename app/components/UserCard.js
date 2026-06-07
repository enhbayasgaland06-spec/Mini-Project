import Link from 'next/link'

export default function UserCard({ id, name, email, phone }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow mb-4">
      <h2 className="text-xl font-bold text-blue-600">{name}</h2>
      <p className="text-gray-500">{email}</p>
      <p className="text-gray-400">{phone}</p>
      <Link href={`/users/${id}`}
        className="text-blue-500 hover:underline mt-2 block">
        Дэлгэрэнгүй →
      </Link>
    </div>
  )
}