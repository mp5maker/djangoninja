import { Component } from 'react'
import { Navbar } from '../Layouts/Navbar'
import { ApiHelper } from '../Routes/Routes'

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
                console.log(response.data.results)
            }).catch((error) => {
                this.setState({
                    error: error,
                    loading: false
                })
            })
    }

    render() {
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
                                                return (
                                                    <li className="list-group-item" key={ index }>
                                                        <div className='card'>
                                                            <div className="card-header">
                                                                <div className="card-title">
                                                                    { article.title }
                                                                </div>
                                                            </div>
                                                            <div className="card-content">
                                                                <div className="card-body">
                                                                    { article.body.length > 50 ? article.body.substring(0, 50) + "..." : article.body }
                                                                </div>
                                                                <div className="card-footer">
                                                                    { article.date }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
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

export { Article }