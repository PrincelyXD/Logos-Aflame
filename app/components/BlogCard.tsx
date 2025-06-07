import React from "react";
import UserAvatarCircle from "./UserAvatarCircle";
import { Calendar, ChevronRight } from "lucide-react";

type Post = {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  author: string;
  authors: number;
};

const BlogCard = ({ post }: { post: Post }) => {
  const { title, excerpt, date, image, author, authors } = post;
  return (
    <div
      className={`bg-white rounded-2xl overflow-hidden
       shadow-md transition-all duration-1000 transform `}
    >
      <div
        className="h-48 bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>

      <div className="p-6 ">
        <div className="flex items-center text-[13px] text-gray-500 mb-3">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{date}</span>
        </div>

        <h3 className="text-2xl font-nunito font-bold text-gray-900 mb-3">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>

        <p className="text-sm text-gray-500 mb-4">By {author}</p>

        <div className="flex justify-between">
          <UserAvatarCircle
            person1="bg-[url('/pst-grace.png')]"
            person2="bg-[url('/pst-chike.png')]"
            group={authors}
          />
          <a
            href="#"
            className="inline-flex items-center text-red-600 hover:text-red-700 font-medium transition-colors"
          >
            Read More <ChevronRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
