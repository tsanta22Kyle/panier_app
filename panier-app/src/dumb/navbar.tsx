import { useState } from "react";
import ProductItem from "./dumb/productItem";
import CartItem from "./dumb/cartItem";
import bag from "../assets/bag.png"
import user from "../assets/man.png"
import your from "../assets/meet-your-friends-logo.png"
import shop from "../assets/shop.png"
import { useNavigate } from "react-router-dom";
function NavBar() {
  const nav = useNavigate()
  const changePage= ()=>{
    nav("cart")
  }
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-items">
          <li className="nav-item logo-container">
            <img src={your} alt="LOGO" className="logo cool-zoom" />
            {/* <p>shop</p> */}
            <img src={shop} alt="LOGO" className="logo cool-zoom" />
          </li>
          <li className="nav-item">
            <a href="#" className="style-link">Reselling</a>
          </li>
          <li className="nav-item">
            <a href="#" className="style-link">Ganranted quality</a>
          </li>
          <li className="nav-item">
            <a href="#" className="style-link">Our Backstories</a>
          </li>
          <li className="nav-item">
            <a href="#" className="style-link">About us</a>
          </li>
        </ul>
        <div className="actions-container">
          <img src={user} alt="user" className="cart-logo cool-zoom" />
          <button onClick={changePage}>
          <img src={bag}  alt="cart" className="cart-logo cool-zoom" />

          </button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
