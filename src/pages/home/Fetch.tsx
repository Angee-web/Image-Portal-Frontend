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
    fetch("https://image-portal-backend-tmq9.onrender.com/posts")
      .then((response) => response.json())
      .then((data) => {
        console.log("Backend response:", data); // Log the response to check its structure
        setPostData(data.data || []); // Fallback to an empty array if `data.data` is undefined
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        alert("An error occurred while fetching the posts.");
      });
  }, []);

//   useEffect(() => {
//   setPostData([
//     {
//       _id: "66be2f0d44aefc16ec0420df",
//       username: "Ada",
//       postDescription: "I am hungry",
//       postImage: "https://images.unsplash.com/photo-1723429676019-d52dea259562?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
//       createdAt: "2024-08-15T16:38:37.017Z",
//     },
//   ]);
// }, []);


  return (
    <div>
      <h1>Posts</h1>
      <UserCard postData={postData} />
    </div>
  );
};

export default App;
