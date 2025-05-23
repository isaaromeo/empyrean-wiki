//import styled from "styled-components";

const Quote = ({ quotes }) => {
  if (!quotes?.length) return <p>No quotes available</p>;

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
