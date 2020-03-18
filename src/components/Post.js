import React from 'react'

export default function Post(props) {
  return <div className='post'>
        <h3>{ props.title }</h3>
        <div id="content">{ props.content }</div>
    </div> 
}