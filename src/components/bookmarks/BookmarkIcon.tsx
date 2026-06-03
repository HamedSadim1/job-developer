import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { memo } from "react";
import { useBookmarksContext } from "../../lib/hooks";

type BookmarkIconProps = {
  id: number;
};

/**
 * Renders a bookmark icon button.
 *
 * @param {BookmarkIconProps} props - The props for the BookmarkIcon component.
 * @param {string} props.id - The ID of the bookmark.
 * @returns {JSX.Element} The rendered BookmarkIcon component.
 */
function BookmarkIcon({ id }: BookmarkIconProps) {
  const { bookmarkedIds, handleToggleBookmark } = useBookmarksContext();

  return (
    <button
      onClick={(e) => {
        handleToggleBookmark(id);
        e.stopPropagation();
        e.preventDefault();
      }}
      className="bookmark-btn"
      aria-label={
        bookmarkedIds.includes(id) ? "Remove bookmark" : "Add bookmark"
      }
    >
      <BookmarkFilledIcon
        className={`
        ${bookmarkedIds.includes(id) ? "filled" : ""}
      `}
      />
    </button>
  );
}

export default memo(BookmarkIcon);
