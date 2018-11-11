const initialState = {
    test: ""
}

const articleListReducer = function(state = initialState, action) {
    return {
        test: "Hello"
    }
}

export { articleListReducer }