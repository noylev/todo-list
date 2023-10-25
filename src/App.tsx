import React, { useContext, useEffect, useState } from "react";
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
import { AuthContext } from "./context/AuthContext";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { checkIsValidToken } from "./api";
import { LoadingPage } from "./components/loading-page/LoadingPage";
function App() {
  const { user, setUser } = useContext(AuthContext);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
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
    </AuthContext.Provider>
  );
}

const PrivateRoutes = () => {
  const { pathname } = useLocation();
  const { getItem } = useLocalStorage();

  const [isValidToken, setIsValidToken] = useState<boolean>();

  useEffect(() => {
    // initial mount or route changed, check token
    const authToken: string = getItem("authToken");
    if (authToken) {
      setIsValidToken(
        !!checkIsValidToken(authToken).then((isValid) => isValid),
      );
    } else setIsValidToken(false);
  }, [pathname]);

  if (isValidToken === undefined) {
    return <LoadingPage />;
  }

  return isValidToken ? <Outlet /> : <Navigate to="/" replace />;
};

export default App;
