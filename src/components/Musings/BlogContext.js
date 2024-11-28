"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';


const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
    const [selectedBlog, setSelectedBlogState] = useState(null);

    const setSelectedBlog = (blog) => {
        setSelectedBlogState(blog);
        if (blog) {
            localStorage.setItem('selectedBlog', JSON.stringify(blog)); 
        } else {
            localStorage.removeItem('selectedBlog');
        }
    };


  
    useEffect(() => {
        const storedBlog = localStorage.getItem('selectedBlog');
        if (storedBlog) {
            setSelectedBlogState(JSON.parse(storedBlog));
        }
    }, []);

    return (
        <BlogContext.Provider value={{ selectedBlog, setSelectedBlog }}>
            {children}
        </BlogContext.Provider>
    );
};


export const useBlogContext = () => {
    const context = useContext(BlogContext);
    if (!context) {
        throw new Error("useBlogContext must be used within a BlogProvider");
    }
    return context;
};
