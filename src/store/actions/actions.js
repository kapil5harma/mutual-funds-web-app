import * as actionTypes from './actionTypes';

export const fetchCategories = () => {
  return {
    type: actionTypes.FETCH_CATEGORIES
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

export const fetchFundDetails = (key1, key2) => {
  return {
    type: actionTypes.FETCH_FUND_DETAILS,
    key1,
    key2
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
    fund1: fundDetails.fund1,
    fund2: fundDetails.fund2
  };
};

export const fetchFundDetailsFail = error => {
  return {
    type: actionTypes.FETCH_FUND_DETAILS_FAIL,
    error: error
  };
};
