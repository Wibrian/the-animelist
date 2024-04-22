export default function StatusData({ icon, statTitle, statValue, statDesc }) {
  return (
    <div className="stat">
      <div className="stat-figure">{icon}</div>
      <div className="badge bg-gray-600 rounded border-none">{statTitle}</div>
      <div className="stat-value text-3xl">{statValue}</div>
      <div className="stat-desc">{statDesc}</div>
    </div>
  );
}
