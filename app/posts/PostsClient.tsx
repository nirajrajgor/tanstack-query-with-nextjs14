"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchPost } from "./page";

interface Post {
  id: number;
  title: string;
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
      <h1 className="font-bold text-4xl mb-2">Posts - Initial data example</h1>
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
