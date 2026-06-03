/**
 * Renders the logo component.
 * @returns The logo component.
 */
import { LOGO_URL } from "../../lib/constants";

export default function Logo() {
  return (
    <a href="." className="logo">
      <img src={LOGO_URL} alt="Logo" className="logo__img" />
    </a>
  );
}
