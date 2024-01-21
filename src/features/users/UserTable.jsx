import UserRow from "./UserRow";
import { useUsers } from "./useUsers";

import LoadingProgress from "../../ui/LoadingProgress";
import Pagination from "../../ui/Pagination";
import Table from "../../ui/Table";
import CreateUserAction from "./CreateUserAction";

export default function UserTable() {
  const state = useUsers();

  return (
    <LoadingProgress {...state} resourceName="Tài khoản">
      <Table columns="6ch 80px 1fr 1fr 1fr 4rem">
        <Table.Header>
          <div>STT</div>
          <div>Ảnh</div>
          <div>Họ tên</div>
          <div>Email</div>
          <div>Phân quyền</div>
          <div>&nbsp;</div>
        </Table.Header>

        <Table.Body
          data={state.users}
          render={(user, i) => (
            <UserRow key={user._id} user={user} serial={i + 1} />
          )}
        />
        <Table.Footer>
          <Pagination count={state.count} />
        </Table.Footer>
      </Table>

      <CreateUserAction />
    </LoadingProgress>
  );
}
