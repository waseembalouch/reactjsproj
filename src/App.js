import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { checkUserSession } from "./redux/User/user.actions";

// hoc
import WithAuth from "./hoc/withAuth";
import WithAdminAuth from "./hoc/withAdminAuth";

// layouts
import HomepageLayout from "./layouts/HomepageLayout";
import MainLayout from "./layouts/MainLayout";

// pages
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Signup from "./pages/Registration";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin/Index";

import "./App.css";

const App = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <>
      <div className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomepageLayout>
                  <Homepage />
                </HomepageLayout>
              </>
            }
          />
          <Route
            path="/login"
            element={
              <MainLayout>
                <Login />
              </MainLayout>
            }
          />

          <Route
            path="/registration"
            element={
              <>
                <MainLayout>
                  <Signup />
                </MainLayout>
              </>
            }
          />

          <Route
            path="/dashboard"
            element={
              <>
                <WithAuth>
                  <MainLayout>
                    <Dashboard />
                  </MainLayout>
                </WithAuth>
              </>
            }
          />
          <Route
            path="/admin"
            element={
              <>
                <WithAdminAuth>
                  <MainLayout>
                    <Admin />
                  </MainLayout>
                </WithAdminAuth>
              </>
            }
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
