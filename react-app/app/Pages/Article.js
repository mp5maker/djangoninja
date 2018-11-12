import { Component } from 'react'
import { connect } from 'react-redux'
import { ApiHelper } from '../Routes/Routes'
import { Navbar } from '../Layouts/Navbar'
import { Card } from '../Components/Card'

class Article extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articles: [],
            loading: true,
            error: false
        }
    }

    componentDidMount() {
        ApiHelper.getArticleList()
            .then((response) => {
                this.setState({
                    articles: response.data.results,
                    loading: false,
                    error: false
                })
            }).catch((error) => {
                this.setState({
                    error: error,
                    loading: false
                })
            })
    }

    render() {
        console.log(this.props)
        const { articles, loading, error } = this.state
        if (loading) {
            return (
                <div>
                    <Navbar />
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
        if (error) {
            return (
                <div>
                    <Navbar />
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
        if (articles) {
            return (
                <div>
                    <Navbar />
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col">
                                <h4> Article List </h4>
                                <div className="my-3">
                                    <div className="list-group">
                                        {
                                            _.map(articles, (article, index) => {
                                                return <Card data={ article } key={ index }/>
                                            }) 
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        articles: state
    }
}

export default connect(mapStateToProps)(Article)