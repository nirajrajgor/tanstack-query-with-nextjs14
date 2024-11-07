"use client";
import { useQuery } from "@tanstack/react-query";

interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

// This uses browser fetch api
function fetchCommentsClient() {
  return fetch("https://jsonplaceholder.typicode.com/comments").then((res) =>
    res.json()
  );
}

function fetchCommentDetailsClient() {
  // This is fetching single comment
  return fetch("https://jsonplaceholder.typicode.com/comments/1").then((res) =>
    res.json()
  );
}

export default function CommentsClientPage() {
  // This useQuery could just as well happen in some deeper
  // child to <Posts>, data will be available immediately either way
  const { data: comments } = useQuery({
    queryKey: ["comments"],
    queryFn: fetchCommentsClient,
  });

  // This query was not prefetched on the server and will not start
  // fetching until on the client, both patterns are fine to mix.
  const { data: commentsDetails } = useQuery({
    queryKey: ["comments-details"],
    queryFn: fetchCommentDetailsClient,
  });

  return (
    <div className="p-4">
      <h1 className="font-bold text-4xl mb-2">Comments - Hydration example</h1>
      <ul>
        {comments.slice(0, 5).map((comment: Comment) => (
          <li key={comment.id} className="mb-4">
            <h2 className="font-bold">
              {comment.id} - {comment.name}
            </h2>
            <p className="text-sm text-gray-600">{comment.email}</p>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
      <div className="my-4 border-t border-gray-300"></div>
      <h2 className="font-bold text-2xl mb-2">Comments Details</h2>
      <ul>
        {commentsDetails && (
          <li key={commentsDetails.id} className="mb-4">
            <h2 className="font-bold">
              {commentsDetails.id} - {commentsDetails.name}
            </h2>
            <p className="text-sm text-gray-600">{commentsDetails.email}</p>
            <p>{commentsDetails.body}</p>
          </li>
        )}
      </ul>
    </div>
  );
}
