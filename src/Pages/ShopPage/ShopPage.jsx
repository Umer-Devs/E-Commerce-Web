import React, { useEffect, useState } from 'react';
import { Footer, NavbarOne } from '../../Components';
import { Shop1 } from '../../assets';
import { ArrowRight, ChevronDown, ShoppingCart, Star } from 'lucide-react';

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortOrder, setSortOrder] = useState('default');

  // Fetch products and extract unique categories
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch('https://fakestoreapi.com/products');
      if (!res.ok) throw new Error('Failed to fetch products');
      const data = await res.json();
      setProducts(data);
      // Extract unique categories
      const uniqueCategories = [...new Set(data.map((product) => product.category))];
      setCategories(uniqueCategories);
    } catch (error) {
      setError('Failed to load products. Please try again later.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Filter and sort products
  const filteredProducts = products
    .filter((product) => {
      if (selectedCategory !== 'all') {
        return product.category === selectedCategory;
      }
      return true;
    })
    .filter((product) => {
      if (priceRange === 'all') return true;
      if (priceRange === '0-50') return product.price <= 50;
      if (priceRange === '50-100') return product.price > 50 && product.price <= 100;
      if (priceRange === '100-200') return product.price > 100 && product.price <= 200;
      if (priceRange === '200+') return product.price > 200;
      return true;
    })
    .sort((a, b) => {
      if (sortOrder === 'low-to-high') return a.price - b.price;
      if (sortOrder === 'high-to-low') return b.price - a.price;
      return 0; // Default: no sorting
    });

  // Generate random rating for display purposes
  const generateRating = () => {
    return (Math.random() * (5 - 3.5) + 3.5).toFixed(1);
  };

  return (
    <>
      {/* Header Component */}
      <NavbarOne />

      {/* Main Section */}
      <main
        className="relative w-full bg-cover py-20 bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Shop1})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div> {/* Overlay for better text readability */}
        <div className="relative flex flex-col justify-center items-center text-center py-10 gap-6 px-4">
          <h2 className="text-xl md:text-3xl flex items-center gap-6 text-white">
            Home <ArrowRight className="text-white" /> <span className="text-white">Shop</span>
          </h2>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white">
            Shop Page
          </h1>
          <p className="text-white/90">Let's design the place you always imagined.</p>
        </div>
      </main>

      {/* Filter Section */}
      <section className=" custom-padding  py-6 bg-gray-50 border-b">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col w-full  sm:flex-row items-center gap-4 sm:gap-6">
            <div className="flex flex-col w-full    sm:w-48">
              <label htmlFor="category" className="text-gray-700 mb-2 font-medium text-sm">
                Categories
              </label>
              <select
                id="category"
                className="border border-gray-300  p-3 rounded-lg outline-none focus:ring-2 focus:ring-primary-green focus:border-primary-green transition-all duration-200 bg-white shadow-sm"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col w-full sm:w-48">
              <label htmlFor="price" className="text-gray-700 mb-2 font-medium text-sm">
                Price Range
              </label>
              <select
                id="price"
                className="border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-primary-green focus:border-primary-green transition-all duration-200 bg-white shadow-sm"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
              >
                <option value="all">All Prices</option>
                <option value="0-50">$0 - $50</option>
                <option value="50-100">$50 - $100</option>
                <option value="100-200">$100 - $200</option>
                <option value="200+">$200+</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col w-full sm:w-48">
            <label htmlFor="sort" className="text-gray-700 mb-2 font-medium text-sm">
              Sort By
            </label>
            <select
              id="sort"
              className="border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-primary-green focus:border-primary-green transition-all duration-200 bg-white shadow-sm"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
            </select>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      {loading ? (
        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-green"></div>
            <p className="ml-4 text-gray-600 text-lg">Loading products...</p>
          </div>
        </section>
      ) : error ? (
        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <p className="text-red-500 text-lg">{error}</p>
            <button 
           
              className="mt-4 px-6 py-2 bg-primary-green text-white rounded-lg cursor-pointer hover:bg-primary-green/80 transition-colors"
            >
              Try Again
            </button>
          </div>
        </section>
      ) : (
        <section className="custom-padding    py-8 bg-white">
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredProducts.length} of {products.length} products
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg mb-4">No products found for the selected filters.</p>
                <button 
                  onClick={() => {
                    setSelectedCategory('all');
                    setPriceRange('all');
                    setSortOrder('default');
                  }}
                  className="px-6 py-2 bg-primary-green text-white rounded-lg hover:bg-primary-green/80 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Image Container */}
                  <div className="relative bg-gray-50 p-6 h-64 flex items-center justify-center overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    {/* Category Badge */}
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 text-xs font-medium text-primary-green bg-blue-100 rounded-full">
                        {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[3.5rem] group-hover:text-primary-green transition-colors">
                      {product.title}
                    </h3>
                    
                    {/* Rating */}
                    <div className="flex items-center mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className="w-4 h-4 text-yellow-400 fill-current" 
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">({generateRating()})</span>
                    </div>
                    
                    {/* Price */}
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-gray-900">
                        ${product.price.toFixed(2)}
                      </span>
                    </div>
                    
                    {/* Add to Cart Button */}
                    <button className="w-full bg-primary-green hover:bg-primary-green/80 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 group-hover:shadow-lg">
                      <ShoppingCart className="w-4 h-4" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      )}
      <Footer/>
    </>
  );
};

export default ShopPage;