import { Link } from "react-router-dom";

const ProductPage = () => {
  const PRODUCT = [
    { id: "p1", title: "Procuct 1" },
    { id: "p2", title: "Procuct 2" },
    { id: "p3", title: "Procuct 3" },
  ];
  return(
  <>
    <h1>My Product Page!!</h1>
    <ul>
      {PRODUCT.map((prod) => (
        <li key={prod.id}>
          <Link to={`/products/${prod.id}`}>{prod.title}</Link>
        </li>
      ))}
    </ul>
  </>)
};

export default ProductPage;
