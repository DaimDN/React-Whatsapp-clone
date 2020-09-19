import React, { Component } from 'react'
import {Switch, Route, BrowserRouter as Router, Link} from 'react-router-dom';
import Navbar from '../component/navbar';
import Auth from '../pages/Auth';
import Chat from '../pages/Chat';


export default class Routers extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar/>
                    <Switch>
                        <Route path="/auth">
                       <Auth/>
                        </Route>
                        <Route path="/chat">
                            <Chat/>
                        </Route>
                        <Route path="/"><Help/></Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

function Help(){
    return (
        <div>
            This is jelp 
        </div>
    )
}

