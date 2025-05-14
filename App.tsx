import { useState } from "react";
import NavBar from "./Components/ShoppingCart/NavBar";
import Cart from "./Components/ShoppingCart/Cart";

type Product = {
  id: string;
  name: string;
};

const ProductNames = [
  "Laptop",
  "Phone",
  "Headphones",
  "Keyboard",
  "Monitor",
  "Mouse",
  "Webcam",
  "Charger",
  "Backpack",
  "Speaker",
];

const App = ({}) => {
  const [cart, setCart] = useState<Product[]>([]);
  const getRandomProduct = (): Product => {
    const name = ProductNames[Math.floor(Math.random() * ProductNames.length)];
    return {
      id: crypto.randomUUID(),
      name,
    };
  };
  const clearBtn = () => {
    setCart([]);
  };
  const addToCart = () => {
    const newProduct = getRandomProduct();
    setCart([...cart, newProduct]);
  };
  const removeBtn = (id: string) => {
    setCart(cart.filter((item) => item.id !== id));
  };
  return (
    <div className="container mt-4">
      <NavBar cartItemsCount={cart.length}></NavBar>
      <Cart
        items={cart}
        onClear={clearBtn}
        onAdd={addToCart}
        onRemove={removeBtn}
      />
    </div>
  );
};

export default App;
