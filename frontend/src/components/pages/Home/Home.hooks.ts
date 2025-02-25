import { useState, useCallback, useEffect } from "react";
import { SearchType } from "./Home.types";
import { PostType } from "@/models/pages/slug";

export const useHome = (
    postList: PostType[]
) => {
    const [posts, setPosts] = useState<PostType[]>(postList);
    const [search, setSearch] = useState<SearchType>({ sort: 'desc' });

    const handleFindPosts = useCallback((search: SearchType) => {
        setSearch(prev => ({
            ...prev,
            ...search,
            sort: search.sort ?? prev.sort ?? 'desc'
        }));
    }, []);

    useEffect(() => {
        let filteredPosts = [...postList];

        if(!search) {
            return;
        }

        if (search.keyword) {
            filteredPosts = filteredPosts.filter(post => 
                post.title.toLowerCase().startsWith(search.keyword!.toLowerCase())
            );
        }

        if (search.tag) {
            filteredPosts = filteredPosts.filter(post => post.mainTag === search.tag);
        }

        if (search.sort) {
            filteredPosts = filteredPosts.sort((a, b) =>
                (search.sort === 'desc' ? -1 : 1) * 
                (new Date(a.regDate).getTime() - new Date(b.regDate).getTime())
            );
        }

        setPosts(filteredPosts);
    }, [search, postList]);

    return {
        posts,
        search,
        handleFindPosts,
    }
}