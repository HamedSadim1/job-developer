import { TriangleDownIcon } from "@radix-ui/react-icons";
import { useRef, useState } from "react";
import BookmarksPopover from "./BookmarksPopover";

/**
 * Renders a button component that toggles a bookmarks popover.
 */
const BookmarksButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  return (
    <section>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen((prev) => !prev)}
        className="bookmarks-btn"
      >
        Bookmarks <TriangleDownIcon />
      </button>

      {isOpen && <BookmarksPopover ref={popoverRef} />}
    </section>
  );
};

export default BookmarksButton;
