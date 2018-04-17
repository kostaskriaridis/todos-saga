import {
    FETCH_TODOS_REQUEST,
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_FAILURE
} from '../constants/action-types';

const initialState = {
    isLoading: false,
    error: null,
    list: []
};

/**
 * Reducer holds the state of todos
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object} updated state
 */
export default function todos(state = initialState, action) {
    switch (action.type) {
        case FETCH_TODOS_REQUEST: {
            return {
                ...state,
                isLoading: true,
                error: null
            };
        }

        case FETCH_TODOS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                list: action.todos
            };
        }

        case FETCH_TODOS_FAILURE: {
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        }

        default: {
            return state;
        }
    }
}
