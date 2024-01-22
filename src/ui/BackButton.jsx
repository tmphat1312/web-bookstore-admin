import { useMoveBack } from "../hooks/useMoveBack";
import ButtonText from "./buttons/ButtonText";

export default function BackButton() {
  const moveBack = useMoveBack();

  return (
    <ButtonText onClick={moveBack}>
      <span role="presentation">&larr;</span>
      <span>Quay lại</span>
    </ButtonText>
  );
}
