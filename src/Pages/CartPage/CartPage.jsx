import React, { useEffect, useState } from 'react'
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft, Heart } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
const CartPage = () => {
  let { id } = useParams()
  const [products, setProducts] = useState([]);
  const [productFilter, setProductFilter] = useState(null);
  let [count, setCount] = useState(1)
  function add() {
    setCount(count + 1)
  }
  function deleteCount() {
    setCount(count - 1)
    if (count < 0) {
      count = 1;
    }
  }
  const fetchData = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      if (!res.ok) throw new Error('Failed to fetch products');
      const data = await res.json();
      setProducts(data);
      // Find the product with matching ID
      const foundProduct = data.find(product => product.id === parseInt(id));
      setProductFilter(foundProduct);
    } catch (error) {
      console.error(error);
      console.log("Failed to load");
    }
  };
  useEffect(() => {
    fetchData();
  }, []); // Add id to dependency array to refetch if id changes
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Continue Shopping
              </Link>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 flex items-center">
              <ShoppingBag className="h-6 w-6 mr-2" />
              Shopping Cart
            </h1>
            <div className="w-32"></div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">
              Cart Items ({productFilter ? 1 : 0})
            </h2>
          </div>

          <div className="divide-y divide-gray-200">
            {productFilter ? (
              <div className="p-6 flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/4">
                  <img
                    src={productFilter.image}
                    alt={productFilter.title}
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>
                <div className="w-full md:w-3/4 flex flex-col">
                  <h3 className="text-xl font-semibold">{productFilter.title}</h3>
                  <p className="text-lg font-bold mt-2">${productFilter.price}</p>
                  <div className="mt-4 flex items-center space-x-4">
                    <button className="p-2 rounded-full border border-gray-300">
                      <Minus onClick={deleteCount} className="h-4 w-4" />
                    </button>
                    <span>{count}</span>
                    <button className="p-2 rounded-full border border-gray-300">
                      <Plus onClick={add} className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-6 flex space-x-4">
                    <button className="flex items-center text-red-500 hover:text-red-700">
                      <Trash2 className="h-5 w-5 mr-2" />
                      Remove
                    </button>
                    <button className="flex items-center text-gray-600 hover:text-gray-900">
                      <Heart className="h-5 w-5 mr-2" />
                      Save for later
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <p className="p-6 text-gray-500">Loading product...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default CartPage;