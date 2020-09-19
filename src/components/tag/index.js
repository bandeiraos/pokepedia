import React from 'react'

import './style.scss'
export default function Tag({title, ...props}) {
    return (
        <div className='tag' {...props}>
            {title}
        </div>
    )
}
