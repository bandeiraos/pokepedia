import React from 'react'
import { correctStr } from '../../utils'

import './style.scss'
export default function StatBar({ title, value, ...props }) {
    return (
        <div className='stat-bar' {...props}>
            <span className='title'>{correctStr(title)}</span>
            <div className="bar-wrapper">
                <div style={{ width: `${value*0.5}%` }} className='bar'>
                    <span className='value'>{value}</span>
                </div>
            </div>
        </div>
    )
}
