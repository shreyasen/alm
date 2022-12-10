import { ROUTE_NAMES } from "./RouteNames";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import Signin from "../pages/signin/Signin";
import Signup from "../pages/signup/Signup";
import Common from "../components/Common";
import FindCourse from "../pages/findCourse/FindCourse";
import SearchCourse from "../pages/searchCourse/SearchCourse";
import JoinCourse from "../pages/joinCourse/JoinCourse";
import AccessCourse from "../pages/accessCourse/AccessCourse";
import AccountSettings from "../pages/accountSettings/AccountSettings";

const Router = () => {
  return (
    <BrowserRouter>
      <Common />
      <Routes>
        <Route path={ROUTE_NAMES.root} element={<Dashboard />} />
        <Route path={ROUTE_NAMES.signin} element={<Signin />} />
        <Route path={ROUTE_NAMES.signup} element={<Signup />} />
        <Route path={ROUTE_NAMES.findcourse} element={<FindCourse />} />
        <Route path={ROUTE_NAMES.searchcourse} element={<SearchCourse />} />
        <Route path={ROUTE_NAMES.joincourse} element={<JoinCourse />} />
        <Route path={ROUTE_NAMES.accesscourse} element={<AccessCourse />} />
        <Route path={ROUTE_NAMES.accountsettings} element={<AccountSettings />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
