import { HashRouter } from "react-router-dom";
import "../src/styles/index.css";
import Layout from "./components/layout/Layout";
import AppRoutes from "./routes/AppRoutes";
import { BugProvider } from "./context/BugContext";
import { UserProvider } from "./context/UserContext";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <HashRouter>
      <UserProvider>
        <AuthProvider>
          <BugProvider>
            <Layout>
              <AppRoutes />
            </Layout>
          </BugProvider>
        </AuthProvider>
      </UserProvider>
    </HashRouter>
  );
}

export default App;
