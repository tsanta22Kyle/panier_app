import { useCartStore } from "./stateManager";
import CartItem from "../dumb/cartItem";
import { useNavigate } from "react-router-dom";
import nothing from "../assets/shopping.png";
import toast from "react-hot-toast";

function CartListSmart() {
  const nav = useNavigate();
  const removeItem = useCartStore((state) => state.removeItem);
  const removeAll = useCartStore((state) => state.removeAll);

  const navtoHome = () => {
    nav("/");
  };
  const cartItems = useCartStore((state) => state.cartList);
  console.log("cartItems", cartItems);

  const totalPriceCalculator = () => {
    return cartItems.reduce(
      (acc, currVal) => acc + currVal.price * currVal.count,
      0
    );
  };
  const shoppingDone = () => {
    
    toast("payment done",{
        duration : 2000,
        icon : "💲"
    });
    removeAll()
    navtoHome();
  };

  return (
    <>
      <button onClick={navtoHome} className="back">
        back to menu{" "}
      </button>
      <div
        className={
          cartItems.length == 0 ? "nothing-visible" : "nothing-invisible"
        }
      >
        <img src={nothing} alt="empty cart" className="nothing-img" />
        <p>nothing yet..</p>
      </div>
      {cartItems.map((item) => (
        <CartItem
          name={item.title}
          id={item.id}
          price={item.price}
          key={item.id}
          image={item.image}
          count={item.count}
          removeItem={removeItem}
        ></CartItem>
      ))}

      <div className={cartItems.length !== 0 ? "total-container" : "nothing-invisible"}>
        <div className="total-price">
          <p>Total TTC</p> <p>{totalPriceCalculator()} £</p>
        </div>
        <button onClick={shoppingDone} className="buy">
          BUY
        </button>
      </div>
    </>
  );
}

export default CartListSmart;
