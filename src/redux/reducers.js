import { combineReducers } from 'redux'

function updateObject(oldObject, newValues) {
  return Object.assign({}, oldObject, newValues)
}

let initialState = {
  posts: [
    { id: 3,
      title: "My third post",
      content: "This is already my third post on the blog... Okay. This is already my third post on the blog... Okay." + 
                " This is already my third post on the blog... Okay. This is already my third post on the blog... Okay."},
    { id: 1,
      title: "My first post",
      content: "This is my very first post on the blog! This is my very first post on the blog!" +
                " This is my very first post on the blog! This is my very first post on the blog! "},
    { id: 4,
      title: "My fourth post",
      content: "This is my fourth post on the blog. It's getting boring. This is my fourth post on the blog. It's getting boring." +
                " This is my fourth post on the blog. It's getting boring. This is my fourth post on the blog. It's getting boring."},
    { id: 2,
      title: "My second post",
      content: "And this is my second post on the blog! And this is my second post on the blog!" +
                " And this is my second post on the blog! And this is my second post on the blog!"}
  ],
  postForm: {
    title: "no title",
    content: "no content"
  }
};

function blogApp(state = initialState, action) {
  switch (action.type) {
    case "TITLE_CHANGE":
      return updateObject(state, {
        postForm: {
          ...state.postForm,
          title: action.value
        }
      })
    case "CONTENT_CHANGE":
      return updateObject(state, {
        postForm: {
          ...state.postForm,
          content: action.value
        }
      })
    case "SUBMIT":
      return updateObject(state, {
        posts: [
          ...state.posts,
          {
            id: 5,
            title: state.postForm.title,
            content: state.postForm.content
          }
        ],
        postForm: {
          title: "no title",
          content: "no content"
        }
      })
    default: return state
  }
}

const rootReducer = combineReducers({blogApp})

export default rootReducer;