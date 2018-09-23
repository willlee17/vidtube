import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      counter: 0
    }
  }

  onSearchSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.search)
    this.setState({
      counter: this.state.counter++
    })
    // if (this.state.counter > 0) {
    //   return <Redirect to={{
    //     pathname: "/search_result"
    //   }}
    // } />
  }

  onSearchChange = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  render() {
    const search = this.state.search;
    return(
      <nav className="navbar navbar-expand-sm navbar-light bg-light mb-3 sticky-top">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Videos</a>
                <div className="dropdown-menu">
                    <Link className="dropdown-item" to={{
                      pathname: '/search_result/trending',
                    }}>Trending</Link>
                    <Link className="dropdown-item"  to={{
                      pathname: '/search_result/music',
                    }}>Music</Link>
                    <Link className="dropdown-item"  to={{
                      pathname: '/search_result/sports',
                    }}>Sports</Link>
                    <Link className="dropdown-item"  to={{
                      pathname: '/search_result/games',
                    }}>Games</Link>
                    <Link className="dropdown-item"  to={{
                      pathname: '/search_result/movies',
                    }}>Movies</Link>
                </div>
            </li>
          </ul>
          <div className="container">
              <Link to="/" className="navbar-brand" href="#">VidTube</Link>
              <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <form onSubmit={this.onSearchSubmit} class="form-inline ml-auto">
                    <input
                      type="text"
                      class="form-control mr-2"
                      value={this.state.search}
                      onChange={this.onSearchChange}
                      placeholder="Search for a video here..."/>
                    <Link to={{pathname: "/search_result/", state: {search: {search}}}} class="btn btn-outline-success">Search</Link>
                </form>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>

                    {/* <li className="nav-item">
                        <a className="nav-link" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li> */}
                </ul>
              </div>
          </div>
      </nav>
    )
  }
}

export default Navbar;
