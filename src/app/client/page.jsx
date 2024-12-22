'use client'
import { useState } from 'react';
import axios from 'axios';
import Loader from '@/components/Loader';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Client() {
    const [username, setUsername] = useState('');
    const [loading, setLoading] = useState(false);
    const [clientInfo, setClientInfo] = useState(null);
  
    const determineRating = (createdAt) => {
      const yearsSinceCreation = new Date().getFullYear() - new Date(createdAt).getFullYear();
      if (yearsSinceCreation < 1) return 'Beginner Developer';
      if (yearsSinceCreation < 3) return 'Mid-level Developer';
      return 'Senior Developer';
    };
  
    const fetchClientInfo = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        const data = response.data;
        setClientInfo({ ...data, rating: determineRating(data.created_at) });
        toast.success('Client info fetched successfully!');
      } catch (error) {
        toast.error('Failed to fetch client info!');
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Client Spy</h1>
        <div className="mb-4">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub Username"
            className="border px-4 py-2 w-full rounded mb-4"
          />
          <button
            onClick={fetchClientInfo}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Spy
          </button>
        </div>
        {loading && <Loader />}
        {clientInfo && (
          <div className="bg-white p-4 rounded shadow">
            <img src={clientInfo.avatar_url} alt={clientInfo.name} className="w-16 h-16 rounded-full mb-4" />
            <h2 className="text-xl font-bold">{clientInfo.name}</h2>
            <p>Followers: {clientInfo.followers}</p>
            <p>Location: {clientInfo.location || 'N/A'}</p>
            <p>Twitter: {clientInfo.twitter_username || 'N/A'}</p>
            <p>Date Created: {new Date(clientInfo.created_at).toLocaleDateString()}</p>
            <p>Rating: {clientInfo.rating}</p>
          </div>
        )}
      </div>
    );
  }
  