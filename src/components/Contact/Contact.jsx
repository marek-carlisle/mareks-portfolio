import React, { Component } from 'react';

import './Contact.css';

class Contact extends Component {

    render() {
        return (
            <>

            <h3>Find me on the web!</h3>

            <p className='contactDesc'>My email is the best way to contact me - </p>
            <a className='contactLinks' href='mavericksevisis@gmail.com'>mavericksevisis@gmail.com</a>

            <p className='contactDesc'>LinkedIn for proffesional networking - </p>
            <a className='contactLinks' href='https://www.linkedin.com/in/marekcarlisle/'>linkedin.com/in/marekcarlisle/</a>

            <p className='contactDesc'>Lot's of projects on my Github - </p>
            <a className='contactLinks' href='https://github.com/marek-carlisle'>github.com/marek-carlisle</a>

            </>
        )
    }
}

export default Contact; 