import { createContext, useCallback, useMemo } from "react";
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

  const filteredBookmarkedJobItems = useMemo(
    () =>
      bookmarkedJobItems.filter(
        (item): item is JobItemExpanded => item !== undefined
      ),
    [bookmarkedJobItems]
  );

  const handleToggleBookmark = useCallback(
    (id: number) => {
      if (bookmarkedIds.includes(id)) {
        setBookmarkedIds((prev) => prev.filter((item) => item !== id));
      } else {
        setBookmarkedIds((prev) => [...prev, id]);
      }
    },
    [bookmarkedIds, setBookmarkedIds]
  );

  const contextValue = useMemo(
    () => ({
      bookmarkedIds,
      handleToggleBookmark,
      bookmarkedJobItems: filteredBookmarkedJobItems,
      isLoading,
    }),
    [bookmarkedIds, handleToggleBookmark, filteredBookmarkedJobItems, isLoading]
  );

  return (
    <BookmarksContext.Provider value={contextValue}>
      {children}
    </BookmarksContext.Provider>
  );
}
