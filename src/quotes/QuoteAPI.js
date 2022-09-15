import axios from "axios";

export const fetchQuote = async () => {
  const response = await axios.get("https://quotes.rest/qod?category=inspire");
  console.log(response.data.contents.quotes[0].quote);
  console.log(response.data.contents.quotes[0].author);

  return {
    quote: response.data.contents.quotes[0].quote,
    author: response.data.contents.quotes[0].author,
  };
};

//response.data.contents.quotes[0].quote -//- .author
