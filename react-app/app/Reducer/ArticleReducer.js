const initState = {
    articles: [],
}

const ArticleReducer = (state = initState, action) => {
    switch(action.type) {
        case 'ARTICLE_LIST':
           return action.articles
        default:
            return state
    }
}

export default ArticleReducer