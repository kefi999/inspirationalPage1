import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchNewQuote } from "./QuotesSlice";
import { selectQuote } from "./QuotesSlice";

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
  const dispatch = useDispatch();
  const quoteAndAuthor = useSelector(selectQuote);
  console.log(quoteAndAuthor);
  dispatch(fetchNewQuote);

  if (quoteAndAuthor.loading) {
    return <div></div>;
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
      <div>
        {quoteAndAuthor.quote}
        {quoteAndAuthor.author}
      </div>
    );
  }
}
export default Quotes;
