import {
    DATA_FETCH_LOADING,
    DATA_FETCH_SUCCESS,
    DATA_FETCH_FAILURE,
    APPLY_FILTER_SUCCESS,
} from "../Constants";

const initialState = {
    products: [],
    filters: {},
    fproducts: []
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case APPLY_FILTER_SUCCESS:
            return ({
                ...state,
                fproducts: action.payload.fproducts,
                filters: action.payload.filters,
            })

        case DATA_FETCH_SUCCESS:
            const filters = action.payload && extractData(action.payload);
            return ({
                ...state,
                filters,
                products: action.payload,
                fproducts: action.payload
            })
        case DATA_FETCH_LOADING:
            return ({...state, products: action.payload })
        case DATA_FETCH_FAILURE:
            return ({...state, })
        default:
            return ({...state, })
    }
}


const extractData = (payload) => {
    let monthsArr = [];
    let colorArr = [];
    let tempColorArr = [];
    payload && payload.forEach((product) => {
        product.Variant && product.Variant.forEach(
            (variant) => {
                if (tempColorArr.indexOf(variant.color) <= -1) {
                    tempColorArr.push(variant.color);
                    colorArr.push({ name: variant.color, isSelected: false });
                }
                monthsArr = [...monthsArr, ...(variant.months)]
            }
        )
    });

    const removeDuplicate = (monthArr) => {
        var filteredMonthArr = [];
        var tempFilteredMonthArr = [];
        monthArr.forEach((month) => {
            if (tempFilteredMonthArr.indexOf(month) < 0) {
                tempFilteredMonthArr.push(month);
                filteredMonthArr.push({ name: month, isSelected: false })
            }
        })
        return filteredMonthArr;
    }

    return {
        months: removeDuplicate(monthsArr),
        colors: colorArr
    }
}

export default productReducer