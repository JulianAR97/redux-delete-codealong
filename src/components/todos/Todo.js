import React from 'react'

const Todo = props => {
  return (
    <div>
      <span>{props.todo.text}</span><button onclick={() => props.delete(props.todo.id)}>DELETE</button>
    </div>
  )
}

export default Todo;
