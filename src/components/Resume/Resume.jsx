import React, { Component } from 'react';

import './Resume.css';

class Resume extends Component {

    render() {
        return (
            <>

                <div className='resumeHeader'>
                    <h3>My resume!</h3>

                    <h1 className='resumeHeaderTitle'>Marek Carlisle</h1>
                    <p className='resumeHeaderItem'>Moorhead, MN</p>
                    <p className='resumeHeaderItem'>(218)-329-9879</p>
                    <p className='resumeHeaderItem'><a className='resumeHeaderLink' href='https://www.linkedin.com/in/marekcarlisle/'>https://www.linkedin.com/in/marekcarlisle/</a></p>
                    <p className='resumeHeaderItem'><a className='resumeHeaderLink' href='mavericksevisis@gmail.com'>mavericksevisis@gmail.com</a></p>
                    <p className='resumeHeaderItem'><a className='resumeHeaderLink' href='https://github.com/marek-carlisle'>https://github.com/marek-carlisle</a></p>

                </div>

                <div className='resumeProject'>

                    <h2 className='resumeProjectTitle'>Web Development Projects –</h2>

                    <p>
                        <span className='projectInfo'>Chatspace: </span> 
                        Developed a web app to connect my friends and me alternatively to the popular messaging apps out there.
                        Technologies used: Javascript, React, Axios, Express, PG, SQL, and Redux.
                    </p>

                    <p>
                        <span className='projectInfo'>Dental Rental, North Dakota Dental Foundation: </span> 
                        Here, me and my group are tasked to solve the problem of creating an app that replaces the many phone calls and paper forms required for clients to rent out specialized dental equipment.
                    </p>

                    <p>
                    <span className='projectInfo'>Feedback Loop: </span> 
                        Users will be able to go through a feedback loop and answer questions prompted, for which will be stored in the database and used however we deem necessary.
                        Technologies used: Javascript, React, Axios, Express, PG, SQL, and Redux.
                    </p>

                </div>

                <div className='webDevExperience'>

                    <h2 className='webDevTitle'>Web Development Experience –</h2>

                    <p className='webDevTitle'>
                        Emerging Digital Academy  |  2020
                    </p>

                    <p>
                        Learned how to use Javascript basics, and how to transfer data between the frontend, the backend and the database. Know how to use React, and many of the libraries that are used for it.
                    </p>

                    <p>
                        I have practiced working as a group to achieve the same goal, building a usable website with the things we’ve learned every week by being separated into teams, and given a task to complete.
                    </p>

                </div>

                <div className='salesExperience'>

                    <h2 className='salesExperienceTitle'>Sales Experience</h2>

                    <p>
                        <span className='experienceInfo'>Coolbird Creamery | 12/5/2018 - 9/1/2020 |</span> I served customers, baked pastries, made ice cream, and took care of  the shop. On busier days, I worked with a small team to best handle customers in a quick fashion.
                    </p>

                    <p>
                        <span className='experienceInfo'>Burger King |  9/6/2015 - 5/20/2016 and 1/24/2018 - 08/15/2018 |</span> Worked front and drive thru till, and cleaned the store.
                    </p>

                    <p>
                        <span className='experienceInfo'>Family Fare | 7/3/2016 - 9/14/2017 |</span> Worked front till, and restocked shelves.
                    </p>

                    <p>
                        <span className='experienceInfo'>Little Caesars | 6/27/2014 – 5/14/2015 |</span> Made and boxed pizza, occasionally worked the front till.
                    </p>

                </div>

                <div className='education'>

                    <h2 className='educationTitle'>Emerging Digital Academy</h2>

                    <h4 className='educationAddress'>2020 | 122 ½ Broadway N Fargo, ND 58103</h4>

                    <p>
                        A code bootcamp that taught me the skills to do full stack web development work using HTML, CSS, and Javascript.
                    </p>

                </div>

                <div className='technicalSkills'>

                    <h2 className='technicalSkillsTitle'>Technical Skills</h2>

                    <p>
                        Javascript, React, Axios, Express, PG, SQL, Redux, Visual Studio, and Git.
                    </p>

                </div>

            </>
        )
    }
}

export default Resume; 