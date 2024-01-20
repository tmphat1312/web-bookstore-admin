import styled from "styled-components";
import Button from "./buttons/Button";
import SubHeading from "./headings/SubHeading";

const Confirm = styled.div`
  max-inline-size: 32rem;
  margin: auto;
  padding: 1.5rem;
  border: var(--border-200);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  background-color: transparent;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 0.75rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 0.75rem;
  }
`;

export default function ConfirmAction({
  title,
  disabled,
  description,
  danger = false,
  onConfirm = () => {},
  onCloseModal = () => {},
}) {
  const confirmTitle = title ?? "Xác nhận hành động";
  const confirmDescription =
    description ?? `Bạn có chắc chắn muốn thực hiện hành động này không?`;

  function handleConfirm() {
    onConfirm();
    onCloseModal();
  }

  return (
    <Confirm>
      <SubHeading>{confirmTitle}</SubHeading>
      <p>{confirmDescription}</p>

      <div>
        <Button
          variation="secondary"
          disabled={disabled}
          onClick={onCloseModal}
        >
          Hủy
        </Button>
        <Button
          disabled={disabled}
          variation={danger ? "danger" : "primary"}
          onClick={handleConfirm}
        >
          Xác nhận
        </Button>
      </div>
    </Confirm>
  );
}
