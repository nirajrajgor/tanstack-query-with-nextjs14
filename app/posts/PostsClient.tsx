"use client";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
  useQuery,
} from "@tanstack/react-query";

interface Post {
  id: number;
  title: string;
}

function fetchPost() {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  );
}

export default function PostsClientPage(props: any) {
  const { data: posts, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPost,
    initialData: props.initialData,
  });

  const handleRefetch = () => {
    refetch();
  };

  return (
    <div className="p-4">
      <h1 className="font-bold text-4xl">Posts - Initial data example</h1>
      <ul>
        {posts.slice(0, 5).map((post: Post) => (
          <li key={post.id}>
            {post.id} - {post.title}
          </li>
        ))}
      </ul>
      <div className="p-4">
        <button
          onClick={handleRefetch}
          className="mb-4 p-2 bg-blue-500 text-white rounded"
        >
          Refetch Posts
        </button>
      </div>
    </div>
  );
}
