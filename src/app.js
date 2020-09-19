import React from 'react'
import Router from './router'
import Header from './components/header'

import './global.scss'
import { AppProvider } from './contexts/app'
export default function App() {
    return (
        <div className='container'>
            <Header />
            <AppProvider>
                <Router />
            </AppProvider>
        </div>
    )
}