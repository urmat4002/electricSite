import React from 'react'

export default function About(props) {
  if (!props.item.visible) return null
  return (
    <div className="otziv">
      <div className="container">
        <h1>Вы хорошо делаете электромонтаж</h1>
      </div>
    </div>
  )
}
