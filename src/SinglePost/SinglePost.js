import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import './SinglePost.css'

class SinglePost extends Component{
    render() { 
        const { title, airline, cabin, rating } = this.props.post
        return(
            <NavLink 
                to={`/review/${this.props.post.id}`} 
                className="post">
                    {/* <div className="post"> */}
                        <div className="post-title">
                            <h3>{title}</h3>
                        </div>
                        <div className="post-info">
                            <div className="post-profile">
                                <p>{airline}</p>
                                <p>{cabin}</p>
                            </div>
                            <div className="post-rating">
                                <p>{rating}/100</p>
                            </div>
                        </div>
                    {/* </div> */}
            </NavLink>
        )
    }
}

export default SinglePost