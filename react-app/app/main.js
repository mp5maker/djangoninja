import { Component } from 'react'
import { render } from 'react-dom'

class Landing extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="text-center mt-5">
                React App Landing Page
            </div>
        )
    }
}

render(
    <Landing />,
    document.getElementById('react-app')
)

