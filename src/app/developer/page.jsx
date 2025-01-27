"use client";
import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Loader from "@/components/Loader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

export default function Developer() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [developerInfo, setDeveloperInfo] = useState(null);

  const fetchDeveloperInfo = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      setDeveloperInfo(response.data);
      toast.success("Spied on Developer info successfully!");
    } catch (error) {
      toast.error("Failed to fetch developer info!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-white">Developer Spy</h1>

      <div className="mb-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub Username"
          className="border px-4 py-2 w-full rounded mb-4"
        />
        <button
          onClick={fetchDeveloperInfo}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Spy
        </button>
      </div>
      {loading && <Loader />}
      {developerInfo && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-white p-4 rounded shadow"
        >
          <Image
            src={developerInfo.avatar_url}
            alt={developerInfo.name}
            className="w-16 h-16 rounded-full mb-4"
            height={60}
            width={60}
          />
          <h2 className="text-xl font-bold">{developerInfo.name}</h2>
          <p className="font-bold">
            Followers:{" "}
            <span className="font-normal">{developerInfo.followers}</span>
          </p>
          <p className="font-bold">
            Location:{" "}
            <span className="font-normal">
              {developerInfo.location || "N/A"}
            </span>
          </p>
          <p className="font-bold">
            Twitter Handle:{" "}
            <span className="font-normal">
              {developerInfo.twitter_username || "N/A"}
            </span>
          </p>
        </motion.div>
      )}
    </div>
  );
}
