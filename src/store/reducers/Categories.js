import * as actionTypes from '../actions/actionTypes';

const initialState = {
  searchResults: [],
  fund1: {},
  fund2: {},
  fund3: {},
  fund4: {},
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
        searchResults: [...action.searchResults],
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
        fund1: action.fund1,
        fund2: action.fund2,
        fund3: action.fund3,
        fund4: action.fund4,
        loading: false
      };
    case actionTypes.FETCH_FUND_DETAILS_FAIL:
      return {
        ...state,
        loading: false
      };
    case actionTypes.SEARCHED_FUND:
      return {
        ...state,
        searchResults: [...action.searchResults],
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
