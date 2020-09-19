import React from 'react'
import IconRotate from './rotate.png'

import './style.scss'
export default function ButtonRotate({ ...props }) {
    return (
        <button className='button-rotate' {...props}>
            <img src={IconRotate} alt="Rotate" />
        </button>
    )
}
