import UserTable from "../features/users/UserTable";
import UserTableOperations from "../features/users/UserTableOperations";
import PageHeading from "../ui/headings/PageHeading";

function Users() {
  return (
    <>
      <PageHeading reset>Quản lý người dùng</PageHeading>
      <UserTableOperations />
      <UserTable />
    </>
  );
}

export default Users;
