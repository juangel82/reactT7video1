import React from 'react';
import propTypes from 'prop-types'


const Todo = ({click,completed,text,id}) => {
    return (
        <li onClick={click}
        style = {
            {
                textDecoration: completed? 'line-through':'none',
                textDecorationColor : completed? 'green': 'none',
                color: completed ? 'green':'white'
            }
        }
        >
            {id}-{text}
        </li>
    );
}

Todo.propTypes ={
    click: propTypes.func.isRequired,
    completed: propTypes.bool.isRequired,
    text: propTypes.string.isRequired,
    id:propTypes.number.isRequired
}

export default Todo;
