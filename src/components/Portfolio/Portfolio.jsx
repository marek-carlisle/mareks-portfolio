import React, { Component } from 'react';

import portfolioProjects from './portfolioProjects';

import './Portfolio.css';

class Portfolio extends Component {

    render() {

        console.log(portfolioProjects);

        return (
            <>

                <h3>My <span id='portfolioHeaderKeywords'>portfolio</span> includes my favorite projects!</h3>

                <br />

                <div>

                    <a href='https://morning-eyrie-70641.herokuapp.com/#/chat' className='projectLink'>ChatSpace</a>

                    <br />

                    <img src='/images/chatspacescreenshot.png' alt='ChatSpace Screenshot' className='projectImage'></img>

                </div>

                <div>

                <a href='https://gentle-depths-94152.herokuapp.com/#/' className='projectLink'>Feedback Form</a>

                <br />

                <img src='/images/feedbackLoopScreenshot.png' alt='Feedback Form Screenshot' className='projectImage'></img>

                </div>

            </>
        )
    }
}

export default Portfolio; 