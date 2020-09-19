import React from 'react'

import './style.scss'
export default function Button({ children, ...props }) {
    return (
        <button className='button' {...props}>
            {children}
        </button>
    )
}
