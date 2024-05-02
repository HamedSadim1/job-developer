import { useJobItemsContext } from "../lib/hooks";

/**
 * Renders the sorting controls component.
 * @returns The JSX element representing the sorting controls.
 */
export default function SortingControls() {
  const { sortBy, handleChangeSortBy } = useJobItemsContext();

  return (
    <section className="sorting">
      <i className="fa-solid fa-arrow-down-short-wide"></i>

      <SortingButton
        onClick={() => handleChangeSortBy("relevant")}
        isActive={sortBy === "relevant"}
      >
        Relevant
      </SortingButton>
      <SortingButton
        onClick={() => handleChangeSortBy("recent")}
        isActive={sortBy === "recent"}
      >
        Recent
      </SortingButton>
    </section>
  );
}

type SortingButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  isActive: boolean;
};

/**
 * Renders a sorting button component.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The content of the button.
 * @param {Function} props.onClick - The click event handler for the button.
 * @param {boolean} props.isActive - Indicates whether the button is active or not.
 * @returns {JSX.Element} The rendered sorting button component.
 */
function SortingButton({ children, onClick, isActive }: SortingButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`sorting__button sorting__button--recent ${
        isActive ? "sorting__button--active" : ""
      }`}
    >
      {children}
    </button>
  );
}
