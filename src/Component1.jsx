import React from 'react';
export default function Home(){
    return(
        <div className='container'>
            <div className='row myrow'>
                <div className='col-lg-6 '>
                    <div className='heading-home'>
                        <h1 className='heading'><strong>Build the future <br /> of the web</strong></h1>
                        <h3>Netlify unites an entire ecosystem of modern tools and services into a single, simple workflow for building high performance sites and apps.</h3>
                    </div>
                    <div className='btn-div'>
                        <a href=""><button className='btn btn-primary ' ><strong>Get started for free</strong></button></a>
                        <a href="" className='question-a'><strong>Question? Talk to an expert</strong></a>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <img src="./images/netifly.avif" alt="" />
                </div>
            </div>
        </div>
    )
}