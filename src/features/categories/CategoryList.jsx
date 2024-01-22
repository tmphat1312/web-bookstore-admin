import DataList from "../../ui/DataList";
import LoadingProgress from "../../ui/LoadingProgress";
import Pagination from "../../ui/Pagination";
import CategoryItem from "./CategoryItem";
import CategoryListContainer from "./CategoryListContainer";
import { useCategories } from "./useCategories";

export default function CategoryList() {
  const state = useCategories();

  return (
    <LoadingProgress {...state} resourceName="Danh mục sản phẩm">
      <CategoryListContainer>
        <DataList
          data={state.categories}
          render={(category) => (
            <DataList.Item key={category._id}>
              <CategoryItem category={category} />
            </DataList.Item>
          )}
        />
        <Pagination count={state.count} hasContainer />
      </CategoryListContainer>
    </LoadingProgress>
  );
}
