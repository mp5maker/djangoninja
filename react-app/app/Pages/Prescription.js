import { Component } from 'react'
import { Navbar } from '../Layouts/Navbar'

class Prescription extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Navbar />
                <div>
                    Prescription
                </div>
            </div>
        )
    }
}

export { Prescription }