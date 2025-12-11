export default function CartItem({ item, removeItem, increase, decrease }) {
  const { product, qty } = item;

  return (
    <div className="cart-item">
      <div className="cart-item-left">
        <img src={product.image} />
        <div className="cart-item-info">
          <h4>{product.title}</h4>
          <p>${product.price}</p>
        </div>
      </div>

      <div className="cart-item-right">
        <div className="qty-controls">
          <button className="qty-btn" onClick={decrease}>-</button>
          <span className="qty-number">{qty}</span>
          <button className="qty-btn" onClick={increase}>+</button>
        </div>

        <button className="remove-btn" onClick={removeItem}>Remove</button>
      </div>
    </div>

  );
}
