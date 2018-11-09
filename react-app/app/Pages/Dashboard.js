import { Component } from 'react'
import { Navbar } from '../Layouts/Navbar'

class Dashboard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Navbar />
            </div>
        )
    }
}

export { Dashboard }