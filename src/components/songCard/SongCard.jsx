/* eslint-disable react/prop-types */
import AlbumImage from "./AlbumImage";
import AlbumInfo from "./AlbumInfo";
import "./SongCard.css";
const SongCard = ({ album }) => {
  return (
    <div className="songCard-body">
      <AlbumImage url={album?.images[0]?.url} />
      <AlbumInfo album={album} />
    </div>
  );
};

export default SongCard;
