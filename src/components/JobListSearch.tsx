import { useJobItemsContext } from "../lib/hooks";
import JobList from "./JobList";

export default function JobListSearch() {
  const { jobItemsSortedAndSliced, isLoading } = useJobItemsContext();

  console.log(jobItemsSortedAndSliced);

  return <JobList jobItems={jobItemsSortedAndSliced} isLoading={isLoading} />;
}
