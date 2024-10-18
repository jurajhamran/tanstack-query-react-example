import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost } from "../api/createPost";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    mutation.mutate({ title, body });
  };

  if (mutation.isPending) {
    return <div className="mt-4 text-center text-xl">Creating Post...</div>;
  }

  if (mutation.isSuccess) {
    return (
      <div className="mt-4 text-center text-xl text-green-600">
        Post Created!
      </div>
    );
  }

  if (mutation.isError) {
    return (
      <div className="text-center text-xl text-red-600">
        Error while creating the post
      </div>
    );
  }

  return (
    <>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="w-1/3 mx-auto mt-6 flex flex-col gap-4"
      >
        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="title">
            Title
          </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="border-2 rounded p-1 border-black"
            id="title"
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="content">
            Content
          </label>
          <textarea
            onChange={(e) => setBody(e.target.value)}
            value={body}
            rows={3}
            className="border-2 rounded border-black p-1"
            id="content"
          ></textarea>
        </div>

        <button
          className="bg-black text-white rounded w-fit mx-auto py-2 px-4"
          type="submit"
        >
          Create Post
        </button>
      </form>
    </>
  );
};

export default PostForm;
