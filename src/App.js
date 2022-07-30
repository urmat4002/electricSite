import React, {useState} from 'react'
import Nav from './nav/nav'
import Content from './content'
import Footer from './footer/footer'

export default function App() {
  const [data, setData] = useState([
    {title: 'Главная', id: 1, visible: true},
    {title: 'Услуги', id: 2, visible: false},
    {title: 'О нас', id: 3, visible: false},

    {title: 'Наши работы', id: 5, visible: false},
    {title: 'Отзывы', id: 6, visible: false},
  ])

  function modifyData(title) {
    setData(
      data.map((item) => {
        if (item.title === title) item.visible = true
        else item.visible = false
        return item
      }),
    )
  }

  return (
    <div className="wrapper">
      <header>
        <div className="nav0">
          <div className="container">
            <div className="nav0_content">
              <div className="nav0_logo">
                <div className="nav0_icon">
                  <img src="icon_logo.jpg" alt="no img"></img>
                </div>
                <div>
                  <h1>NUR-LIGHT</h1>
                  <p>Свет в каждом доме</p>
                </div>
              </div>
              <div className="nav0_tel">
                <p>0600000000</p>
                <p>0500000000</p>
              </div>
            </div>
          </div>
        </div>
        <div className="nav">
          <div className="container">
            <ul>
              {data.map((item) => (
                <Nav nav={item} handleData={modifyData} key={item.id} />
              ))}
            </ul>
          </div>
        </div>
      </header>
      <Content data={data} />
      <Footer />
    </div>
  )
}
