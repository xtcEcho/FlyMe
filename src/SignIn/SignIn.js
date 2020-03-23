import React, {Component} from 'react'
import './SignIn.css'

class SignIn extends Component {
    render(){
        return(
            <main id='member-container' className="container">
                <div id="form-wrapper">
                    <ul id="title-wrapper">
                        <li id='log-in'>Login</li>
                        <li id='sign-up'>Sign up</li>
                    </ul>
                    <form className='member-form'>
                        <div>
                        <input type="text" name='username' id='username' placeholder="Username"/>
                        </div>
                        <div>
                        <input type="text" name='password' id='password' placeholder="Password" />
                        </div>
                        <button type='submit'>Login</button>
                    </form>
                </div>
            </main>
        )
    }
}

export default SignIn