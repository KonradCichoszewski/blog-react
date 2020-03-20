import React from 'react'
import {connect} from 'react-redux'

function PostForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>
        Title
        <textarea value={props.title} onChange={props.titleChange} />
      </label>
      <label>
        Post content
        <textarea value={props.content} onChange={props.contentChange} />
      </label>
      <input type="submit" value="Submit" />
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
    titleChange: (value) => dispatch(titleChange(value)),
    contentChange: (value) => dispatch(contentChange(value)),
    handleSubmit: (value) => dispatch(handleSubmit(value))
  }
}

export default connect(mapStateToProps)(PostForm);