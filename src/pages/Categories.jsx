// import CategoryListOperations from "../features/categories/CategoryListOperations";
import CategoryList from "../features/categories/CategoryList";
import PageHeading from "../ui/headings/PageHeading";

function Categories() {
  return (
    <>
      <PageHeading>Danh mục sản phẩm</PageHeading>
      {/* <CategoryListOperations /> */}
      <CategoryList />
    </>
  );
}

export default Categories;
