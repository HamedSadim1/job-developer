/**
 * Represents a job item.
 */
export type JobItem = {
  id: number;
  badgeLetters: string;
  title: string;
  company: string;
  date: string;
  relevanceScore: number;
  daysAgo: number;
};

/**
 * Represents an expanded job item with additional details.
 */
export type JobItemExpanded = JobItem & {
  /**
   * The description of the job.
   */
  description: string;
  /**
   * The qualifications required for the job.
   */
  qualifications: string[];
  /**
   * The reviews for the job.
   */
  reviews: string[];
  /**
   * The duration of the job.
   */
  duration: string;
  /**
   * The location of the job.
   */
  location: string;
  /**
   * The salary for the job.
   */
  salary: string;
  /**
   * The URL of the cover image for the job.
   */
  coverImgURL: string;
  /**
   * The URL of the company for the job.
   */
  companyURL: string;
};

/**
 * Represents the direction of a page.
 * It can be either "next" or "previous".
 */
export type PageDirection = "next" | "previous";

export type SortBy = "relevant" | "recent";
