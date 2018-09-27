import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class LandingPage extends Component {
  render() {
    return(
      <div id="landingPage">
        <div id="landing-text">
          <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
              <source src="https://player.vimeo.com/external/158148793.hd.mp4?s=8e8741dbee251d5c35a759718d4b0976fbf38b6f&profile_id=119&oauth2_token_id=57447761" type="video/mp4"/>
          </video>
          <h1>Watch your favorite videos</h1>
          <h3>Vidtube yuh yuh</h3>
          <Link to="/main" className="btn btn-info">Let's go!</Link>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <img src="images/videos.jpg"/>
            </div>
            <div className="col-sm-6 text-center">
              <h2>Your Favorite Videos.</h2>
              <h2>Your Favorite Creators.</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className>
                Built using react, HTML, CSS, JS
              </div>
            </div>
          </div>
        </div>
        <footer className="container text-center">
          <div className="row">
            <div className="col-sm-4">
              Contact Me
            </div>
            <div className="col-sm-4">
              Connect
            </div>
            <div className="col-sm-4">
              Something. Maybe company logo?.
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default LandingPage;
