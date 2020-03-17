const initialState = {
  posts: [
      { id: 1,
        title: "My first post",
        content: "This is my very first post on the blog!"}
    ]
}

function mainReducer(state = initialState, action) {
    return state
  }

export default mainReducer;