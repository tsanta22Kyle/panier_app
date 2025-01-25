import "../index.css";
import add from "../assets/shopping-bag.png";
import rating_icon from "../assets/star.png";
import { useCartStore, useProductStore ,useCountStore} from "../smart/stateManager";
import { useState } from "react";
import toast from "react-hot-toast";

function ProductItem({ name, rating, price, imgURL, category, itemId }) {
  const cart = useCartStore((state) => state.cartList);
  const products = useProductStore((state) => state.productList);
  const addToCart = useCartStore((state) => state.addItem);
  const incrementCount = useCartStore((state)=>state.incrementCount)
  



  

  const submit = (e) => {
    e.preventDefault();
    let isPresent = (cart.includes(cart.find((item)=> item.id == itemId)));
    
   if(isPresent === false){
    addToCart({
      title : name,
      price : price,
      image : imgURL,
      id : itemId,
      count : 1
     });
     toast("added to cart",{
      icon :"🛒",
     })
     
    }else {
      

        incrementCount(itemId)
        toast(cart.find((item)=> item.id == itemId).count+1,{
          duration : "100"
        })
      
     
    }
    
    console.log(cart);

  };
  return (
    <>
      <form className="product-container" onSubmit={submit}>
        <p className="img-desc">{category}</p>
        <img src={imgURL} alt="" className="product-logo" />
        <div className="product-desc">
          <div className="product-info">
            <div>
              <p className="product-name"> {name} </p>
            </div>
            <p className="product-price">{price} £</p>
          </div>
          <div className="product-rating">
            <button>
              <img src={add} alt="add" className="add" />
            </button>
            <div className="rating-container">
              <p className="product-specs">{rating} </p>

              <img src={rating_icon} alt="rating" className="rating-icon" />
              <img src={rating_icon} alt="rating" className="rating-icon" />
              <img src={rating_icon} alt="rating" className="rating-icon" />
              <img src={rating_icon} alt="rating" className="rating-icon" />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default ProductItem;
