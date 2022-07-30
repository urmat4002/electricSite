import React from 'react'
import Uslugi from './content/uslugi'
import Main from './content/main'
import About from './content/about'

export default function Content(props) {
  return (
    <div className="content">
      <Main item={props.data[0]} />
      <Uslugi item={props.data[1]} />

      <About item={props.data[2]} />
    </div>
  )
}
