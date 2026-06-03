import { forwardRef } from "react";
import { useBookmarksContext } from "../../lib/hooks";
import JobList from "../jobs/JobList";
import { createPortal } from "react-dom";

/**
 * Renders a popover component that displays a list of bookmarked job items.
 * @param ref - A ref object that is attached to the root element of the component.
 * @returns The rendered BookmarksPopover component.
 */
const BookmarksPopover = forwardRef<HTMLDivElement>(
  function BookmarksPopoverInner(_, ref) {
    const { bookmarkedJobItems, isLoading } = useBookmarksContext();

    return createPortal(
      <div ref={ref} className="bookmarks-popover">
        <JobList jobItems={bookmarkedJobItems} isLoading={isLoading} />
      </div>,
      document.body
    );
  }
);

export default BookmarksPopover;
