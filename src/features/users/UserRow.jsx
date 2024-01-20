import Table from "../../ui/Table";
import Column from "../../ui/Column";
import UserRowActions from "./UserRowActions";
import { ROLE } from "../../constants/dictionary";

function UserRow({ user = {}, serial }) {
  const { id, name, email, image, role } = user;

  return (
    <Table.Row>
      <Column.Number>{serial}</Column.Number>
      <Column.Image src={image} />
      <Column>{name}</Column>
      <Column>{email}</Column>
      <Column.TableTag dictionary={ROLE}>{role}</Column.TableTag>
      <UserRowActions id={id} />
    </Table.Row>
  );
}

export default UserRow;
