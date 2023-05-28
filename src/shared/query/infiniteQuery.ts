import { useInfiniteQuery } from "react-query";

export type Post = {
  id: number;
  name: number;
  image: string;
  location: {
    name: string;
  };
};

type Page = {
  results: Post[];
  next: number | undefined;
};

async function getData({ pageParam = 1 }) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${pageParam}`
  );
  if (!response.ok) {
    throw new Error("Problem fetching data");
  }
  const fetchedData = await response.json();

  const data = {
    results: fetchedData.results,
    next: pageParam < fetchedData.info.pages ? pageParam + 1 : undefined,
  };
  return data;
}

export const usePostsQuery = () => {
  const query = useInfiniteQuery<Page, Error>("posts", getData, {
    getNextPageParam: (lastPage) => lastPage.next,
  });
  return query;
};
