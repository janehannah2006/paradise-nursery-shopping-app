import { useState } from "react";

function ProductList() {
  const [cartCount, setCartCount] = useState(0);
  const [addedItems, setAddedItems] = useState([]);

  const plants = {
    Indoor: [
      {
        id: 1,
        name: "Aloe Vera",
        price: 10,
        image:
          "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
      },
      {
        id: 2,
        name: "Snake Plant",
        price: 15,
        image:
          "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
      },
    ],

    Flowering: [
      {
        id: 3,
        name: "Rose",
        price: 20,
        image:
          "https://images.unsplash.com/photo-1490750967868-88aa4486c946",
      },
      {
        id: 4,
        name: "Tulip",
        price: 18,
        image:
          "https://images.unsplash.com/photo-1524593119773-61a4c1c1df31",
      },
    ],

    Decorative: [
      {
        id: 5,
        name: "Cactus",
        price: 12,
        image:
          "https://images.unsplash.com/photo-1459156212016-c812468e2115",
      },
      {
        id: 6,
        name: "Bonsai",
        price: 25,
        image:
          "https://images.unsplash.com/photo-1512428813834-c702c7702b78",
      },
    ],
  };

  const handleAddToCart = (id) => {
    setCartCount(cartCount + 1);
    setAddedItems([...addedItems, id]);
  };

  return (
    <div>
      <nav>
        <h2>Paradise Nursery</h2>

        <a href="/">Home</a> | 
        <a href="/plants">Plants</a> | 
        <a href="/cart">Cart ({cartCount})</a>
      </nav>

      <h1>Plant Products</h1>

      {Object.entries(plants).map(([category, items]) => (
        <div key={category}>
          <h2>{category}</h2>

          {items.map((plant) => (
            <div key={plant.id}>
              <img
                src={plant.image}
                alt={plant.name}
                width="150"
              />

              <h3>{plant.name}</h3>

              <p>${plant.price}</p>

              <button
                disabled={addedItems.includes(plant.id)}
                onClick={() => handleAddToCart(plant.id)}
              >
                {addedItems.includes(plant.id)
                  ? "Added"
                  : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
