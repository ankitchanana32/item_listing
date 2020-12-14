import dataAPI from "../APIs/DataAPI";
import {
    DATA_FETCH_LOADING,
    DATA_FETCH_SUCCESS,
    DATA_FETCH_FAILURE,
    APPLY_FILTER_SUCCESS,
} from "../Constants";

const getData = () => {
    return (dispatch) => {
        dispatch({
            type: DATA_FETCH_LOADING
        })
        dataAPI()
            .then((res) => {
                dispatch({
                    type: DATA_FETCH_SUCCESS,
                    payload: res.data,
                })
            })
            .catch((err) => {
                dispatch({
                    type: DATA_FETCH_FAILURE,
                    payload: "err",
                })
            })
    }
}

const getFilteredData = (filter) => {
    const { color, month } = filter;

    return ((dispatch, getState) => {
        let { products, filters } = getState().productReducer;
        let filteredProducts = {};
        let fproducts = [];

        if (color || month) {
            products.forEach(product => {
                filteredProducts[product.id] = {...product, Variant: [] };
                product.Variant.forEach((variant) => {
                    if (color && month) {
                        if (variant.color === color && variant.month.indexOf("month") > -1) {
                            filteredProducts[product.id].Variant.push(variant)
                        }

                    } else if (color && variant.color === color) {
                        filteredProducts[product.id].Variant.push(variant)
                    } else if (month && variant.months.indexOf(month) > -1) {
                        filteredProducts[product.id].Variant.push(variant);
                    }
                })
                if (!filteredProducts[product.id].Variant.length) {
                    delete filteredProducts[product.id];
                }
            });
            for (let prod in filteredProducts) {
                if (filteredProducts.hasOwnProperty(prod)) {
                    fproducts.push(filteredProducts[prod]);
                }
            }
        } else {
            fproducts = [...products]
        }
        filters.colors.forEach((clr) => {
            clr.isSelected = clr.name === color ?
                !clr.isSelected :
                false
        })

        filters.months.forEach((mnth) => {
            mnth.isSelected = mnth.name === month ?
                !mnth.isSelected :
                false
        })

        dispatch({
            type: APPLY_FILTER_SUCCESS,
            payload: { filters, fproducts }

        })
    })
}

export default { getData, getFilteredData }