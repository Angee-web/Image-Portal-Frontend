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
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <Wrapper>
      <Button
        text="Create"
        onClick={() => setOpenCreateModal(true)}
        disabled={false} // Ensure `disabled` prop is provided
      />
      <Button
        text="Refresh"
        onClick={reloadPage}
        disabled={false} // Ensure `disabled` prop is provided
      />
    </Wrapper>
  );
};

export default ActionCenter;
