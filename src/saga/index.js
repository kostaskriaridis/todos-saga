import { call, put, takeEvery } from 'redux-saga/effects';
import {
    FETCH_TODOS_REQUEST,
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_FAILURE
} from '../constants/action-types';
import * as Api from '../api';

/**
 * Fetch todos saga
 */
function* fetchTodos() {
    try {
        const todos = yield call(Api.fetchTodos);
        yield put({ type: FETCH_TODOS_SUCCESS, todos });
    } catch (error) {
        yield put({ type: FETCH_TODOS_FAILURE, error });
    }
}

/**
 * Root saga
 */
export default function* saga() {
    yield takeEvery(FETCH_TODOS_REQUEST, fetchTodos);
}
