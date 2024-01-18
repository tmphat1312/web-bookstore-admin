// @ts-check
/**
 * Builds URL parameters based on the provided resource name and options.
 * @param {string} resourceName - The name of the resource.
 * @param {object} options - The options for building the URL parameters.
 * @param {number} options.page - The page number.
 * @param {number} options.limit - The limit of items per page.
 * @param {Array} options.filters - The array of filters {field, value}.
 * @param {object} options.sortBy - The sort options {sort, order}.
 * @param {string} options.q - The search query.
 * @returns {string} The built URL with parameters.
 */
export function buildUrlParams(resourceName, options) {
  const { filters = [], sortBy = {} } = options;
  const searchParams = new URLSearchParams();
  const connector = resourceName.includes("?") ? "&" : "?";

  Object.entries(options).forEach(([key, value]) => {
    if (typeof value != "object" && value) {
      searchParams.append(key, value.toString());
    }
  });

  filters.forEach((filter) => {
    searchParams.append(filter.field, filter.value);
  });

  if (sortBy.sort && sortBy.order) {
    const prefix = sortBy.order === "asc" ? "" : "-";
    searchParams.append("sort", `${prefix}${sortBy.sort}`);
  }

  return resourceName + connector + searchParams.toString();
}
