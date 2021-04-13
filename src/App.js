import React, { useState, useRef } from "react";
import Nav from "./components/Nav";
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import data from "./util";
import "./styles/app.scss";

function App() {
  const [songs, setSongs] = useState(data());
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  //ref
  const audioRef = useRef(null);

  const timeUpdateHandler = (event) => {
    const current = event.target.currentTime;
    const duration = event.target.duration;
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration,
    });
  };
  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
      />
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default App;
