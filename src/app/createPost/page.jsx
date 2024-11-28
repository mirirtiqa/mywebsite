"use client"
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const createPost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // Add your form submission logic here
  };

  return (
    <div className="flex flex-col md:flex-row text-blue mt-5 justify-center p-3">
    <form onSubmit={handleSubmit(onSubmit)} className=" bg-white bg-opacity-70 p-3 w-[70vw] ">
      {/* Title Field */}
      <div>
        <Label className="text-blue-900" htmlFor="title">Title</Label>
        <Input
          id="title"
          {...register("title", { required: "Title is required" })}
          placeholder="Enter the title"
          className={errors.title ? "border-red-500" : ""}
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
        )}
      </div>

      {/* Content Field */}
      <div>
        <Label className="text-blue-900" htmlFor="content">Content</Label>
        <Textarea
          id="content"
          {...register("content", { required: "Content is required" })}
          placeholder="Enter the content"
          className="h-[50vh]"
        />
        {errors.content && (
          <p className="text-red-500 text-sm mt-1">{errors.content.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <Button className="bg-blue-900" type="submit">Submit</Button>
      </div>
    </form>
    </div>
  );
};

export default createPost;
