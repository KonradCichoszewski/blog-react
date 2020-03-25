import React from 'react'
import {connect} from 'react-redux'

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
    </div>
}

const mapDispatchToProps = dispatch => {
  return {
    delete: (id) => dispatch(deletePost(id))
  }
}

export default connect(null, mapDispatchToProps)(Post);