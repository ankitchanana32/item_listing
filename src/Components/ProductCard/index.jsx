import { useEffect, useState } from "react";
import "./style.css";
const Productcard = (props) => {
  const { product = {} } = props;

  let [productvariant, setproductvariant] = useState(product);
  let [selectedvariantId, setselectedvariantId] = useState(
    Object.keys(product) && Object.keys(product)[0]
  );
  let [selectedVariant, setselectedvariant] = useState(
    selectedvariantId
      ? product[Object.keys(product) && Object.keys(product)[0]]
      : {}
  );

  useEffect(() => {
    setproductvariant(props.product);
    setselectedvariantId(
      Object.keys(props.product) && Object.keys(props.product)[0]
    );
    setselectedvariant(
      selectedvariantId
        ? props.product[
            Object.keys(props.product) && Object.keys(props.product)[0]
          ]
        : {}
    );
  }, [props]);

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
