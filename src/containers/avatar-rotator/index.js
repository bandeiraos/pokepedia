import React, { useState } from 'react'
import ButtonRotate from '../../components/button-rotate'

import './style.scss'
export default function AvatarRotator({ frontImg, backImg, ...props }) {
    const [frontPicView, setFrontPicView] = useState(true)
    return (
        <div className='avatar-rotator' {...props}>
            <div className='top-pokeball' />
            <div className='main-wrapper'>
                {frontImg && backImg ?
                    <>
                        <img src={frontImg} style={{ display: frontPicView ? 'block' : 'none' }} alt='pic-front' />
                        <img src={backImg} style={{ display: !frontPicView ? 'block' : 'none' }} alt='pic-back' />
                        <ButtonRotate onClick={() => setFrontPicView((v) => !v)} />
                    </>
                    : <span>no pic ):</span>
            }
            </div>
        </div>
    )
}
