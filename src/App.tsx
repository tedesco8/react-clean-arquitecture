import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import AuthMiddleware from "./infrastructure/middlewares/auth.middleware";
import routes from "./infrastructure/routes";
import { SignInPage } from "./infrastructure/pages";

import "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js";
import "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js";

import "./infrastructure/assets/css/App.css";

const Admin = lazy(() => import('./infrastructure/components/layout/admin/Admin'));

function App() {
  const getRoutes = (rts: any) => {
    return rts.map((prop: any, key: any) => {
      const Component = prop.component;
      return (
        <Route
          path={prop.path}
          element={<Component />}
          key={key}
        />
      );
    });
  };
  return (
    <div className="App">
      <div className="container">

        <Routes>
          <Route path="/sign-in" element={<SignInPage />} />
          <Route element={<AuthMiddleware />}>
            <Route path="/" element={
              <Suspense fallback={<>...</>}>
                <Admin />
              </Suspense>
            }>
              {getRoutes(routes)}
            </Route>
          </Route>
        </Routes>

      </div>
    </div>
  );
}

export default App;
