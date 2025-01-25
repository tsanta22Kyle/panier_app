import { useEffect, useState } from "react";
import { create } from "zustand";
import axios from "axios";
import ProductList from "../dumb/productList";
import { useProductStore,useCartStore } from "./stateManager";
import ProductItem from "../dumb/productItem";
function ProductListSmart() {
 
  const products = useProductStore((state) => state.productList);
  const addProduct = useProductStore((state) => state.addProduct);
  
  useEffect(() => {
    // console.log(cart)
    const loadProducts = async() => {
        try{

            const response = await axios.get("https://fakestoreapi.com/products/")
            // console.log(response)
            addProduct(response.data)
        }catch(error){
            console.error(error.message);
            
        }
    }
   loadProducts()
}, [ ]);

// console.log("products",products)
  return (
    <>
      <>
      <div className="product-list-container">

        <h2>Our products</h2>
      <div className="product-list">
        {
          products.map((product)=>(
            <ProductItem name={product.title} itemId={product.id} price={product.price} rating={product.rating.rate} key={product.id} imgURL={product.image} category={product.category}  />
          ))
        }
      </div>
        </div>
    </>
    </>
  );
}

export default ProductListSmart;
