import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Workouts from "./pages/Workouts";
import Schedule from "./pages/Schedule";
import Recovery from "./pages/Recovery";
import About from "./pages/About";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/workouts"
              element={
                <ProtectedRoute>
                  <Workouts />
                </ProtectedRoute>
              }
            />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/recovery" element={<Recovery />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;
