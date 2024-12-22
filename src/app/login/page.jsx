"use client";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();

  const handleTabSelection = (tab) => {
    router.push(`/${tab}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">GitHubSpy</h1>
      <div className="flex gap-4">
        <button
          onClick={() => handleTabSelection("developer")}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Developer Tab
        </button>
        <button
          onClick={() => handleTabSelection("client")}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Client Tab
        </button>
      </div>
    </div>
  );
}
