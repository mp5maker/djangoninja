import { Component } from 'react'

class Dashboard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div>
                    <nav className="navbar">
                        <div>
                            <span>
                                <h5>Dashboard</h5>
                            </span>
                        </div>
                        <div className="mx-auto mr-auto">
                            <div className="group">
                                <input type="text"/>
                                <span className="highlight"/>
                                <span className="bar"/>
                                <label>Name</label>
                            </div>
                        </div>
                        <div>
                            Right
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

export { Dashboard }