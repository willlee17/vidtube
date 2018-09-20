import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MainVideoPage from './components/video_page/main_video_page';
import MainPage from './components/main_page/main_page';
import Navbar from './components/layout/Navbar';
import SearchResultTrending from './components/search_result_page/Search_Result_Trending';
import SearchResultMusic from './components/search_result_page/Search_Result_Music.js';
import SearchResultSports from './components/search_result_page/Search_Result_Sports.js';
import SearchResultGames from './components/search_result_page/Search_Result_Games.js';
import SearchResultMovies from './components/search_result_page/Search_Result_Movies.js';
import SearchResultMain from './components/search_result_page/Search_Result_Main.js';

class App extends Component {
  render() {
    return(
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={MainPage} />
          <Route exact path="/main_video/" component={MainVideoPage}/>

          <Route exact path="/search_result/" component={SearchResultMain}/>
          <Route exact path="/search_result/trending" component={SearchResultTrending}/>
          <Route exact path="/search_result/music" component={SearchResultMusic}/>
          <Route exact path="/search_result/sports" component={SearchResultSports}/>
          <Route exact path="/search_result/games" component={SearchResultGames}/>
          <Route exact path="/search_result/movies" component={SearchResultMovies}/>
        </div>
      </Router>
    )
  }
}

export default App;
