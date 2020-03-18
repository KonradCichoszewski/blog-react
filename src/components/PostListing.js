import React from 'react'
import Post from './Post'
import { connect } from 'react-redux'

function PostListing(props) {
    let sortedPosts = props.posts.sort((a, b) => (a.id < b.id) ? 1 : -1)
  return <div className='post-listing'>
    {
      sortedPosts.map( post =>
        <Post
          title={post.title}
          content={post.content}
          key={post.id}
        />)
    }
  </div>
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     addToCart: (item) => {
//       dispatch({ type: 'ADD', payload: item })
//     },
//     removeFromCart: (item) => {
//       dispatch({ type: 'REMOVE', payload: item })
//     }
//   }
// }

export default connect(mapStateToProps/*, mapDispatchToProps*/)(PostListing)