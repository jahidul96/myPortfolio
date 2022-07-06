import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'

AOS.init();

export default function Brif() {
    return (
        <div
            data-aos="slide-left"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            data-aos-anchor-placement="top-center"

            className='brifContainer'>
            <div className='iconsWrapper'>
                <span> <a href='https://www.linkedin.com/in/jahidul-islam-9b3a40231/' target="_blank"><AiFillLinkedin size={20} color="#fff" /></a></span>
                <span><a href='https://github.com/jahidul96' target="_blank"><AiFillGithub size={20} color="#fff" /></a></span>
                <span><a href='https://www.facebook.com/dreamboy.jihad.3/' target="_blank"><BsFacebook size={20} color="#fff" /></a></span>
            </div>
            <div className='nameStyles'>
                <p>Hello I'm</p>
                <h1>Jahidul Islam</h1>
                <p>Frontend developer</p>
                <div className='smallIconWrapper'>
                    <span> <a href='https://www.linkedin.com/in/jahidul-islam-9b3a40231/' target="_blank"><AiFillLinkedin size={20} color="#fff" /></a></span>
                    <span><a href='https://github.com/jahidul96' target="_blank"><AiFillGithub size={20} color="#fff" /></a></span>
                    <span><a href='https://www.facebook.com/dreamboy.jihad.3/' target="_blank"><BsFacebook size={20} color="#fff" /></a></span>
                </div>
                <div className='btnWrapper'>
                    <a href='https://www.facebook.com/dreamboy.jihad.3/' target="_blank"><button className='btn'>Talk With me</button></a>
                </div>
            </div>
            <div className='rightDiv'>

            </div>
        </div>
    )
}
