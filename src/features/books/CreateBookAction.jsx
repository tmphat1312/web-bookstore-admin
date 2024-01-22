import { useNavigate } from "react-router-dom";
import Button from "../../ui/buttons/Button";

export default function CreateBookAction() {
  const navigate = useNavigate();

  return (
    <div>
      <Button onClick={() => navigate("/books/create")}>
        Thêm thông tin sách
      </Button>
    </div>
  );
}
