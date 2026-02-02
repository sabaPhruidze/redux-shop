import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, clearCart } from "./redux/cartSlice";
import { ShoppingCart, Trash2 } from "lucide-react";
import "./App.css";

const products = [
  { id: 1, name: "Apple", price: 2.5 },
  { id: 2, name: "Banana", price: 3.5 },
  { id: 3, name: "Kiwi", price: 4.6 },
  { id: 4, name: "Pineapple", price: 9.8 },
];
function App() {
  const { cartItems, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="app-container">
      <nav className="navbar">
        <h1>Online shop</h1>
        <div className="cart-badge">
          <ShoppingCart size={24} />{" "}
          <span className="price-tag">{totalPrice.toFixed(1)}</span>{" "}
          {/*used toFixed method */}
        </div>
      </nav>
      <main className="main-content">
        <h2>Choose your product</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button
                className="add-button"
                onClick={() => dispatch(addToCart(product))}
              >
                Add Cart
              </button>
            </div>
          ))}
        </div>
        {cartItems.length > 0 && (
          <div className="cart-actions">
            <button
              onClick={() => dispatch(clearCart())}
              className="clear-button"
            >
              Clear cart
            </button>
            <Trash2 size={18} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
