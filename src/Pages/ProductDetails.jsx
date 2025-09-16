import React, { useEffect, useState } from 'react'
import Container from '../Components/Container'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { FaStar } from 'react-icons/fa'

const ProductDetails = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`)
        setProduct(response.data)
      } catch (error) {
        console.error("Error fetching product:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchProduct()
  }, [id])

  if (loading) return <p className="p-6">Loading product...</p>
  if (!product) return <p className="p-6">Product not found</p>

  return (
    <div>
      <Container>
        <div className="flex flex-col items-center py-10">
          {/* Product Image - Top Center */}
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-[350px] h-[350px] object-cover rounded-lg shadow mb-8"
          />

          {/* Product Details - Below (Left aligned) */}
          <div className="max-w-2xl w-full text-left">
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            <p className="text-gray-500 mb-4">{product.brand}</p>

            {/* Price */}
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl font-bold text-red-500">${product.price}</span>
              <span className="line-through text-gray-400">
                ${(product.price * 1.5).toFixed(2)}
              </span>
              <span className="text-green-600 font-medium">
                {product.discountPercentage}% OFF
              </span>
            </div>

            {/* ✅ Rating (added after price) */}
            <div className="flex items-center gap-1 mb-4">
              {Array.from({ length: 5 }, (_, i) => (
                <FaStar
                  key={i}
                  className={`${
                    i < Math.round(product.rating)
                      ? "text-yellow-500"
                      : "text-gray-300"
                  }`}
                />
              ))}
              <span className="ml-2 text-gray-600">({product.rating})</span>
            </div>

            {/* Colors */}
            <div className="flex items-center gap-2 mb-4">
              <span className="font-medium">Color:</span>
              <div className="w-5 h-5 rounded-full bg-gray-300 cursor-pointer"></div>
              <div className="w-5 h-5 rounded-full bg-red-400 cursor-pointer"></div>
              <div className="w-5 h-5 rounded-full bg-green-400 cursor-pointer"></div>
              <div className="w-5 h-5 rounded-full bg-gray-500 cursor-pointer"></div>
              <div className="w-5 h-5 rounded-full bg-teal-400 cursor-pointer"></div>
            </div>

            {/* Size */}
            <div className="mb-4">
              <span className="font-medium">Size: </span>
              <select className="ml-2 border px-3 py-1 rounded">
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>

            {/* Quantity */}
            <div className="mb-4 flex items-center">
              <span className="font-medium">Quantity: </span>
              <div className="inline-flex items-center border rounded ml-2">
                <button
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="px-3 py-1"
                >
                  -
                </button>
                <span className="px-4">{quantity}</span>
                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="px-3 py-1"
                >
                  +
                </button>
              </div>
            </div>

            {/* Status */}
            <p className="mb-6">
              <span className="font-medium">Status: </span>
              <span className="text-green-600">In stock</span>
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mb-6">
              <button className="px-6 py-2 border rounded hover:bg-gray-100">
                Add to Wish List
              </button>
              <button className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800">
                Add to Cart
              </button>
            </div>

            {/* Expandable Details */}
            <div className="space-y-3">
              <details className="border-t pt-2">
                <summary className="cursor-pointer font-medium">
                  Features & Details
                </summary>
                <p className="text-gray-600 mt-2">{product.description}</p>
              </details>
              <details className="border-t pt-2">
                <summary className="cursor-pointer font-medium">
                  Shipping & Returns
                </summary>
                <p className="text-gray-600 mt-2">
                  Free shipping worldwide. Easy 30-day returns.
                </p>
              </details>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ProductDetails
