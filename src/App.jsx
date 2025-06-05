import { useState } from "react";

function App() {

  const products = [
    { id: 1, name: 'Mela', price: 0.5 },
    { id: 2, name: 'Pane', price: 1.2 },
    { id: 3, name: 'Latte', price: 1.0 },
    { id: 4, name: 'Pasta', price: 0.7 },
  ];

  const [addedProducts, setAddedProducts] = useState([]);
  console.log(addedProducts)

  const addToCart = product => {
    const isAlreadyAdded = addedProducts.some(p => p.name === product.name);
    if (isAlreadyAdded) {
      return;
    }
    setAddedProducts(curr => [...curr, {
      ...product,
      quantity: 1
    }]);
  }

  return (
    <>
      <div>
        <h1>Prodotti</h1>
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.name}, {product.price.toFixed(2)}€
              <button onClick={() => addToCart(product)}>Aggiungi al carrello</button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Prodotti nel Carrello</h2>
        {addedProducts.length > 0 && (<ul>

          {addedProducts.map((product) => (
            <li key={product.id}>{product.name}, {product.price.toFixed(2)}€, {product.quantity} unità</li>
          ))}

        </ul>)}
      </div>
    </>
  )
}

export default App