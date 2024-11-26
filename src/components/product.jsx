import React, { useState } from 'react'
import productData from './Productdata'
import { FcSearch } from "react-icons/fc";

const Product = () => {
  const [details, setDetails] = useState(null)
  const [search, setSearch] = useState("")

  // Filter products based on search query
  const filteredData = productData.filter((item) => {
    if (!item.name) {
      console.warn('Product missing name:', item);
    }
    return search === "" || item.name?.toLowerCase().includes(search.toLowerCase());
  });

  // Show detailed view of selected product
  const detailPage = (product) => {
    setDetails(product)
  }

  // Go back to product list
  const backToProducts = () => {
    setDetails(null)
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto">
        {/* Search input */}
        <div className="searchinput flex justify-end mb-8">
          <div className="flex items-center bg-white border border-gray-300 rounded-lg p-2 w-1/3">
            <FcSearch className="mr-2" />
            <input
              type="text"
              placeholder="Search here..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="w-full p-2 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
        </div>

        {details ? (
          // Product details section
          <div className="details_container max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
            <button
              onClick={backToProducts}
              className="text-blue-500 mb-4 hover:underline"
            >
              &larr; Back to Products
            </button>
            <table className="min-w-full bg-white">
              <tbody>
                <tr>
                  <td className="p-4 font-semibold">Image</td>
                  <td className="p-4">
                    <img src={details.image} alt={details.name} className="w-48 h-48 object-cover rounded-full" />
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Name</td>
                  <td className="p-4">{details.name}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Price</td>
                  <td className="p-4">{details.price}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Model</td>
                  <td className="p-4">{details.Company}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Description</td>
                  <td className="p-4">{details.description}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold"></td>
                  <td className="p-4">
                    <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
                      Add to Cart
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          // Product list section
          <table className="min-w-full bg-white rounded-lg shadow-lg">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Image
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((curElm) => (
                <tr key={curElm.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 border-b border-gray-200">
                    <img src={curElm.image} alt={curElm.name} className="w-16 h-16 object-cover rounded-full" />
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200">{curElm.name}</td>
                  <td className="px-6 py-4 border-b border-gray-200">{curElm.price}</td>
                  <td className="px-6 py-4 border-b border-gray-200">
                    <button
                      onClick={() => detailPage(curElm)}
                      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

export default Product
