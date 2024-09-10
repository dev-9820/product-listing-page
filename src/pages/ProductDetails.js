import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Fetch the specific product by ID
        fetch(`https://dummyjson.com/products/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.error('Error fetching product:', error));
    }, [id]);

    if (!product) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row items-center">
                <img src={product.thumbnail} alt={product.title} className="w-full md:w-1/2 h-auto object-cover rounded-lg shadow-lg mb-6 md:mb-0" />
                <div className="md:ml-8">
                    <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
                    <p className="text-xl text-gray-700 mb-4">${product.price}</p>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <p className="text-gray-800 font-semibold">Category: {product.category}</p>
                    <p className="text-gray-800 font-semibold">Rating: {product.rating} / 5</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
