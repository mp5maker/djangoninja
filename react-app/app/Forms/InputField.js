import { Component } from 'react'

class InputField extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className="group">
                    <input type="text" required />
                    <span className="bar" />
                    <label>
                        <span className="icon">
                            <i className="fa fa-search"></i>
                        </span>
                        <span className="label-text">Search</span>
                    </label>
                </div>
            </div>
        )
    }
}

export { InputField }