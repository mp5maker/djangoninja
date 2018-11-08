import { Component } from 'react'
import { Sidebar } from '../Layouts/Sidebar'
import { Routes } from '../Routes/Routes'

class AdminPanel extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className="wrapper">
                    <nav id="sidebar" className="hide-laptop-down">
                        <div className="sidebar-menu">
                            <Sidebar />
                        </div>
                    </nav>
                    <div id="main">
                        <Routes />
                   </div>
                </div>
            </div>
        )
    }
}

export { AdminPanel }