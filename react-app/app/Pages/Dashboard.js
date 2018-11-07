import { Component } from 'react'
import { Sidebar } from '../Layouts/Sidebar'

class Dashboard extends Component {
    constructor(props){
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
                       Hello
                   </div>
               </div>
            </div>
        )
    }
}

export { Dashboard }