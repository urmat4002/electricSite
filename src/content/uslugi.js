import React, {useState} from 'react'
import CardUslugi from './card_uslugi'
import './uslugi.css'

export default function Uslugi(props) {
  const [uslugi, setUslugi] = useState([
    {
      title: 'Замена розеток',
      text: 'Если розетка сгорела, не работает, искрит и тд., мы демонтируем и заменим нановую',
      visible: false,
    },

    {
      title: 'Замена выключателей',
      text: 'slkkfj sk jsk sj skj s jlskdjf slkddjf slkdjf sldkf jsdk fjsdkf jslkdfj sdkj kl j',
      visible: false,
    },
    {
      title: 'Электромонтаж под ключ',
      text: 'slkkfj sk jsk sj skj s jlskdjf slkddjf slkdjf sldkf jsdk fjsdkf jslkdfj sdkj kl j',
      visible: false,
    },
    {
      title: 'Срочный вызов мастреа',
      text: 'slkkfj sk jsk sj skj s jlskdjf slkddjf slkdjf sldkf jsdk fjsdkf jslkdfj sdkj kl j',
      visible: false,
    },
    {
      title: 'Электромонтаж промышленного оборудования',
      text: 'slkkfj sk jsk sj skj s jlskdjf slkddjf slkdjf sldkf jsdk fjsdkf jslkdfj sdkj kl j',
      visible: false,
    },
  ])

  if (!props.item.visible) return null

  function setData(title) {
    const temp = uslugi.concat()
    temp.map((item) => {
      if (item.title == title) {
        item.visible = !item.visible
      } else item.visible = false
    })
    setUslugi(temp)
    console.log(title)
  }

  return (
    <div className="uslugi">
      <div className="container">
        <h1> Спектр наших услуг</h1>
        <p>
          Компания «Elektrikru.ru» профессионально выполнит электромонтажные
          работы любой сложности. Наши специалисты возьмутся, как за частичный
          ремонт электропроводки, так и за полный электромонтаж на вашем
          объекте. Мы выполняем электромонтажные работы в квартирах, загородных
          домах, коттеджах, промышленных и складских помещениях, в торговых
          залах, в офисах и бизнес центрах. На все услуги по электрике
          предоставляем гарантию. наши скидки и предложения
        </p>
      </div>
      <div className="okazivaem">
        Оказываем полный спектр услуг по электрике с гарантией на работу!
      </div>
      <div className="container">
        <button className="btn_zaivka">Заказать звонок</button>
        <div className="uslugi_menu">
          {uslugi.map((item) => {
            return (
              <div>
                <div className="item">
                  <span>{item.title}</span>{' '}
                  <div
                    className={item.visible ? 'strelka active' : 'strelka'}
                    onClick={() => setData(item.title)}
                  ></div>
                </div>

                <div
                  className={
                    item.visible ? 'item_content active' : 'item_content '
                  }
                >
                  <p>
                    Мы выполняем электромонтажные работы в квартирах, загородных
                    домах, коттеджах, промышленных и складских помещениях, в
                    торговых залах, в офисах и бизнес центрах. На все услуги по
                    электрике предоставляем гарантию. наши скидки и предложения
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
