import React, { Component } from 'react';

import './Portfolio.css';

class Portfolio extends Component {

    render() {
        return (
            <>

                <h3>My <span id='portfolioHeaderKeywords'>portfolio</span> includes my favorite projects!</h3>

                <br />

                <a href='https://morning-eyrie-70641.herokuapp.com/#/chat' className='projectLink'>ChatSpace</a>

                <br />

                <img src='/images/chatspacescreenshot.png' alt='ChatSpace Screenshot' className='projectImage'></img>

            </>
        )
    }
}

export default Portfolio; 