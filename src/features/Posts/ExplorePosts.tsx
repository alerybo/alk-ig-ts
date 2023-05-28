import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { usePostsQuery } from "../../shared/query/infiniteQuery";
import { styled } from "@mui/material/styles";
import ImageList from "@mui/material/ImageList";
import ExplorePost from "./ExplorePost";

const StyledImageList = styled(ImageList)({
  width: "100%",
  maxWidth: "1000px",
  height: "auto",
});

const ExplorePosts: React.FC = () => {
  const { data, error, fetchNextPage, hasNextPage, status } = usePostsQuery();

  if (status === "loading") {
    return <div>Loading posts...</div>;
  }
  if (status === "error") {
    return <div>{error?.message}</div>;
  }
  if (data === undefined) {
    return <div>No posts found!</div>;
  }

  const dataLength = data.pages.reduce((counter, page) => {
    return counter + page.results.length;
  }, 0);

  return (
    <InfiniteScroll
      dataLength={dataLength}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<h4>Loading...</h4>}
      endMessage={<p>No more posts to load.</p>}
    >
      {data.pages.map((page, index) => (
        <StyledImageList key={index} variant="quilted" cols={3}>
          {page.results.map((post) => (
            <ExplorePost
              rows={Math.floor(Math.random() * 2) + 1}
              key={post.id}
            />
          ))}
        </StyledImageList>
      ))}
    </InfiniteScroll>
  );
};

export default ExplorePosts;
