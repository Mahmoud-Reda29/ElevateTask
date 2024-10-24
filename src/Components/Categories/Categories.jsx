import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../Loading/Loading';

function Categories() {
  const [categories, setCategories] = useState([]);
  const [CatProducts, setCatProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [error, setError] = useState('');

  // Fetch all categories from the API
  const getAllCategories = async () => {
    try {
      const { data } = await axios.get('https://fakestoreapi.com/products/categories');
      setCategories(data);
    } catch (error) {
      setError(error.response?.data?.message || error.message || 'Failed to fetch categories.');
    }
  };

  // Fetch products by category
  const getSubCatofCat = async (name) => {
    setLoading(true);
    setCategoryName(name);
    setError('');
    try {
      const { data } = await axios.get(`https://fakestoreapi.com/products/category/${name}`);
      setCatProducts(data);
    } catch (error) {
      setError(error.response?.data?.message || error.message || 'Failed to fetch products.');
    } finally {
      setLoading(false);
    }
  };

  // Scroll when CatProducts is updated and loading is false
  useEffect(() => {
    if (!loading && CatProducts.length > 0) {
      document.getElementById('subcategories').scrollIntoView({ behavior: 'smooth' });
    }
  }, [loading, CatProducts]);

  useEffect(() => {
    getAllCategories();
  }, []);

  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

  if (categories.length === 0 && !loading) {
    return <Loading />;
  }

  return (
    <>
      {loading && <Loading />}

      {/* Categories section */}
      <div className={`grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 ${loading ? 'opacity-50' : ''}`}>
        {categories.map((cat, index) => (
          <div
            key={index}
            onClick={() => getSubCatofCat(cat)}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg transition-all duration-500 hover:border-green-500 hover:shadow-[0px_0px_15px_2px_rgba(0,128,0,0.4)] dark:bg-gray-800 dark:border-gray-700 dark:hover:border-green-500 dark:hover:shadow-[0px_0px_15px_2px_rgba(0,128,0,0.4)]"
          >
            <div className="p-5 text-center">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {cat}
              </h5>
            </div>
          </div>
        ))}
      </div>

      {/* Subcategories (Products) section */}
      {CatProducts.length > 0 && (
        <div className="py-10">
          <h4 id="subcategories" className="text-3xl font-bold mt-5 text-center text-green-500">
            {categoryName} Products
          </h4>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
            {CatProducts.map((product) => (
              <div
                key={product.id}
                className="text-center border border-gray-200 rounded-lg shadow-lg transition-all duration-500 hover:border-green-500 hover:shadow-[0px_0px_15px_2px_rgba(0,128,0,0.4)] dark:border-gray-700 dark:hover:border-green-500 dark:hover:shadow-[0px_0px_15px_2px_rgba(0,128,0,0.4)] dark:bg-gray-800"
              >
                <img className="h-[250px] w-full object-contain mb-4" src={product.image} alt={product.title} />
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Categories;
