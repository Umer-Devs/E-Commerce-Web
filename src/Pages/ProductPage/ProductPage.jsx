import React, { useEffect, useState } from 'react';
import { Heart, Star, ShoppingCart, Minus, Plus } from 'lucide-react';
import { NavbarOne } from '../../Components';
import { Link, useParams } from 'react-router-dom';

const ProductPage = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      if (!res.ok) throw new Error('Failed to fetch products');
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.log("Failed to load");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Filter product by ID
  const product = products.find(p => p.id === parseInt(id));

  return (
    <>
      <NavbarOne />
    <div className="min-h-screen bg-gray-100 font-sans">
      
      <div className="custom-padding py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {product ? (
            <>
              {/* Product Image and Description */}
              <div className="space-y-6 flex flex-col items-center">
                <img src={product.image} alt={product.title} className="" />
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Product Description</h2>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                    {product.title}
                  </h1>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-gray-500 text-sm">4.8 (2,547 reviews)</span>
                    <button className="text-emerald-600 hover:text-emerald-700 text-sm font-medium transition-colors">
                      Read Reviews
                    </button>
                  </div>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-3xl font-bold text-emerald-600">${product.price}</span>
                    <span className="text-lg text-gray-400 line-through">${(product.price * 1.33).toFixed(2)}</span>
                    <span className="bg-rose-100 text-rose-700 px-2 py-1 rounded text-sm font-medium">
                      25% OFF
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">Free shipping on orders over $75</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Color: <span className="font-normal text-gray-500">Midnight Green</span></h3>
                    <div className="flex gap-2">
                      {[
                        { name: 'Midnight Green', color: 'bg-emerald-600', active: true },
                        { name: 'Space Gray', color: 'bg-gray-700', active: false },
                        { name: 'Silver', color: 'bg-gray-200', active: false },
                        { name: 'Rose Gold', color: 'bg-rose-300', active: false }
                      ].map((color) => (
                        <button
                          key={color.name}
                          className={`w-8 h-8 rounded-full ${color.color} border-2 transition-all duration-300 ${
                            color.active ? 'border-gray-900 scale-110' : 'border-transparent hover:border-gray-500'
                          }`}
                          title={color.name}
                        />
                      ))}
                    </div>
                  </div>

                
                </div>

                <div className="space-y-8 pt-4">
                 <Link to={`/cart-page/${product.id}`}>
                 <button className="w-full my-4  bg-emerald-600 cursor-pointer hover:bg-emerald-700 text-white py-3 rounded-lg font-medium text-base transition-colors flex items-center justify-center gap-2">
                    <ShoppingCart className="h-5 w-5" />
                    Add to Cart
                  </button>
                 </Link>
                  <button className="w-full border-2 border-gray-300 hover:border-gray-400 text-gray-700 py-3 rounded-lg font-medium text-base transition-colors">
                    Buy Now
                  </button>
                </div>
              </div>
            </>
          ) : (
            <p className="col-span-2 text-center">Loading product...</p>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductPage;