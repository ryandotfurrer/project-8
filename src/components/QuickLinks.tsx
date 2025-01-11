import { Link } from 'react-router-dom';
import { BookOpen, MessageCircle, Linkedin, Mail, AtSign, Twitter } from 'lucide-react';

const QuickLinks = () => {
  return (
    <div className="bg-muted outline-border my-12 rounded-lg p-8 shadow-lg outline dark:shadow-none">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h3>Resources</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/aboutus"
                className="text-foreground decoration-primary hover:decoration-primary/90 flex items-center underline underline-offset-4"
              >
                <AtSign className="text-muted-foreground mr-2 size-4" />
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/guidelines"
                className="text-foreground decoration-primary hover:decoration-primary/90 flex items-center underline underline-offset-4"
              >
                <BookOpen className="text-muted-foreground mr-2 size-4" />
                Community Guidelines
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className="text-foreground decoration-primary hover:decoration-primary/90 flex items-center underline underline-offset-4"
              >
                <MessageCircle className="text-muted-foreground mr-2 size-4" />
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3>Connect With Us</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://www.linkedin.com/company/opentorc"
                className="text-foreground decoration-primary hover:decoration-primary/90 flex items-center underline underline-offset-4"
              >
                <Linkedin className="text-muted-foreground mr-2 size-4" />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://x.com/torcdotdev"
                className="text-foreground decoration-primary hover:decoration-primary/90 flex items-center underline underline-offset-4"
              >
                <Twitter className="text-muted-foreground mr-2 size-4" />
                Twitter (X)
              </a>
            </li>
            <li>
              <a
                href="https://taylordesseyn.substack.com/"
                className="text-foreground decoration-primary hover:decoration-primary/90 flex items-center underline underline-offset-4"
              >
                <Mail className="text-muted-foreground mr-2 size-4" />
                Torc Newsletter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
