"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function UserDetail() {
  const { id } = useParams();
  const [user, SetUser] = useState(null);
  const [loading, SetLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
      );
      const data = await res.json();
      SetUser(data);
      SetLoading(false);
    };
    getUser();
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center mt-20">
        <p className="text-xl text-gray-500">Ачаалж байна...</p>
      </div>
    );

    return(
           <div className="p-8 bg-gray-100 min-h-screen">
      <div className="bg-white p-8 rounded-xl shadow max-w-lg">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          {user.name}
        </h1>
        <p className="text-gray-500 mb-2">📧 {user.email}</p>
        <p className="text-gray-500 mb-2">📞 {user.phone}</p>
        <p className="text-gray-500 mb-2">🌐 {user.website}</p>
        <p className="text-gray-500 mb-6">
          🏢 {user.company.name}
        </p>
        <Link href="/users"
          className="bg-blue-600 text-white 
            px-4 py-2 rounded-lg hover:bg-blue-700">
          ← Буцах
        </Link>
      </div>
    </div>
    )
}
