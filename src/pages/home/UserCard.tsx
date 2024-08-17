import styled from "styled-components";

// Define the Post interface with createdAt field
interface Post {
  mediaUrl: string;
  content: string;
  username: string;
  createdAt: string; // ISO 8601 date string
}

// Define the props interface
interface UserCardProps {
  postData: Post[];
}

// Define styled-components
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const Card = styled.div`
  display: flex;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 500px;
  height: 350px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const Image = styled.img`
  width: 300px;
  height: 350px;
  object-fit: cover;
  border-radius: 0 50px;
`;

const Info = styled.div`
  padding: 16px;
  text-align: center;
`;

const Caption = styled.p`
  font-size: 14px;
  color: #333;
  margin: 8px 0;
  font-weight: bold;
`;

const Username = styled.h3`
  font-size: 16px;
  color: #007bff;
  margin: 0;
`;

const CreatedAt = styled.p`
  font-size: 12px;
  color: #666;
  margin: 8px 0;
`;

const UserCard = ({ postData }: UserCardProps) => {
  // Function to format the creation time
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <Wrapper>
      {postData.map((post, index) => (
        <Card key={index}>
          <Image src={post.mediaUrl} alt={post.username} />
          <Info>
            <Username>{post.username}</Username>
            <Caption>{post.content}</Caption>
            <CreatedAt>Created on: {formatDate(post.createdAt)}</CreatedAt>
          </Info>
        </Card>
      ))}
    </Wrapper>
  );
};

export default UserCard;
