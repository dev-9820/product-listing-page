import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from "../components/Header";
import { Input } from '@chakra-ui/react'
import NavBar from "../components/NavBar";

const ProductListing = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState(''); // New state for search term
    const [filteredProducts, setFilteredProducts] = useState([]); // State for filtered products

    useEffect(() => {
        // Fetch the products from the Dummy JSON API
        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data.products);
                setFilteredProducts(data.products); // Initialize filtered products
            })
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    // Handle search input change
    const handleSearch = (e) => {
        const searchValue = e.target.value.toLowerCase();
        setSearchTerm(searchValue);

        // Filter products by title
        const filtered = products.filter(product =>
            product.title.toLowerCase().includes(searchValue)
        );
        setFilteredProducts(filtered);
    };

    return (

        <div>
            <Header/>
            <div>
                    <div className="flex">
                        <div className="mt-5 h-24 text-3xl">
                        <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearch}
                        className="w-full text-7xl font-mono px-4 rounded-lg focus:outline-none"
                        />
                    </div>
            </div>

                <div className="flex">

            <div className="grid mx-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <div key={product.id} className="border p-4 rounded shadow-lg">
                            <img src={product.thumbnail} alt={product.title} className="w-full h-40 object-cover mb-4"/>
                            <h2 className="text-xl font-semibold">{product.title}</h2>
                            <p className="text-gray-700">${product.price}</p>
                            <Link
                                to={`/product/${product.id}`}
                                className="text-green-600 hover:underline mt-4 block"
                            >
                                View Details
                            </Link>
                        </div>
                    ))
                ) : (
                    <p>No products found</p>
                )}
            </div>
        </div>
            </div>
        </div>
    );
};

export default ProductListing;
