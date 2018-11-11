const DynamicLinks = {
    "root": "/",
    "dashboard": "/dashboard",
    "prescription": "/prescription",
    "article": "/article",
    "articleDetails": "/article/:slug",
}

const server = "http://localhost:8000"

const ApiHelper = {
    getArticleList: () => axios.get(server + '/api/v1/article/'),
    getArticleDetails: (id) => axios.get(server + '/api/v1/article/' + id),
    // createArticle: (data) => axios.post(server + '/api/v1/article/create/', data),
    // deleteArticle: (id) => axios.delete(server + '/api/v1/article/delete/' + id),
    // updatePutArticle: (id, data) => axios.put(server + '/api/v1/article/update/' + id, data),
    // updatePatchArticle: (id, data) => axios.patch(server + '/api/v1/article/update/' + id, data),
}

export { DynamicLinks, ApiHelper }