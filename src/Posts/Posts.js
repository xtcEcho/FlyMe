import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import SinglePost from '../SinglePost/SinglePost'
import './Posts.css';

class Posts extends Component {
    constructor(props){
        super(props);
        this.state = {
          airline:"All",
          cabin: "All"
        };
    }
    handleAirlineChange = (event) => {
        this.setState({airline: event.target.value})
    }
    handleCabinChange = (event) => {
        this.setState({cabin: event.target.value})
    }
    render() {
        const { posts, airlines, cabins } = this.props.store
        const AllPosts = posts.filter(
            post => (this.state.airline === "All" || this.state.airline === post.airline)
            && (this.state.cabin === "All" || this.state.cabin === post.cabin)
        )
        .map(post => 
            <SinglePost post={post} key={post.id}/>
        )
        const airlineOptions = airlines.map(singleAirline => 
            <option value={singleAirline.airline} key={singleAirline.id}>{singleAirline.airline}</option>
        )   
        const cabinOptions = cabins.map(singleCabin => 
            <option value={singleCabin.cabin} key={singleCabin.id}>{singleCabin.cabin}</option>
        )
        return(
            <div id='reviews' className="container" >
                <div id="filter-wrapper">
                    <select value={this.state.airline} className='filter' id='airline-filter'
                        onChange={this.handleAirlineChange}>
                            {airlineOptions}
                    </select>
                    <select value={this.state.class} className="filter" id="class-filter"
                        onChange={this.handleCabinChange}>
                            {cabinOptions}
                    </select>
                </div>
                <div id="post-wrapper">
                    { AllPosts }
                </div>
            </div>
        );
    }
}

export default Posts;