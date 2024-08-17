import React, { useState } from "react";
import styled from "styled-components";

// Define styled-components
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  max-width: 500px;
  margin: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// create state for the url, content and username
const UploadPost = () => {
  const [mediaUrl, setMediaUrl] = useState("");
  const [content, setContent] = useState("");
  const [username, setUsername] = useState("");

  //function to send data to the db ie the fetch on submit function
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //prevent the form from the default action of submitting
    event.preventDefault();

    // make sure all fields in the post form are filled
    if (!mediaUrl || !content || !username) {
      alert("Please fill out all fields.");
      return;
    }

    const postData = {
      mediaUrl,
      content,
      username,
    };

    // After the form has been sent use the endpoint to post data
    fetch("http://localhost:5001/create-post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Post uploaded successfully!");
        // Reset form after response has been sent
        setMediaUrl("");
        setContent("");
        setUsername("");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error uploading post.");
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Image URL"
        value={mediaUrl}
        onChange={(e) => setMediaUrl(e.target.value)}
      />
      <TextArea
        placeholder="Enter post content"
        rows={4}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button type="submit">Upload Post</Button>
    </Form>
  );
};

export default UploadPost;
