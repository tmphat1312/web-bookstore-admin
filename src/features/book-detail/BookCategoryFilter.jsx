import { useBookCategories } from "./useBookCategories";
import SpinnerMini from "../../ui/spinners/SpinnerMini";
import ErrorLoading from "../../ui/ErrorLoading";
import SelectFilter from "../../ui/SelectFilter";

export default function BookCategoryFilter() {
  const { isLoading, error, bookCategories } = useBookCategories();

  if (isLoading) {
    return <SpinnerMini />;
  }

  if (error) {
    return <ErrorLoading error={error} />;
  }

  const options = bookCategories.map((category) => ({
    value: category.id,
    label: category.name,
  }));
  options.unshift({ value: "all", label: "Tất cả danh mục" });

  return <SelectFilter options={options} filterField="category" />;
}
