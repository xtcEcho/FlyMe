import React, {Component} from 'react'
import Landing from '../Landing/Landing'
import Posts from '../Posts/Posts'
import './Home.css'

class Home extends Component {
    render(){
        return(
            <main className="container">
                <Landing />
                <Posts store={this.props.store} />
            </main>
        )
    }
}

export default Home