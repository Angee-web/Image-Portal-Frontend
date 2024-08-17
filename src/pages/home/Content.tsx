import styled from "styled-components";
import ClassCard from "./ClassCard";

const Wrapper = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Content = () => {
  return (
    <Wrapper>
      <ClassCard />
    </Wrapper>
  );
};

export default Content;
