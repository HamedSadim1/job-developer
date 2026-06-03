import { useJobItemsContext } from "../../lib/hooks";
import JobList from "./JobList";

/**
 * Renders the JobListSearch component.
 *
 * @returns The rendered JobListSearch component.
 */
export default function JobListSearch() {
  const { jobItemsSortedAndSliced, isLoading } = useJobItemsContext();

  return <JobList jobItems={jobItemsSortedAndSliced} isLoading={isLoading} />;
}
