import React from 'react'
import {connect} from 'react-redux'

import {addComment, contentChange} from '../../redux/actions'

function CommentsForm (props){
    return(
        <div className="comments-form">
            <form onSubmit={e => {e.preventDefault(); props.addComment(); console.log(e)}}>
                <textarea className="form-field" 
                          onChange={e => props.contentChange(e.target.value)}
                          placeholder="Write a comment..."></textarea><br />
                {/* <input type="submit" value="Submit" >Add comment</input> */}
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return{
        addComment: (value) => dispatch(addComment(value)),
        contentChange: (e) => dispatch(contentChange(e))
    }
}

export default connect(null, mapDispatchToProps)(CommentsForm)