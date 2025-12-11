import { useEffect, useState } from "react";
import CartList from "./components/cart-list/CartList";
import './App.css'
export default function App() {
  const [cart, setCart] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem("mini-cart");
    if (saved) setCart(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("mini-cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    window.__addToCart = (product) => {
      setCart((prev) => {
        const id = product.id;
        const updated = { ...prev };
        if (updated[id]) updated[id].qty += 1;
        else updated[id] = { product, qty: 1 };
        return updated;
      });
    };
  }, []);

  const clearCart = () => setCart({});
  const removeItem = (id) => {
    setCart((prev) => {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    });
  };

  const changeQty = (id, delta) => {
    setCart((prev) => {
      const updated = { ...prev };
      updated[id].qty += delta;
      if (updated[id].qty <= 0) delete updated[id];
      return updated;
    });
  };

  const totalItems = Object.values(cart).reduce((s, c) => s + c.qty, 0);
  const totalPrice = Object.values(cart).reduce(
    (s, c) => s + c.product.price * c.qty,
    0
  );
  console.log(cart);

  return (
    <div className={`cart ${totalItems > 0 ? "has-items" : ""}`}>
      <div className="cart-header">
        <div>
          <h2>Cart</h2>
          <p>{totalItems} items</p>
        </div>
        <button className="cart-clear-btn" onClick={clearCart}>Clear</button>
      </div>

      <CartList items={cart} removeItem={removeItem} changeQty={changeQty} />

      <div className="cart-total">
        Total: ${totalPrice.toFixed(2)}
      </div>
    </div>

  );
}
