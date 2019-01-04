import * as actionTypes from './actionTypes';

export const fetchCategories = route => {
  return {
    type: actionTypes.FETCH_CATEGORIES,
    route
  };
};

export const fetchCategoriesStart = () => {
  return {
    type: actionTypes.FETCH_CATEGORIES_START
  };
};

export const fetchCategoriesSuccess = searchResults => {
  return {
    type: actionTypes.FETCH_CATEGORIES_SUCCESS,
    searchResults: searchResults
  };
};

export const fetchCategoriesFail = error => {
  return {
    type: actionTypes.FETCH_CATEGORIES_FAIL,
    error: error
  };
};

export const fetchFundDetails = key => {
  return {
    type: actionTypes.FETCH_FUND_DETAILS,
    key
  };
};

export const fetchFundDetailsStart = () => {
  return {
    type: actionTypes.FETCH_FUND_DETAILS_START
  };
};

export const fetchFundDetailsSuccess = fundDetails => {
  return {
    type: actionTypes.FETCH_FUND_DETAILS_SUCCESS,
    fundDetails: fundDetails
  };
};

export const fetchFundDetailsFail = error => {
  return {
    type: actionTypes.FETCH_FUND_DETAILS_FAIL,
    error: error
  };
};
