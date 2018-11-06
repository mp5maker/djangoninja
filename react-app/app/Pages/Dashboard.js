import { Component } from 'react'
import { Sidebar } from '../Layouts/Sidebar'

class Dashboard extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-1 sidebar-container">
                            <div id="sidebar">
                                <Sidebar />
                            </div>
                        </div>
                        <div className="col-lg-11 content-container">
                            <div id="main">
                                Hello
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export { Dashboard }