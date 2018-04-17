import { connect } from 'react-redux';
import Todos from '../components/todos';
import { fetchTodos } from '../actions/todos';

export default connect(
    state => ({
        todos: state.todos.list,
        isLoading: state.todos.isLoading,
        error: state.todos.error
    }),
    {
        onFetchTodos: fetchTodos
    }
)(Todos);
