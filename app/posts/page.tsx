interface Post {
  id: number;
  title: string;
}

export default async function PostsPage() {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json());

    console.log('Post page called!!')

  return (
    <div className="p-4">
      <h1>Posts</h1>
      <ul>
        {posts.map((post: Post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}





