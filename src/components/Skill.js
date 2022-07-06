import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import RightMark from '../images/mark.svg'
AOS.init()

export default function Skill() {
    return (
        <div className='skillDiv'>
            <h2>My Skill</h2>
            <div className='flexSkill'>
                <div
                    data-aos="fade-right"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-anchor-placement="top-center"
                    className='frontendDiv'>
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
                <div
                    data-aos="fade-left"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-anchor-placement="top-center"
                    className='frontendDiv borderStyleDiv'>
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
                <div
                    data-aos="fade-right"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-anchor-placement="top-center"
                    className='familiarDiv'>
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

                <div
                    data-aos="fade-left"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-anchor-placement="top-center"
                    className='familiarDiv'>
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
