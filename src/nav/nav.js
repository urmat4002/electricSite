import React from 'react'

export default function Nav(props) {
  return (
    <li onClick={() => props.handleData(props.nav.title)}>
      <a href="#"> {props.nav.title}</a>
    </li>
  )
}
