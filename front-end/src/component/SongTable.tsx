import { useNavigate } from "react-router-dom";
import React from "react";

export const SongTable = ({ song, index }: { song: Song; index: number }) => {
  const navigate = useNavigate();
  const handleImageClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    navigate("/album/" + song.albumId);
  };
  return (
    <div
      className={"songTable"}
      onClick={() => {
        navigate("/track/" + song.songId);
      }}
    >
      <div className={"title"}>
        <p>{index + 1}. </p>
        <img src={process.env.API_URL + song.album.banner} alt="Song Cover" onClick={handleImageClick}/>
        <h3>{song.title}</h3>
      </div>
      <p>{song.play.length}</p>
      <p>
        {Math.floor(song.duration / 60)}:
        {Math.floor(song.duration % 60)
          .toString()
          .padStart(2, "0")}
      </p>
    </div>
  );
};
