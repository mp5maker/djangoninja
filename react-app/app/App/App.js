import { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { DynamicLinks } from '../Routes/Routes'
import { theme } from '../Hoc/Theme'
import Sidebar from '../Layouts/Sidebar'

import { Dashboard } from '../Pages/Dashboard'
import { Prescription } from '../Pages/Prescription'
import Article from '../Pages/Article'
import ArticleDetails from '../Pages/ArticleDetails'

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
                                <Route path={ DynamicLinks.articleDetails } component={ ArticleDetails } />
                                <Route path={ DynamicLinks.article } component={ Article } />
                            </Switch>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default theme(App)