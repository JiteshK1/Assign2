'use client'
import React, { useEffect, useState } from "react";

export default function HowItWorks() {
  const [tableData, setTableData] = useState([]);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://viaje.ai/seatinfo_api/");
        const result = await response.json();

        // Ensure the data structure matches what the table expects
        const formattedData = result.data.map((item) => ({
          seat: item.seat_no,       // Map to `seat`
          price: item.price,     // Map to `price`
          status: item.status,   // Map to `status`
        }));
        setTableData(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className=" relative py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          How it works
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="z-10 space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Enter your post's title & keyword
              </h3>
              <p className="text-gray-600">
                Simply provide our AI writer with 1-2 sentences on what to write,
                and it'll understand and start writing for you.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Include any SEO keywords you want to rank for",
                "Customize your copy with tone and perspective options",
                "Choose from 25+ languages",
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-indigo-500"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 shadow-sm">
                <div className="h-32 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
          </div>

          <div className="z-10 overflow-x-auto bg">
            <table className="w-full border-collapse bg-white ">
              <thead>
                <tr className="bg-indigo-100">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    SEAT
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    PRICE
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    STATUS
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {tableData.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-xl font-semibold text-gray-900">{row.seat}</td>
                    <td className="px-6 py-4 text-xl font-semibold text-gray-900">{row.price}</td>
                    <td className="px-6 py-4 text-xl font-semibold">
                      <span
                        className="inline-flex items-center font-semibold px-2.5 py-0.5 rounded-full text-xl font-medium text-black"
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <img  className="absolute top-[45%] right-[37%]   h-[300px] w-[300px]" src="Purple_Circle.png" alt="purple circle" />
    </div>
  );
}
