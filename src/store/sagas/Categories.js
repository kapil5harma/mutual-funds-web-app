import axios from 'axios';
import { put } from 'redux-saga/effects';
import * as actions from '../actions/actions';

const token = 'a41d2b39e3b47412504509bb5a1b66498fb1f43a';
const config = {
  headers: { Authorization: 'Token ' + token }
};

export function* fetchCategoriesSaga(action) {
  console.log('action: ', action);
  try {
    yield put(actions.fetchCategoriesStart());
    let searchParameter = '';
    if (action.searchParameter) searchParameter = action.searchParameter;
    const url = yield `https://api.piggy.co.in/v2/mf/search/${searchParameter}`;
    const res = yield axios.post(url, config);
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
    // console.log('res: ', res);
    yield put(actions.fetchCategoriesSuccess(searchResults));
  } catch (err) {
    yield put(actions.fetchCategoriesFail(err));
  }
}

export function* fetchFundDetailsSaga(action) {
  console.log('action: ', action);
  try {
    yield put(actions.fetchFundDetailsStart());
    const key = action.key;
    const url = yield `https://api.piggy.co.in/v1/mf/?key=${key}`;
    const res = yield axios.get(url, config);
    const searchResults = [];
    // for (let key in res.data.data.search_results) {
    //   if (Number(key) === 99) {
    //     break;
    //   }
    //   searchResults.push({
    //     id: key,
    //     ...res.data.data.search_results[key]
    //   });
    // }
    console.log('res: ', res.data);
    yield put(actions.fetchFundDetailsSuccess(searchResults));
  } catch (err) {
    yield put(actions.fetchFundDetailsFail(err));
  }
}
