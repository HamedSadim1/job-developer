import { useActiveIdContext } from "../lib/hooks";
import { JobItem } from "../lib/types";
import JobListItem from "./JobListItem";
import Spinner from "./Spinner";

type JobListProps = {
  jobItems: JobItem[];
  isLoading: boolean;
};

/**
 * Renders a list of job items.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.jobItems - The array of job items to render.
 * @param {boolean} props.isLoading - A flag indicating whether the job items are currently being loaded.
 * @returns {JSX.Element} The rendered job list component.
 */
export function JobList({ jobItems, isLoading }: JobListProps) {
  const { activeId } = useActiveIdContext();

  return (
    <ul className="job-list">
      {isLoading && <Spinner />}

      {!isLoading &&
        jobItems.map((jobItem) => (
          <JobListItem
            key={jobItem.id}
            jobItem={jobItem}
            isActive={jobItem.id === activeId}
          />
        ))}
    </ul>
  );
}

export default JobList;
