import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;
// const options = {
//   method: "POST",
//   url: "https://article-extractor-and-summarizer.p.rapidapi.com/summarize-text",
//   headers: {
//     "content-type": "application/json",
//     "X-RapidAPI-Key": "e169a233b2mshbfa80ca1ef4f5d2p14dbabjsn5ccc389086d4",
//     "X-RapidAPI-Host": "article-extractor-and-summarizer.p.rapidapi.com",
//   },
// };

export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", rapidApiKey);
      headers.set(
        "X-RapidAPI-Host",
        "article-extractor-and-summarizer.p.rapidapi.com"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
    }),
  }),
});

export const { useLazyGetSummaryQuery } = articleApi;
