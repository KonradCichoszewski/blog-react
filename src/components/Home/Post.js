import React from 'react'
import {connect} from 'react-redux'

import Comments from './Comments'
import {deletePost} from '../../redux/actions'

function Post(props) {
  return <div className='post'>
        <h3>{ props.title }</h3>
        <p>{ props.created }</p>
        <div id="post-content">{ props.content }</div>
        <p className="edit-post">Edit</p>
        <div id="erase-post" onClick={ () => {console.log(props.id + " -> deleted id"); props.delete(props.id) }}>
          <p>Delete</p>
        </div>
        <h3>Comments</h3>
        <div>
          {
            props.comments.map( comment => {
              return(
              <p>{comment.text}</p>
              )
            })
          }
        </div>
        <Comments postData={props}/>
    </div>
}

const mapDispatchToProps = dispatch => {
  return {
    delete: (id) => dispatch(deletePost(id))
  }
}

export default connect(null, mapDispatchToProps)(Post);