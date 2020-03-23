import React, {Component} from 'react'
import './AddPost.css'

class AddPost extends Component{
    render(){
        return(
            <main id='input-container' className="container">
                <form id="input-form">
                    <input placeholder="Title" id="input-title" type="text" />
                    <div id="input-filter-wrapper">
                        <button className='input-filter' id='input-airline'>Airline</button>
                        <button className='input-filter' id='input-class'>Class</button>
                    </div>
                    <p><span><input id="input-score" type="number" placeholder="Score"/></span>/100</p>
                    <input placeholder="Pros" id="input-pros" type="text" />
                    <input placeholder="Cons" id="input-cons" type="text" />
                    <textarea placeholder="Share with us your thoughts..." id="input-detail" type="text" cols="30" rows="5"></textarea>
                    <button type='submit'>Submit</button>
                </form>
            </main>
        )
    }
}

export default AddPost