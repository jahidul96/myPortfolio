
import 'aos/dist/aos.css';
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from 'react-icons/ai'
import { BsFacebook, BsMessenger, BsInstagram } from 'react-icons/bs'

export default function Contact() {
    return (
        <div
            className='contactWrapper'>
            <h2>Contact With Me</h2>
            <div className='contactIconWrapper'>
                <span><a href='https://www.linkedin.com/in/jahidul-islam-9b3a40231/' target="_blank"><AiFillLinkedin className='icon' /></a></span>
                <span><a href='https://github.com/jahidul96' target="_blank"><AiFillGithub className='icon' /></a></span>
                <span><a href='https://www.facebook.com/dreamboy.jihad.3/' target="_blank"><BsFacebook className='icon' /></a></span>
                <span><a href='https://www.facebook.com/dreamboy.jihad.3/' target="_blank"><BsMessenger className='icon' /></a></span>
                <span><a href='https://www.facebook.com/dreamboy.jihad.3/' target="_blank"><BsInstagram className='icon' /></a></span>
            </div>

            <div className='emailContainer'>
                <p>Email me At</p>
                <AiOutlineMail className='mailIcon' />
                <p>Jahidul96@yahoo.com</p>
            </div>

            <div className='githubBtnContainer'>
                <a href='https://github.com/jahidul96' target="_blank">
                    <button className='allGithubBtn'>View All Repo in Github.</button>
                </a>
            </div>
        </div>
    )
}
