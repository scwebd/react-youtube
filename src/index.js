import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
import YouTubeSearch from 'youtube-api-search';
const apiKey = 'AIzaSyDDXeVwdx9PwNFmTF88a7XFSL7-xp-iXyw';

class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			videos: [],
			selectedVideo: null
		}
		this.runSearch("minions");
	}

	runSearch(term) {
		YouTubeSearch({ key: apiKey, term: term }, videos => {
		    console.log(videos);

		    this.setState({
		    	videos: videos,
		    	selectedVideo: videos[0]
		    });
		});
	}

	render() {
		const runSearchThrottled = _.debounce((term) => {this.runSearch(term)}, 700);

		return (
			<div>
				<SearchBar onSearchTermChange={runSearchThrottled} />
				<VideoDetail selectedVideo={this.state.selectedVideo} />
				<VideoList videos={this.state.videos} onVideoSelect={selectedVideo => this.setState({ selectedVideo: selectedVideo })} />
			</div>

		);
	}
}

ReactDOM.render(<App />, document.getElementById("main-content"));