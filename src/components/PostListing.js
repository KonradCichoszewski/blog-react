import React from 'react'
import Post from './Post'
import { connect } from 'react-redux'

const axios = require('axios');

class PostListing extends React.Component{

  // Make a request for a user with a given ID
  componentDidMount(){axios.get('https://http://5e787906491e9700162de1aa.mockapi.io/api/blog/posts')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error + "jasnychuj");
  })
  .finally(function () {
    // always executed
  });}

  render(){
  let sortedPosts = this.props.posts.sort((a, b) => (a.id < b.id) ? 1 : -1)
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
}

function mapStateToProps(state) {
  return {
    posts: state.blogApp.posts
  }
}

export default connect(mapStateToProps)(PostListing)