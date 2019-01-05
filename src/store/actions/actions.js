import * as actionTypes from './actionTypes';

export const fetchCategories = (search, filters) => {
  return {
    type: actionTypes.FETCH_CATEGORIES,
    search,
    filters
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
    searchResults: [...searchResults]
  };
};

export const fetchCategoriesFail = error => {
  return {
    type: actionTypes.FETCH_CATEGORIES_FAIL,
    error: error
  };
};

export const fetchFundDetails = keys => {
  return {
    type: actionTypes.FETCH_FUND_DETAILS,
    keys
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
    fund2: fundDetails.fund2,
    fund3: fundDetails.fund3,
    fund4: fundDetails.fund4
  };
};

export const fetchFundDetailsFail = error => {
  return {
    type: actionTypes.FETCH_FUND_DETAILS_FAIL,
    error: error
  };
};

export const searchedFund = searchResults => {
  return {
    type: actionTypes.SEARCHED_FUND,
    searchResults: [...searchResults]
  };
};
