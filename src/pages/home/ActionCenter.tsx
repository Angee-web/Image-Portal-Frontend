import styled from "styled-components";
import Button from "../../component/Button";

const Wrapper = styled.div`
  padding: 24px;
  display: flex;
  gap: 24px;
  border-bottom: 1px solid grey;
  height: 100px;
`;

interface ActionCenterProps {
  setOpenCreateModal: (value: boolean) => void;
}

const ActionCenter = ({ setOpenCreateModal }: ActionCenterProps) => {
  return (
    <Wrapper>
      <Button text="Create" onClick={() => setOpenCreateModal(true)} />
      <Button text="Refresh" />
    </Wrapper>
  );
};

export default ActionCenter;
