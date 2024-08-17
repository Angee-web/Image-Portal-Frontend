import styled from "styled-components";
import { MdCancel } from "react-icons/md";
import { useRef, useState } from "react";
import { CiHeart } from "react-icons/ci";

interface WrapperProps {
  isliked: boolean;
}

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled(Backdrop)<WrapperProps>`
  border: 1px solid grey;
  border-radius: 8px;
  padding: 24px;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .card {
    width: 40vw;
    height: 80vh;
    background: #fff;
    padding: 15px 30px;

    .goAway {
      cursor: pointer;
    }

    .liked {
      width: 50px;
      height: 30px;
      color: ${(props) => (props.isliked ? "red" : "black")};
      cursor: pointer;

      svg {
        width: 100%;
        height: 100%;
      }
    }

    .profilePicture {
      height: 250px;
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
    }
  }

  @media screen and (max-width: 768px) {
    .card {
      height: 400px;
    }
  }
`;

interface StoryModalProps {
  setOpenStoryModal: (value: boolean) => void;
}

const StoryModal = ({ setOpenStoryModal }: StoryModalProps) => {
  const [isliked, setisliked] = useState<boolean>(false); 

  const inputRef = useRef(null);

  const handleImageClick = () => {
    // @ts-expect-error ttt
    inputRef.current.click();
  };

  const handleLikeClick = () => {
    setisliked(!isliked); 
  };

  return (
    <Wrapper isliked={isliked}>
      <div className="card">
        <div className="start">
          <div className="goAway" onClick={() => setOpenStoryModal(false)}>
            <MdCancel color="#FF6F61" />
          </div>
          <div className="profilePicture" onClick={handleImageClick}>
            <img
              src="https://images.unsplash.com/photo-1681053203240-c36aee74cc03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>

        <div className="content">
          <div className="contentItem">
            <p className="username">Anonymous</p>
          </div>

          <div className="contentItem">
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus in quam sed laudantium fuga. Blanditiis, ipsum
              reiciendis! Totam, natus accusantium.
            </p>
          </div>

          <div className="liked" onClick={handleLikeClick}>
            <CiHeart />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default StoryModal;
