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
  }

  onSearchChange = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  render() {
    const search = this.state.search;
    return(
      <nav className="navbar navbar-expand-sm navbar-light mb-3 sticky-top shadow-sm">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Genres</a>
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
              <Link to="/main" className="navbar-brand" href="#">VidTube</Link>
              <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <form onSubmit={this.onSearchSubmit} class="form-inline ml-auto" style={{width: "60%"}}>
                    <input
                      type="text"
                      style={{width: "80%"}}
                      className="form-control mr-2"
                      value={this.state.search}
                      onChange={this.onSearchChange}
                      placeholder="Search..."/>
                    <Link to={{pathname: "/search_result/", state: {search: {search}}}} className="btn btn-info btn-md">
                      Search
                    </Link>
                </form>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link" href="#">Home</Link>
                    </li>
                </ul>
              </div>
          </div>
      </nav>
    )
  }
}

export default Navbar;
