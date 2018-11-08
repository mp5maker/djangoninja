import { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Dashboard } from '../Pages/Dashboard'

class Routes extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
           <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={ Dashboard } />
                    {/* <Route path='/about' component={AboutPage} />
                    <Route path='/contact' component={ContactPage} />
                    <Route path='/image-upload' component={ImageUploadPage} />
                    <Route path='/post' component={PostListPage} />
                    <Route path='/post-detail/:id' component={PostRetrievePage} />
                    <Route path='/post-create' component={PostCreatePage} />
                    <Route path='/post-update/:id' component={PostUpdatePage} />
                    <Route path='/post-search/' component={PostSearchPage} /> */}
                </Switch>
           </BrowserRouter>
        )
    }
}

export { Routes }