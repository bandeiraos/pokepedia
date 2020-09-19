import React from 'react'

import './style.scss'
export default function InfoBox({ title, children, ...props }) {
    return (
        <div className='info-box' {...props}>
            <span className='title'>{title}</span>
            <div className='children'>
                {children}
            </div>
        </div>
    )
}
