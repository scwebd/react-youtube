import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
const apiKey = 'AIzaSyDDXeVwdx9PwNFmTF88a7XFSL7-xp-iXyw';

// create a new component, which should produce HTML
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: '',
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('kittens');
    }

    videoSearch(term) {
        YTSearch({ key: apiKey, term: term }, videos => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        return(
            <div>
                <SearchBar onSearchTermChange={(term) => this.videoSearch(term)} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos}
                />
            </div>
        )
    }
}

// add the component above's generated HTML into the DOM
ReactDOM.render(<App />, document.getElementById('main-content'));
