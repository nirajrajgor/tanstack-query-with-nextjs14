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

  // return (
  //   <div className="p-4">
  //     <h1>Posts</h1>
  //     <ul>
  //       {posts.map((post: Post) => (
  //         <li key={post.id}>{post.title}</li>
  //       ))}
  //     </ul>
  //   </div>
  // );
}
