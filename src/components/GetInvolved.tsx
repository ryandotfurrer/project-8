import { Link } from 'react-router-dom';
import { Users, MessageSquare } from 'lucide-react';

const GetInvolved = () => {
  return (
    <div className="bg-muted outline-border rounded-lg p-6 shadow-lg outline dark:shadow-none">
      <h2 className="mb-4">Get Involved</h2>
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="mb-2">Community Projects</h3>
          <ul className="space-y-4">
            <li>
              <Link
                to="/mentorship"
                className="bg-background dark:shadow-non block rounded-lg p-4 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-md dark:hover:outline"
              >
                <div className="mb-2 flex items-center">
                  <Users className="text-primary mr-2 size-4" />
                  <h4>Mentorship Program</h4>
                </div>
                <p className="text-muted-foreground text-sm">Connect with experienced mentors in your field</p>
              </Link>
            </li>
            <li>
              <Link
                to="/ambassador"
                className="bg-background dark:shadow-non block rounded-lg p-4 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-md dark:hover:outline"
              >
                <div className="mb-2 flex items-center">
                  <Users className="text-primary mr-2 size-4" />
                  <h4>Ambassador Program</h4>
                </div>
                <p className="text-muted-foreground text-sm">Represent our community and help it grow</p>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-2">Discussion Forums</h3>
          <ul className="space-y-4">
            <li>
              <a
                href="https://discord.gg/8N3PZu8yE3"
                className="bg-background dark:shadow-non block rounded-lg p-4 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-md dark:hover:outline"
              >
                <div className="mb-2 flex items-center">
                  <MessageSquare className="text-primary mr-2 size-4" />
                  <h4>Technical Discussions</h4>
                </div>
                <p className="text-muted-foreground text-sm">Share knowledge and solve problems together</p>
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/m4NnuZGpjj"
                className="bg-background dark:shadow-non block rounded-lg p-4 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-md dark:hover:outline"
              >
                <div className="mb-2 flex items-center">
                  <MessageSquare className="text-primary mr-2 size-4" />
                  <h4>Career Development</h4>
                </div>
                <p className="text-muted-foreground text-sm">Discuss career growth and opportunities</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
