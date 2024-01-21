import Modal from "../../ui/Modal";
import Button from "../../ui/buttons/Button";
import CreateUserForm from "./CreateUserForm";

function CreateUserAction() {
  return (
    <div>
      <Modal>
        <Modal.Open>
          <Button>Tạo tài khoản</Button>
        </Modal.Open>

        <Modal.Window closeButton>
          <CreateUserForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default CreateUserAction;
