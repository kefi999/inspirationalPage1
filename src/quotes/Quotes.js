import React from "react";
import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchQuote } from "./QuoteAPI";
import { addQuote, fetchNewQuote } from "./QuotesSlice";
import { selectQuote } from "./QuotesSlice";
import "./Quotes.css";

const logo = (
  <div>
    <span style={{ zIndex: 50, fontSize: "0.9em", fontWeight: "bold" }}>
      <img
        src="https://theysaidso.com/branding/theysaidso.png"
        height="20"
        width="20"
        alt="theysaidso.com"
      />
      <a
        href="https://theysaidso.com"
        title="Powered by quotes from theysaidso.com"
        style={{ color: "red", marginLeft: 4, verticalAlign: "middle" }}
      >
        They Said So®
      </a>
    </span>
  </div>
);
function Quotes() {
  const quoteAndAuthor = useSelector(selectQuote);
  const dispatch = useDispatch();

  console.log(quoteAndAuthor);
  useEffect(() => {
    dispatch(fetchNewQuote());
  }, [dispatch]);

  // return <div>Hello</div>;
  if (quoteAndAuthor.loading) {
    return <div>Loading</div>;
  } else if (
    quoteAndAuthor.failedToLoad === true &&
    quoteAndAuthor.loading === false
  ) {
    return <div>we got some errors son</div>;
  } else if (
    quoteAndAuthor.loading === false &&
    quoteAndAuthor.failedToLoad === false
  ) {
    return (
      <div class="actualQuote">
        <h2 className="quote">{quoteAndAuthor.quote}</h2>
        <br></br>
        <h3 className="author">{quoteAndAuthor.author}</h3>
      </div>
    );
  }
}
export default Quotes;
