import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
// import SearchBar from './components/video_page/searchbar.js';
// import VideoList from './components/video_page/video_list.js';
// import YTSearch from 'youtube-api-search';
// import VideoDetail from './components/video_page/video_detail.js';
// import _ from 'lodash';
import MainVideoPage from './components/video_page/main_video_page';
import MainPage from './components/main_page/main_page';
import { BrowserRouter as Router, Route } from 'react-router-dom'

// const API_KEY = 'AIzaSyCVx1MIW75Ju15aOywc7J2Qi3psN0Os5kw';

// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       videos: [],
//       selectedVideo: null,
//     }
//     this.videoSearch()
//   }
//
//   videoSearch = (term) => {
//     YTSearch({ key: API_KEY, term: term}, (videos) => {
//       this.setState({
//         videos: videos,
//         selectedVideo: videos[0]
//       })
//     })
//   }
//
//   render() {
//     const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300)
//     return (
//         <div className="App">
//           <SearchBar onSearchTermChange={videoSearch}/>
//           <VideoDetail video={this.state.selectedVideo}/>
//           <VideoList videos={this.state.videos} onVideoSelect={selectedVideo => {this.setState({selectedVideo})}}/>
//         </div>
//     );
//   }
// }

class App extends Component {
  render() {
    return(
      <Router>
        <div>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/main_video/" component={MainVideoPage}/>
        </div>
      </Router>
    )
  }
}

export default App;
