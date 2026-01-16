import { HashRouter } from "react-router-dom";
import "../src/styles/index.css";
import Layout from "./components/layout/Layout";
import AppRoutes from "./routes/AppRoutes";
import { BugProvider } from "./context/BugContext";
import { UserProvider } from "./context/UserContext";
import { AuthProvider } from "./context/AuthContext";
import { UIProvider } from "./context/UIContext";

function App() {
  return (
    <HashRouter>
      <UIProvider>
        <UserProvider>
          <AuthProvider>
            <BugProvider>
              <Layout>
                <AppRoutes />
              </Layout>
            </BugProvider>
          </AuthProvider>
        </UserProvider>
      </UIProvider>
    </HashRouter>
  );
}

export default App;
