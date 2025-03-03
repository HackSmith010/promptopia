"use client";

import { use, useState } from "react";
import { useSession } from "@node_modules/next-auth/react";
import { useRouter } from "@node_modules/next/navigation";

import Form from "@components/Form";

const CreatePrompt = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setsubmitting] = useState(false);
  const [post, setpost] = useState({
    prompt: "",
    tag: "",
  });

  const createPrompt = async (e) => {
    e.preventDefault();
    setsubmitting(true);

    try {
      const response = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user.id,
          tag: post.tag
        })
      })
      if (response.ok) {
        router.push('/')
      }
    } catch (error) {
      console.log(error);
    } finally {
      setsubmitting(false);
    }
  }

  return (
    <Form
      type="Create"
      post={post}
      setpost={setpost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />

  )
}

export default CreatePrompt
