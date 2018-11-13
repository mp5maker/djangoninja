const DynamicLinks = {
    "root": "/",
    "dashboard": "/dashboard",
    "prescription": "/prescription",
    "article": "/article",
    "articleDetails": "/article/:slug",
}

const ApiHelper = {
    getArticleList: () => axios.get('/api/v1/article/'),
    getArticleDetails: (param) => axios.get('/api/v1/article/' + param),
    // createArticle: (data) => axios.post('/api/v1/article/create/', data),
    // deleteArticle: (id) => axios.delete('/api/v1/article/delete/' + id),
    // updatePutArticle: (id, data) => axios.put('/api/v1/article/update/' + id, data),
    // updatePatchArticle: (id, data) => axios.patch('/api/v1/article/update/' + id, data),
}

export { DynamicLinks, ApiHelper }