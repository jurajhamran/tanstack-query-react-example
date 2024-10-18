import React from "react";
import { getPosts } from "../api/getPosts";
import { useQuery } from "@tanstack/react-query";

const Posts = () => {
  const { data, isError, isPending, error } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  if (isPending) {
    return <div className="mt-4 text-center text-xl">Fetching Posts...</div>;
  }

  if (isError) {
    return (
      <div className="mt-4 text-center text-xl text-red-600">
        Error: {error.message}
      </div>
    );
  }
  return (
    <>
      <div className="mt-6 grid grid-cols-2 gap-4">
        {data.map((post) => (
          <div
            className="bg-zinc-100 shadow-md rounded-md border p-4"
            key={post.id}
          >
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <div className="flex mt-2 text-sm gap-2 text-zinc-500">
              <span>Post ID: {post.id}</span>
              <span>|</span>
              <span>User ID: {post.userId}</span>
            </div>
            <p className="mt-2">{post.body}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Posts;
