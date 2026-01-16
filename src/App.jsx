import { BrowserRouter } from "react-router-dom";
import "../src/styles/index.css";
import Layout from "./components/layout/Layout";
import AppRoutes from "./routes/AppRoutes";
import { BugProvider } from "./context/BugContext";
import { UserProvider } from "./context/UserContext";
import { AuthContext, AuthProvider } from "./context/AuthContext";
import { useContext } from "react";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <AuthProvider>
          <BugProvider>
            <Layout>
              <AppRoutes />
            </Layout>
          </BugProvider>
        </AuthProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
