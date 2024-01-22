// import CategoryListOperations from "../features/categories/CategoryListOperations";
import CategoryList from "../features/categories/CategoryList";
import BackgroundHeading from "../ui/headings/BackgroundHeading";

function Categories() {
  return (
    <>
      <BackgroundHeading>Danh mục sản phẩm</BackgroundHeading>
      {/* <CategoryListOperations /> */}
      <CategoryList />
    </>
  );
}

export default Categories;
