import { FETCH_TODOS_REQUEST } from '../constants/action-types';

/**
 * Fetch todos redux action
 *
 * @returns {Object} redux action
 */
export function fetchTodos() {
    return {
        type: FETCH_TODOS_REQUEST
    };
}
