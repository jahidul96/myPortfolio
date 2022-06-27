import React from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'

export default function Brif() {
    return (
        <div className='brifContainer'>
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
