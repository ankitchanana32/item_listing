import { useEffect, useState } from "react";
import "./style.css";
const Productcard = (props) => {
  const { product = {} } = props;

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

  let [productvariant, setproductvariant] = useState(extractVariants(product));
  let [selectedvariantId, setselectedvariantId] = useState(
    Object.keys(productvariant) && Object.keys(productvariant)[0]
  );
  let [selectedVariant, setselectedvariant] = useState(
    selectedvariantId ? productvariant[selectedvariantId] : {}
  );

  useEffect(() => {
    setproductvariant(extractVariants(product));
    setselectedvariantId(
      Object.keys(productvariant) && Object.keys(productvariant)[0]
    );
    setselectedvariant(
      selectedvariantId ? productvariant[selectedvariantId] : {}
    );
  }, []);

  const updateSelectedvariant = (product, selectedvariantId) => {
    setselectedvariant(product);
    if (selectedvariantId) {
      setselectedvariantId(selectedvariantId);
    }
  };

  let colorboxes = [];
  let index = 0;

  for (const variantID in productvariant) {
    let product = productvariant[variantID];
    colorboxes.push(
      <div
        key={index}
        style={{ background: product.color }}
        className="colorBox"
        onMouseOver={updateSelectedvariant.bind(null, product, null)}
        onMouseOut={updateSelectedvariant.bind(
          null,
          productvariant[selectedvariantId],
          null
        )}
        onClick={updateSelectedvariant.bind(null, product, variantID)}
      ></div>
    );
    index++;
  }

  return (
    <div className="productCard">
      <div
        className="cardColor"
        style={{ background: selectedVariant && selectedVariant.color }}
      />

      <div className="cardDetails">
        <div> Product Name : {selectedVariant && selectedVariant.name} </div>
        <div> Brand : {selectedVariant && selectedVariant.brand}</div>
        <div> Cost : {selectedVariant && selectedVariant.Variant}</div>
        <div>{colorboxes}</div>
      </div>
    </div>
  );
};

export default Productcard;
