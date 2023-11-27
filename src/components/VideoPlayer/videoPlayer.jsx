import React, { useState } from 'react';
import axios from 'axios';

function VideoPlayer({ patientNumber}) {
    const videoRef = React.createRef();
    const [playing, setPlaying] = useState(false);

    const handlePlay = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/Details/${patientNumber}`, {
                headers: {
                    Range: `bytes=${0}-`,
                },
                responseType: 'blob',
            });

            if (response.status !== 206) {
                throw new Error('Network response was not ok');
            }

            const videoBlob = response.data;
            const videoUrl = URL.createObjectURL(videoBlob);

            videoRef.current.src = videoUrl;
            videoRef.current.play();
            setPlaying(true);
        } catch (error) {
            console.error('Error fetching video:', error);
        }
    };

    return (
        <div className={'playerCont'}>
            <button className={'playButton'} onClick={handlePlay} disabled={playing}>
                Play Video
            </button>
            <video className={'videoPlayer'} ref={videoRef} controls>
                Your browser does not support the video tag.
            </video>

        </div>
    );
}

export default VideoPlayer;