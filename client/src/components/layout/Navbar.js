import React, { Component } from 'react'

 class  Navbar extends Component {
    render() {

        return (
           <div>
               <nav className ="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
    <div className ="container">
      <a className ="navbar-brand" href="landing.html">DevConnector</a>
      <button className ="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
        <span className ="navbar-toggler-icon"></span>
      </button>

      <div className ="collapse navbar-collapse" id="mobile-nav">
        <ul className ="navbar-nav mr-auto">
          <li className ="nav-item">
            <a className ="nav-link" href="profiles.html"> Developers
            </a>
          </li>
        </ul>

        <ul className ="navbar-nav ml-auto">
          <li className ="nav-item">
            <a className ="nav-link" href="register.html">Sign Up</a>
          </li>
          <li className ="nav-item">
            <a className ="nav-link" href="login.html">Login</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

 {/* landing */}
  <div className ="landing">
    <div className ="dark-overlay landing-inner text-light">
      <div className ="container">
        <div className ="row">
          <div className ="col-md-12 text-center">
            <h1 className ="display-3 mb-4">Developer Connector
            </h1>
            <p className ="lead"> Create a developer profile/portfolio, share posts and get help from other developers</p>
            <hr />
            <a href="register.html" className ="btn btn-lg btn-info mr-2">Sign Up</a>
            <a href="login.html" className ="btn btn-lg btn-light">Login</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* <!-- Footer --> */}
  <footer className ="bg-dark text-white mt-5 p-4 text-center">
    Copyright &copy; 2018 Dev Connector
  </footer>

  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
    crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
    crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
    crossorigin="anonymous"></script>



            
           </div>
  
  
        )
    }
}
export default Navbar;