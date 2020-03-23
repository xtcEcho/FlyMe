import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import {HashLink as Link} from 'react-router-hash-link'
import './Nav.css'

class Nav extends Component {
    render() {
        return(
            <nav className="nav">
                <b>
                    <NavLink to={'/'}>
                        FlyMe
                    </NavLink>
                </b>
                <div id='hamburger'></div>
                <ul>
                    <li>
                        <Link to='/#reviews'>
                            Reviews
                        </Link>
                    </li>
                    <li>
                        <NavLink to='/add-review'>
                            Post
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/sign-in'>
                            <button>Sign In</button>   
                        </NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Nav;