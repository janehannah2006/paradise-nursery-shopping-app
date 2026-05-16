import { useState } from "react";

function CartItem() {
  const [quantity, setQuantity] = useState(1);

  const unitPrice = 10;

  const totalCost = quantity * unitPrice;

  const calculateTotalAmount = () => {
    return totalCost;
  };

  return (
    <div>
      <h1>Shopping Cart</h1>

      <div>
        <img
          src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
          alt="plant"
          width="120"
        />

        <h2>Aloe Vera</h2>

        <p>Unit Price: ${unitPrice}</p>

        <p>Quantity: {quantity}</p>

        <p>Total Cost: ${totalCost}</p>

        <button onClick={() => setQuantity(quantity + 1)}>
          +
        </button>

        <button
          onClick={() =>
            quantity > 1 && setQuantity(quantity - 1)
          }
        >
          -
        </button>

        <button>Delete</button>
      </div>

      <h2>
        Total Cart Amount: ${calculateTotalAmount()}
      </h2>

      <button
        onClick={() => alert("Coming Soon")}
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
