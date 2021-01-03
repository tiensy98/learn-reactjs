import React from "react";
import PropTypes from "prop-types";

AlbumItem.propTypes = {
  albumItem: PropTypes.object.isRequired,
};

function AlbumItem({ albumItem }) {
  return (
    <div>
      <h4>{albumItem.name}</h4>
      <img src={albumItem.thumbnailUrl} alt={albumItem.name} />
    </div>
  );
}

export default AlbumItem;
