import PostsClientPage from "./PostsClient";

interface Post {
  id: number;
  title: string;
}

async function fetchPost() {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  );
}

export default async function PostsPage() {
  // TODO: handle error if fetch failed.
  const posts = await fetchPost();
  return <PostsClientPage initialData={posts} />;
}
