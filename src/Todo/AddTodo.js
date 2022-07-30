import React, {useState} from 'react'

function AddTodo({onCreate}) {
  const [value, setValue] = useState('')

  function submitHandler(event) {
    event.preventDefault()

    if (value.trim()) {
      onCreate(value)
    }
  }

  return (
    <form style={{marginBottom: 30}} onSubmit={submitHandler}>
      <input onChange={(event) => setValue(event.target.value)}></input>
      <button type="submit">Add Todo</button>
    </form>
  )
}

export default AddTodo
