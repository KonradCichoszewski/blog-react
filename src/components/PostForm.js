import React from 'react'
import {connect} from 'react-redux'

import {titleChange, contentChange, handleSubmit} from '../redux/actions'

function PostForm(props) {
  return (
    <form id="postForm"
          onSubmit={e => {e.preventDefault();
          props.handleSubmit()}}>
      <label>
        Title
        <textarea onChange={e => props.titleChange(e.target.value)}/>
      </label><br/>
      <label>
        Post content
        <textarea onChange={e => props.contentChange(e.target.value)} />
      </label><br/>
      <input id="submit" type="submit" value="Submit" />
    </form>
  )
}

function mapStateToProps(state) {
  const formData  = state.blogApp.postForm
  return {
    title: formData.title,
    content: formData.content}
}

const mapDispatchToProps = dispatch => {
  return {
    titleChange: (e) => dispatch(titleChange(e)),
    contentChange: (e) => dispatch(contentChange(e)),
    handleSubmit: () => dispatch(handleSubmit())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);