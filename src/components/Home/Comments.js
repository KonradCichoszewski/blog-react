import React from 'react'
import {connect} from 'react-redux'

import {addComment, contentChange} from '../../redux/actions'

function Comments (props){
    return(
        <div className="comments-section">
            <form onSubmit={e => {e.preventDefault(); props.addComment()}}>
                <textarea onChange={e => props.contentChange(e.target.value)}
                          placeholder="Add comment..."></textarea><br />
                <p className="transparent-button" type="submit" value="Submit" >Add comment</p>
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

export default connect(null, mapDispatchToProps)(Comments)