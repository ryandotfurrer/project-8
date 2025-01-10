import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

const TopBanner: React.FC = () => {
  return (
    <div className="text-muted-foreground text-balance px-4 pt-4 text-center text-sm">
      <p>
        We are having lots of fun on <FontAwesomeIcon className="size-4" icon={faDiscord} /> Discord -{' '}
        <a
          href="https://discord.gg/A8Th9g8TaY"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground text-decoration-none animate-pulse text-indigo-600 hover:animate-none hover:underline dark:text-indigo-500"
        >
          Come and join us!
        </a>
      </p>
    </div>
  );
};

export default TopBanner;
