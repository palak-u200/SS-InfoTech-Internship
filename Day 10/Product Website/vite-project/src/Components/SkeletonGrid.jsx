function SkeletonGrid({ count = 8 }) {
  return (
    <div className="products-grid">
      {Array.from({ length: count }).map((_, index) => (
        <article className="product-card skeleton-card" key={index}>
          <div className="skeleton skeleton-image" />
          <div className="skeleton skeleton-line wide" />
          <div className="skeleton skeleton-line" />
          <div className="skeleton skeleton-line short" />
        </article>
      ))}
    </div>
  );
}

export default SkeletonGrid;
