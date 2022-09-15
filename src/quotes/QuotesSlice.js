import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchQuote } from "./QuoteAPI";

const initialState = {
  quote: "",
  author: "",
  loading: true,
  failedToLoad: false,
};

export const fetchNewQuote = createAsyncThunk("quote/fetchQuote", async () => {
  const response = await fetchQuote();
  console.log(response);
  return response;
});

const quotesSlice = createSlice({
  name: "quotes",
  initialState: initialState,
  reducers: {
    addQuote: (state, action) => {
      console.log(state);
      console.log(action);
      console.log(state.author);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNewQuote.pending, (state, action) => {
      console.log("Pending");
      state.loading = true;
      state.failedToLoad = false;
    });
    builder.addCase(fetchNewQuote.fulfilled, (state, action) => {
      console.log("Fulfilled");
      state.loading = false;
      state.failedToLoad = false;
      state.quote = action.payload.quote;
      state.author = action.payload.author;
    });
    builder.addCase(fetchNewQuote.rejected, (state, action) => {
      console.log("Rejected");
      state.loading = false;
      state.failedToLoad = true;
    });
  },
});

export const selectQuote = (state) => state.quotes;
export const { addQuote } = quotesSlice.actions;
export default quotesSlice.reducer;
