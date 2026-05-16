function CartItem() {
  return (
    <div>
      <h1>Shopping Cart</h1>

      <div>
        <img
          src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
          alt="plant"
          width="100"
        />

        <h3>Aloe Vera</h3>
        <p>Unit Price: $10</p>
        <p>Total Cost: $20</p>

        <button>+</button>
        <button>-</button>
        <button>Delete</button>
      </div>

      <h2>Total Cart Amount: $20</h2>

      <button>Checkout</button>
      <p>Coming Soon</p>

      <button>Continue Shopping</button>
    </div>
  );
}

export default CartItem;
