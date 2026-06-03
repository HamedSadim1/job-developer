import { createContext, useState } from "react";
import { useDebounce } from "../lib/hooks";
import { DEFAULT_SEARCH_TEXT, DEBOUNCE_DELAY } from "../lib/constants";

type SearchTextContext = {
  searchText: string;
  debouncedSearchText: string;
  handleChangeSearchText: (newSearchText: string) => void;
};

export const SearchTextContext = createContext<SearchTextContext | null>(null);

/**
 * Provides a context for managing search text.
 * @param children - The child components to render.
 * @returns The search text context provider component.
 */
export default function SearchTextContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchText, setSearchText] = useState(DEFAULT_SEARCH_TEXT);
  const debouncedSearchText = useDebounce(searchText, DEBOUNCE_DELAY);

  /**
   * Handles the change in search text.
   * @param newSearchText - The new search text value.
   */
  const handleChangeSearchText = (newSearchText: string) => {
    setSearchText(newSearchText);
  };

  return (
    <SearchTextContext.Provider
      value={{
        searchText,
        debouncedSearchText,
        handleChangeSearchText,
      }}
    >
      {children}
    </SearchTextContext.Provider>
  );
}
