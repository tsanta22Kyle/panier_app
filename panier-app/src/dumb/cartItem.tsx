import "../index.css";
import deleteIcon from "../assets/delete.png";
import { useCartStore } from "../smart/stateManager";
function CartItem({ name, price, image, count, removeItem, id }) {
  const increment = useCartStore((state) => state.incrementCount);
  const discrement = useCartStore((state) => state.discrementCount);
  function incrementCount() {
    increment(id);
  }
  function discrementCount() {
    if (count >= 2) {
      discrement(id);
    }
  }
  return (
    <>
      <div className="cart-item-container">
        <div className="style-container">
          <img src={image} alt="item" className="cart-item-img" />
          <div className="product-item">
            <p className="product-name">{name}</p>

            <div className="item-count-container">
              <button onClick={discrementCount} className="count-button">
                -
              </button>
              <p>{count}</p>
              <button onClick={incrementCount} className="count-button">
                +
              </button>
            </div>
          </div>
          <div className="item-price-actions">
            <p className="price">{price} £</p>
            <div className="item-actions">
              <img
                src={deleteIcon}
                onClick={() => removeItem(id)}
                alt="delete"
                className="delete-icon"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
