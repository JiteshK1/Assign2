'use client'

import { useState, useEffect } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export default function ReviewSection() {
  const [chartData, setChartData] = useState({
    categories: [],
    viaBookings: [],
    mainBookings: [],
    totalSeats: []
  })
  const [loading, setLoading] = useState(true)

  // Fetch data from the API
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://viaje.ai/mainvia_api/')
        const jsonData = await response.json()
        
        console.log('API Response:', jsonData) // Debugging: log the raw API response
  
        // Check if the response contains the 'data' property
        if (jsonData.data && Array.isArray(jsonData.data)) {
          const categories = jsonData.data.map(item => item[0]) // Dates
          const viaBookings = jsonData.data.map(item => item[1]) // Via bookings
          const mainBookings = jsonData.data.map(item => item[2]) // Main bookings
          const totalSeats = jsonData.data.map(item => item[3]) // Total seats in bus
  
          setChartData({ categories, viaBookings, mainBookings, totalSeats })
        } else {
          console.error('Unexpected API response format:', jsonData)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }
  
    fetchData()
  }, [])
  

  const chartOptions = {
    chart: {
      type: 'column',
      backgroundColor: 'transparent',
      height: 300
    },
    title: {
      text: ''
    },
    xAxis: {
      categories: chartData.categories,
      labels: {
        style: {
          color: '#6B7280',
          fontSize: '12px'
        }
      },
      lineColor: '#E5E7EB'
    },
    yAxis: {
      title: {
        text: 'Booking Count'
      },
      gridLineColor: '#E5E7EB',
      labels: {
        style: {
          color: '#6B7280',
          fontSize: '12px'
        }
      }
    },
    plotOptions: {
      column: {
        borderRadius: 3,
        pointPadding: 0.2,
        groupPadding: 0.1
      }
    },
    series: [
      {
        name: 'Via Bookings',
        data: chartData.viaBookings,
        color: '#818CF8'
      },
      {
        name: 'Main Bookings',
        data: chartData.mainBookings,
        color: '#4B5563'
      },
      {
        name: 'Total Seats',
        data: chartData.totalSeats,
        color: '#34D399'
      }
    ],
    credits: {
      enabled: false
    },
    legend: {
      itemStyle: {
        color: '#4B5563',
        fontSize: '12px'
      }
    }
  }

  return (
    <div className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Review, export and publish copy
              </h2>
              <p className="text-gray-600 text-lg">
                Simply provide our AI writer with 1-2 sentences on what to write,
                and it'll understand and start writing for you.
              </p>
            </div>

            <div className="space-y-6">
              {[
                "Include any SEO keywords you want to rank for",
                "Customize your copy with tone and perspective options",
                "Choose from 25+ languages"
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
          </div>

          <div className="bg-gradient-to-br from-red-50 via-white to-blue-50 rounded-2xl p-8 shadow-sm">
            {loading ? (
              <p className="text-gray-500">Loading chart data...</p>
            ) : (
              <HighchartsReact
                highcharts={Highcharts}
                options={chartOptions}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
