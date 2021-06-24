import { useState, useEffect } from "react";
import Post, { PostProps } from "./components/Post/Post";
import "./App.css";

const posts: PostProps[] = [
  {
    title: "example post",
    description: "some text",
    author: "amir",
    isPublished: true,
  },
  {
    title: "example post 2",
    description: "some text 2",
    author: "amir",
    isPublished: false,
  },
  {
    title: "example post 3",
    description: "some text 3",
    author: "amir",
    isPublished: true,
  },
];

const App: React.FC = () => {
  // we dont need to pass in useState<boolean>(false) as the initial argument is false
  // so ts will infer the type as a boolean - it will automatically pick up the type
  // if we dont pass anything then we would use a boolean type passed in
  const [showPublished, setShowPublished] = useState(false);

  const toggleShowAll = () => {
    // by passing a function in to the setShowPublished function you can get the previous value
    // this is the best way to toggle a state especially when working with async code, to make sure you get the latest value
    setShowPublished((prevShowPublished) => !showPublished);
    // setShowPublished(!showPublished);
  };

  useEffect(() => {
    document.title = showPublished ? "Published posts" : "All posts";
  }, [showPublished]);

  // console.log("showPublished", showPublished);

  return (
    <div className="wrapper">
      <h1 className="title">Hello typescript tv!</h1>
      <button onClick={toggleShowAll}>
        {showPublished ? "Show all" : "Show published"}
      </button>
      <div className="postWrapper">
        {posts
          .filter((post) => (showPublished ? post.isPublished : true))
          .map((post) => (
            <Post key={post.title} {...post} />
          ))}
      </div>
    </div>
  );
};

export default App;
