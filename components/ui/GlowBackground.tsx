export function GlowBackground() {
  return (
    <div aria-hidden="true" className="glow-background pointer-events-none fixed inset-0 -z-50 overflow-hidden bg-[rgb(5_10_20)]">
      <div className="glow-base absolute inset-0" />
      <div className="glow-orb glow-orb-one" />
      <div className="glow-orb glow-orb-two" />
      <div className="glow-orb glow-orb-three" />
      <div className="glow-ribbon glow-ribbon-one" />
      <div className="glow-ribbon glow-ribbon-two" />
      <div className="glow-depth-ring glow-depth-ring-one" />
      <div className="glow-depth-ring glow-depth-ring-two" />
      <div className="glow-mesh absolute inset-0" />
      <div className="glow-grain absolute inset-0" />
    </div>
  );
}
