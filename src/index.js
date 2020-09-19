import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Routers from './Route/Routers';

 class Index extends Component {
    render() {
        return (
            <div>
            <Routers/>
                
            </div>
        )
    }
}

ReactDOM.render(<Index/>, document.getElementById('app'));