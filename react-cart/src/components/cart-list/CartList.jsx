import CartItem from "../cart-item/CartItem";

export default function CartList({ items, removeItem, changeQty }) {
  const ids = Object.keys(items);

  if (ids.length === 0) {
    return <p className="cart-empty">Cart is empty</p>;
  }

  return (
    <div className="cart-list">
      {ids.map((id) => (
        <CartItem
          key={id}
          item={items[id]}
          removeItem={() => removeItem(id)}
          increase={() => changeQty(id, +1)}
          decrease={() => changeQty(id, -1)}
        />
      ))}
    </div>
  );
}
