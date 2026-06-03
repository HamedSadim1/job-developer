/**
 * Represents the header component.
 * @param children - The content to be rendered inside the header.
 * @returns The header component.
 */
export const Header = ({ children }: { children: React.ReactNode }) => (
  <header className="header">{children}</header>
);
/**
 * Renders the top section of the header component.
 *
 * @param {React.ReactNode} children - The content to be rendered inside the header top section.
 * @returns {JSX.Element} The rendered header top section.
 */
export const HeaderTop = ({ children }: { children: React.ReactNode }) => (
  <div className="header__top">{children}</div>
);
