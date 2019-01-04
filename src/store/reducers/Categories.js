import * as actionTypes from '../actions/actionTypes';

const initialState = {
  searchResults: [],
  fundDetails: null,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CATEGORIES_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        searchResults: action.searchResults,
        loading: false
      };
    case actionTypes.FETCH_CATEGORIES_FAIL:
      return {
        ...state,
        loading: false
      };
    case actionTypes.FETCH_FUND_DETAILS_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.FETCH_FUND_DETAILS_SUCCESS:
      return {
        ...state,
        fundDetails: action.fundDetails,
        loading: false
      };
    case actionTypes.FETCH_FUND_DETAILS_FAIL:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
