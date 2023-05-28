import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import { RootState } from "../../shared/store/store";
import { fetchPosts } from "./postSlice";
import DashboardPost from "./DashboardPost";

const DashboardPosts: React.FC = () => {
  const dispatch = useDispatch();
  const { posts, hasMore } = useSelector((state: RootState) => state.posts);
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleFetchPosts = () => {
    dispatch(fetchPosts());
  };

  return (
    <InfiniteScroll
      dataLength={posts.length}
      next={handleFetchPosts}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={<p>No more posts to load.</p>}
    >
      {posts.map((post) => (
        <DashboardPost {...post} />
      ))}
    </InfiniteScroll>
  );
};

export default DashboardPosts;
