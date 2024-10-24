import React, { useEffect } from "react";
import styles from "./ProductItem.module.css";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AddToCartButtonWithTransition } from "../../../Utilities/AddToCartButton";



function ProductItem({ product }) {
  const navigate = useNavigate();
  console.log(product.id);
  return (
    <div
      className="group p-8 border border-transparent hover:border-green-500 hover:border-2 hover:cursor-pointer hover:shadow-lg rounded-md transition-all"
      onClick={() => navigate(`/productDetails/${product.id}`)}
    >
      <img
        src={product.image}
        className="w-full object-contain sm:h-40 xl:h-64 rounded"
        alt={product.title}
      />
      <p className="text-sm text-green-500 my-2">{product.category}</p>
      <h3 className="text-green-500 my-3">
        {product.title.split(" ").slice(0, 3).join(" ")}
      </h3>
      <p className="line-clamp-3 mb-3">{product.description}</p>
      <div className="flex justify-between pt-1 mb-5">
        <p>{product.price} Egy</p>
        <p className="flex align-middle">
          <span className="mt-1 me-2">{product.rating.rate}</span>
          <FaStar className="text-yellow-400 self-center mt-1" />
        </p>
      </div>
      <AddToCartButtonWithTransition itemId={product._id} />
    </div>
  );
}

export default ProductItem;
