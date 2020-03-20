import React from 'react'
import {connect} from 'react-redux'

import {deletePost} from '../redux/actions'

function Post(props) {
  return <div className='post'>
        <h3>{ props.title }</h3>
        <p>{ props.date }</p>
        <div id="content">{ props.content }</div>
        <h6 onClick={ () => {console.log(props.id + " -> deleted id"); props.delete(props.id) }}>Delete this post</h6>
    </div>
}

const mapDispatchToProps = dispatch => {
  return {
    delete: (id) => dispatch(deletePost(id))
  }
}

export default connect(null, mapDispatchToProps)(Post);