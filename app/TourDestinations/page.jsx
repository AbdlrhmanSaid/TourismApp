"use client";

import React, { useEffect, useState } from "react";
import getTours from "../Data/getTours";
import Spinner from "../components/Spinner";
import avatar from "@/public/avatar.png";

export default function TourDestinations() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getTours();
      setTours(response);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="bg-[url('/plans.png')]">
        <h1 className="text-3xl font-bold text-center my-8 bg-[url('/plans.png')]">
          Tour Destinations
        </h1>
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="border rounded-lg shadow-lg overflow-hidden bg-white"
            >
              <img
                src={`/gallery-${1}.png`}
                alt={tour.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {tour.name}
                </h2>
                <p className="text-sm text-gray-600">
                  {tour.city}, {tour.country}
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  Created At: {new Date(tour.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
