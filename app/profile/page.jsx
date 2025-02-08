"use client";

import { useEffect, useState } from "react";
import { useSession } from "@node_modules/next-auth/react";
import Profile from "@components/Profile";

const MyProfile = () => {
    const { data: session } = useSession();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/users/${session?.user.id}/posts`);
            const data = await response.json();
            setPosts(data);
        }
        if (session?.user.id)
            fetchPosts();
    }, []);

    return (
        <Profile
            name="My"
            desc="Welcome to your personalized profile page"
            data={posts}
        />
    )
}

export default MyProfile
