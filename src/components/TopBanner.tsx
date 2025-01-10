import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

const TopBanner: React.FC = () => {
  return (
    <div className="text-muted-foreground text-balance px-2 py-5 text-sm">
      <span className="flex items-center justify-center gap-1">
        We are having lots of fun on
        <FontAwesomeIcon className="size-4" icon={faDiscord} />
        Discord -
        <a
          href="https://discord.gg/A8Th9g8TaY"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground text-decoration-none animate-pulse text-indigo-600 hover:animate-none hover:underline dark:text-indigo-500"
        >
          Come and join us!
        </a>
      </span>
    </div>
  );
};

export default TopBanner;
