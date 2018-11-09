import { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { DynamicLinks } from '../Routes/Routes'
import { Sidebar } from '../Layouts/Sidebar'
import { Dashboard } from '../Pages/Dashboard'
import { Prescription } from '../Pages/Prescription'

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div className="wrapper">
                        <nav id="sidebar" className="hide-laptop-down">
                            <div className="sidebar-menu">
                                <Sidebar />
                            </div>
                        </nav>
                        <div id="main">
                            <Switch>
                                <Route exact path={ DynamicLinks.root } component={ Dashboard } />
                                <Route path={ DynamicLinks.dashboard } component={ Dashboard } />
                                <Route path={ DynamicLinks.prescription } component={ Prescription } />
                            </Switch>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export { App }