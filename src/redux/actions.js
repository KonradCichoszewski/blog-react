const TITLE_CHANGE = 'TITLE_CHANGE'
const CONTENT_CHANGE = 'CONTENT_CHANGE'
const SUBMIT = 'SUBMIT'
const DELETE_POST = 'DELETE_POST'
const SWITCH_THEME = 'SWITCH_THEME'
const MOUNT_POSTS = 'MOUNT_POSTS'
const SHOW_MODAL = 'SHOW_MODAL'
const HIDE_MODAL = 'HIDE_MODAL'

export function titleChange(value) {
    console.log(value);
    return{
        type: TITLE_CHANGE,
        value: value
    }
}

export function contentChange(value) {
    console.log(value);
    return{
        type: CONTENT_CHANGE,
        value: value
    }
}

export function handleSubmit() {
    return{
        type: SUBMIT,
    }
}

export function deletePost(id) {
    return{
        type: DELETE_POST,
        id: id
    }
}

export function switchTheme() {
    return{
        type: SWITCH_THEME,
    }
}

export function mountPosts(value) {
    return{
        type: MOUNT_POSTS,
        value: value
    }
}

export function showModal(){
    return{
        type: SHOW_MODAL
    }
}

export function hideModal(){
    return{
        type: HIDE_MODAL
    }
}