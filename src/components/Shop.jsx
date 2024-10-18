const Shop = () => {
    return(
        <div className="bg-gray-100 py-16 ">
        <div className="container mx-auto px-6 mt-10 max-w-4xl shadow-lg rounded-lg bg-white">
          {/* Heading */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-green-700 mb-4">Find Your Favorite Products</h1>
            <p className="text-lg text-gray-600">Search through our exclusive range of products</p>
          </div>
  
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-10">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full p-4 pl-10 text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
              />
              <svg
                className="w-6 h-6 absolute left-3 top-3 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
              </svg>
            </div>
          </div>
  
          {/* Categories Section */}
          <div className="flex justify-center space-x-6">
            <button className="bg-orange-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-green-600 mb-3">
              Fruits
            </button>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-green-600 mb-3">
              Vegetables
            </button>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-green-600 mb-3">
              Home & Garden
            </button>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-green-600 mb-3">
              Protein
            </button>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-green-600 mb-3">
              Beverages
            </button>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-green-600 mb-3">
              Pastries
            </button>
          </div>
        </div>
      </div>
        
    )
}

export default Shop;