import styled from "styled-components";
import SpinnerMini from "../../ui/spinners/SpinnerMini";
import Tag from "../../ui/Tag";
import { useUser } from "./useUser";

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  font-weight: 500;
  font-size: 0.875rem;
  color: var(--color-grey-600);
`;

function UserInfo() {
  const { user, isLoading } = useUser();

  if (isLoading) return <SpinnerMini />;

  const { name } = user;

  return (
    <StyledUserAvatar>
      <Tag type="brand">Quản trị viên</Tag>
      <span>{name}</span>
    </StyledUserAvatar>
  );
}

export default UserInfo;
