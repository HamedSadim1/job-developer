/**
 * Renders the background component.
 * @returns The JSX element representing the background component.
 */ import { BACKGROUND_PATTERN_URL } from "../../lib/constants";

const Background = () => {
  return (
    <div className="background">
      <img
        src={BACKGROUND_PATTERN_URL}
        alt="Background pattern"
        loading="lazy"
      />
    </div>
  );
};

export default Background;
