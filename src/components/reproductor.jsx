import React, { useRef } from 'react';


import video from '../assets/img/innovationtech.mp4'



function Reproductor() {
          const videoRef = useRef(null);
          
       

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  const handleStop = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  const handleForward = () => {
    videoRef.current.currentTime += 10;
  };

  const handleBack = () => {
    videoRef.current.currentTime -= 10;
  };

  const handleVolumeChange = (event) => {
    videoRef.current.volume = event.target.value;
  };

  return (
    <div>
      <video className="video" ref={videoRef} controls>
        <source src={video} type="video/mp4" />
        <source src="video.webm" type="video/webm" />
      
     
          <track
            src="subtitles_es.vtt"
            kind="subtitles"
            srcLang="es"
            label="Español"
          />
          <track
            src="subtitles_en.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
       
      </video>

      <button
        className="
play-button "
        onClick={handlePlay}
      >
        Play
      </button>
      <button
        className="
play-button "
        onClick={handlePause}
      >
        Pause
      </button>
      <button
        className="
play-button "
        onClick={handleStop}
      >
        Stop
      </button>
      <button
        className="
play-button "
        onClick={handleBack}
      >
        Back
      </button>
      <button
        className="
play-button "
        onClick={handleForward}
      >
        Forward
      </button>
      <input
        type="range"
        min="0"
        max="1"
        step="0.1"
        defaultValue="1"
        onChange={handleVolumeChange}
      />
    </div>
  );
}

export default Reproductor;
