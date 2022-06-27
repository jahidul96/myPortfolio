import React from 'react'
import { FcExport } from 'react-icons/fc'
import profile from '../images/p.png'

export default function Aboutme() {
    return (
        <div className='aboutMeContainer'>
            <h3>About me</h3>
            <div className='aboutBrifContainer'>
                <div className='leftAboutDiv'>
                    <div className='myImageWrapper'>
                        <img src={profile} />
                    </div>
                </div>
                <div className='myDetailsWrapper'>
                    <div>
                        <div className='experienceDiv'>
                            <span>< FcExport size={20} /></span>
                            <p>6 month of experience </p>
                        </div>
                        <div className='experienceDiv'>
                            <span>< FcExport size={20} /></span>
                            <p>10+ Projects </p>
                        </div>
                        <p className='brifTextAboutme'>I’ve spent the last several months in a remote environment, working with HTML, CSS, JavaScript, building everything from landing pages to APIs. My experience as a teacher in an international school helped me collaborate with fellow developers from all over the world. Additionally, working with kids isn’t an easy task, however, it has helped me become efficient, productive, and fast even in a very stressful environment, which is an important skill in the tech industry.</p>
                        <div >
                            <button className='btn'>Talk With me</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
