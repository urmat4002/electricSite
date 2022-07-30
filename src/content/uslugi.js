import React from 'react'
import CardUslugi from './card_uslugi'

export default function Uslugi(props) {
  const uslugi = [
    {
      title: 'Замена розеток',
      text: 'Если розетка сгорела, не работает, искрит и тд., мы демонтируем и заменим нановую',
    },

    {
      title: 'Замена выключателей',
      text: 'slkkfj sk jsk sj skj s jlskdjf slkddjf slkdjf sldkf jsdk fjsdkf jslkdfj sdkj kl j',
    },
  ]

  if (!props.item.visible) return null

  return (
    <div className="uslugi">
      <div className="container">
        <h1> Спектр наших услуг:</h1>
        <div className="uslugi_flex">
          {uslugi.map((item) => (
            <CardUslugi card={item} key={uslugi.indexOf(item)} />
          ))}
        </div>
      </div>
    </div>
  )
}
