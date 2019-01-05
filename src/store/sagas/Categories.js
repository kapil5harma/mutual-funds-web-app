import axios from 'axios';
import { put } from 'redux-saga/effects';
import * as actions from '../actions/actions';

const token = 'a41d2b39e3b47412504509bb5a1b66498fb1f43a';
const config = {
  headers: { Authorization: 'Token ' + token }
};

export function* fetchCategoriesSaga(action) {
  try {
    console.log('action: ', action);
    let data = {};
    if (action.filters.min && action.filters.max) {
      data = {
        search: action.search,
        filters: {
          minimum_investments: action.filters.min,
          maximum_investments: action.filters.max
        }
      };
    }
    console.log('data: ', data);
    yield put(actions.fetchCategoriesStart());
    let searchParameter = '';
    if (action.searchParameter) searchParameter = action.searchParameter;
    const url = yield `https://api.piggy.co.in/v2/mf/search/${searchParameter}`;
    const res = yield axios.post(url, data, config);
    const searchResults = [];
    for (let key in res.data.data.search_results) {
      if (Number(key) === 99) {
        break;
      }
      searchResults.push({
        id: key,
        ...res.data.data.search_results[key]
      });
    }
    yield put(actions.fetchCategoriesSuccess(searchResults));
  } catch (err) {
    yield put(actions.fetchCategoriesFail(err));
  }
}

export function* fetchFundDetailsSaga(action) {
  try {
    yield put(actions.fetchFundDetailsStart());

    const url1 = yield action.keys.fund1 !== undefined
      ? `https://api.piggy.co.in/v1/mf/?key=${action.keys.fund1}`
      : ``;
    const url2 = yield action.keys.fund2 !== undefined
      ? `https://api.piggy.co.in/v1/mf/?key=${action.keys.fund2}`
      : ``;
    const url3 = yield action.keys.fund3 !== undefined
      ? `https://api.piggy.co.in/v1/mf/?key=${action.keys.fund3}`
      : ``;
    const url4 = yield action.keys.fund4 !== undefined
      ? `https://api.piggy.co.in/v1/mf/?key=${action.keys.fund4}`
      : ``;

    let fund1 = {};
    let fund2 = {};
    let fund3 = {};
    let fund4 = {};
    let res1, res2, res3, res4;
    if (url1 === ``) fund1 = null;
    else {
      res1 = yield axios.get(url1, config);
      fund1 = { ...res1.data.data.mutual_fund };
    }
    if (url2 === ``) fund2 = null;
    else {
      res2 = yield axios.get(url2, config);
      fund2 = { ...res2.data.data.mutual_fund };
    }
    if (url3 === ``) fund3 = null;
    else {
      res3 = yield axios.get(url3, config);
      fund3 = { ...res3.data.data.mutual_fund };
    }
    if (url4 === ``) fund4 = null;
    else {
      res4 = yield axios.get(url4, config);
      fund4 = { ...res4.data.data.mutual_fund };
    }
    yield put(actions.fetchFundDetailsSuccess({ fund1, fund2, fund3, fund4 }));
  } catch (err) {
    yield put(actions.fetchFundDetailsFail(err));
  }
}

export function* searchedFundSaga(action) {
  try {
    if (!action.searchResults.length) {
      return;
    }
    const searchResults = [...action.searchResults];
  } catch (err) {
    // yield put(actions.fetchCategoriesFail(err));
  }
}
