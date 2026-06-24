function Background() {
  return (
    <>
      <div className="fixed inset-0 bg-[var(--bg-primary)] -z-10" />
      <div className="animated-blob-1 fixed top-[-140px] left-[-140px] w-[520px] h-[520px] rounded-full -z-10" style={{ background: "var(--glow-1)", filter: "blur(180px)" }} />
      <div className="animated-blob-2 fixed bottom-[-140px] right-[-140px] w-[520px] h-[520px] rounded-full -z-10" style={{ background: "var(--glow-2)", filter: "blur(180px)" }} />
      <div className="animated-blob-3 fixed top-1/2 left-1/2 w-[450px] h-[450px] rounded-full -z-10 -translate-x-1/2 -translate-y-1/2" style={{ background: "var(--glow-3)", filter: "blur(190px)" }} />
    </>
  );
}

export default Background;
