import React from "react";
import PropTypes from "prop-types";
import AlbumItem from "../AlbumItem";
AlbumList.propTypes = {
  albumList: PropTypes.array.isRequired,
};

function AlbumList({ albumList }) {
  return (
    <div>
      <ul>
        {albumList.map((albumItem) => (
          <li key={albumItem.id}>
            <AlbumItem albumItem={albumItem} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AlbumList;
