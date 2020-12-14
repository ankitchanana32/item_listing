import ProductCard from "../ProductCard";
import "./style.css";

const ProductList = (props) => {
  const extractVariants = (prod) => {
    let prodvariants = {};
    prod.Variant.forEach((variant) => {
      prodvariants[variant.variationId] = {
        prodId: prod.id,
        name: prod.name,
        brand: prod.brand,
        variantId: variant.variationId,
        cost: variant.cost,
        color: variant.color,
      };
    });
    return prodvariants;
  };
  return (
    <>
      {props.products &&
        props.products.map((product, index) => {
          return (
            <ProductCard
              product={extractVariants(product)}
              key={index}
            ></ProductCard>
          );
        })}
    </>
  );
};

export default ProductList;
