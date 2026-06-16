function Loading({ label = "Loading premium tech" }) {
  return (
    <div className="loading-state">
      <span className="spinner" />
      <p>{label}</p>
    </div>
  );
}

export default Loading;
