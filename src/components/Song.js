import React from "react";

const Song = ({ currentSong }) => {
  return (
    <div className="song-container">
      <img src={currentSong.cover} alt={currentSong.name} />
      <h3>{currentSong.name}</h3>
      <h4>{currentSong.artist}</h4>
    </div>
  );
};

export default Song;
