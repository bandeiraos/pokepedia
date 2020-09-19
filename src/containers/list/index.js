import React from 'react'
import { Link } from 'react-router-dom'
import { correctStr } from '../../utils'

import './style.scss'
export default function List({ items, ...props }) {
  return (
    <ul className='list' {...props}>
      {items.map(p =>
        <li key={p.name}>
          <Link to={`/detail/${p.name}`}>
            {correctStr(p.name)}
          </Link>
        </li>)}
    </ul>
  )
}
