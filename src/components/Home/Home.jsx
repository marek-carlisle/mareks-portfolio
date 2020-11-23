import React, { Component } from 'react';

import './Home.css';

class Home extends Component {

    render() {
        return (
            <>

            <h3 id='homeHeader'>My name is <span id='marekCarlisle'>Marek M. Carlisle,</span> and I want to be a software engineer!</h3>

            <p id='homeDesc'>
                My passions lie in tech, and have been for a majority of my life. I've grown to enjoy working 
                with computers since I recieved my first PC. I strive to improve my skills in software and hardware, 
                I am eager to learn how to create my own programs, games, and I want to polish my art and design skills 
                on the side as I explore these new possibilities.
            </p>

            </>
        )
    }
}

export default Home; 