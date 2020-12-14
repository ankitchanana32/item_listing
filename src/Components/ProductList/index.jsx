import ProductCard from "../ProductCard";
import "./style.css";

const ProductList = (props) => {
  return (
    <>
      {props.products &&
        props.products.map((product, index) => {
          return <ProductCard product={product} key={index}></ProductCard>;
        })}
    </>
  );
};

export default ProductList;
