import { Component } from 'react'
import { Sidebar } from '../Layouts/Sidebar'

class Dashboard extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <div id="sidebar">
                    <Sidebar />
                </div>
                <div id="main">
                    Hello
                </div>
            </div>
        )
    }
}

export { Dashboard }