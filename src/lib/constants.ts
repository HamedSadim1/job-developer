/**
 * The base API URL for making requests to the remote server.
 */
export const BASE_API_URL =
  import.meta.env.VITE_BASE_API_URL ||
  "https://bytegrad.com/course-assets/projects/rmtdev/api/data";

export const RESULTS_PER_PAGE = 7;

/** Static asset URLs */
export const BACKGROUND_PATTERN_URL =
  "https://bytegrad.com/course-assets/js/2/pattern.svg";
export const LOGO_URL = "https://bytegrad.com/course-assets/js/2/logo.svg";

/** Application defaults */
export const DEFAULT_SEARCH_TEXT = "Next js";
export const DEBOUNCE_DELAY = 250;
export const BOOKMARKED_IDS_KEY = "bookmarkedIds";

/** Query config */
export const STALE_TIME = 1000 * 60 * 60;

/** Footer */
export const TOTAL_JOBS_COUNT = 109573;
