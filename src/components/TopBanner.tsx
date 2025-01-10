import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

const TopBanner: React.FC = () => {
  return (
    <div className="bg-background relative text-balance px-2 py-5 text-center text-sm shadow dark:shadow-none">
      <a
        href="https://discord.gg/A8Th9g8TaY"
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground text-decoration-none"
      >
        <span>We are having lots of fun on </span>
        <FontAwesomeIcon className="size-4" icon={faDiscord} />
        <span> Discord. Come and join us!</span>
      </a>
    </div>
  );
};

export default TopBanner;
