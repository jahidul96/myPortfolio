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
                        <p className='brifTextAboutme'>Hello there, my name is Jahidul islam. i am a frontend developer with mid level of backend development knowledge. I love to Work with Javascript and love to learn new tech.Currently i am working as a project base frontend developer with a freelencer. I have worked in many local project's and finished them with client satisfiction. I am learning everyday and want to collaborate with my skill in big project. during my collaboration i have gone through in many different environment and bugs which helped me to learn the depth of frontend tech. if you have any project or need a full-time  developer please contact with me.Thanks. </p>
                        <div >
                            <a href='https://www.facebook.com/dreamboy.jihad.3/' target="_blank"> <button className='btn'>Talk With me</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
