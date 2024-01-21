import styled from "styled-components";
import SpinnerMini from "../../ui/spinners/SpinnerMini";
import Tag from "../../ui/Tag";
import { useUser } from "./useUser";

const StyledUserInfo = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  font-weight: 500;
  font-size: 0.875rem;
  color: var(--color-grey-600);
`;

const Avatar = styled.img`
  width: 40px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: var(--border-100);
  font-size: 0.5rem;
  font-style: italic;
`;

function UserInfo() {
  const { user, isLoading } = useUser();

  if (isLoading) return <SpinnerMini />;

  const { name } = user;

  return (
    <StyledUserInfo>
      <Tag type="brand">Quản trị viên</Tag>
      <span>{name}</span>
      <Avatar src={user.image} alt={name} />
    </StyledUserInfo>
  );
}

export default UserInfo;
