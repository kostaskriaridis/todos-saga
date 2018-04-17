import React, { Component } from 'react';

export default class Todos extends Component {
    componentDidMount() {
        this.props.onFetchTodos();
    }

    render() {
        const { todos, isLoading, error } = this.props;

        if (isLoading) {
            return (
                <div>Loading...</div>
            );
        }

        if (error) {
            return (
                <div>{error.message}</div>
            );
        }

        return (
            <div>
                {todos.map(todo => (
                    <div key={todo.id}>
                        {todo.text}
                    </div>
                ))}
            </div>
        );
    }
}
