import React from "react";
import AlbumList from "./components/AlbumList";

AlbumFeatture.propTypes = {};

function AlbumFeatture(props) {
  const albumList = [
    {
      id: 1,
      name: "tên bài số 1",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/c/5/f/c/c5fc615c43215c6b72676f42767855ee.jpg",
    },
    {
      id: 2,
      name: "tên bài số 2",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/8/1/f/7/81f7f0e2ebefd2be1aad325fccc57a2e.jpg",
    },
    {
      id: 3,
      name: "tên bài số 3",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/9/2/a/e/92aedc04f6c9f0af7ed30739ab30510a.jpg",
    },
  ];
  return (
    <div>
      <h2>Co the ban se thich</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeatture;
