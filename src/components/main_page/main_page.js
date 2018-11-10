import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import TrendingVideoList from './trending_video_list';
import MusicVideoList from './music_video_list';
import SportsVideoList from './sports_video_list';
import GameVideoList from './game_video_list.js';
import MovieVideoList from './movie_video_list';
// import api_key from '../../keys';

const API_KEY = 'AIzaSyCVx1MIW75Ju15aOywc7J2Qi3psN0Os5kw';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        trendingVideos: [],
        musicVideos: [],
        sportsVideos: [],
        gameVideos: [],
        movieVideos: [],
    }
    this.videoSearch()
  }

  videoSearch = () => {
    // Trending
    YTSearch({ key: API_KEY, term: ""}, (videos) => {
      this.setState({
        trendingVideos: videos,
      })
    })
    // Music
    YTSearch({ key: API_KEY, term: "music"}, (videos) => {
      this.setState({
        musicVideos: videos,
      })
    })
    // Sports
    YTSearch({ key: API_KEY, term: "sports"}, (videos) => {
      this.setState({
        sportsVideos: videos,
      })
    })
    // Games
    YTSearch({ key: API_KEY, term: "games"}, (videos) => {
      this.setState({
        gameVideos: videos,
      })
    })
    // Movies
    YTSearch({ key: API_KEY, term: "movies"}, (videos) => {
      this.setState({
        movieVideos: videos,
      })
    })
  }

  render() {
    return(
      <div className="container">
        <TrendingVideoList trendingVideos={this.state.trendingVideos} />
        <hr />
        <MusicVideoList musicVideos={this.state.musicVideos} />
        <hr />
        <SportsVideoList sportsVideos={this.state.sportsVideos} />
        <hr />
        <GameVideoList gameVideos={this.state.gameVideos} />
        <hr />
        <MovieVideoList movieVideos={this.state.movieVideos} />
      </div>
    )
  }
}

export default MainPage;
