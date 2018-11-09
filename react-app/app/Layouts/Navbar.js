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
                    <div className="mr-auto left-section">
                        <InputField />
                    </div>
                    <div className="right-section">
                        <span>
                            <img src="/media/javascript.jpg" alt="sidebar-footer-user-photo"/>
                        </span>
                    </div>
                </nav>
            </div>
        )
    }
}

export { Navbar }