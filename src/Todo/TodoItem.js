import React, {useContext} from 'react'
import TodoList from './TodoList'
import Context from '../context'

export default function TodoItme({todo, index, onChange}) {
  const styles = {
    li: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '.5rem 1rem',
      border: '1px solid #ccc',
      borderRadius: '4px',
      marginBottom: '.5rem',
    },
    input: {
      marginRight: '1rem',
    },
  }

  const {removeTodo} = useContext(Context)

  const classes = []
  if (todo.completed) classes.push('done')

  return (
    <li style={styles.li}>
      <span className={classes.join(' ')}>
        <input
          checked={todo.completed}
          style={styles.input}
          type="checkbox"
          onChange={() => onChange(index)}
        ></input>
        <strong>{index}</strong>
        &nbsp;
        {todo.title}
      </span>
      <button className="rm" onClick={() => removeTodo(todo.id)}>
        x
      </button>
    </li>
  )
}
