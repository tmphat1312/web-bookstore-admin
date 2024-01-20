import Spinner from "./spinners/Spinner";
import ErrorLoading from "./ErrorLoading";
import Empty from "./Empty";

function LoadingProgress({ error, isLoading, count, resourceName, children }) {
  if (error) return <ErrorLoading error={error} />;

  if (isLoading) return <Spinner />;

  if (count === 0) return <Empty resourceName={resourceName} />;

  return children;
}

export default LoadingProgress;
