function App() {

  const products = [
    { id: 1, name: 'Mela', price: 0.5 },
    { id: 2, name: 'Pane', price: 1.2 },
    { id: 3, name: 'Latte', price: 1.0 },
    { id: 4, name: 'Pasta', price: 0.7 },
  ];

  return (
    <div>
      <h1>Prodotti</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}, {product.price}</li>
        ))}
      </ul>
    </div>
  )
}

export default App