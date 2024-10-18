import { Post } from "../types/Post";

export const getPosts = async (): Promise<Post[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Response was not OK");
  }
  return response.json();
};
