"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import React, { useEffect, useState } from 'react';
import { useBlogContext } from './BlogContext';
  
export default function (){

    const { selectedBlog } = useBlogContext();

    const [blog, setBlog] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
         
            try {
                console.log("fetching data")
                const response = await fetch(`http://localhost:5000/api/v1/posts/getPost/${selectedBlog}`); 
                if (!response.ok) {
                    throw new Error('Failed to fetch blogs');
                }
                const data = await response.json();
                console.log("data:", data);
                setBlog(data); 
            } catch (err) {
                setError(err.message); 
            } finally {
                setLoading(false);
            }
        };
    
        if(selectedBlog){
            fetchBlog(); 
        }

        
    }, [selectedBlog]);

    return(
        <>
        {
            blog && <Card className="bg-white bg-opacity-70">
            <CardHeader>
              <CardTitle>{blog.title}</CardTitle>
              {/* <CardDescription>Card Description</CardDescription> */}
            </CardHeader>
            <CardContent>
              <p>{blog.content}</p>
            </CardContent>
            <CardFooter>
              <p>Likes:{blog.likes}</p>
            </CardFooter>
          </Card>
        }
        </>
        
    );

}