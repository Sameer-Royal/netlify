import React from 'react';
import Button from 'react-bootstrap/Container';
export default function Navbar(){
    return(
      <div className='container'>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <img src="./images/netlifysymbol.png" className='brand-image' alt="" />
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto ul-m">
    <li class="nav-item dropdown">
        <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Platform
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#">Pricing <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item dropdown active">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Enterprise
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item active">
        <a class="nav-link " href="#">Coutomers</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link " href="#">Blogs</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link " href="#">Docs</a>
      </li>
      <ul className='navbar-nav sec-ul'>
      <li class="nav-item active">
        <a class="nav-link " href="#"><strong>Hire an expert</strong></a>
      </li> 
      <li class="nav-item active">
        <a class="nav-link " href="#"><strong>Contact Sales</strong></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link " href="#"><strong>Log in</strong></a>
      </li>
      <li class="nav-item active">
        <a class=" " href="#"><button className='btn btn-primary'><strong>Sign up</strong></button></a>
      </li>
      </ul>
    </ul>
  </div>
</nav>
      </div>      
    )
}