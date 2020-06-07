import * as actionType from "../Actions";
const initialState = {
    results: []
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat(action.resultCtr)
            };
        case actionType.DELETE_RESULT:
            var key = action.currKey;
            var newArray = state.results.filter((el, id) => id !== key);
            return {
                ...state,
                results: newArray
            };
    }
    return state;
};
export default reducer;
