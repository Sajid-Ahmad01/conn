import React from 'react'
import { useNavigate } from 'react-router-dom'


const Home = () => {
    const navigate = useNavigate()

  return (
    <>
      <h1 className="text-3xl font-bold text-center my-8">What do you like</h1>
      
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 mb-16">
        
        <div className="text-center mb-12">
          <h1 className="text-2xl font-semibold mb-4">BUY</h1>
          <div className="flex flex-col items-center">
            <img
              src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/electronics-sale-design-template-aa4c689f7f5f56aeaa5fa38c780f9628_screen.jpg?ts=1615698765"
              alt="img-1"
              className="w-full h-64 object-cover rounded-md shadow-lg mb-6"
            />
            <button
  className="btn btn-wide bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-200"
  onClick={() => {
    
    navigate("/products")
  }}
>
  Buy now!
</button>

          </div>
        </div>
        
        <div className="text-center mb-12">
          <h1 className="text-2xl font-semibold mb-4">SELL</h1>
          <div className="flex flex-col items-center">
            <img
              src="https://cdn.lifehack.org/wp-content/uploads/2017/01/04120035/usedelectronics.png"
              alt="img-2"
              className="w-full h-64 object-cover rounded-md shadow-lg mb-6"
            />
            <button className="btn btn-wide bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600 transition duration-200"
            onClick={() => {
                navigate("/About")
            }}>
              Sell now!
            </button>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Home
