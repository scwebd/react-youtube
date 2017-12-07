import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = ({videos, onVideoSelect}) => {
    const videoItems = videos.map(video => {
        return (
            <VideoListItem
                key={video.id.videoId}
                onVideoSelect={onVideoSelect}
                video={video} />
        )
    });

    return(
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;
