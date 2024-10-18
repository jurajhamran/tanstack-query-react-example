import { Post } from "../types/Post";

export const createPost = async (newPost: Omit<Post, "id" | "userId">) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  });
  if (!response.ok) {
    throw new Error("Response was not OK");
  }
  return response.json();
};
