import { combineReducers } from 'redux'

function updateObject(oldObject, newValues) {
  return Object.assign({}, oldObject, newValues)
}

function getCurrentDate(){
  let now = new Date();
  let day = now.getUTCDate();
    if (day < 10) day = "0" + day;
  let month = now.getUTCMonth();
      month++;
    if (month < 10) month = "0" + month;
  return(
    day + "." + month + "."+ now.getUTCFullYear()
    + " at " + now.getUTCHours() + ":" + now.getUTCMinutes()
  )
}

let initialState = {
  posts: [
    { id: 3,
      date: '10.03.2020 at 13:54',
      title: "My third post",
      content: "This is already my third post on the blog... Okay. This is already my third post on the blog... Okay." + 
                " This is already my third post on the blog... Okay. This is already my third post on the blog... Okay."},
    { id: 1,
      date: '02.03.2020 at 08:14',
      title: "My first post",
      content: "This is my very first post on the blog! This is my very first post on the blog!" +
                " This is my very first post on the blog! This is my very first post on the blog! "},
    { id: 2,
      date: '05.03.2020 at 23:01',
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
            id: state.posts.length + 1,
            title: state.postForm.title,
            content: state.postForm.content,
            date: getCurrentDate()
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