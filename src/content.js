import React from 'react'
import Uslugi from './content/uslugi'
import Main from './content/main'
import About from './content/about'
import Raboti from './content/raboti/raboti'
import Otziv from './content/otziv/otziv'

export default function Content(props) {
  return (
    <div className="content">
      <Main item={props.data[0]} />
      <Uslugi item={props.data[1]} />
      <About item={props.data[2]} />
      <Raboti item={props.data[3]} />
      <Otziv item={props.data[4]} />
    </div>
  )
}
