import React from "react";

const Quote = ({ quotes }) => {
  return (
    <div className="quotes-grid">
      {quotes.map((quote, index) => (
        <div key={`quote-${index}`} className="quote-card">
          <p>"{quote.quote}"</p>
          <p>— {quote.book}</p>
        </div>
      ))}
    </div>
  );
};

export default Quote;
