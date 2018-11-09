import { Component } from 'react'
import { InputField } from '../Forms/InputField'

class Navbar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <nav className="navbar">
                    <div>
                        <span>
                            <h5>Dashboard</h5>
                        </span>
                    </div>
                    <div className="mx-auto mr-auto">
                        <InputField />
                    </div>
                    <div>
                        Right
                    </div>
                </nav>
            </div>
        )
    }
}

export { Navbar }