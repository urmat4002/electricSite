import React from 'react'

export default function About(props) {
  if (!props.item.visible) return null
  return (
    <div className="raboti">
      <div className="container">
        <h1>Всё делаем круто</h1>
      </div>
    </div>
  )
}
