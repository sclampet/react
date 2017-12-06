import React, { Component } from 'react';

class CreateTodo extends Component {
    render() {
        return (
            <form>
                <input type='text' placeholder='Add Todo Task' />
                <button>Create</button>
            </form>
        );
    }
}

export default CreateTodo;