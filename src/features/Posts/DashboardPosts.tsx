import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import DashboardPost from "./DashboardPost";
import { usePostsQuery } from "../../shared/query/infiniteQuery";

const DashboardPosts: React.FC = () => {
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
        <React.Fragment key={index}>
          {page.results.map((post) => (
            <DashboardPost key={post.id} {...post} />
          ))}
        </React.Fragment>
      ))}
    </InfiniteScroll>
  );
};

export default DashboardPosts;
