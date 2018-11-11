import { Component } from 'react'
import { Link } from 'react-router-dom'

class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.data !== prevState.data) {
            this.setState({
                data: this.state.data
            })
        }
    }

    render() {
        const { data } = this.state
        if (data) {
            return (
                <div>
                    <li className="list-group-item">
                        <div className='card'>
                            <div className="card-header">
                                <div className="card-title">
                                    <Link to={ "/article/" + data.slug + "/" }>
                                        {data.title}
                                    </Link>
                                </div>
                            </div>
                            <div className="card-content">
                                <div className="card-body">
                                    {data.body.length > 50 ? data.body.substring(0, 50) + "..." : data.body}
                                </div>
                                <div className="card-footer">
                                    {data.date}
                                </div>
                            </div>
                        </div>
                    </li>
                </div>
            )
        }
    }
}

export { Card }