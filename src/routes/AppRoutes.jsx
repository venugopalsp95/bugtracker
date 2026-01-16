import { Route, Routes } from "react-router-dom";
import DashBoard from "../pages/dashboard/DashBoard";
import BugList from "../pages/buglist/BugList";
import UserManagement from "../pages/users/UserManagement";
import Reports from "../pages/reports/Reports";
import Login from "../pages/login/Login";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/buglist" element={<BugList />} />
      <Route path="/users" element={<UserManagement />} />
      <Route path="/reports" element={<Reports />} />
    </Routes>
  );
};

export default AppRoutes;
