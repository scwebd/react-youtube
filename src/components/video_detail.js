import React from 'react';


const VideoDetail = ({selectedVideo}) => {
	if (!selectedVideo) {
		return <div className="col-md-8">Loading...</div>
	}

	const selectedVideoId = selectedVideo.id.videoId; // qTSDL94_Y7M
	const selectedVideoUrl = `https://www.youtube.com/embed/${selectedVideoId}`;

	return (
		<div className="video-detail col-md-8">
			<div>
				<iframe src={selectedVideoUrl}></iframe>
			</div>
			<div>
				<p>{selectedVideo.snippet.title}</p>
				<p>{selectedVideo.snippet.description}</p>
			</div>
		</div>
	);
};

export default VideoDetail;