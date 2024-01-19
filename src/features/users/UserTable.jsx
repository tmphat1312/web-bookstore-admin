import { useUsers } from "./useUsers";

import LoadingProgress from "../../ui/LoadingProgress";
import Pagination from "../../ui/Pagination";
import Menus from "../../ui/Menus";
import Table from "../../ui/Table";
// import UserRow from "./UserRow";

export default function UserTable() {
  const state = useUsers();

  return (
    <LoadingProgress {...state} resourceName="Tài khoản">
      <Menus>
        <Table columns="12ch 80px 1fr 16ch 20ch 3.2rem">
          <Table.Header>
            <div>STT</div>
            <div>Ảnh</div>
            <div>Thông tin</div>
            <div>SDT</div>
            <div>Phân quyền</div>
            <div>&nbsp;</div>
          </Table.Header>
          asdkfjhaskldfhs
          {/* <Table.Body
            data={state.users}
            render={(user, i) => (
              <UserRow key={user._id} user={user} serial={i + 1} />
            )}
          /> */}
          <Table.Footer>
            <Pagination count={state.count} />
          </Table.Footer>
        </Table>
      </Menus>
    </LoadingProgress>
  );
}
