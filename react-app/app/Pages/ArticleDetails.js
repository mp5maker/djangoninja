import { Component } from 'react'
import { connect } from 'react-redux'
import { ArticleRetrieve } from '../Actions/ArticleAction'
import { Navbar } from '../Layouts/Navbar'
import { Card } from '../Components/Card'
import { Error404 } from '../Components/Error404'
import { Loading } from '../Components/Loading'

class ArticleDetails extends Component {
    componentDidMount() {
        this.props.ArticleRetrieve(this.props.match.params.slug)
    }
    
    render() {
        const { articles, loading, error } = this.props.data
        if (loading) {
            return (
                <div>
                    <Navbar />
                    <Loading />
                </div>
            )
        }
        if (error) {
            return (
                <div>
                    <Navbar />
                    <Error404 />
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
                                <h4> Article Details </h4>
                                <div className="my-3">
                                    <div className="list-group">
                                        {
                                            _.map(articles, (article, index) => {
                                                return <Card data={article} key={index} />
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
        data: state.articles
    }
}

export default connect(mapStateToProps, { ArticleRetrieve })(ArticleDetails)