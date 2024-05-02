/**
 * Footer component that displays the footer section of the website.
 * @returns The rendered footer component.
 */
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
        <span className="u-bold">109573</span> total jobs available
      </p>
    </footer>
  );
};

export default Footer;
