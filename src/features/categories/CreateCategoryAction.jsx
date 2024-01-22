import styled from "styled-components";
import Modal from "../../ui/Modal";
import Button from "../../ui/buttons/Button";
import CreateCategoryForm from "./CreateCategoryForm";
import { HiMiniPlus } from "react-icons/hi2";

const StyledCreateButton = styled(Button)`
  inline-size: 100%;
  display: flex;
  gap: 0.25rem;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
`;

function CreateCategoryAction() {
  return (
    <div>
      <Modal>
        <Modal.Open>
          <StyledCreateButton aria-label="Tạo danh mục" variation="secondary">
            <HiMiniPlus role="presentation" size={18} />
            <span>Tạo danh mục</span>
          </StyledCreateButton>
        </Modal.Open>

        <Modal.Window closeButton>
          <CreateCategoryForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default CreateCategoryAction;
