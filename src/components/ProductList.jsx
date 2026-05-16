function ProductList() {
  const plants = [
    { id: 1, name: "Aloe Vera", price: 10, category: "Indoor" },
    { id: 2, name: "Snake Plant", price: 15, category: "Indoor" },
    { id: 3, name: "Peace Lily", price: 20, category: "Indoor" },
    { id: 4, name: "Rose", price: 12, category: "Flowering" },
    { id: 5, name: "Tulip", price: 14, category: "Flowering" },
    { id: 6, name: "Sunflower", price: 18, category: "Flowering" },
    { id: 7, name: "Bonsai", price: 25, category: "Decorative" },
    { id: 8, name: "Cactus", price: 8, category: "Decorative" },
    { id: 9, name: "Fern", price: 11, category: "Decorative" },
  ];

  return (
    <div>
      <nav>
        <h2>Paradise Nursery</h2>
        <a href="/">Home</a> | 
        <a href="/plants">Plants</a> | 
        <a href="/cart">Cart</a>
      </nav>

      <h1>Plant List</h1>

      {plants.map((plant) => (
        <div key={plant.id}>
          <h3>{plant.name}</h3>
          <p>Category: {plant.category}</p>
          <p>Price: ${plant.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
