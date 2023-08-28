import React from 'react'
import App from './App'
import Login from './Front_page/Login'
import Front from './Front_page/Front'
import Password from './Front_page/Password'
import { Route, Switch } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

function MainApp() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/Sign_in" component={App}></Route>
                <Route path="/Sign_up" component={Front}></Route>
               <Route path="/Pass" component={Password}></Route>
                <Route path="/" exact component={Login}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default MainApp
