import GlobalStyles from "./styles/GlobalStyles";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { DarkModeProvider } from "./context/DarkModeContext";

import Account from "./pages/Account";
import BookDetail from "./pages/BookDetail";
import Books from "./pages/Books";
import Categories from "./pages/Categories";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import ProtectedRoute from "./pages/ProtectedRoute";
import RedirectPage from "./pages/RedirectPage";
import Settings from "./pages/Settings";
import Statistics from "./pages/Statistics";
import Users from "./pages/Users";
import CreateBook from "./pages/CreateBook";
import EditBook from "./pages/EditBook";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <DarkModeProvider>
      <GlobalStyles />

      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />

        <BrowserRouter>
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route index element={<RedirectPage />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="categories" element={<Categories />} />
              <Route path="users" element={<Users />} />
              <Route path="books" element={<Books />} />
              <Route path="books/:id" element={<BookDetail />} />
              <Route path="books/:id/edit" element={<EditBook />} />
              <Route path="books/:id/create" element={<CreateBook />} />
              <Route path="statistics" element={<Statistics />} />
              <Route path="account" element={<Account />} />
              <Route path="settings" element={<Settings />} />
            </Route>

            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>

      <Toaster
        toastOptions={{
          style: {
            maxWidth: "512px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </DarkModeProvider>
  );
}

export default App;
