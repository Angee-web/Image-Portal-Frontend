import styled from "styled-components";
import AppHeader from "./AppHeader";
import ActionCenter from "./ActionCenter";
import Content from "./Content";
import CreateModal from "./CreateModal";
import { useState } from "react";
import StoryModal from "./StoryModal";

const Wrapper = styled.div`
  background: #fff;
  width: 80%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  scrollbar-width: thin;
  scrollbar-color: transparent transparent;

  -ms-overflow-style: none;

  .header {
    position: sticky;
    top: 0;
    background: #fff;
  }

  @media screen and (max-width: 768px) {
    width: 80vw;
  }
`;

const Home = () => {
  const [openCreateModal, setOpenCreateModal] = useState<boolean>(false);

  const [openStoryModal, setOpenStoryModal] = useState<boolean>(false);

  return (
    <Wrapper>
      <div className="header">
        <AppHeader setOpenStoryModal={setOpenStoryModal}/>
        <ActionCenter setOpenCreateModal={setOpenCreateModal} />
      </div>

      <Content />

      {openCreateModal && (
        <CreateModal setOpenCreateModal={setOpenCreateModal} />
      )}

      {openStoryModal && (<StoryModal setOpenStoryModal={setOpenStoryModal} />)}
    </Wrapper>
  );
};

export default Home;
