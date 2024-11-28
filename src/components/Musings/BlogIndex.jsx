"use client"

import React, { useEffect, useState } from 'react';
import BlogTitle from './BlogTitle';
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";

  import { CircleChevronDown  } from "lucide-react" 

export default function BlogIndex(){
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                console.log("fetching data")
                const response = await fetch('http://localhost:5000/api/v1/posts/getTitles'); 
                if (!response.ok) {
                    throw new Error('Failed to fetch blogs');
                }
                const data = await response.json();
                console.log("data:", data);
                setBlogs(data); 
            } catch (err) {
                setError(err.message); 
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs(); 
    }, []);


    return(
        <>
        {/* <div className='flex flex-col text-center p-5 bg-white bg-opacity-70 border-radius-2'>
        <Button variant="ghost" className="text-2xl">Blogs</Button>
            {blogs.map((blog) => (
                    <BlogTitle key={blog.id} data={blog} />
                ))}
        </div> */}
     <div className='flex flex-col text-center p-5 bg-white bg-opacity-70 items-center border-radius-2'>

    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="w-[40vh] bg-blue-900 text-white">List of my confusing musings.. <CircleChevronDown /></Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Blogs</SheetTitle>
          <SheetDescription>
            Feel free to dive in, you might relate, who knows..
          </SheetDescription>
        </SheetHeader>
        <div>
        {blogs.map((blog) => (
                    <BlogTitle key={blog.id} data={blog} />
                ))}
        </div>
        <SheetFooter>
          <SheetClose asChild>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
    </div>
        </>
        
        
        
        
        

    );

}