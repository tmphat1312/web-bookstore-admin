import { useSearchParams } from "react-router-dom";
import Select from "./forms/Select";

function SortBy({ options = [] }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";

  function handleChange(e) {
    const value = e.target.value;

    if (value === "default") {
      searchParams.delete("sortBy");
    } else {
      searchParams.set("sortBy", e.target.value);
    }

    setSearchParams(searchParams);
  }

  if (options.length <= 0) {
    return null;
  }

  return (
    <Select
      options={options}
      type="white"
      value={sortBy}
      onChange={handleChange}
    />
  );
}

export default SortBy;
