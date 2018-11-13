import { Component } from 'react'

class Error404 extends Component {
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
                                There was an error loading the data...
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export { Error404 }