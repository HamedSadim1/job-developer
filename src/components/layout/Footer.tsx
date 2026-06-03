/**
 * Footer component that displays the footer section of the website.
 * @returns The rendered footer component.
 */
import { TOTAL_JOBS_COUNT } from "../../lib/constants";

const Footer = () => {
  return (
    <footer className="footer">
      <small>
        <p>
          © Copyright by
          <a href="https://github.com/HamedSadim1" target="_blank">
            Hamed Sadim
          </a>
          . Intended for learning or your portfolio.
        </p>
      </small>

      <p>
        <span className="u-bold">{TOTAL_JOBS_COUNT}</span> total jobs available
      </p>
    </footer>
  );
};

export default Footer;
