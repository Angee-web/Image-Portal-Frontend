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
    fetch("https://image-portal-backend-tmq9.onrender.com/posts") // Updated to Render URI
      .then((response) => response.json())
      .then((data) => {
        setPostData(data.data); // Assuming the posts are in `data.data` as per the backend response
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
