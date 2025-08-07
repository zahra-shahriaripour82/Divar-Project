import { Navigate, Route, Routes } from "react-router-dom";
import PageNotFound from "../src/Pages/404";
import AdminPage from "../src/Pages/AdminPage";
import AuthPage from "../src/Pages/AuthPage";
import Dashboard from "../src/Pages/Dashboard";
import HomePage from "../src/Pages/HomePage";
import { useGetUserProfile } from "../src/core/services/queri";
import Loader from "../src/components/partials/Loader";
 // phone num for login as admin is : 09189990099
function Router() {
  const { data, isLoading, error } = useGetUserProfile();
  console.log("data",{ data,isLoading,error });

  if (isLoading) return <Loader />;
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={data?.data ? <Dashboard /> : <Navigate to="/auth"/>} />
      <Route path="/auth" element={data?.data ? <Navigate to={"/dashboard"}/> : <AuthPage/>} />
      <Route path="/admin" element={data?.data && data?.data?.role==="ADMIN" ? <AdminPage/> :<Navigate to={"/"}/>}  />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Router;
