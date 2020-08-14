const INITIAL_STATE = {
    currentProducts:{}
}

const productsReducer = (state = INITIAL_STATE, action) => 
{
    switch (action.type) {
        case 'SET_CURRENT_PRODUCTS':
            return {
                ...state,
                currentProducts: action.payload
            }
        default:
            return state;
    }
}

export default productsReducer;