import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/buttons/ButtonIcon";
import SpinnerMini from "../../ui/spinners/SpinnerMini";
import { useLogout } from "./useLogout";

function Logout() {
  const { isLoading, logout } = useLogout();

  return (
    <ButtonIcon onClick={logout}>
      {isLoading ? <SpinnerMini /> : <HiArrowRightOnRectangle />}
    </ButtonIcon>
  );
}

export default Logout;
