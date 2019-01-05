import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import {
  fetchCategoriesSaga,
  fetchFundDetailsSaga,
  searchedFundSaga
} from './Categories';

export function* watchCategories() {
  yield takeEvery(actionTypes.FETCH_CATEGORIES, fetchCategoriesSaga);
  yield takeEvery(actionTypes.FETCH_FUND_DETAILS, fetchFundDetailsSaga);
  yield takeEvery(actionTypes.SEARCHED_FUND, searchedFundSaga);
}
