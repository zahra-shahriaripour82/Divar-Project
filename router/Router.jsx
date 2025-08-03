import { Route, Routes } from "react-router-dom";
import PageNotFound from "../src/Pages/404";
import AdminPage from "../src/Pages/AdminPage";
import AuthPage from "../src/Pages/AuthPage";
import Dashboard from "../src/Pages/Dashboard";
import HomePage from "../src/Pages/HomePage";
import { useGetUserProfile } from "../src/core/services/queri";
import Loader from "../src/components/partials/Loader";

function Router() {
  const { data, isLoading, error } = useGetUserProfile();
  console.log({ data, isLoading, error });

  if (isLoading) return <Loader />;
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Router;
