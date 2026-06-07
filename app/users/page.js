"use client"
import { use, useEffect, useState } from "react";
import UserCard from "../components/UserCard";

export default function Users() {
  const [users, SetUsers] = useState([]);
  const [loading, SetLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      SetUsers(data);
      SetLoading(false);
    };
    getUsers();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center mt-20">
        <p className="text-xl text-gray-500">Ачаалж байна...</p>
      </div>
    );

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-black">Хэрэглэгчид</h1>
      {users.map((user) => (
        <UserCard
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
          phone={user.phone}
        />
      ))}
    </div>
  );
}
