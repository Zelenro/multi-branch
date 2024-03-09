export const ButtonLoadMore = ({ onClick }) => {
  return (
    <>
      <div>
        <button type="button" className="Button" onClick={onClick}>
          <span className="button">Load more</span>
        </button>
      </div>
    </>
  );
};
