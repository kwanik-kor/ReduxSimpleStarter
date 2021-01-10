import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyBimS54EI4UTX0u-X9gzh0lPehKw0AVLAs';

// Create a new component. This component should porduce some HTML
// 'const' came out from 'ES6'
//  => const means constant and this is the final value
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
         };

         this.videoSearch('우왁굳');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            // (data) => this.setState({ videos : data })
            // is same as (videos) => this.setState({ videos })
            // key & property가 동일할 때만 사용 가능
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0] 
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
        
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos} />
            </div>
        );
    }
}

// "React! Plz take this components that I just made put it into DOM!"s
ReactDOM.render(<App />, document.querySelector('.container'));