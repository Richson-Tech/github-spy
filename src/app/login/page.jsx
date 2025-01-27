"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  const handleTabSelection = (tab) => {
    router.push(`/${tab}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <h1 className="text-3xl font-bold mb-6 text-white" data-aos="fade-down">
        GitHubSpy
      </h1>
      <div className="flex gap-4" data-aos="fade-up" data-aos-delay="200">
        <button
          onClick={() => handleTabSelection("developer")}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-transform duration-300 transform hover:scale-105"
        >
          Spy as a Developer
        </button>
        <button
          onClick={() => handleTabSelection("client")}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-transform duration-300 transform hover:scale-105"
        >
          Spy as a Client
        </button>
      </div>
    </div>
  );
}
