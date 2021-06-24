import React from "react";
import styled from "styled-components";

const name: string = "Aidan";

// an interface represents a shape of an object for you
export interface PostProps {
  title: string;
  description: string;
  author: string;
  isPublished: boolean;
}

// more common way to specifiy an array of posts
const posts: PostProps[] = [
  {
    title: "example post",
    description: "some text",
    author: "aidan",
    isPublished: true,
  },
  {
    title: "example post 2",
    description: "some text 2",
    author: "bob",
    isPublished: false,
  },
  {
    title: "example post 3",
    description: "some text 3",
    author: "mike",
    isPublished: true,
  },
];

// const post: Array<Post> = {
//   title: "example post",
//   description: "some text",
//   author: "aidan",
//   isPublished: true,
// };

const Post: React.FC<PostProps> = ({
  title,
  description,
  author,
  isPublished,
}) => {
  return (
    <div>
      <div>
        <div key={title}>
          <Title>title: {title}</Title>
          <Description>description: {description}</Description>
          <Author>author: {author}</Author>
          <IsPublished>published: {isPublished ? "True" : "False"}</IsPublished>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Post;

const Title = styled.p`
  color: red;
`;

const Description = styled.p`
  color: purple;
`;

const Author = styled.p`
  color: orange;
`;

const IsPublished = styled.p`
  color: blue;
`;
