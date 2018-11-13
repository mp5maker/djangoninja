const initState = {
    articles: [],
    loading: true,
    error: false,
}

const ArticleReducer = (state = initState, action) => {
    switch(action.type) {
        case 'ARTICLE_LIST':
           return action
        case 'ARTICLE_RETRIEVE':
            return action
        default:
            return state
    }
}

export default ArticleReducer