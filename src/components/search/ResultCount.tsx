import { useJobItemsContext } from "../../lib/hooks";

/**
 * Renders the total number of results.
 * @returns JSX element containing the total number of results.
 */
export default function ResultsCount() {
  const { totalNumberOfResults } = useJobItemsContext();

  return (
    <p className="count">
      <span className="u-bold">{totalNumberOfResults}</span> results
    </p>
  );
}
