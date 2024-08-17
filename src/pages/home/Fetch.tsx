import { useEffect, useState } from "react";
import UserCard from "./UserCard";

// Define the Post interface
interface Post {
  mediaUrl: string;
  content: string;
  username: string;
  createdAt: string;
}

const App = () => {
  const [postData, setPostData] = useState<Post[]>([]);

  useEffect(() => {
    // Fetch posts data from the backend on first render
    fetch("http://localhost:5001/posts")
      .then((response) => response.json())
      .then((data) => {
        setPostData(data.posts);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <UserCard postData={postData} />
    </div>
  );
};

export default App;
