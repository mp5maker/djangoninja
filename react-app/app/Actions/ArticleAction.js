import { ApiHelper } from '../Routes/Routes'

export const loadArticles = (articles) => {
    return {
        type: "ARTICLE_LIST",
        articles
    }
};

const fetchArticles = () => {
    return (dispatch) => {
        return ApiHelper.getArticleList()
            .then((response) => {
                dispatch(loadArticles(response.data.results))
            }).catch((error) => {
                throw (error)
            })
    }
}

export default fetchArticles