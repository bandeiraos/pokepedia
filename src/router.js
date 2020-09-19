import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Detail from './views/detail'
import Home from './views/home'

export default function Router() {
    return (
        <BrowserRouter>
            <Route exact path='/' component={Home} />
            <Route exact path='/detail/:name' component={Detail} />
        </BrowserRouter>
    )
}
