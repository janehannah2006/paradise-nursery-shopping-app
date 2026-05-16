import { useState } from "react";

function CartItem() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Aloe Vera",
      price: 10,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    },
  ]);

  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(
      cartItems.filter((item) => item.id !== id)
    );
  };

  const calculateTotalAmount = () => {
    return cartItems.reduce(
      (total, item) =>
        total + item.price * item.quantity,
      0
    );
  };

  return (
    <div>
      <h1>Shopping Cart</h1>

      {cartItems.map((item) => (
        <div key={item.id}>
          <img
            src={item.image}
            alt={item.name}
            width="120"
          />

          <h2>{item.name}</h2>

          <p>Unit Price: ${item.price}</p>

          <p>Quantity: {item.quantity}</p>

          <p>
            Total Cost: $
            {item.price * item.quantity}
          </p>

          <button
            onClick={() =>
              increaseQuantity(item.id)
            }
          >
            +
          </button>

          <button
            onClick={() =>
              decreaseQuantity(item.id)
            }
          >
            -
          </button>

          <button
            onClick={() =>
              removeItem(item.id)
            }
          >
            Delete
          </button>
        </div>
      ))}

      <h2>
        Total Cart Amount: $
        {calculateTotalAmount()}
      </h2>

      <button
        onClick={() =>
          alert("Coming Soon")
        }
      >
        Checkout
      </button>

      <br />
      <br />

      <button>
        Continue Shopping
      </button>
    </div>
  );
}

export default CartItem;
