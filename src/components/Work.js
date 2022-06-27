import React from 'react'
import Sleep from '../images/sleep.png'
import Quiz from '../images/quiz.png'
import Shop from '../images/shop.png'
import Story from '../images/story.png'
import Trip from '../images/trip.png'
import Buy from '../images/buy.png'
import Blog from '../images/blog.png'
import Fbank from '../images/fbank.png'
import Ftra from '../images/ftra.png'
import Sp from '../images/sp.png'
import Port from '../images/port.png'


const workData = [
    {
        id: 1,
        image: Trip,
        link: "https://travelwebbd.netlify.app/",
        title: 'Trip app',
        gitrepo: "https://github.com/jahidul96/Travelwebapp"
    },
    {
        id: 2,
        image: Quiz,
        link: "https://quizappjahid.netlify.app/",
        title: "Quiz app",
        gitrepo: "https://github.com/jahidul96/quizappReact"
    },
    {
        id: 3,
        image: Sleep,
        link: "https://sleepapp.netlify.app/",
        title: "Sleep app",
        gitrepo: "https://github.com/jahidul96/sleeplandingpage"
    },
    {
        id: 4,
        image: Shop,
        link: "https://travelwebbd.netlify.app/",
        title: "Shop app",
        gitrepo: "https://github.com/jahidul96/ShopappEcomerceUi"
    },
    {
        id: 5,
        image: Story,
        link: "https://writestory.netlify.app/",
        title: "Story app",
        gitrepo: "https://github.com/jahidul96/writeStoryFrontend"
    },
    {
        id: 6,
        image: Buy,
        link: "https://buyapp.netlify.app/",
        title: "Buy app",
        gitrepo: "https://github.com/jahidul96/buyapp"
    },
    {
        id: 7,
        image: Blog,
        link: "https://demoproject-d6fd6.firebaseapp.com/",
        title: "Blog app",
        gitrepo: "https://github.com/jahidul96/firebaseBlogapp"
    },
    {
        id: 8,
        image: Ftra,
        link: "https://travel-devapp.web.app/",
        title: "Travl app",
        gitrepo: "https://github.com/jahidul96/Travel-web"
    },
    {
        id: 8,
        image: Port,
        link: "https://jahidul-f4fa0.web.app/",
        title: "Portfolio",
        gitrepo: "https://github.com/jahidul96/portfolio"
    },
    {
        id: 9,
        image: Fbank,
        link: "https://bankpage-demos.web.app/",
        title: "Buy app",
        gitrepo: "https://github.com/jahidul96/BanksinglepageWebdesign"
    },
    {
        id: 10,
        image: Sp,
        link: "https://tuorgang.web.app/",
        title: "Buy app",
        gitrepo: "https://github.com/jahidul96"
    },
    {
        id: 11,
        image: Ftra,
        link: "https://travel-devapp.web.app/",
        title: "Travl app",
        gitrepo: "https://github.com/jahidul96/buyapp"
    },
]

export default function Work() {
    return (
        <div className='workRoot'>
            <h2>My Recent Work</h2>

            <div className='workDemoWrapper'>
                {
                    workData.map(data => (
                        <div key={data.id} className="wordDemoItem">
                            <img src={data.image} alt={data.title} />

                            <div className='workDownContainer'>
                                <h3>{data.title}</h3>
                                <div className='workLinkBtnDiv'>
                                    <a href={data.link} target="_blank">
                                        <button className='worklinkBtn'>View Github</button>
                                    </a>
                                    <a href={data.link} target="_blank">
                                        <button className='worklinkBtn viewLiveBtn'>View Live</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
