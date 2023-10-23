import React, { useEffect, useState } from "react";
import "./App.css";
import {
  Routes,
  Route,
  BrowserRouter,
  useLocation,
  Outlet,
  Navigate,
} from "react-router-dom";
import LoginPage from "./components/login-page/LoginPage";
import Home from "./components/home/Home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route element={<PrivateRoutes />}>
            <Route path="/home" element={<Home />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function checkToken(): boolean {
  return true;
}

const PrivateRoutes = () => {
  const { pathname } = useLocation();

  const [isValidToken, setIsValidToken] = useState<boolean>(); // todo use context instead

  useEffect(() => {
    // initial mount or route changed, check token
    setIsValidToken(checkToken());
  }, [pathname]);

  if (isValidToken === undefined) {
    return null; // or loading indicator/spinner/etc
  }

  return isValidToken ? <Outlet /> : <Navigate to="/" replace />;
};

export default App;
