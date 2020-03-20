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
          date={post.date}
          id={post.id}
          key={post.id}
        />)
    }
  </div>
}

function mapStateToProps(state) {
  return {
    posts: state.blogApp.posts
  }
}

export default connect(mapStateToProps)(PostListing)