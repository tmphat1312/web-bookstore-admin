import GlobalStyles from "./styles/GlobalStyles";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { DarkModeProvider } from "./context/DarkModeContext";

import ProtectedRoute from "./ui/ProtectedRoute";

import PageNotFound from "./pages/PageNotFound";
import RedirectPage from "./pages/RedirectPage";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Categories from "./pages/Categories";
import Users from "./pages/Users";
import Books from "./pages/Books";
import Statistics from "./pages/Statistics";
import Account from "./pages/Account";
import Settings from "./pages/Settings";

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
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "2rem" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "1.6rem",
            maxWidth: "500px",
            padding: "4rem 6rem",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </DarkModeProvider>
  );
}

export default App;
