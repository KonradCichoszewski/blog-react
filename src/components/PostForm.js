import React from 'react'
import { Field, reduxForm } from 'redux-form'

let PostForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="title">Title</label><br />
            <Field name="firstName" component="input" type="text" />
        </div>
        <div>
            <label htmlFor="Post content">Post content</label><br/>
            <Field id="postField" name="lastName" component="input" type="textarea" />
        </div>
        <button type="submit">Post!</button>
    </form>
  )
}

PostForm = reduxForm({
  form: 'post'
})(PostForm)

export default PostForm;