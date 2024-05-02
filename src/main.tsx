import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BookmarksContextProvider from "./context/BookmarksContextProvider";
import ActiveIdContextProvider from "./context/ActiveIdContextProvider";
import SearchTextContextProvider from "./context/SearchTextContextProvider";
import JobItemsContextProvider from "./context/JobItemsContextProvider";

/**
 * Creates a new instance of QueryClient with default options.
 * @remarks
 * The default options include settings for queries such as stale time, refetch on window focus, and retry behavior.
 * @returns A new instance of QueryClient.
 */
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BookmarksContextProvider>
        <ActiveIdContextProvider>
          <SearchTextContextProvider>
            <JobItemsContextProvider>
              <App />
            </JobItemsContextProvider>
          </SearchTextContextProvider>
        </ActiveIdContextProvider>
      </BookmarksContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
