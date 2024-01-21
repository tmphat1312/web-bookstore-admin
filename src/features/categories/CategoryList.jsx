import LoadingProgress from "../../ui/LoadingProgress";
import Pagination from "../../ui/Pagination";
import { useCategories } from "./useCategories";

export default function CategoryList() {
  const state = useCategories();

  return (
    <LoadingProgress {...state} resourceName="Danh mục sản phẩm">
      {state.categories.map((category, i) => (
        <div key={category._id}>{category.name}</div>
      ))}
      <Pagination count={state.count} />
    </LoadingProgress>
  );
}
