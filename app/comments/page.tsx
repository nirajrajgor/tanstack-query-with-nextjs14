import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import CommentsClientPage from "./CommentsClient";

async function fetchComments() {
  return fetch("https://jsonplaceholder.typicode.com/comments").then((res) =>
    res.json()
  );
}

export default async function CommentsPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["comments"],
    queryFn: fetchComments,
  });

  return (
    // Neat! Serialization is now as easy as passing props.
    // HydrationBoundary is a Client Component, so hydration will happen there.
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CommentsClientPage />
    </HydrationBoundary>
  );
}
