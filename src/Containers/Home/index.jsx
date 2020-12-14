import React, { Suspense } from "react";
import "./style.css";
import { connect } from "react-redux";
import DataActions from "../../Actions";
const Filters = React.lazy(() => import("../../Components/Filters"));
const ProductList = React.lazy(() => import("../../Components/ProductList"));

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getProductsData();
  }

  render() {
    const { filters, fproducts, getFilteredData } = this.props;

    return (
      <div className="parent">
        <div className="filters">
          <Suspense fallback={<div>Loading...</div>}>
            <Filters filters={filters} getFilteredData={getFilteredData} />
          </Suspense>
        </div>

        <div className="productlist">
          <Suspense fallback={<div>Loading...</div>}>
            <ProductList products={fproducts} />
          </Suspense>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.productReducer.products,
    filters: state.productReducer.filters,
    fproducts: state.productReducer.fproducts,
  };
};
const mapDispatchToProps = {
  getProductsData: DataActions.getData,
  getFilteredData: DataActions.getFilteredData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
