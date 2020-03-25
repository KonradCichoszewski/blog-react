import { combineReducers } from 'redux'
import Axios from 'axios';

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
  posts: [],
  postForm: {
    title: "no title",
    content: "no content"
  },
  colorTheme: "light"
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
      console.log("Hit submit!")
      let newTitle = state.postForm.title;
      let newContent = state.postForm.content;
      Axios.post('http://localhost:8000/api/v1/posts/', {
        author: 1,
        title: newTitle,
        content: newContent
      })
      document.getElementById("overlay").setAttribute('style', 'display: none');
      return updateObject(state, {
        posts: [
          ...state.posts,
          {
            id: "",
            title: newTitle,
            content: newContent,
            date: getCurrentDate()
          }
        ],
        postForm: {
          title: "",
          content: ""
        }
      })
    case "DELETE_POST": {
      let url = 'http://localhost:8000/api/v1/posts/' + action.id + '/';
      Axios.delete(url)
      let filtered = Object.assign([], state.posts)
      filtered = filtered.filter(post => { return post.id !== action.id })
      return updateObject(state, {
          posts: filtered,
      }  
    )}
    case "SWITCH_THEME":
      if (state.colorTheme === "light"){
        document.documentElement.setAttribute('data-theme', 'dark');
        return updateObject(state, {
        colorTheme: "dark"
      })} else{
        document.documentElement.setAttribute('data-theme', 'light');
        return updateObject(state, {
          colorTheme: "light"
        })
      }
    case "MOUNT_POSTS":
      let sortedPosts = (action.value).sort((a, b) => (Number(a.id) < Number(b.id) ? 1 : -1))
      return updateObject(state, {
        posts: sortedPosts
      })
    case "SHOW_MODAL":
      document.getElementById("overlay").setAttribute('style', 'display: block');
      return state
    case "HIDE_MODAL":
      document.getElementById("overlay").setAttribute('style', 'display: none');
      return state
    default: return state
  }
}

const rootReducer = combineReducers({blogApp})

export default rootReducer;