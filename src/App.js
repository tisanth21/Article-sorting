import React, { useEffect, useState } from "react";
import "h8k-components";
import Articles from "./components/Articles";
import "./App.css";

function App({ articles }) {
  const [view, setView] = useState([]);

  const byDateDesc = (a, b) => new Date(b.date) - new Date(a.date);
  const byUpvotesDesc = (a, b) => b.upvotes - a.upvotes;

  // Ensure initial render is "Most Upvoted"
  useEffect(() => {
    const sorted = [...(articles || [])].sort((a, b) => {
      const up = byUpvotesDesc(a, b);
      return up !== 0 ? up : byDateDesc(a, b);
    });
    setView(sorted);
  }, [articles]);

  const handleMostUpvoted = () => {
    setView(
      [...(articles || [])].sort((a, b) => {
        const up = byUpvotesDesc(a, b);
        return up !== 0 ? up : byDateDesc(a, b);
      })
    );
  };

  const handleMostRecent = () => {
    setView(
      [...(articles || [])].sort((a, b) => {
        const date = byDateDesc(a, b);
        return date !== 0 ? date : byUpvotesDesc(a, b);
      })
    );
  };

  return (
    <>
      <h8k-navbar header="Sorting Articles"></h8k-navbar>
      <div className="App">
        <div className="layout-row align-items-center justify-content-center my-20 navigation">
          <label className="form-hint mb-0 text-uppercase font-weight-light">
            Sort By
          </label>
          <button
            data-testid="most-upvoted-link"
            className="small"
            onClick={handleMostUpvoted}
          >
            Most Upvoted
          </button>
          <button
            data-testid="most-recent-link"
            className="small"
            onClick={handleMostRecent}
          >
            Most Recent
          </button>
        </div>
        <Articles articles={view} />
      </div>
    </>
  );
}

export default App;
