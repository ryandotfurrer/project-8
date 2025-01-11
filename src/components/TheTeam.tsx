const TheTeam = () => {
  return (
    <div className="mx-auto flex max-w-lg justify-between">
      <div className="flex flex-col items-center text-center">
        <a href="https://twitter.com/tdesseyn" className="flex flex-col items-center">
          <img src="https://i.postimg.cc/zbmXxFCQ/td.png" alt="Taylor Desseyn" className="size-20 rounded-full" />
          <p className="">Taylor Desseyn</p>
          <p className="text-muted-foreground text-sm">vp of global community</p>
        </a>
      </div>
      <div className="flex flex-col items-center text-center">
        <a href="https://twitter.com/tasonjorres" className="flex flex-col items-center">
          <img src="https://i.postimg.cc/8fNkSknB/jt.png" alt="Jason Torres" className="size-20 rounded-full" />
          <p className="">Jason Torres</p>
          <p className="text-muted-foreground text-sm">community evangelist</p>
        </a>
      </div>
      <div className="flex flex-col items-center text-center">
        <a href="https://x.com/helenismo" className="flex flex-col items-center">
          <img src="https://i.postimg.cc/SYdSN0B0/xc.png" alt="Ximena Cruz" className="size-20 rounded-full" />
          <p className="">Ximena Cruz</p>
          <p className="text-muted-foreground text-sm">community evangelist</p>
        </a>
      </div>
    </div>
  );
};

export default TheTeam;
