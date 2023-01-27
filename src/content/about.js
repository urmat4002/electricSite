import React from 'react'

export default function About(props) {
  if (!props.item.visible) return null
  return (
    <div className="about">
      <div className="container">
        <h1>Мы самые крутые!</h1>
      </div>
    </div>
  )
}
