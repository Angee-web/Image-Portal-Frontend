import styled from "styled-components";
import { CiHeart } from "react-icons/ci";
import { useEffect, useState } from "react";

interface WrapperProps {
  isLiked: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  border: 1px solid grey;
  border-radius: 8px;
  padding: 24px;
  height: 500px;
  display: flex;
  flex-direction: column;

  .profilePicture {
    height: 60%;
    width: 100%;
    border-radius: 8px 8px 0 0;

    img {
      width: 100%;
      height: 100%;
      border-radius: 8px 8px 0 0;
      object-fit: cover;
      cursor: pointer;
    }
  }

  .content {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .contentItem {
      display: flex;
      gap: 8px;

      .username {
        font-size: 20px;
        font-style: italic;
        font-weight: bold;
      }
    }

    .liked {
    display: flex;
      width: 30px;
      height: 20px;
      color: ${(props) => (props.isLiked ? "red" : "black")};

      svg {
        width: 100%;
        height: 100%;
      }

      .likesCount {
        font-size: 20px;
        font-weight: bold;
        color: black;
      }
    }

    .createdAt {
      margin-top: 20px;
    }

    .deleteButton {
      padding: 5px 8px;
      background-color: #ff6f61;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
      width: 100px;
    }
  }
`;

interface Post {
  _id: string;
  username: string;
  postDescription: string;
  postImage: string;
  createdAt: string;
}

const ClassCard = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [likes, setLikes] = useState<{ [key: string]: number }>({});

  const handleLikeClick = (postId: string) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [postId]: (prevLikes[postId] || 0) + 1,
    }));
  };

  const handleDelete = (postId: string) => {
    fetch(`https://image-portal-backend-tmq9.onrender.com/post/${postId}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          setPosts((prevPosts) =>
            prevPosts.filter((post) => post._id !== postId)
          );
        } else {
          console.error("Failed to delete the post");
        }
      })
      .catch((error) => console.error("error", error));
  };

  useEffect(() => {
    fetch("https://image-portal-backend-tmq9.onrender.com/posts")
      .then((res) => res.json())
      .then((data: { data: Post[] }) => {
        setPosts(data.data);

        const initialLikes = data.data.reduce((acc, post) => {
          acc[post._id] = 0;
          return acc;
        }, {} as { [key: string]: number });

        setLikes(initialLikes);
      })
      .catch((error) => console.error("error", error));
  }, []);

  return (
    <>
      {posts.map((post) => (
        <Wrapper key={post._id} isLiked={!!likes[post._id]}>
          <div className="profilePicture">
            <img src={post.postImage} alt="image" />
          </div>

          <div className="content">
            <div className="contentItem">
              <p className="username">{post.username}</p>
            </div>

            <div className="contentItem">
              <p>{post.postDescription}</p>
            </div>

            <div className="liked" onClick={() => handleLikeClick(post._id)}>
              <CiHeart />
              <p className="likesCount">{likes[post._id]} likes</p>
            </div>

            <div className="createdAt">
              Created at: {new Date(post.createdAt).toLocaleString()}
            </div>

            <button
              className="deleteButton"
              onClick={() => handleDelete(post._id)}
            >
              Delete Post
            </button>
          </div>
        </Wrapper>
      ))}
    </>
  );
};

export default ClassCard;
