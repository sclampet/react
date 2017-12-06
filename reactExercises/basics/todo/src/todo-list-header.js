import React, { Component } from 'react';

class TodoListHeader extends Component {
    state = {  }
    render() {
        return (
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Actions</th>
                </tr>
            </thead>
        );
    }
}

export default TodoListHeader;