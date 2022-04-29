import React from 'react';
const myfooter=[
    {
        Title:'Why Netlify',
        C1:'Coustomers',
        C2:'Enterprise',
        C3:'Resources',
        C4:'Agency Partner Program',
        C5:'Pricing',
    },
    {
        Title:'Products',
        C1:'Platform',
        C2:'Netlify Build',
        C3:'Netlify Edge',
        C4:'Netlify CLI',
        C5:'Pricing',
        C6:'Ads-on',
    },
    {
        Title:'Learn',
        C1:'Platform',
        C2:'Netlify Build',
        C3:'Netlify Edge',
        C4:'Netlify CLI',
        C5:'Pricing',
        C6:'Ads-on',
    },
    {
        Title:'Contact us',
        C1:'Platform',
        C2:'Netlify Build',
        C3:'Netlify Edge',
        C4:'Netlify CLI',
        C5:'Pricing',
        C6:'Ads-on',
    },
    {
        Title:'Company',
        C1:'Platform',
        C2:'Netlify Build',
        C3:'Netlify Edge',
        C4:'Netlify CLI',
        C5:'Pricing'
    }
]
export default function Footer(){
    return(
        <div className='container'>
            <div className='row'>
                {myfooter.map(addFooter)}
            </div>
        </div>
    )
}
function addFooter(props){
    <div className='col-lg-2'>
        <h3>{props.Title}</h3>
        <ul class="list-unstyled quick-links">
            <li> <a href="#">  {props.C1}</a> </li>
            <li> <a href="#">  {props.C2} </a> </li>
            <li> <a href="#"> {props.C3}</a> </li>
            <li> <a href="#"> {props.C4}</a> </li>
            <li> <a href="#"> {props.C5}</a> </li>
        </ul>
    </div>
}