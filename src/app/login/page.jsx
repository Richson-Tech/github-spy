"use client";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();

  const handleTabSelection = (tab) => {
    router.push(`/${tab}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-6 text-white">GitHubSpy</h1>
      <div className="flex gap-4">
        <button
          onClick={() => handleTabSelection("developer")}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
         Spy as a Developer
        </button>
        <button
          onClick={() => handleTabSelection("client")}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
       Spy as a Client 
        </button>
      </div>
    </div>
  );
}
