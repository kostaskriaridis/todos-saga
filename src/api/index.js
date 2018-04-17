/**
 * Fake API call for todos
 *
 * @returns {Promise}
 */
export function fetchTodos() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    text: 'Learn JS'
                },
                {
                    id: 2,
                    text: 'Learn Golang'
                },
                {
                    id: 3,
                    text: 'Learn ReduxSaga'
                }
            ])
        }, 1000);
    });
}