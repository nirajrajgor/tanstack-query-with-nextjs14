interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

export default async function CommentsPage() {
  const comments = await fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json());

  return (
    <div className="p-4">
      <h1>Comments</h1>
      <ul>
        {comments.map((comment: Comment) => (
          <li key={comment.id} className="mb-4">
            <h2 className="font-bold">{comment.name}</h2>
            <p className="text-sm text-gray-600">{comment.email}</p>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
