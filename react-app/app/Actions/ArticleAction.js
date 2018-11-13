import { ApiHelper } from '../Routes/Routes'

const ArticleList = () => (dispatch) => {
    ApiHelper.getArticleList()
        .then((response) => {
            dispatch({
                type: 'ARTICLE_LIST',
                articles: response.data.results,
                loading: false,
                error: false,
            })
        }).catch((error) => {
            dispatch({
                type: 'ARTICLE_LIST',
                articles: [],
                loading: false,
                error: error.data,
            })
        })
}

const ArticleRetrieve = (slug) => (dispatch) => {
    ApiHelper.getArticleDetails(slug)
        .then((response) => {
            dispatch({
                type: 'ARTICLE_RETRIEVE',
                articles: [response.data],
                loading: false,
                error: false
            })
        }).catch((error) => {
            dispatch({
                type: 'ARTICLE_RETRIEVE',
                articles: [],
                error: error.data,
                loading: false
            })
        })
}

export { ArticleList, ArticleRetrieve }