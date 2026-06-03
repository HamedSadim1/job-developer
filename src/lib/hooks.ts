import { useContext, useEffect, useState } from "react";
import { JobItem, JobItemExpanded } from "./types";
import { BASE_API_URL, STALE_TIME } from "./constants";
import { useQueries, useQuery } from "@tanstack/react-query";
import { BookmarksContext } from "../context/BookmarksContextProvider";
import { ActiveIdContext } from "../context/ActiveIdContextProvider";
import { SearchTextContext } from "../context/SearchTextContextProvider";
import { JobItemsContext } from "../context/JobItemsContextProvider";

/** Shared React Query options for all job item queries */
const queryDefaults = {
  staleTime: STALE_TIME,
  refetchOnWindowFocus: false as const,
  retry: false,
};

type JobItemApiResponse = {
  public: boolean;
  jobItem: JobItemExpanded;
};

/**
 * Fetches a job item from the API based on the provided ID.
 * @param id - The ID of the job item to fetch.
 * @returns A promise that resolves to the fetched job item.
 * @throws An error if the API response is not successful.
 */
const fetchJobItem = async (id: number): Promise<JobItemApiResponse> => {
  const response = await fetch(`${BASE_API_URL}/${id}`);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.description);
  }

  return response.json();
};

/**
 * Custom hook to fetch a job item by its ID.
 * @param id - The ID of the job item to fetch.
 * @returns An object containing the job item data and loading state.
 */
export function useJobItem(id: number | null) {
  const { data, isLoading } = useQuery({
    queryKey: ["job-item", id],
    queryFn: () => (id ? fetchJobItem(id) : null),
    ...queryDefaults,
    enabled: Boolean(id),
  });

  return {
    jobItem: data?.jobItem,
    isLoading,
  } as const;
}

/**
 * Custom hook to fetch job items based on the provided IDs.
 *
 * @param ids - An array of job item IDs.
 * @returns An object containing the fetched job items and a loading state.
 */
export function useJobItems(ids: number[]) {
  const results = useQueries({
    queries: ids.map((id) => ({
      queryKey: ["job-item", id],
      queryFn: () => fetchJobItem(id),
      ...queryDefaults,
      enabled: Boolean(id),
    })),
  });

  const jobItems = results
    .map((result) => result.data?.jobItem)
    .filter((jobItem) => !!jobItem);
  const isLoading = results.some((result) => result.isLoading);

  return {
    jobItems,
    isLoading,
  };
}

type JobItemsApiResponse = {
  public: boolean;
  sorted: boolean;
  jobItems: JobItem[];
};

/**
 * Fetches job items from the API based on the provided search text.
 *
 * @param searchText - The search text to filter the job items.
 * @returns A promise that resolves to the job items API response.
 * @throws An error if the API response is not successful.
 */
const fetchJobItems = async (
  searchText: string | null
): Promise<JobItemsApiResponse> => {
  const response = await fetch(`${BASE_API_URL}?search=${searchText}`);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.description);
  }

  return response.json();
};

/**
 * Custom hook for performing a search query.
 * @param searchText - The text to search for.
 * @returns An object containing the job items and loading state.
 */
export function useSearchQuery(searchText: string) {
  const { data, isLoading } = useQuery({
    queryKey: ["job-items", searchText],
    queryFn: () => fetchJobItems(searchText),
    ...queryDefaults,
    enabled: Boolean(searchText),
  });

  return {
    jobItems: data?.jobItems,
    isLoading,
  } as const;
}

/**
 * Debounces a value by delaying its update until a certain amount of time has passed without any changes.
 * @template T - The type of the value being debounced.
 * @param {T} value - The value to be debounced.
 * @param {number} [delay=500] - The delay in milliseconds before updating the debounced value.
 * @returns {T} - The debounced value.
 */
export function useDebounce<T>(value: T, delay = 500): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timerId = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(timerId);
  }, [value, delay]);

  return debouncedValue;
}

/**
 * Custom hook that returns the active ID based on the current URL hash.
 * @returns The active ID as a number or null if no active ID is found.
 */
export function useActiveId() {
  const [activeId, setActiveId] = useState<number | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const id = +window.location.hash.slice(1);
      setActiveId(id);
    };
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return activeId;
}

/**
 * Custom hook that provides a state value stored in the local storage.
 * The state value is persisted in the local storage and updated whenever it changes.
 *
 * @template T - The type of the state value.
 * @param {string} key - The key used to store the state value in the local storage.
 * @param {T} initialValue - The initial value of the state.
 * @returns {[T, React.Dispatch<React.SetStateAction<T>>]} - A tuple containing the state value and a function to update it.
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState(() =>
    JSON.parse(localStorage.getItem(key) || JSON.stringify(initialValue))
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue] as const;
}

/**
 * Custom hook to access the BookmarksContext.
 * @returns The BookmarksContext object.
 * @throws {Error} If used outside of a BookmarksContextProvider.
 */
export function useBookmarksContext() {
  const context = useContext(BookmarksContext);
  if (!context) {
    throw new Error(
      "useBookmarksContext must be used within a BookmarksContextProvider"
    );
  }
  return context;
}

/**
 * Custom hook that returns the value of the ActiveIdContext.
 * Throws an error if used outside of an ActiveIdContextProvider.
 * @returns The value of the ActiveIdContext.
 * @throws Error if used outside of an ActiveIdContextProvider.
 */
export function useActiveIdContext() {
  const context = useContext(ActiveIdContext);
  if (!context) {
    throw new Error(
      "useActiveIdContext must be used within a ActiveIdContextProvider"
    );
  }
  return context;
}

/**
 * Custom hook that provides access to the search text context.
 * @returns The search text context.
 * @throws {Error} If used outside of a SearchTextContextProvider.
 */
export function useSearchTextContext() {
  const context = useContext(SearchTextContext);
  if (!context) {
    throw new Error(
      "useSearchTextContext must be used within a SearchTextContextProvider"
    );
  }
  return context;
}

/**
 * Custom hook that provides access to the JobItemsContext.
 * @returns The JobItemsContext object.
 * @throws {Error} If used outside of a JobItemsContextProvider.
 */
export function useJobItemsContext() {
  const context = useContext(JobItemsContext);
  if (!context) {
    throw new Error(
      "useJobItemsContext must be used within a JobItemsContextProvider"
    );
  }
  return context;
}
