import React, { Component } from 'react'
import './PostPage.css'

class PostPage extends Component {
    render(){
        const post = this.props.store.posts.find(
            post =>
                post.id ==this.props.match.params.postId
        )
        const {title, airline, cabin, rating, pros, cons, content} = post
        return(
            <div id='article-container' className="container">
                <h2 id="article-title">{title}</h2>
                <div id="flight-info">
                    <p>{airline}</p>
                    <p>{cabin}</p>
                </div>
                <div id="flight-rating">
                    <h3>Rating</h3>
                    <div id="score">{rating}/100</div>
                    <div id="pros">
                        <h4>PROS</h4>
                        <p>{pros}</p>
                    </div>
                    <div id="cons">
                        <h4>CONS</h4>
                        <p>{cons}</p>
                    </div>
                </div>
                <div id="flight-review">
                    <p>{content}</p>
                </div>
            </div>
        )
    }
}

export default PostPage