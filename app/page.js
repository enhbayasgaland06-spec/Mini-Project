import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 
      flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold text-blue-600">
        Mini Project
      </h1>
      <p className="text-gray-500">Next.js + Tailwind</p>
      <Link href="/users" 
        className="bg-blue-600 text-white 
          px-6 py-2 rounded-lg hover:bg-blue-700">
        Users харах
      </Link>
    </div>
  );
}
