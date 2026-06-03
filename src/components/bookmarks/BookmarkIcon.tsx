import { BookmarkFilledIcon } from "@radix-ui/react-icons";
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
export default function BookmarkIcon({ id }: BookmarkIconProps) {
  const { bookmarkedIds, handleToggleBookmark } = useBookmarksContext();

  return (
    <button
      onClick={(e) => {
        handleToggleBookmark(id);
        e.stopPropagation();
        e.preventDefault();
      }}
      className="bookmark-btn"
    >
      <BookmarkFilledIcon
        className={`
        ${bookmarkedIds.includes(id) ? "filled" : ""}
      `}
      />
    </button>
  );
}
