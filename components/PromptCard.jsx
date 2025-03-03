"use client";

import { useState } from "react";
import Image from "@node_modules/next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const PromptCard = ({ post }) => {
  const [copied, setcopied] = useState('');
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  const handleCopy = () => {
    setcopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setcopied(''), 3000);
  };


  const handleEdit = (id) => {
    console.log(id);
    router.push(`/update-prompt?id=${id}`)
  }

  const handleTagClick = (tag) => {
    router.push(`/profile`);
    console.log(tag);
  }

  const handleDelete = async (id) => {
    const hasConfirmed = confirm("Are you sure,You want to delete this prompt");

    if (hasConfirmed) {
      try {
        await fetch(`/api/prompt/${id}`, {
          method: 'DELETE'
        });

        // const fileredPosts = post.filter((p) => p._id !== post._id);
        // setpost(fileredPosts);

        router.push('/profile');
        router.refresh();

      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <Image
            src={post.creator.image}
            width={40}
            height={40}
            className="rounded-full object-contain"
            alt="user_image"
          />
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">
              {post.creator.userName}
            </h3>
            <p className="font-inter text-sm text-gray-500">
              {post.creator.email}
            </p>
          </div>
        </div>
        <div className="copy_btn" onClick={() => handleCopy(post.prompt, post.tag)}>
          <Image
            src={
              copied === post.prompt
                ? "/assets/icons/tick.svg"
                : "/assets/icons/copy.svg"
            }
            width={12}
            height={12}
            alt="copy"
          />
        </div>
      </div>
      <p className="my-4 font-satoshi text-sm text-gray-700">
        {post.prompt}
      </p>
      <p className="font-inter text-sm blue_gradient cursor-pointer"
        onClick={() => handleTagClick(post.tag)}
      >
        #{post.tag}
      </p>
      {
        session?.user.id === post.creator._id && pathName === '/profile' && (
          <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
            <p
              className="font-inter text-sm green_gradient cursor-pointer"
              onClick={() => handleEdit(post._id)}>
              Edit
            </p>
            <p
              className="font-inter text-sm orange_gradient cursor-pointer"
              onClick={() => handleDelete(post._id)}>
              Delete
            </p>
          </div>
        )}
    </div>
  )
}

export default PromptCard
