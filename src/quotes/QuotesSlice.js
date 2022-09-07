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
  return response;
});

const quotesSlice = createSlice({
  name: "quote",
  initialState: initialState,
  reducers: {
    addQuote: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNewQuote.pending, (state, action) => {
      state.loading = true;
      state.failedToLoad = false;
    });
    builder.addCase(fetchNewQuote.fulfilled, (state, action) => {
      state.loading = false;
      state.failedToLoad = false;
      state.quote = action.payload.quote;
      state.author = action.payload.author;
    });
    builder.addCase(fetchNewQuote.rejected, (state, action) => {
      state.loading = false;
      state.failedToLoad = true;
    });
  },
});

export const selectQuote = (state) => state.quote;
console.log(selectQuote);
export const { addQuote } = quotesSlice.actions;
export default quotesSlice.reducer;
