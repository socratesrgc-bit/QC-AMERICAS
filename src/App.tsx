import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Evaluation from "./pages/Evaluation";
import { useState } from "react";

export default function App() {
  const [isLogged, setIsLogged] = useState(false);

  if (!isLogged) {
    return <Login onLogin={() => setIsLogged(true)} />;
  }

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      <Route
        path="/evaluaciones"
        element={<Evaluation />}
      />
    </Routes>
  );
}