import React from 'react'

export default function CardUslugi(props) {
  return (
    <div className="card_uslugi">
      <h1>{props.card.title}</h1>
      <p>{props.card.text}</p>
    </div>
  )
}
