"use client"
import { BlogProvider } from './BlogContext';
import BlogIndex from './BlogIndex';
import BlogPost from './BlogPost';
export default function MusingMainContainer(){


    return (
        <BlogProvider>
        <div className="flex flex-col text-blue  mt-20 ml-5 mr-5 gap-10">
            <BlogIndex/>
            <BlogPost/>
        </div>
        </BlogProvider>
    );
}