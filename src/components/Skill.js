import React from 'react'
import RightMark from '../images/mark.svg'

export default function Skill() {
    return (
        <div className='skillDiv'>
            <h2>My Skill</h2>
            <div className='flexSkill'>
                <div className='frontendDiv'>
                    <h3>Frontend Development.</h3>
                    <div className='sikllItemDiv'>
                        <div>
                            <img src={RightMark} alt="rightCheck" />
                            <p>Html</p>
                        </div>
                        <div>
                            <img src={RightMark} alt="rightCheck" />
                            <p>Css</p>
                        </div>
                        <div>
                            <img src={RightMark} alt="rightCheck" />
                            <p>Tailwind Css</p>
                        </div>
                        <div>
                            <img src={RightMark} alt="rightCheck" />
                            <p>Javascript</p>
                        </div>
                        <div>
                            <img src={RightMark} alt="rightCheck" />
                            <p>React Js</p>
                        </div>
                        <div>
                            <img src={RightMark} alt="rightCheck" />
                            <p>Material Ui</p>
                        </div>
                        <div>
                            <img src={RightMark} alt="rightCheck" />
                            <p>Next Js</p>
                        </div>
                        <div>
                            <img src={RightMark} alt="rightCheck" />
                            <p>Redux Toolkit</p>
                        </div>
                    </div>
                </div>
                <div className='frontendDiv'>
                    <h3>Backend Development.</h3>
                    <div className='sikllItemDiv'>
                        <div>
                            <img src={RightMark} alt="rightCheck" />
                            <p>Node Js</p>
                        </div>
                        <div>
                            <img src={RightMark} alt="rightCheck" />
                            <p>Express Js</p>
                        </div>
                        <div>
                            <img src={RightMark} alt="rightCheck" />
                            <p>Mongo Db</p>
                        </div>
                        <div>
                            <img src={RightMark} alt="rightCheck" />
                            <p>Mongoose</p>
                        </div>
                        <div>
                            <img src={RightMark} alt="rightCheck" />
                            <p>Firebase</p>
                        </div>
                        <div>
                            <img src={RightMark} alt="rightCheck" />
                            <p>Related tech etc</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='toolSection'>
                <div className='familiarDiv'>
                    <h3>Tool I'm Familiar</h3>
                    <div className='sikllItemDiv'>
                        <div>
                            <img src={RightMark} alt="rightCheck" />
                            <p>VS Code</p>
                        </div>
                        <div>
                            <img src={RightMark} alt="rightCheck" />
                            <p>Firebase Hoisting</p>
                        </div>
                        <div>
                            <img src={RightMark} alt="rightCheck" />
                            <p>Netlify</p>
                        </div>
                        <div>
                            <img src={RightMark} alt="rightCheck" />
                            <p>Heroku</p>
                        </div>
                        <div>
                            <img src={RightMark} alt="rightCheck" />
                            <p>Git & Github</p>
                        </div>

                    </div>
                </div>

                <div className='familiarDiv'>
                    <h3>Familiar Tech</h3>
                    <div className='sikllItemDiv'>
                        <div>
                            <img src={RightMark} alt="rightCheck" />
                            <p>React Native</p>
                        </div>
                        <div>
                            <img src={RightMark} alt="rightCheck" />
                            <p>Typescript</p>
                        </div>
                        <div>
                            <img src={RightMark} alt="rightCheck" />
                            <p>Api.</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
