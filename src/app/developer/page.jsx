'use client';
import { useState } from 'react';
import axios from 'axios';
import Loader from '@/components/Loader';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';

export default function Developer() {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [developerInfo, setDeveloperInfo] = useState(null);

  const fetchDeveloperInfo = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setDeveloperInfo(response.data);
      toast.success('Developer info fetched successfully!');
    } catch (error) {
      toast.error('Failed to fetch developer info!');
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
        <div className="bg-white p-4 rounded shadow">
          <Image src={developerInfo.avatar_url} alt={developerInfo.name} className="w-16 h-16 rounded-full mb-4" />
          <h2 className="text-xl font-bold">{developerInfo.name}</h2>
          <p>Followers: {developerInfo.followers}</p>
          <p>Location: {developerInfo.location || 'N/A'}</p>
          <p>Twitter Handle: {developerInfo.twitter_username || 'N/A'}</p>
        </div>
      )}
    </div>
  );
}
