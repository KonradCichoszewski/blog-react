import React from 'react'
import {connect} from 'react-redux'

import {titleChange, contentChange, handleSubmit, hideModal} from '../../redux/actions'

function PostForm(props) {
  return (
    <div id="post-form">
      <div>
        <form onSubmit={e => {e.preventDefault(); props.handleSubmit()}}>
          <textarea className="form-field" placeholder="Title"
                    onChange={e => props.titleChange(e.target.value)}
                    required="required" /><br/>
          <textarea className="form-field" placeholder="Post text"
                    onChange={e => props.contentChange(e.target.value)}
                    required="required" /><br/>
          <input className="transparent-button" type="submit" value="Submit" />
        </form>
      </div>
      <p className="transparent-button" onClick={props.hideModal}>Return</p>
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