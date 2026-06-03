import { createContext } from "react";
import { useJobItems, useLocalStorage } from "../lib/hooks";
import { JobItemExpanded } from "../lib/types";
import { BOOKMARKED_IDS_KEY } from "../lib/constants";

type BookmarksContext = {
  bookmarkedIds: number[];
  handleToggleBookmark: (id: number) => void;
  bookmarkedJobItems: JobItemExpanded[];
  isLoading: boolean;
};

export const BookmarksContext = createContext<BookmarksContext | null>(null);

/**
 * Provides a context for managing bookmarks.
 *
 * @param children - The child components to render.
 */
export default function BookmarksContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [bookmarkedIds, setBookmarkedIds] = useLocalStorage<number[]>(
    BOOKMARKED_IDS_KEY,
    []
  );
  const { jobItems: bookmarkedJobItems, isLoading } =
    useJobItems(bookmarkedIds);

  // Filter out undefined values from bookmarkedJobItems
  const filteredBookmarkedJobItems = bookmarkedJobItems.filter(
    (item): item is JobItemExpanded => item !== undefined
  );

  /**
   * Toggles the bookmark status of a job item.
   *
   * @param id - The ID of the job item.
   */
  const handleToggleBookmark = (id: number) => {
    if (bookmarkedIds.includes(id)) {
      setBookmarkedIds((prev) => prev.filter((item) => item !== id));
    } else {
      setBookmarkedIds((prev) => [...prev, id]);
    }
  };

  return (
    <BookmarksContext.Provider
      value={{
        bookmarkedIds,
        handleToggleBookmark,
        bookmarkedJobItems: filteredBookmarkedJobItems,
        isLoading,
      }}
    >
      {children}
    </BookmarksContext.Provider>
  );
}
