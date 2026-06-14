export function GlowBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-50 overflow-hidden bg-[rgb(5_10_20)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgb(34_211_238/0.20),transparent_28%),radial-gradient(circle_at_80%_12%,rgb(168_85_247/0.18),transparent_26%),radial-gradient(circle_at_50%_92%,rgb(var(--color-accent)/0.18),transparent_34%),linear-gradient(180deg,rgb(8_13_26),rgb(4_7_14)_55%,rgb(8_12_20))]" />
      <div className="absolute left-1/2 top-0 h-[520px] w-[min(900px,90vw)] -translate-x-1/2 rounded-full bg-white/6 blur-3xl" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgb(255_255_255/0.65)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.45)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(circle_at_center,rgb(255_255_255)_1px,transparent_1px)] [background-size:18px_18px]" />
    </div>
  );
}
