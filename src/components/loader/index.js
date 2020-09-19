import React from 'react'
import IconBall from './icon.png'

import './style.scss'
export default function Loader() {
    return (
        <div className='loader'>
            <img src={IconBall} alt="loading"/>
        </div>
    )
}
