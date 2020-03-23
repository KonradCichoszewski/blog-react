import React from 'react'
import Post from './Post'
import { connect } from 'react-redux'
import { mountPosts } from '../redux/actions'

const axios = require('axios');
let hope;

class PostListing extends React.Component{
  constructor(props) {
    super(props);
  }
  // Make a request for a user with a given ID
  componentDidMount(){axios.get('https://5e787906491e9700162de1aa.mockapi.io/api/blog/posts')
  .then(function (response) {
    // handle success
    console.log(response.data[0]);
    hope = [response.data[0]];
    console.log(hope)
  })
  .catch(function (error) {
    // handle error
    console.log(error + "jasnychuj");
  })
  .finally(function () {
    // always executed
  });
  console.log(hope);}
  // this.props.(hope)}

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