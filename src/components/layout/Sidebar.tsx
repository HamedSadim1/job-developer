/**
 * Sidebar component.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be rendered inside the sidebar.
 * @returns {JSX.Element} The rendered sidebar component.
 */
export default function Sidebar({ children }: { children: React.ReactNode }) {
  return <div className="sidebar">{children}</div>;
}

/**
 * Renders the top section of the sidebar component.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be rendered inside the top section.
 * @returns {JSX.Element} The rendered top section of the sidebar.
 */
export function SidebarTop({ children }: { children: React.ReactNode }) {
  return <div className="sidebar__top">{children}</div>;
}
