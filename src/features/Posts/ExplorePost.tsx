import React from "react";
import ImageListItem from "@mui/material/ImageListItem";

interface Props {
  rows: number;
}
function srcset(size: number, rows: number) {
  const random = Math.floor(Math.random() * 1000) + 1;
  const src = `https://picsum.photos/${size}/${size * rows}?random=${random}`;
  return src;
}

const ExplorePost: React.FC<Props> = (props) => {
  return (
    <ImageListItem cols={1} rows={props.rows}>
      <img src={srcset(121, props.rows)} />
    </ImageListItem>
  );
};

export default ExplorePost;
