import React from 'react'
import Post from './Post'
import { connect } from 'react-redux'
import { mountPosts } from '../../redux/actions'

const axios = require('axios');

class PostListing extends React.Component{
  componentDidMount() {
    axios.get('http://localhost:8000/api/v1/posts/')
  .then( response => this.props.mountPosts(response.data))
  .catch(function (error) {
    // handle error
    console.log(error + " ---> jasny chuj!");
  })
  .finally()
}

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

const mapDispatchToProps = dispatch => {
  return{
    mountPosts: (value) => dispatch(mountPosts(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostListing)