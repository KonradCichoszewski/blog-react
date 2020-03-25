import React from 'react'
import {connect} from 'react-redux'

import {titleChange, contentChange, handleSubmit, hideModal} from '../../redux/actions'

function PostForm(props) {
  return (
    <div id="post-form">
      <form onSubmit={e => {e.preventDefault(); props.handleSubmit()}}>
        <textarea className="form-field" placeholder="New post title..."
                  onChange={e => props.titleChange(e.target.value)}
                  required="required" /><br/>
        <textarea placeholder="Post text"
                  onChange={e => props.contentChange(e.target.value)}
                  required="required" /><br/>
        <input id="submit" type="submit" value="Submit" />
      </form>
      <button onClick={props.hideModal}>Return</button>
    </div>
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
    handleSubmit: () => dispatch(handleSubmit()),
    hideModal: () => dispatch(hideModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);