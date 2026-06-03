import { memo } from "react";
import { JobItem } from "../../lib/types";
import BookmarkIcon from "../bookmarks/BookmarkIcon";

type JobListItemProps = {
  jobItem: JobItem;
  isActive: boolean;
};

/**
 * Renders a single job item in the job list.
 *
 * @param {Object} jobItem - The job item object containing the job details.
 * @param {boolean} isActive - Indicates whether the job item is active or not.
 * @returns {JSX.Element} The rendered job item component.
 */
function JobListItem({ jobItem, isActive }: JobListItemProps) {
  return (
    <li className={`job-item ${isActive ? "job-item--active" : ""}`}>
      <a href={`#${jobItem.id}`} className="job-item__link">
        <div className="job-item__badge">{jobItem.badgeLetters}</div>

        <div className="job-item__middle">
          <h3 className="third-heading">{jobItem.title}</h3>
          <p className="job-item__company">{jobItem.company}</p>
        </div>

        <div className="job-item__right">
          <BookmarkIcon id={jobItem.id} />
          <time className="job-item__time">{jobItem.daysAgo}d</time>
        </div>
      </a>
    </li>
  );
}

export default memo(JobListItem);
