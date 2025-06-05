import { useState } from "react";

function App() {

  const products = [
    { id: 1, name: 'Mela', price: 0.5 },
    { id: 2, name: 'Pane', price: 1.2 },
    { id: 3, name: 'Latte', price: 1.0 },
    { id: 4, name: 'Pasta', price: 0.7 },
  ];

  const [addedProducts, setAddedProducts] = useState([]);

  const updateProductQuantity = (name, quantity) => {
    setAddedProducts(curr => curr.map(p => {
      if (p.name === name) {
        return {
          ...p,
          quantity
        }
      }
      return p;
    }))
  }

  const addToCart = product => {
    const isAlreadyAdded = addedProducts.find(p => p.name === product.name);
    if (isAlreadyAdded) {
      updateProductQuantity(isAlreadyAdded.name, isAlreadyAdded.quantity + 1)
      return;
    }
    setAddedProducts(curr => [...curr, {
      ...product,
      quantity: 1
    }]);
  }

  const removeFromCart = product => {
    setAddedProducts(curr => curr.filter(p => p.name !== product.name))
  }

  const totalPrice = addedProducts.reduce(
    (acc, p) => acc + (p.price * p.quantity),
    0);

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

        {addedProducts.length > 0 && (<>
          <ul>
            {addedProducts.map((product) => (
              <li key={product.id}>{product.quantity} x {product.name}
                <button onClick={() => removeFromCart(product)}>Rimuovi</button>
              </li>
            ))}
          </ul>
          <h4>Totale da Pagare: {totalPrice.toFixed(2)}€</h4>
        </>)}

      </div>
    </>
  )
}

export default App