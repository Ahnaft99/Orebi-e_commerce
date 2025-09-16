import React from "react"
import { Link } from "react-router-dom"

const Post = ({ allpage, view }) => {
  return (
    <div
      className={
        view === "grid"
          ? "grid grid-cols-3 gap-6"
          : "flex flex-col gap-6"
      }
    >
      {allpage?.map((item) => (
        <Link
          to={`/Shop/${item.id}`}
          key={item.id}
          className={
            view === "grid"
              ? "border p-4 rounded shadow"
              : "flex border p-4 rounded shadow items-center gap-4"
          }
        >
          {/* Product Image */}
          <img
            src={item.image || item.thumbnail || "/placeholder.png"}
            alt={item.title}
            className={
              view === "grid"
                ? "w-full h-[200px] object-cover"
                : "w-[120px] h-[120px] object-cover"
            }
          />

          {/* Product Info */}
          <div>
            <h2 className="font-bold text-lg">{item.title}</h2>
            <p className="text-sm text-gray-600">{item.category}</p>
            <p className="text-red-500 font-semibold">${item.price}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Post
