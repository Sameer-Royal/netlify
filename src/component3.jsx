import React from 'react';
export default function Component3(){
    return(
        <div className='container'>
            <div className='align-text'>
                <p className='p-top lp'>SERVER LESS, DO MORE</p>
                <h1 className='heading heading2'>Give your sites the edges</h1>
                <h3>Create amazing experiences for the web in record time—without <br /> thinking once about servers or devops.</h3>
            </div>
            <div className='row'>
                <div className='col-lg-4 align-text m'>
                    <h3><strong>The fastest possible</strong></h3>
                    <h1 className='sub-head'><strong>web frontends</strong></h1>
                </div>
                <div className='col-lg-4 align-text m'>
                    <img src="./images/phone.png" className='phone-img' alt="" />
                </div>
                <div className='col-lg-4 align-text m'>
                    <h3><strong>Instant cloud-scale</strong></h3>
                    <h1 className='sub-head'><strong>backend apis</strong></h1>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-4 '>
                    <div>
                        <h3>1. Connect your repository</h3>
                        <p>Netlify detects the changes to push to Git and triggers automated deploys.</p>
                    </div>
                </div>
                <div className='col-lg-4 '>
                    <div>
                        <h3>2. Add your build settings</h3>
                        <p>Netlify detects the changes to push to Git and triggers automated deploys.</p>
                        <div className='c3-r-d'><p className='t-m'><strong>yarn build</strong></p></div>
                    </div>
                </div>
                <div className='col-lg-4 '>
                    <div>
                        <h3>3. Deploy your website</h3>
                        <p>Netlify detects the changes to push to Git and triggers automated deploys.</p>
                        <div className='c3-r-d2'><p className='t-m'>site is live</p></div>
                    </div>
                </div>
                <div className='m2 align-text'>
                        <a href=""><button className='btn btn-primary ' ><strong>Get started for free</strong></button></a>
                        <a href="" className='question-a'><strong>Question? Talk to an expert</strong></a>
                    </div>
            </div>
        </div>
    )
} 