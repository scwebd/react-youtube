import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = ({videos, onVideoSelect}) => {
	if (!videos) {
		return <div className="col-md-4">Loading...</div>
	}

	const activeVideos = videos.map(video => {
		return (
			<VideoListItem 
				key={video.id.videoId} 
				video={video} 
				onVideoSelect={onVideoSelect}
			/>
		)
	});

	return (
		<ul className="video-list col-md-4">
			{activeVideos}
		</ul>
	);
};

export default VideoList;