import { HiMiniPencilSquare, HiTrash } from "react-icons/hi2";
import Column from "../../ui/Column";
import ConfirmAction from "../../ui/ConfirmAction";
import Modal from "../../ui/Modal";
import ActionButton from "../../ui/buttons/ActionButton";
import { useDeleteCategory } from "./useDeleteCategory";
import EditCategoryForm from "./EditCategoryForm";

export default function CategoryItemActions({ category = {} }) {
  const { isDeleting, deleteCategory } = useDeleteCategory(category.id);

  return (
    <Modal>
      <Column.HStacked>
        <Modal.Open opens="edit">
          <ActionButton>
            <HiMiniPencilSquare />
          </ActionButton>
        </Modal.Open>

        <Modal.Open opens="delete">
          <ActionButton danger>
            <HiTrash />
          </ActionButton>
        </Modal.Open>

        <Modal.Window name="edit" closeButton>
          <EditCategoryForm categoryToEdit={category} />
        </Modal.Window>

        <Modal.Window name="delete">
          <ConfirmAction
            danger
            title="Xóa danh mục sản phẩm"
            disabled={isDeleting}
            onConfirm={deleteCategory}
          />
        </Modal.Window>
      </Column.HStacked>
    </Modal>
  );
}
