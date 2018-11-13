import { Component } from 'react'

class Loading extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <span>
                                Loading ...
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export { Loading }