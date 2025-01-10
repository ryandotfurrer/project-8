export default function Footer() {
  return (
    <footer className="bg-foreground text-muted rounded-t-lg py-8 text-sm">
      <div className="mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
          <p>
            &copy; {new Date().getFullYear()}{' '}
            <a href="https://torc.dev" target="_blank" rel="noopener noreferrer">
              torc.dev
            </a>
          </p>
          <p>Built by Jason Torres</p>
        </div>
      </div>
    </footer>
  );
}
