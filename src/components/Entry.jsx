import React from "react";

function Entry(props) {
  const {
    id,
    title,
    rating,
    actors,
    onLike,
    watchList,
    onDelete,
    liked,
    checkWatchList
  } = props;

  return (
    <div className="term">
      <dt>
        <span className="movies">{title}</span>
        <span>{rating}</span>
      </dt>
      <dd>{actors}</dd>
      <button
        onClick={() => onLike(id)}
        className={liked && "heart"}
        id="shape"
      >
        {liked ? "❤" : "🤍"}
      </button>
      <button
        onClick={() => watchList(id)}
        className={checkWatchList && "watchedList"}
      >
        {checkWatchList ? "Added to WatchList" : "Add to WatchList"}
      </button>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

export default Entry;
