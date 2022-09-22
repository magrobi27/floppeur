import React from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";

export type PostProps = {
  id: string;
  posterPseudo : string;
  title: string;
  poster: {
    name: string;
    email: string;
  } | null;
  content: string;
  published: boolean;
  commentsId : any;
};

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
  const authorName = post.poster ? post.poster.name : "Unknown author";
  return (
    <div onClick={() => Router.push("/p/[id]", `/p/${post.id}`)}>
      
      <h2>{post.title}</h2>
      <small>Par {authorName}</small>
      <ReactMarkdown children={post.content} />
      <style jsx>{`
        div {
          color: inherit;
          padding: 2rem;
        }
      `}</style>
    </div>
  );
};

export default Post;
